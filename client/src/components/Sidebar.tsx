import { Box, Flex } from "@chakra-ui/react";
import CreateNewRoomBtn from "./CreateNewRoomBtn";
import RoomsList from "./RoomsList";

function Sidebar() {
  return (
    <Flex minHeight="30rem">
      <Box bg="#EE4C5F" width="20em">
        <CreateNewRoomBtn />
        <RoomsList />
      </Box>
    </Flex>
  );
}

export default Sidebar;
