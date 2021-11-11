import { graphql, PageProps } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import Layout from "../components/layout";

export const query = graphql`
  query TextbookPost($id: String) {
    site {
      siteMetadata {
        exampleCommitHash
        exampleChromaticAppId
        figmaIdAndFilename
      }
    }
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        pathToStory
        figmaNodeId
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
      {data.mdx?.frontmatter?.pathToStory && (
        <iframe
          src={`https://${data.site?.siteMetadata?.exampleCommitHash}--${data.site?.siteMetadata?.exampleChromaticAppId}.chromatic.com/?path=${data.mdx?.frontmatter?.pathToStory}&viewMode=story&shortcuts=false&singleStory=true`}
          width="800"
          height="400"
        ></iframe>
      )}
      {data.mdx?.frontmatter?.figmaNodeId && (
        <iframe
          height="450"
          width="800"
          src={`https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/${data.site?.siteMetadata?.figmaIdAndFilename}?node-id=${data.mdx.frontmatter.figmaNodeId}`}
        />
      )}
      <MDXRenderer>{data.mdx?.body || ""}</MDXRenderer>
    </Layout>
  );
};
export default TextbookPost;
