import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import Head from "next/head";
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
        <Head>
          <title>Reactive GameDev</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta property="og:title" content="Reactive GameDev" key="title" />
        </Head>
        <Header />
        <MainPage>
          <Component {...pageProps} />
        </MainPage>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
