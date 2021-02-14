// theme.js
import { extendTheme } from "@chakra-ui/react";

// Foundational style overrides
import fonts from "./foundations/fonts";

import breakpoints from "./foundations/breakpoints";

// Component style overrides
import Article from "./components/article";
import BlogContainer from "./components/container";
import Sidebar from "./components/sidebar";

const components = {
  Article,
  BlogContainer,
  Sidebar
};

const overrides = {
  colors: {
    black: "#16161D",
  },
  breakpoints,
  fonts,
  components
};

export default extendTheme(overrides);
