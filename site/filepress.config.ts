import { defineFilepressConfig } from "getfilepress";

const github = "https://github.com/Catalyst-Forge-LLC/gap-last";

export default defineFilepressConfig({
  title: "Gap Last",
  description: "When a failure or disagreement invites a quick explanation, Gap Last separates observations, constraints, and open questions. Keep only hypotheses that address what is still unknown.",
  tagline: "Don't commit to a cause until you can name the gap.",
  lede: "Reconstruction method with optional agent skills",
  url: "https://gaplast.dev",
  author: "Catalyst Forge LLC",
  logo: "/logo.png",
  ogImage: "/logo.png",
  homePage: "home",
  nav: [
    { label: "Home", href: "/" },
    { label: "Method", href: "/method" },
    { label: "Engineering", href: "/engineering" },
    { label: "Paper", href: "/paper" },
    { label: "Install in your agent", href: "/run" },
    { label: "Posts", href: "/posts" },
    { label: "About", href: "/about" },
    { label: "GitHub", href: github, icon: "github" },
  ],
  footerLinks: [
    { label: "See the rest of the Catalyst Forge shelf.", href: "https://catalystforge.com/tools/" },
    { label: "RSS", href: "/rss.xml" },
    { label: "Method", href: "/method" },
    { label: "Engineering", href: "/engineering" },
    { label: "Paper", href: "/paper" },
    { label: "Install in your agent", href: "/run" },
    { label: "Posts", href: "/posts" },
    { label: "GitHub", href: github, icon: "github" },
  ],
  topics: [],
  redirects: [
    {
      from: "/posts/2026-09-23-the-fill-is-not-the-bound",
      to: "/posts/2026-09-23-name-the-question-before-you-answer-the-silence",
      status: 301,
    },
  ],
});
