import { graphql, Link, useStaticQuery } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import Header from "./header";

export const query = graphql`
  query Layout {
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
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`;

const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery<GatsbyTypes.LayoutQuery>(query);
  return (
    <>
      <Header />
      {data.site?.siteMetadata?.title}
      <ul>
        {data.allMdx.nodes.map((node) => (
          <li key={node.id}>
            <Link to={`/${node.slug}`}>
              <p>title: {node.frontmatter?.title}</p>
              <p>created_at: {node.frontmatter?.date}</p>
            </Link>
          </li>
        ))}
      </ul>
      <main>{children}</main>
    </>
  );
};
export default Layout;
