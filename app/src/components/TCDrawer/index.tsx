import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "gatsby";
import React from "react";
import tableOfContents from "../../contexts/table-of-contents";

export type TTCDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};
const TCDrawer: React.FC<TTCDrawerProps> = ({ isOpen, onClose }) => {
  const TableOfContentsContext = tableOfContents.useTableOfContentsContext();
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>ページ一覧</DrawerHeader>
        <DrawerBody>
          <VStack spacing={6}>
            {TableOfContentsContext.map((content) => (
              <Box
                key={content.id}
                transitionDuration="0.1s"
                _hover={{ background: "gray.500", color: "white" }}
                w="100%"
                textAlign="center"
              >
                <Link to={content.link}>
                  <Text fontSize="md">{content.title}</Text>
                </Link>
              </Box>
            ))}
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default TCDrawer;
