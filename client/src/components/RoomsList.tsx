import { Box, Flex, Text } from "@chakra-ui/react";
import { useSocket } from "../context/SocketContext";
function RoomsList() {
  const { joinRoom, rooms } = useSocket();

  const handleJoinRoom = (room: string) => {
    joinRoom(room);
  };
  return (
    <>
      <Flex justifyContent="center" bg="#EE4C5F" mt={"2rem"}>
        <Box display={"flex"} justifyContent="center" flexDirection={"column"}>
          <Text
            as="h1"
            mb="4"
            fontSize="25"
            fontWeight="700"
            display={"flex"}
            justifyContent="center"
            color={"#FFE897"}
          >
            Aktiva rum
          </Text>
          {rooms.map((room) => (
            <Box
              as="button"
              height="34px"
              width="150px"
              border="none"
              m={"0.5rem"}
              borderRadius="8px"
              fontSize="14px"
              fontWeight="semibold"
              bg="#FFF2C5"
              onClick={() => handleJoinRoom(room)}
            >
              {room}
            </Box>
          ))}
        </Box>
      </Flex>
    </>
  );
}

export default RoomsList;
