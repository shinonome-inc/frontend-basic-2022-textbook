import { Heading, HStack, IconButton } from "@chakra-ui/react";
import { Link } from "gatsby";
import React, { useState } from "react";
import TCDrawer from "../TCDrawer";

const Header: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  return (
    <HStack
      spacing={6}
      p={3}
      position="sticky"
      top={0}
      bg="white"
      borderBottom="1px"
      borderColor="gray.300"
    >
      <IconButton
        aria-label="Open drawer"
        icon={<span className="material-icons">menu</span>}
        onClick={() => setIsDrawerOpen(true)}
      />
      <Heading>
        <Link to="/">Frontend Basic 最終課題</Link>
      </Heading>
      <TCDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </HStack>
  );
};
export default Header;
