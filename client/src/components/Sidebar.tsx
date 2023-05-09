import { Box, Flex } from "@chakra-ui/react";
import CreateNewRoomBtn from "./CreateNewRoomBtn";
import JoinRoomForm from "./JoinRoomForm";
import RoomButton from "./RoomButton";

function Sidebar() {
  return (
    <>
      <Flex height="100vh">
        <Box width="20em" bg="#ee4c5f">
          <CreateNewRoomBtn />
          <JoinRoomForm />
          <RoomButton />
        </Box>
      </Flex>
    </>
  );
}

export default Sidebar;
