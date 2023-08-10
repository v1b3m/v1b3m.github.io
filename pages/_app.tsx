import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import "../styles/scroll.scss";
import theme from "../theme";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
