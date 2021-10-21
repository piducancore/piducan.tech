import base from "@theme-ui/preset-base";
import { merge } from "theme-ui";

import "@fontsource/major-mono-display/400.css";
import "@fontsource/source-code-pro/400.css";

const theme = merge(base, {
  colors: {
    primary: "#222",
  },
  fonts: {
    body: "'Major Mono Display', monospace",
    heading: "'Major Mono Display', monospace",
    monospace: "'Source Code Pro', monospace",
  },
  fontSizes: [14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    display: 700,
    bold: 700,
  },
  sizes: {
    container: 1366,
    slim: 480,
  },
  layout: {
    header: {
      // color: "white",
      // bg: "black",
    },
    main: { maxWidth: "slim", mx: "auto" },
    footer: {
      // bg: "gray",
    },
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: "bold",
    },
    input: {
      borderColor: "gray",
      borderRadius: 0,
      "&:focus": {
        borderColor: "primary",
        boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
        outline: "none",
      },
    },
    select: {
      borderColor: "gray",
      borderRadius: 0,
      "&:focus": {
        borderColor: "primary",
        boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
        outline: "none",
      },
    },
    textarea: {
      borderColor: "gray",
      borderRadius: 0,
      "&:focus": {
        borderColor: "primary",
        boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
        outline: "none",
      },
    },
    slider: {
      bg: "muted",
    },
  },
  buttons: {
    primary: {
      fontFamily: "body",
      cursor: "pointer",
      transition: "all 0.2s",
      bg: "text",
      color: "background",
      // fontSize: 3,
      border: (theme) => `1px solid ${theme.colors.text}`,
      borderRadius: 0,
      "&:hover": {
        bg: "background",
        color: "text",
        // fontSize: 4,
      },
      "&:active": {
        // fontSize: 5,
      },
    },
  },
  styles: {
    root: {
      "@-webkit-keyframes blink": {
        "0%": { opacity: 0 },
        "50%": { opacity: 1 },
        "100%": { opacity: 0 },
      },
      ".blinking": {
        animation: "blink 0.8s infinite",
      },
      pre: {
        fontFamily: "monospace",
        overflow: "auto",
      },
      "*::selection": {
        bg: "primary",
        color: "background",
      },
    },
    a: {
      textDecoration: "none",
      fontWeight: "bold",
      color: "text",
      transition: "all 0.2s",
      ":hover": {
        textDecoration: "line-through",
      },
    },
  },
});

console.log(theme);

export default theme;
