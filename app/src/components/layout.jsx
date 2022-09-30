import React from "react";
import tableOfContents from "../contexts/table-of-contents";
import Header from "./Header";

import { ChakraProvider, extendTheme, Flex } from "@chakra-ui/react";
import { Helmet } from "react-helmet";

const theme = extendTheme({
  fonts: {
    heading: `'Noto Sans JP', sans-serif`,
    body: `'Noto Sans JP', sans-serif`,
  },
});

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Helmet>
      <tableOfContents.TableOfContentsProvider>
        <ChakraProvider theme={theme}>
          <Header />
          <Flex p={5} flexDir="column">
            {children}
          </Flex>
        </ChakraProvider>
      </tableOfContents.TableOfContentsProvider>
    </>
  );
};
export default Layout;
