import {
  Box,
  Button,
  FormControl,
  Heading,
  IconButton,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { IoReturnDownBackOutline, IoSend } from "react-icons/io5";
import { useSocket } from "../context/SocketContext";
import SpeechBubble from "./SpeechBubble";

function ChattBox() {
  const [messages, setMessage] = useState("");
  const [, setIsTyping] = useState(false);

  const { room, sendMessage, leaveRoom, setRooms, sendIsTyping, usersTyping } =
    useSocket();
  const timerRef = useRef<number>();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("chattbox");
    setMessage("");
    sendMessage(messages);

    // Ta bort timer och skicka till server.
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      sendIsTyping(false);
      timerRef.current = undefined;
    }
  };

  const handleLeaveRoom = () => {
    leaveRoom();
    setRooms((prevRooms) => prevRooms.filter((prevRoom) => prevRoom !== room));
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
    // Började användaren skriva? Svar: Vid första bokstaven nedtryckt
    // Slutade användaren skriva? Svar: När användaren trycker på enter eller när användaren inte har tyckt på något på 5 sekunder

    if (!timerRef.current) {
      sendIsTyping(true);
    }

    // Debounce
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      sendIsTyping(false);
      timerRef.current = undefined;
    }, 5000);
  };

  useEffect(() => {
    if (usersTyping.length > 0) {
      setIsTyping(true);
    } else {
      setIsTyping(false);
    }
  }, [usersTyping]);

  return (
    <>
      <Heading marginTop="2rem" as="h2" size="xl" color="#e0e5cb">
        {room}
      </Heading>
      <Box sx={chatBox}>
        <Box sx={back}>
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

        {usersTyping.length > 0 &&
          (usersTyping.length <= 3 ? (
            <Text>
              {usersTyping.join(" & ")} {usersTyping.length > 1 ? "are" : "is"}{" "}
              typing...
            </Text>
          ) : (
            <Text>Several people are typing...</Text>
          ))}

        <form onSubmit={handleSubmit}>
          <Stack spacing={4} sx={flex}>
            <Box sx={inputBox}>
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
                  onChange={handleInputChange}
                />
              </FormControl>
              <Button
                type="submit"
                onClick={handleSubmit}
                color={"#9D3440"}
                bg="#F9EFDD"
                _hover={{ bg: "#FF9587", opacity: "40%" }}
              >
                <IoSend size="xl" fontSize="xl" />
              </Button>
            </Box>
          </Stack>
        </form>
      </Box>
    </>
  );
}

export default ChattBox;

const back = {
  width: "30rem",
  display: "flex",
  justifyContent: "flex-start",
  "@media screen and (max-width: 600px)": {
    width: "19rem",
  },
};

const inputBox = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const input = {
  width: "25rem",
  height: "3rem",
  margin: "0.3rem",
  borderRadius: "2rem",
  display: "flex",

  "@media screen and (max-width: 600px)": {
    width: "13rem",
  },
};

const chatBody = {
  width: "95%",
  height: "28rem",

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
  Height: "28rem",
  borderRadius: "1.3rem",
  "@media screen and (max-width: 600px)": {
    width: "20rem",
    height: "29rem",
  },
};
