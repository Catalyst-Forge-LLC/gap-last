import {
  factLayers,
  forbiddenScoringKeys,
  type FactLayer,
  type Reconstruction,
  type ValidationIssue,
  type ValidationResult,
} from "./types.js";

function issue(
  code: string,
  path: string,
  message: string,
): ValidationIssue {
  return { code, path, message };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function asString(value: unknown): string | undefined {
  return typeof value === "string" ? value : undefined;
}

function asStringArray(value: unknown): string[] | undefined {
  if (!Array.isArray(value)) return undefined;
  if (!value.every((item) => typeof item === "string")) return undefined;
  return value;
}

function isFactLayer(value: unknown): value is FactLayer {
  return (
    typeof value === "string" &&
    (factLayers as readonly string[]).includes(value)
  );
}

export function liveGapIds(reconstruction: Reconstruction): Set<string> {
  return new Set(
    reconstruction.residualGaps
      .map((gap) => gap.gapId.trim())
      .filter((id) => id.length > 0),
  );
}

export function validateReconstruction(
  reconstruction: Reconstruction,
): ValidationResult {
  const errors: ValidationIssue[] = [];
  const bound = reconstruction.boundEvent;

  if (!bound.whatHappened.trim()) {
    errors.push(
      issue(
        "bound-empty",
        "boundEvent.whatHappened",
        "Bound event is empty. A noun in a headline is not a bound.",
      ),
    );
  }
  if (!isFactLayer(bound.layer)) {
    errors.push(
      issue(
        "bound-layer",
        "boundEvent.layer",
        `Layer must be settled, provisional, or open. Got ${String(bound.layer)}.`,
      ),
    );
  }

  if (!reconstruction.remainder.trim()) {
    errors.push(
      issue(
        "remainder-empty",
        "remainder",
        "Remainder is required. Unknown stated as a result is still a result.",
      ),
    );
  }

  const live = liveGapIds(reconstruction);
  const seenGaps = new Set<string>();
  for (const [index, gap] of reconstruction.residualGaps.entries()) {
    const path = `residualGaps[${index}]`;
    if (!gap.gapId.trim()) {
      errors.push(issue("gap-id-empty", `${path}.gapId`, "gap-id is empty."));
      continue;
    }
    if (seenGaps.has(gap.gapId)) {
      errors.push(
        issue(
          "gap-id-duplicate",
          `${path}.gapId`,
          `Duplicate gap-id "${gap.gapId}".`,
        ),
      );
    }
    seenGaps.add(gap.gapId);
    if (!gap.question.trim()) {
      errors.push(
        issue(
          "gap-question-empty",
          `${path}.question`,
          `Gap "${gap.gapId}" has no question.`,
        ),
      );
    }
  }

  for (const [index, hypothesis] of reconstruction.allowedHypotheses.entries()) {
    const path = `allowedHypotheses[${index}]`;
    if (!hypothesis.hypothesisId.trim()) {
      errors.push(
        issue(
          "hypothesis-id-empty",
          `${path}.hypothesisId`,
          "hypothesis-id is empty.",
        ),
      );
    }
    if (!hypothesis.claim.trim()) {
      errors.push(
        issue("hypothesis-claim-empty", `${path}.claim`, "Hypothesis claim is empty."),
      );
    }
    const pointsAt = hypothesis.pointsAt.trim();
    if (!pointsAt) {
      errors.push(
        issue(
          "hypothesis-missing-points-at",
          `${path}.pointsAt`,
          `Hypothesis "${hypothesis.hypothesisId || index}" has no points-at. A hypothesis that does not point at a live gap is illegal.`,
        ),
      );
      continue;
    }
    if (!live.has(pointsAt)) {
      errors.push(
        issue(
          "hypothesis-points-at-retired-or-unknown",
          `${path}.pointsAt`,
          `Hypothesis "${hypothesis.hypothesisId}" points-at "${pointsAt}", which is not a live gap-id.`,
        ),
      );
    }
  }

  if (
    reconstruction.residualGaps.length === 0 &&
    reconstruction.allowedHypotheses.length > 0
  ) {
    errors.push(
      issue(
        "empty-gaps-with-hypotheses",
        "residualGaps",
        "Empty gap list with allowed hypotheses is invalid. Either the how is already description, or step 5 was skipped.",
      ),
    );
  }

  return { ok: errors.length === 0, errors };
}

export function validateUnknown(value: unknown): ValidationResult {
  const errors: ValidationIssue[] = [];
  if (!isRecord(value)) {
    return {
      ok: false,
      errors: [
        issue("not-an-object", "", "Reconstruction must be a JSON object."),
      ],
    };
  }

  for (const key of forbiddenScoringKeys) {
    if (key in value) {
      errors.push(
        issue(
          "scoring-field-forbidden",
          key,
          `Field "${key}" is not allowed in v1. Use settled / provisional / open.`,
        ),
      );
    }
  }

  if (!isRecord(value.boundEvent)) {
    errors.push(
      issue("bound-missing", "boundEvent", "boundEvent is required."),
    );
    return { ok: false, errors };
  }

  const reconstruction = value as unknown as Reconstruction;
  const structural = validateReconstruction(reconstruction);
  return {
    ok: errors.length === 0 && structural.ok,
    errors: [...errors, ...structural.errors],
  };
}

export function formatValidationErrors(result: ValidationResult): string {
  if (result.ok) return "";
  return result.errors
    .map((error) => {
      const at = error.path ? ` (${error.path})` : "";
      return `${error.code}${at}: ${error.message}`;
    })
    .join("\n");
}

export function coerceReconstruction(value: unknown): Reconstruction {
  if (!isRecord(value)) {
    throw new Error("Reconstruction must be a JSON object.");
  }
  const bound = isRecord(value.boundEvent) ? value.boundEvent : {};
  const layers = isRecord(value.factLayers) ? value.factLayers : {};
  const chain = isRecord(value.causalChain) ? value.causalChain : {};
  const summary = isRecord(value.summary) ? value.summary : undefined;

  return {
    title: asString(value.title),
    summary: summary
      ? {
          what: asString(summary.what) ?? "",
          killed: asStringArray(summary.killed) ?? [],
          openGaps: asStringArray(summary.openGaps) ?? [],
          boundMoved: parseBoundMoved(summary.boundMoved),
        }
      : undefined,
    boundEvent: {
      boundId: asString(bound.boundId),
      whatHappened: asString(bound.whatHappened) ?? "",
      where: asString(bound.where),
      when: asString(bound.when),
      scale: asString(bound.scale),
      sequence: asString(bound.sequence),
      layer: isFactLayer(bound.layer) ? bound.layer : "open",
      firstNounRisk: asString(bound.firstNounRisk),
    },
    factLayers: {
      settled: asStringArray(layers.settled) ?? [],
      provisional: asStringArray(layers.provisional) ?? [],
      open: asStringArray(layers.open) ?? [],
    },
    causalChain: {
      initiation: asString(chain.initiation) ?? "",
      amplification: asString(chain.amplification) ?? "",
      exposure: asString(chain.exposure) ?? "",
      response: asString(chain.response) ?? "",
    },
    hoopFailures: Array.isArray(value.hoopFailures)
      ? value.hoopFailures.flatMap((row) => {
          if (!isRecord(row)) return [];
          return [
            {
              mechanismKilled: asString(row.mechanismKilled) ?? "",
              constraint: asString(row.constraint) ?? "",
            },
          ];
        })
      : [],
    residualGaps: Array.isArray(value.residualGaps)
      ? value.residualGaps.flatMap((row) => {
          if (!isRecord(row)) return [];
          return [
            {
              gapId: asString(row.gapId) ?? "",
              question: asString(row.question) ?? "",
              notes: asString(row.notes),
            },
          ];
        })
      : [],
    allowedHypotheses: Array.isArray(value.allowedHypotheses)
      ? value.allowedHypotheses.flatMap((row) => {
          if (!isRecord(row)) return [];
          return [
            {
              hypothesisId: asString(row.hypothesisId) ?? "",
              claim: asString(row.claim) ?? "",
              pointsAt: asString(row.pointsAt) ?? "",
            },
          ];
        })
      : [],
    discriminatingTraces: Array.isArray(value.discriminatingTraces)
      ? value.discriminatingTraces.flatMap((row) => {
          if (!isRecord(row)) return [];
          return [
            {
              gapId: asString(row.gapId) ?? "",
              lookFor: asString(row.lookFor) ?? "",
            },
          ];
        })
      : [],
    remainder: asString(value.remainder) ?? "",
    reconstructionLog: Array.isArray(value.reconstructionLog)
      ? value.reconstructionLog.flatMap((row) => {
          if (!isRecord(row)) return [];
          return [
            {
              boundId: asString(row.boundId) ?? "",
              bound: asString(row.bound) ?? "",
              leftover: asString(row.leftover) ?? "",
              whatArrived: asString(row.whatArrived) ?? "",
            },
          ];
        })
      : [],
  };
}

function parseBoundMoved(
  value: unknown,
): { from: string; to: string } | false | undefined {
  if (value === false) return false;
  if (!isRecord(value)) return undefined;
  const from = asString(value.from);
  const to = asString(value.to);
  if (!from || !to) return undefined;
  return { from, to };
}
