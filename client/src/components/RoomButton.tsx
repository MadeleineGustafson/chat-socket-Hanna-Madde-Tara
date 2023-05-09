import { Box, Flex, Text } from "@chakra-ui/react";
import { useSocket } from "../context/SocketContext";
function RoomButton() {
  const { joinRoom } = useSocket();

  const handleJoinRoom = (room: string) => {
    joinRoom(room);
  };
  return (
    <>
      <Flex display={"flex"} justifyContent="center" bg="#ee4c5f">
        <Box mt={"2rem"}>
          <Text
            as="h1"
            mb="4"
            fontSize="25"
            fontWeight="700"
            color={"#e0e5cb"}
            display="flex"
            justifyContent={"center"}
          >
            Aktiva rum
          </Text>
          <Box
            as="button"
            height="34px"
            width="150px"
            border="none"
            px="8px"
            borderRadius="8px"
            fontSize="14px"
            fontWeight="semibold"
            bg={"#FFE897"}
            onClick={() => handleJoinRoom("Rum 1")}
          >
            Rum 1
          </Box>
        </Box>
      </Flex>
    </>
  );
}

export default RoomButton;
