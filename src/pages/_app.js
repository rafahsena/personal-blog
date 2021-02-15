import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import Head from "next/head";
import Header from "../components/Header";
import MainPage from "../components/MainPage";

import theme from "../theme/index";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import "dayjs/locale/pt-br";

dayjs.locale('pt-br');
dayjs.extend(localizedFormat);

function MyBlog({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: false,
          initialColorMode: "dark",
        }}
      >
        <Head>
          <title>Reactive Dev</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta property="og:title" content="Reactive Dev" key="title" />
        </Head>
        <Header />
        <MainPage>
          <Component {...pageProps} />
        </MainPage>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyBlog;
