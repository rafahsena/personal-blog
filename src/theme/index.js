// theme.js
import { extendTheme } from "@chakra-ui/react";

import styles from "./styles";

// Foundational style overrides
import fonts from "./foundations/fonts";
import breakpoints from "./foundations/breakpoints";
import colors from "./foundations/colors";

// Component style overrides
import Article from "./components/article";
import Articles from "./components/articles";
import BlogContainer from "./components/container";
import Sidebar from "./components/sidebar";
import Header from "./components/header";

const components = {
  Article,
  Articles,
  BlogContainer,
  Sidebar,
  Header
};

const overrides = {
  colors,
  styles,
  breakpoints,
  fonts,
  components
};

export default extendTheme(overrides);
