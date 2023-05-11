import { Box, IconButton, Input, Text, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { TbSquareRoundedPlus } from "react-icons/tb";
import { useSocket } from "../context/SocketContext";

function CreateNewRoomBtn() {
  const { joinRoom } = useSocket();
  const [room, setRoom] = useState("");
  const toast = useToast();

  const handleCreateRoom = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    joinRoom(room);
    setRoom("");

    // Display the toast message
    toast({
      title: "Rum skapades!",
      description: `Du har skapat ett nytt rum som heter ${room}`,
      status: "success",
      duration: 2000,
      position: "bottom-left",
      isClosable: true,
    });
  };

  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        gap="2"
        flex="1"
        justifyContent={"center"}
      >
        <form onSubmit={handleCreateRoom}>
          <Text
            as="h1"
            fontWeight="500"
            fontSize="18"
            color="#FFE897"
            display="flex"
            justifyContent={"center"}
            m="1rem"
            fontFamily="Rubik"
            mt={"2.5rem"}
          >
            Skapa ett nytt rum:
          </Text>
          <Box display={"flex"}>
            <Input
              name="Room"
              placeholder="Rum"
              _placeholder={{ color: "#e0e5cb" }}
              type="text"
              size="md"
              width="11rem"
              value={room}
              bg="#FF9587"
              border={"none"}
              borderRadius="25px"
              mr="0.5rem"
              onChange={(e) => setRoom(e.target.value)}
            />
            <IconButton
              variant="outline"
              color="#FFE897"
              aria-label="plus"
              fontSize="40px"
              border="none"
              icon={<TbSquareRoundedPlus />}
              type="submit"
              _hover={{ bg: "#ee4c5f", opacity: "70%" }}
            />
          </Box>
        </form>
      </Box>
    </>
  );
}

export default CreateNewRoomBtn;
