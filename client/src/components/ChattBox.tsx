import {
  Box,
  Button,
  FormControl,
  Heading,
  IconButton,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import { IoReturnDownBackOutline, IoSend } from "react-icons/io5";
import { useSocket } from "../context/SocketContext";
import SpeechBubble from "./SpeechBubble";

function ChattBox() {
  const [messages, setMessage] = useState("");
  const { room, sendMessage, leaveRoom, setRooms } = useSocket();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("chattbox");
    setMessage("");
    sendMessage(messages);
  };

  const handleLeaveRoom = () => {
    leaveRoom();
    setRooms((prevRooms) => prevRooms.filter((prevRoom) => prevRoom !== room));
  };

  return (
    <>
      <Heading marginTop="2rem" as="h2" size="xl" color="#e0e5cb">
        {room}
      </Heading>
      <Box sx={chatBox}>
        <Box width="30rem" display="flex" justifyContent="flex-start">
          <IconButton
            variant="outline"
            color="#9D3440"
            aria-label="plus"
            fontSize="40px"
            boxSize="12"
            border="none"
            icon={<IoReturnDownBackOutline />}
            onClick={handleLeaveRoom}
            _hover={{ color: "#EE4C5F", opacity: "70%" }}
          />
        </Box>

        <Box sx={chatBody}>
          <SpeechBubble />
        </Box>
        {/* {isTyping && <Text>Någon skriver ett meddelande...</Text>} */}
        <form onSubmit={handleSubmit}>
          <Stack spacing={4} sx={flex}>
            <FormControl id="input">
              <Input
                sx={input}
                name="message"
                placeholder="Write a message..."
                _placeholder={{ color: "#9D3440" }}
                type="text"
                value={messages}
                bg="#FF9587"
                opacity="40%"
                onChange={(e) => setMessage(e.target.value)}
              />
            </FormControl>
            <Button
              boxSize={10}
              type="submit"
              onClick={handleSubmit}
              color={"#9D3440"}
              bg="#F9EFDD"
              _hover={{ bg: "#FF9587", opacity: "40%" }}
            >
              <IoSend />
            </Button>
          </Stack>
        </form>
      </Box>
    </>
  );
}

export default ChattBox;

const input = {
  width: "25rem",
  height: "3rem",
  margin: "0.3rem",
};

const chatBody = {
  width: "95%",
  height: "30rem",
  border: "1px solid black",
  overflowY: "auto",
};

const flex = {
  display: "flex",
  flexDirection: "row",
  gap: "0.5rem",
};
const chatBox = {
  backgroundColor: "#F9EFDD",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "33rem",
  Height: "30rem",
  borderRadius: "1.3rem",
};
