import {themes as prismThemes} from "prism-react-renderer";

const config = {
  title: "Richmond Developer Docs",
  tagline: "API reference, guides, and runbooks",
  url: "https://docs.richmond.dev",
  baseUrl: "/",
  organizationName: "afcrichmond-labs",
  projectName: "richmond-docs",
  themeConfig: {
    navbar: {
      title: "Richmond Docs",
      items: [
        { type: "doc", docId: "getting-started", label: "Guides" },
        { to: "/api", label: "API Reference" },
        { to: "/runbooks", label: "Runbooks" },
      ],
    },
  },
};

export default config;
