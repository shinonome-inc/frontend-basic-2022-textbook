import {
  Box,
  Center,
  Code,
  Flex,
  Heading,
  HStack,
  Link,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { graphql, Link as GatsbyLink } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import Layout from "../components/layout";
import CheckList from "../components/CheckList";
import tableOfContents from "../contexts/table-of-contents";

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
      id
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
          <Heading marginBottom={3} color={"teal.700"}>
            {data.mdx?.frontmatter?.title}
          </Heading>
          <Box
            marginBottom={4}
            textAlign={"right"}
            alignSelf={"flex-end"}
            color={"teal.900"}
          >
            最終更新: {data.mdx?.frontmatter?.date}
          </Box>
          <Box alignSelf={"stretch"} marginBottom={"40px"}>
            {data.mdx?.frontmatter?.figmaNodeId && (
              <Box marginBottom={4}>
                <Text fontSize={"xl"} marginBottom={4}>
                  Figma
                </Text>
                <iframe
                  title="figma"
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
                  title="chromatic"
                  src={`https://${data.site?.siteMetadata?.exampleCommitHash}--${data.site?.siteMetadata?.exampleChromaticAppId}.chromatic.com/iframe.html?path=${data.mdx?.frontmatter?.pathToStory}&viewMode=story&full=1&shortcuts=false&singleStory=true`}
                  width="800"
                  height="400"
                ></iframe>
              </Box>
            )}
          </Box>
          <MDXProvider components={components} marginBottom={4}>
            <MDXRenderer>{data.mdx?.body || ""}</MDXRenderer>
          </MDXProvider>
          <PageLink id={data.mdx?.id} />
        </Flex>
      </Center>
    </Layout>
  );
};
export default TextbookPost;

const PageLink = ({ id }) => {
  const TableOfContentsContext = tableOfContents.useTableOfContentsContext();
  return (
    <Flex
      flexWrap={["nowrap", "wrap"]}
      justifyContent={"space-between"}
      alignSelf={"stretch"}
      marginTop={"50px"}
    >
      {TableOfContentsContext?.find((v) => v.id === id)?.previousSlug ? (
        <GatsbyLink
          to={`/${
            TableOfContentsContext.find((v) => v.id === id).previousSlug
          }`}
        >
          <HStack spacing={4}>
            <span className="material-icons" color={"teal.700"}>
              arrow_back
            </span>
            <Text fontSize="lg" color={"teal.700"}>
              前のページ
            </Text>
          </HStack>
        </GatsbyLink>
      ) : (
        <></>
      )}
      {TableOfContentsContext?.find((v) => v.id === id)?.nextSlug ? (
        <GatsbyLink
          to={`/${TableOfContentsContext.find((v) => v.id === id).nextSlug}`}
        >
          <HStack spacing={4}>
            <Text fontSize="lg" color={"teal.700"}>
              次のページ
            </Text>
            <span className="material-icons" color={"teal.700"}>
              arrow_forward
            </span>
          </HStack>
        </GatsbyLink>
      ) : (
        <></>
      )}
    </Flex>
  );
};

const components = {
  h1: (props) => <Heading marginBottom={4} color={"teal.700"} {...props} />,
  h2: (props) => (
    <Text fontSize="3xl" marginY={4} color={"teal.800"} {...props} />
  ),
  h3: (props) => (
    <Text fontSize="2xl" marginY={4} color={"teal.800"} {...props} />
  ),
  h4: (props) => (
    <Text fontSize="xl" marginBottom={4} color={"teal.800"} {...props} />
  ),
  h5: (props) => (
    <Text fontSize="lg" marginBottom={4} color={"teal.800"} {...props} />
  ),
  h6: (props) => (
    <Text fontSize="lg" marginBottom={4} color={"teal.800"} {...props} />
  ),
  p: (props) => (
    <Text
      fontSize="md"
      marginBottom={4}
      alignSelf={"stretch"}
      color={"teal.900"}
      {...props}
    />
  ),
  ul: (props) => (
    <UnorderedList marginBottom={4} paddingLeft="30px" {...props} />
  ),
  ol: (props) => <OrderedList marginBottom={4} paddingLeft="30px" {...props} />,
  li: (props) => <ListItem fontSize="lg" color={"teal.900"} {...props} />,
  pre: (props) => (
    <Box
      marginBottom={4}
      wordBreak={"break-word"}
      alignSelf={"stretch"}
      {...props}
    />
  ),
  code: (props) => (
    <Code
      p={4}
      whiteSpace={"pre-wrap"}
      width={"100%"}
      color={"teal.800"}
      {...props}
    />
  ),
  inlineCode: (props) => <Code marginX={2} color={"teal.800"} {...props} />,
  del: (props) => <Text as="del" {...props} />,
  strong: (props) => <Text as="strong" {...props} />,
  a: (props) => <Link marginX={2} color={"teal.500"} {...props} />,
  CheckList,
};
