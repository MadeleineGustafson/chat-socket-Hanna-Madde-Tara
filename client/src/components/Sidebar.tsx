import { Box, Flex } from "@chakra-ui/react";
import CreateNewRoomBtn from "./CreateNewRoomBtn";
import JoinRoomForm from "./JoinRoomForm";
import RoomButton from "./RoomButton";

function Sidebar() {
  return (
    <>
      <Flex height="100vh">
        <Box bg="pink" width="20em">
          <CreateNewRoomBtn />
          <JoinRoomForm />
          <RoomButton />
        </Box>
      </Flex>
    </>
  );
}

export default Sidebar;
