import { Box, Text } from "@chakra-ui/react";
function SpeechBubble() {
  return (
    <>
      <Text sx={nameText}>Namn</Text>
      <Box sx={bubble}>
        <Text>
          Lorem ipsum dolor set amet, lorem ipsum dolor set amet Lorem ipsum
          dolor set amet, lorem ipsum dolor set amet Lorem ipsum dolor set amet,
          lorem ipsum dolor set amet
        </Text>
      </Box>
    </>
  );
}

const nameText = {
  marginLeft: "3rem",
};
const bubble = {
  width: "15rem",
  backgroundColor: "white",
  borderRadius: "2rem",
  height: "fit-content",
  padding: "1rem",
  marginLeft: "1rem",
};
export default SpeechBubble;
