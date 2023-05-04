import { Box, FormControl, Icon, Input, Stack } from "@chakra-ui/react";
import { SetStateAction, useEffect, useState } from "react";
import { IoReturnDownBackOutline, IoSend } from "react-icons/io5";
import { useSocket } from "../../src/context/SocketContext";
import SpeechBubble from "./SpeechBubble";

function ChattBox() {
  const [messages, setMessages] = useState<string[]>([]);

  const { socket } = useSocket();

  const [inputValue, setInputValue] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });
  }, [socket]);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setMessages([...messages, inputValue]); // Add input value to messages
      socket.emit("message", inputValue);
      setInputValue("");
      setSubmitted(true);
    }
  };

  const handleInputChange = (e: {
    target: { value: SetStateAction<string> };
  }) => setInputValue(e.target.value);

  return (
    <>
      <Box sx={chatBox}>
        <Icon as={IoReturnDownBackOutline} boxSize={6} />

        <Box sx={chatBody}>
          <SpeechBubble messages={messages} submitted={submitted} />
        </Box>

        <form onSubmit={handleSubmit}>
          <Stack spacing={4} sx={flex}>
            <FormControl id="input">
              <Input
                sx={input}
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Skriv ett meddelande..."
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
  height: "36rem",
  border: "1px solid black",
};

const flex = {
  display: "flex",
  flexDirection: "row",
  gap: "0.5rem",
};
const chatBox = {
  backgroundColor: "beige",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "40%",
  minHeight: "42rem",
  borderRadius: "1.3rem",
};
