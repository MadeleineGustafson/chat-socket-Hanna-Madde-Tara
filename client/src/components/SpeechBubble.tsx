import { Box, Text } from "@chakra-ui/react";
import { useSocket } from "../context/SocketContext";

function SpeechBubble() {
  const { messages } = useSocket();
  return (
    <Box sx={bubble}>
      {messages.map((message, index) => (
        <Box key={index}>
          <Text sx={namebox}>{message.name}:</Text>
          <Box sx={smallbubble}>
            <Text>{message.message}</Text>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

const namebox = {
  paddingLeft: "2rem",
  color: "#9D3440",
};

const bubble = {
  width: "15rem",
  borderRadius: "2rem",
  margin: "1rem",
};
const smallbubble = {
  width: "15rem",
  borderRadius: "1.5rem",
  height: "fit-content",
  padding: "1rem",
  backgroundColor: "#FF9587",
  color: "#9D3440",
};

export default SpeechBubble;
