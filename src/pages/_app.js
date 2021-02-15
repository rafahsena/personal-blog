import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import Head from "next/head";
import Header from "../components/Header";
import MainPage from "../components/MainPage";

import theme from "../theme/index";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import "dayjs/locale/pt-br";

dayjs.locale("pt-br");
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
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
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
