import { Box, Flex } from "@chakra-ui/react";
import CreateNewRoomBtn from "./CreateNewRoomBtn";
import RoomsList from "./RoomsList";

function Sidebar() {
  return (
    <Flex minHeight="30rem" justifyContent={"center"}>
      <Box bg="#ee4c5f" width="20em" alignItems="center">
        <CreateNewRoomBtn />
        <RoomsList />
      </Box>
    </Flex>
  );
}

export default Sidebar;
