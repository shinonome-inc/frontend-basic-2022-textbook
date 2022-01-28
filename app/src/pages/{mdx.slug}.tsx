import {
  Box,
  Code,
  Flex,
  Heading,
  Image,
  Link,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { graphql, PageProps } from "gatsby";
import { MDXProvider, MDXProviderComponentsProp } from "@mdx-js/react";
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
      <Heading>{data.mdx?.frontmatter?.title}</Heading>
      <Box textAlign="right">最終更新: {data.mdx?.frontmatter?.date}</Box>
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
      <MDXProvider components={components}>
        <MDXRenderer>{data.mdx?.body || ""}</MDXRenderer>
      </MDXProvider>
      {/* <Flex flexWrap={["nowrap", "wrap"]}>
        <VStack spacing={4}>
          <Link>
            <span className="material icons">arrow back</span>
            <Text fontSize="lg">
              {data.allMarkdownRemark.edges.prev.frontmatter.title}
            </Text>
          </Link>
        </VStack>
      </Flex> */}
    </Layout>
  );
};
export default TextbookPost;

const components: MDXProviderComponentsProp = {
  h1: (props) => <Heading {...props} />,
  h2: (props) => <Text fontSize="3xl" {...props} />,
  h3: (props) => <Text fontSize="2xl" {...props} />,
  h4: (props) => <Text fontSize="xl" {...props} />,
  h5: (props) => <Text fontSize="lg" {...props} />,
  h6: (props) => <Text fontSize="lg" {...props} />,
  p: (props) => <Text fontSize="md" {...props} />,
  ul: (props) => <UnorderedList {...props} />,
  ol: (props) => <OrderedList {...props} />,
  li: (props) => <ListItem fontSize="lg" {...props} />,
  code: (props) => <Code {...props} />,
  inlineCode: (props) => <Code {...props} />,
  del: (props) => <Text as="del" {...props} />,
  strong: (props) => <Text as="strong" {...props} />,
  img: (props) => <Image {...props} />,
  a: (props) => <Link {...props} />,
};
