import {
  Box,
  FormControl,
  Heading,
  Icon,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import { IoReturnDownBackOutline, IoSend } from "react-icons/io5";
import { useSocket } from "../context/SocketContext";
import SpeechBubble from "./SpeechBubble";

function ChattBox() {
  const [messages, setMessage] = useState("");
  const { room, sendMessage } = useSocket();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    setMessage("");
    sendMessage(messages);
  };

  return (
    <>
      <Heading>{room}</Heading>
      <Box sx={chatBox}>
        <Icon as={IoReturnDownBackOutline} boxSize={6} />

        <Box sx={chatBody}>
          <SpeechBubble />
        </Box>

        <form onSubmit={handleSubmit}>
          <Stack spacing={4} sx={flex}>
            <FormControl id="input">
              <Input
                sx={input}
                name="message"
                placeholder="Write a message..."
                type="text"
                value={messages}
                onChange={(e) => setMessage(e.target.value)}
              />
            </FormControl>
            <Icon
              as={IoSend}
              boxSize={6}
              type="submit"
              onClick={handleSubmit}
            />
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
  height: "33rem",
  border: "1px solid black",
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
