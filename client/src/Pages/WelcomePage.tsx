import { Box, Button, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function WelcomePage() {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name);
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
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Name"
          size="lg"
          w={"11.5rem"}
          type="text"
          value={name}
          name="username"
          onChange={(e) => setName(e.target.value)}
        />
        <Box>
          <Link to="/startpage">
            <Button variant="solid" borderRadius="25px" type="submit">
              Börja chatta!
            </Button>
          </Link>
        </Box>
      </form>
    </Box>
  );
}
