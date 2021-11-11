import React from "react";
import tableOfContents from "../contexts/table-of-contents";
import Header from "./header";
import TableOfContents from "./table-of-contents";

const Layout: React.FC = ({ children }) => {
  return (
    <tableOfContents.TableOfContentsProvider>
      <Header />
      <TableOfContents></TableOfContents>
      <main>{children}</main>
    </tableOfContents.TableOfContentsProvider>
  );
};
export default Layout;
