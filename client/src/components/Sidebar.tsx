import { Box, Flex } from "@chakra-ui/react";

function Sidebar() {
  return (
    <>
      <Flex height="100vh">
        <Box bg="pink" width="25rem" />
        <Box flex="1" bg="white" />
      </Flex>
    </>
  );
}

export default Sidebar;
