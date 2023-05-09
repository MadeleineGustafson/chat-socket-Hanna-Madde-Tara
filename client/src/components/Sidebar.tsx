import { Box, Flex } from "@chakra-ui/react";
import CreateNewRoomBtn from "./CreateNewRoomBtn";
import RoomButton from "./RoomButton";

function Sidebar() {
  return (
    <>
      <Flex height="100vh">
        <Box width="20em" bg="#ee4c5f">
          <CreateNewRoomBtn />

          <RoomButton />
        </Box>
      </Flex>
    </>
  );
}

export default Sidebar;
