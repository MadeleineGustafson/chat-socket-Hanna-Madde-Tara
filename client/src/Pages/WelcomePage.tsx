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
      <Box
        bg="#EE4C5F"
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Box
          mt="8rem"
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Text fontSize={46} fontWeight="bold" color="#e0e5cb">
            Välkommen,
          </Text>
          <Text fontSize={20} color="#e0e5cb">
            vänligen skriv ditt namn:
          </Text>
        </Box>
        <form onSubmit={handleSubmit}>
          <Box m="2rem">
            <Input
              placeholder="Name"
              _placeholder={{ color: "#e0e5cb" }}
              size="lg"
              w={"11.5rem"}
              type="text"
              value={name}
              name="username"
              onChange={(e) => setName(e.target.value)}
            />
          </Box>
          <Box display="flex" justifyContent="center">
            <Button
              variant="solid"
              borderRadius="25px"
              type="submit"
              bg={"#FF9587"}
              _hover={{ bg: "#ee4c5f", opacity: "70%" }}
            >
              <Text color="#e0e5cb">Börja chatta!</Text>
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
}
