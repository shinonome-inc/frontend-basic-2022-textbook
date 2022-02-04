import { graphql, useStaticQuery } from "gatsby";
import React, { createContext, useContext } from "react";

export const query = graphql`
  query TableOfContents {
    allMdx {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          index
        }
        id
        slug
      }
    }
  }
`;

const TableOfContentsContext = createContext([]);

const TableOfContentsProvider = ({ children }) => {
  const data = useStaticQuery(query);

  let tempSlug = null;
  const contextValue = [...data.allMdx.nodes]
    .sort((a, b) =>
      a.frontmatter &&
      a.frontmatter.index &&
      b.frontmatter &&
      b.frontmatter.index
        ? a.frontmatter?.index - b.frontmatter?.index
        : 0
    )
    .map((node) => {
      const v = {
        id: node.id,
        title: node.frontmatter?.title || "",
        date: node.frontmatter ? new Date(node.frontmatter.date) : null,
        link: `/${node.slug}`,
        previousSlug: tempSlug,
        slug: node.slug,
      };
      tempSlug = node.slug;
      return v;
    })
    .reverse()
    .map((v) => {
      if (tempSlug === v.slug) tempSlug = null;
      const _v = {
        ...v,
        nextSlug: tempSlug,
      };
      tempSlug = v.slug;
      return _v;
    })
    .reverse();

  return (
    <TableOfContentsContext.Provider value={contextValue}>
      {children}
    </TableOfContentsContext.Provider>
  );
};

const useTableOfContentsContext = () => useContext(TableOfContentsContext);

export default { useTableOfContentsContext, TableOfContentsProvider };
