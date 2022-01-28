import React from "react";
import { PageProps } from "gatsby";
import Layout from "../components/layout";
import { Text } from "@chakra-ui/react";

const Index: React.FC<PageProps> = ({ data, location }) => {
  return (
    <Layout>
      <Text fontSize="xl">
        最終課題では簡易的なTodoアプリの作成を通して、Reactの使い方を学んでいきます。
      </Text>
      <Text fontSize="xl">
        画面左上のボタンからメニューを開いて、順に教材を見ていきましょう。
      </Text>
    </Layout>
  );
};
export default Index;
