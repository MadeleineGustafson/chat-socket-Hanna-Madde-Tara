import { Box, Button, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { io, Socket } from "socket.io-client";

const socket: Socket = io();

export default function WelcomePage() {
  const [username, setUsername] = useState("");
  console.log(username);

  const handleStartChatting = () => {
    socket.emit("new-user", username);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <Box
        mt="8rem"
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Text fontSize={46} fontWeight="bold">
          Välkommen,
        </Text>
        <Text fontSize={20}>vänligen skriv ditt namn:</Text>
      </Box>
      <Box m={"2rem"}>
        <Input
          placeholder="large size"
          size="lg"
          w={"11.5rem"}
          type="text"
          id="username"
          name="username"
          onChange={handleInputChange}
        />
      </Box>
      <Box>
        <Link to="/startpage">
          <Button
            variant="solid"
            borderRadius="25px"
            id="submit"
            onClick={handleStartChatting}
          >
            Börja chatta!
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
