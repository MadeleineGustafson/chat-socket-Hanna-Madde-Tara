import { Box, Button, Input, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function WelcomePage() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      background={" #ee4c5f"}
    >
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
        <Input placeholder="large size" size="lg" w={"11.5rem"} />
      </Box>
      <Box>
        <Link to={"/startpage"}>
          <Button variant="solid" borderRadius="25px">
            Börja chatta!
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
