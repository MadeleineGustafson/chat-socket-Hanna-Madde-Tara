import { Box, Flex, Text } from "@chakra-ui/react";
import { useSocket } from "../context/SocketContext";

function RoomsList() {
  const { joinRoom, rooms } = useSocket();

  const handleJoinRoom = (room: string) => {
    joinRoom(room);
  };

  return (
      <Flex justifyContent="center" bg="#EE4C5F">
        <Box
          display="flex"
          justifyContent="center"
          flexDirection={"column"}
          alignItems="center"
        >
          <Text
            as="h1"
            mt="2rem"
            fontSize="25"
            fontWeight="700"
            color={"#FFF2C5"}
            display="flex"
            justifyContent="center"
            fontFamily="Rubik"
          >
            Aktiva rum
          </Text>
          {rooms.length === 0 ? (
            <Box
              height="34px"
              m="0.5rem"
              fontSize="12px"
              fontWeight="semibold"
              display="flex"
              color="#FFF2C5"
              justifyContent="center"
              alignItems="center"
              fontFamily="Rubik"
            >
              Just nu finns inga aktiva rum
            </Box>
          ) : (
            rooms.map((room) => (
              <Box
                as="button"
                key={room}
                height="34px"
                width="150px"
                border="none"
                m="0.5rem"
                borderRadius="8px"
                fontSize="14px"
                fontWeight="semibold"
                bg="#FFF2C5"
                display="flex"
                color="#9D3440"
                justifyContent="center"
                alignItems="center"
                fontFamily="Rubik"
                onClick={() => handleJoinRoom(room)}
              >
                {room}
              </Box>
            ))
          )}
        </Box>
      </Flex>
  );
}

export default RoomsList;
