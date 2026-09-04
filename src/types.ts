export const factLayers = ["settled", "provisional", "open"] as const;
export type FactLayer = (typeof factLayers)[number];

export const requiredSectionTitles = [
  "Bound event",
  "Fact layers",
  "Causal chain",
  "Hoop failures",
  "Named residual gaps",
  "Allowed hypotheses",
  "Discriminating traces",
  "Remainder",
  "Reconstruction log",
] as const;

export const forbiddenScoringKeys = [
  "confidence",
  "score",
  "probability",
  "p",
] as const;

export interface BoundEvent {
  boundId?: string;
  whatHappened: string;
  where?: string;
  when?: string;
  scale?: string;
  sequence?: string;
  layer: FactLayer;
  firstNounRisk?: string;
}

export interface FactLayers {
  settled: string[];
  provisional: string[];
  open: string[];
}

export interface CausalChain {
  initiation: string;
  amplification: string;
  exposure: string;
  response: string;
}

export interface HoopFailure {
  mechanismKilled: string;
  constraint: string;
}

export interface ResidualGap {
  gapId: string;
  question: string;
  notes?: string;
}

export interface AllowedHypothesis {
  hypothesisId: string;
  claim: string;
  pointsAt: string;
}

export interface DiscriminatingTrace {
  gapId: string;
  lookFor: string;
}

export interface LogEntry {
  boundId: string;
  bound: string;
  leftover: string;
  whatArrived: string;
}

export interface ReconstructionSummary {
  what: string;
  killed: string[];
  openGaps: string[];
  boundMoved?: { from: string; to: string } | false;
}

export interface Reconstruction {
  title?: string;
  summary?: ReconstructionSummary;
  boundEvent: BoundEvent;
  factLayers: FactLayers;
  causalChain: CausalChain;
  hoopFailures: HoopFailure[];
  residualGaps: ResidualGap[];
  allowedHypotheses: AllowedHypothesis[];
  discriminatingTraces: DiscriminatingTrace[];
  remainder: string;
  reconstructionLog: LogEntry[];
}

export interface ValidationIssue {
  code: string;
  path: string;
  message: string;
}

export interface ValidationResult {
  ok: boolean;
  errors: ValidationIssue[];
}
