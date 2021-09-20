import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Header from "./header";

export const query = graphql`
  query PageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allFile {
      nodes {
        name
      }
    }
  }
`;

const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery<GatsbyTypes.PageQueryQuery>(query);
  return (
    <>
      <Header />
      {data.site?.siteMetadata?.title}
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
      <main>{children}</main>
    </>
  );
};
export default Layout;
