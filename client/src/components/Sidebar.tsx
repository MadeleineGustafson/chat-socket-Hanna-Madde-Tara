import { Box, Flex } from "@chakra-ui/react";
import CreateNewRoomBtn from "./CreateNewRoomBtn";
import JoinRoomForm from "./JoinRoomForm";
import RoomButton from "./RoomButton";

function Sidebar() {
  return (
    <>
      <Flex minHeight="10rem">
        <Box width="20em">
          <CreateNewRoomBtn />
          <JoinRoomForm />
          <RoomButton />
        </Box>
      </Flex>
    </>
  );
}

export default Sidebar;
