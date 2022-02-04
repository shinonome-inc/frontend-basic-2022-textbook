import React from "react";
import Layout from "../components/layout";
import { Center, Flex, Text } from "@chakra-ui/react";

const Index = ({ data, location }) => {
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
          <Text fontSize="xl">
            最終課題では簡易的なTodoアプリの作成を通して、Reactの使い方を学んでいきます。
          </Text>
          <Text fontSize="xl">
            画面左上のボタンからメニューを開いて、順に教材を見ていきましょう。
          </Text>
        </Flex>
      </Center>
    </Layout>
  );
};
export default Index;
