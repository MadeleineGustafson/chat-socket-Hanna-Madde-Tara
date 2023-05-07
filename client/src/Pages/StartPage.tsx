import { Box, Heading } from "@chakra-ui/react";
import { useSocket } from "../../src/context/SocketContext";
import Sidebar from "../components/Sidebar";

export default function StartPage() {
  const { name } = useSocket();
  return (
    <>
      <Box sx={flex}>
        <Sidebar />
        <Box sx={content}>
          <Heading as="h1" size="2xl">
            Hej {name}!
          </Heading>
          <Heading as="h3" size="l">
            Välj ett rum i menyn och börja chatta!
          </Heading>
        </Box>
      </Box>
    </>
  );
}
const content = {
  width: "65%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "1rem",
};

const flex = {
  display: "flex",
  justifyContent: "space-around",
  width: "100%",
};
