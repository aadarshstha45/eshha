import { extendTheme } from "@chakra-ui/react";
// Supports weights 300-700
import "@fontsource-variable/quicksand";
export const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        color: "black",
        lineHeight: "tall",
        bg: "#FFFEFC",
        fontFamily: "Quicksand Variable",
      },
    },
  },
});
