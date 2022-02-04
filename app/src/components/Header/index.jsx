import { Heading, HStack, IconButton } from "@chakra-ui/react";
import { Link } from "gatsby";
import React, { useState } from "react";
import TCDrawer from "../TCDrawer";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <HStack
      spacing={6}
      p={3}
      position="sticky"
      top={0}
      bg="white"
      borderBottom="1px"
      borderColor="gray.300"
      zIndex={1}
    >
      <IconButton
        aria-label="Open drawer"
        icon={
          <span className="material-icons" color={"teal.800"}>
            menu
          </span>
        }
        onClick={() => setIsDrawerOpen(true)}
      />
      <Heading color={"teal.700"}>
        <Link to="/">Frontend Basic 最終課題</Link>
      </Heading>
      <TCDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </HStack>
  );
};
export default Header;
