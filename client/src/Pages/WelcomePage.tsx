import { Box, Button, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useSocket } from "../context/SocketContext";

export default function WelcomePage() {
  const [name, setName] = useState("");
  const { setUsername } = useSocket();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUsername(name);
    navigate("/startpage");
  };

  return (
    <>
      <Header showMenu={false} />
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
        <form onSubmit={handleSubmit}>
          <Box m="2rem">
            <Input
              placeholder="Name"
              size="lg"
              w={"11.5rem"}
              type="text"
              value={name}
              name="username"
              onChange={(e) => setName(e.target.value)}
            />
          </Box>
          <Box display="flex" justifyContent="center">
            <Button variant="solid" borderRadius="25px" type="submit">
              Börja chatta!
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
}
