import { graphql, PageProps } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import Layout from "../components/layout";

export const query = graphql`
  query TextbookPost($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`;

const TextbookPost: React.FC<PageProps<GatsbyTypes.TextbookPostQuery>> = ({
  data,
}) => {
  return (
    <Layout>
      <p>title: {data.mdx?.frontmatter?.title}</p>
      <p>date: {data.mdx?.frontmatter?.date}</p>
      <MDXRenderer>{data.mdx?.body || ""}</MDXRenderer>
    </Layout>
  );
};
export default TextbookPost;
