import { Box, Flex, Text } from "@chakra-ui/react";
import { useSocket } from "../context/SocketContext";

function RoomsList() {
  const { joinRoom, rooms } = useSocket();

  const handleJoinRoom = (room: string) => {
    joinRoom(room);
  };

  return (
    <>
      <Flex justifyContent="center" bg="pink.400" width="200px">
        <Box>
          <Text as="h1" mb="4" fontSize="25" fontWeight="700">
            Aktiva rum
          </Text>
          {rooms.length > 0 ? (
            rooms.map((room) => (
              <Box
                as="button"
                height="34px"
                width="150px"
                border="none"
                px="8px"
                borderRadius="8px"
                fontSize="14px"
                fontWeight="semibold"
                bg="pink.100"
                onClick={() => handleJoinRoom(room)}
              >
                {room}
              </Box>
            ))
          ) : (
            <Text>Just nu finns inga aktiva rum</Text>
          )}
        </Box>
      </Flex>
    </>
  );
}

export default RoomsList;
