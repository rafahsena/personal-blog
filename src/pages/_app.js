import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import Header from "../components/Header";
import MainPage from "../components/MainPage";

import theme from "../theme/index";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: false,
          initialColorMode: "dark",
        }}
      >
        <Header/>
        <MainPage>
          <Component {...pageProps} />
        </MainPage>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
