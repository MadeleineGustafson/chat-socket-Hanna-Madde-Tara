import { Box, FormControl, Icon, Input, Stack } from "@chakra-ui/react";
import { IoReturnDownBackOutline, IoSend } from "react-icons/io5";
import SpeechBubble from "./SpeechBubble";

function ChattBox() {
  return (
    <>
      <Box sx={chatBox}>
        <Icon as={IoReturnDownBackOutline} boxSize={6} />

        <Box sx={chatBody}>
          <SpeechBubble />
        </Box>
        <form>
          <Stack spacing={4} sx={flex}>
            <FormControl id="input">
              {/* <FormLabel>Enter your input</FormLabel> */}
              <Input
                sx={input}
                type="text"
                // value={inputValue}
                // onChange={handleInputChange}
                placeholder="Skriv ett meddelande..."
              />
            </FormControl>
            <Icon as={IoSend} boxSize={6} type="submit" />
            {/* <Button type="submit"></Button> */}
          </Stack>
        </form>
      </Box>
    </>
  );
}

const input = {
  width: "25rem",
  height: "3rem",
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
  backgroundColor: "lightblue",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "40%",
  height: "40rem",
};

export default ChattBox;
