import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "dark",
  },
  components: {
    Text: { baseStyle: { fontSize: "xl" } },
  },
});

export default theme;
