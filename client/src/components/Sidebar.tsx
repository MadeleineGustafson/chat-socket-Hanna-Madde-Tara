import { Box, Flex } from "@chakra-ui/react";

function Sidebar() {
  return (
    <>
      <Flex height="100vh">
        <Box width="20em" />
        <Box flex="1" bg="white" />
      </Flex>
    </>
  );
}

export default Sidebar;
