import React from "react";
import tableOfContents from "../contexts/table-of-contents";
import Header from "./Header";

import { ChakraProvider, Flex } from "@chakra-ui/react";
import { Helmet } from "react-helmet";

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Helmet>
      <tableOfContents.TableOfContentsProvider>
        <ChakraProvider>
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
