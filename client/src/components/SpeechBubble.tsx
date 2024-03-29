import { Box, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { useSocket } from "../context/SocketContext";

function SpeechBubble() {
  const { messages } = useSocket();
  const lastMessageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  
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
       <div ref={lastMessageRef}></div>
    </Box>
  );
}

const namebox = {
  paddingLeft: "2rem",
  color: "#9D3440",
  fontWeight: "bold",
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
  padding: "0.8rem",

  backgroundColor: "#FF9587",
  color: "#9D3440",
};

export default SpeechBubble;
