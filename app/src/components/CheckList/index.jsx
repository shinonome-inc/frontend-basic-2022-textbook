import { Box } from "@chakra-ui/react";
import React from "react";

const CheckList = ({ children }) => {
  return (
    <Box bgColor="teal.100" p={4}>
      {children}
    </Box>
  );
};
export default CheckList;
