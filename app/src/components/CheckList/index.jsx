import { Box, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";

const CheckList = ({ children, content }) => {
  return (
    <Box bgColor="teal.50" p={4} color={"teal.900"} alignSelf={"stretch"}>
      <Text fontSize={"xl"} fontWeight={"bold"} marginBottom={3}>
        確認項目
      </Text>
      <UnorderedList paddingLeft={"30px"}>
        {content.map((v, i) => (
          <ListItem key={i} marginBottom={3}>
            {v}
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};
export default CheckList;
