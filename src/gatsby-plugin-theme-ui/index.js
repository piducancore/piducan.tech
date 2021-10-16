const theme = {
  config: {
    useCustomProperties: true,
    initialColorMode: "light",
    initialColorModeName: "light",
    useColorSchemeMediaQuery: false,
    useRootStyles: true,
  },
  breakpoints: ["40em", "52em", "64em"],
  colors: {
    text: "#0d0106",
    background: "#fff",
    primary: "#000",
    secondary: "#b80611",
    muted: "#e0e0e0",
    modes: {
      dark: {
        text: "#f6f4f5",
        background: "#0d0106",
        primary: "#d2d2d2",
        secondary: "#b2b2b2",
        muted: "#191919",
      },
    },
  },
  fonts: {
    //   body: "Andale Mono",
    //   heading: "Staatliches",
    //   monospace: "Silom, monospace",
  },
  fontSizes: [14, 18, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    body: 400,
    heading: 400,
    display: 900,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  textStyles: {
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      letterSpacing: 5,
    },
    display: {
      variant: "textStyles.heading",
      fontSize: [5, 6],
      fontWeight: "heading",
      letterSpacing: 5,
      mt: 3,
    },
  },
};

export default theme;
