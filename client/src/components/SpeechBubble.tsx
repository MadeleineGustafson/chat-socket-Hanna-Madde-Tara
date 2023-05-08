import { Box, Text } from "@chakra-ui/react";

interface SpeechBubbleProps {
  messages: string[];
  submitted: boolean;
}

function SpeechBubble({ messages, submitted }: SpeechBubbleProps) {
  return (
    <>
      {submitted && (
        <>
          {messages.map((message: string, index: number) => (
            <Box key={index} sx={bubble}>
              <Text sx={namebox}> Namn</Text>
              <Box sx={smallbubble}>
                <Text>{message}</Text>
              </Box>
            </Box>
          ))}
        </>
      )}
    </>
  );
}

const namebox = {
  paddingLeft: "2rem",
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

  backgroundColor: "white",
};

export default SpeechBubble;
