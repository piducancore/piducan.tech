import base from "@theme-ui/preset-base";
import { merge } from "theme-ui";

const theme = merge(base, {
  buttons: {
    primary: {
      cursor: "pointer",
      transition: "all 0.2s",
      bg: "primary",
      color: "background",
      fontSize: 3,
      "&:hover": {
        bg: "background",
        color: "primary",
        fontSize: 5,
      },
      "&:active": {
        fontSize: 6,
      },
    },
  },
});

export default theme;
