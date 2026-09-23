import { defineFilepressConfig } from "getfilepress";

const github = "https://github.com/Catalyst-Forge-LLC/gap-last";

export default defineFilepressConfig({
  title: "Gap Last",
  description:
    "Reconstruct what happened before committing to an explanation. Stay with what happened long enough to name what is still unknown, so the next similar event is not met with the last wrong story.",
  tagline: "Don't commit to a cause until you can name the gap.",
  url: "https://gaplast.dev",
  author: "Catalyst Forge LLC",
  logo: "/logo.png",
  ogImage: "/logo.png",
  homePage: "home",
  nav: [
    { label: "Home", href: "/" },
    { label: "Method", href: "/method" },
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
    { label: "Paper", href: "/paper" },
    { label: "Install in your agent", href: "/run" },
    { label: "Posts", href: "/posts" },
    { label: "GitHub", href: github, icon: "github" },
  ],
  topics: [],
});
