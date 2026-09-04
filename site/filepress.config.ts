import { defineFilepressConfig } from "getfilepress";

const github = "https://github.com/Catalyst-Forge-LLC/gap-last";
const npm = "https://www.npmjs.com/package/gaplast";

export default defineFilepressConfig({
  title: "Gap Last",
  description:
    "Don't invent a cause until you can name the gap. Stay with what happened long enough to name what is still unknown, so the next similar event is not met with the last wrong story.",
  tagline: "Don't invent a cause until you can name the gap.",
  url: "https://gaplast.dev",
  author: "Catalyst Forge LLC",
  logo: "/logo.svg",
  ogImage: "/logo.svg",
  homePage: "home",
  nav: [
    { label: "Home", href: "/" },
    { label: "Method", href: "/method" },
    { label: "Paper", href: "/paper" },
    { label: "Run", href: "/run" },
    { label: "Posts", href: "/posts" },
    { label: "About", href: "/about" },
    { label: "GitHub", href: github, icon: "github" },
  ],
  footerLinks: [
    { label: "RSS", href: "/rss.xml" },
    { label: "Method", href: "/method" },
    { label: "Paper", href: "/paper" },
    { label: "Run", href: "/run" },
    { label: "npm", href: npm },
    { label: "GitHub", href: github, icon: "github" },
  ],
  topics: [],
});
