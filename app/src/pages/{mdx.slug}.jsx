import {
  Box,
  Center,
  Code,
  Flex,
  Heading,
  Image,
  Img,
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
import CheckList from "../components/CheckList";

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

const TextbookPost = ({ data }) => {
  return (
    <Layout>
      <Center>
        <Flex
          flexDirection={"column"}
          alignItems={"flex-start"}
          textAlign="left"
          width={"100%"}
          maxWidth={"800px"}
          p={4}
          position={"relative"}
        >
          <Heading marginBottom={3}>{data.mdx?.frontmatter?.title}</Heading>
          <Box marginBottom={4} textAlign={"right"} alignSelf={"flex-end"}>
            最終更新: {data.mdx?.frontmatter?.date}
          </Box>
          {data.mdx?.frontmatter?.figmaNodeId && (
            <Box marginBottom={4}>
              <Text fontSize={"xl"} marginBottom={4}>
                Figma
              </Text>
              <iframe
                height="450"
                width="800"
                src={`https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/${data.site?.siteMetadata?.figmaIdAndFilename}?node-id=${data.mdx.frontmatter.figmaNodeId}`}
              />
            </Box>
          )}
          {data.mdx?.frontmatter?.pathToStory && (
            <Box marginBottom={4}>
              <Text fontSize={"xl"} marginBottom={4}>
                作成例
              </Text>
              <iframe
                src={`https://${data.site?.siteMetadata?.exampleCommitHash}--${data.site?.siteMetadata?.exampleChromaticAppId}.chromatic.com/iframe.html?path=${data.mdx?.frontmatter?.pathToStory}&viewMode=story&full=1&shortcuts=false&singleStory=true`}
                width="800"
                height="400"
              ></iframe>
            </Box>
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
        </Flex>
      </Center>
    </Layout>
  );
};
export default TextbookPost;

const components = {
  h1: (props) => <Heading marginBottom={4} {...props} />,
  h2: (props) => <Text fontSize="3xl" marginY={4} {...props} />,
  h3: (props) => <Text fontSize="2xl" marginY={4} {...props} />,
  h4: (props) => <Text fontSize="xl" marginBottom={4} {...props} />,
  h5: (props) => <Text fontSize="lg" marginBottom={4} {...props} />,
  h6: (props) => <Text fontSize="lg" marginBottom={4} {...props} />,
  p: (props) => (
    <Text fontSize="md" marginBottom={4} alignSelf={"stretch"} {...props} />
  ),
  ul: (props) => (
    <UnorderedList marginBottom={4} paddingLeft="30px" {...props} />
  ),
  ol: (props) => <OrderedList marginBottom={4} paddingLeft="30px" {...props} />,
  li: (props) => <ListItem fontSize="lg" {...props} />,
  pre: (props) => (
    <Box
      marginBottom={4}
      wordBreak={"break-word"}
      alignSelf={"stretch"}
      {...props}
    />
  ),
  code: (props) => (
    <Code p={4} whiteSpace={"pre-wrap"} width={"100%"} {...props} />
  ),
  inlineCode: (props) => <Code marginX={2} {...props} />,
  del: (props) => <Text as="del" {...props} />,
  strong: (props) => <Text as="strong" {...props} />,
  a: (props) => <Link marginX={2} color={"teal.500"} {...props} />,
  CheckList,
};
