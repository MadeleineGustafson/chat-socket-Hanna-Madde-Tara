import { Box, Heading, useMediaQuery } from "@chakra-ui/react";
import { useSocket } from "../../src/context/SocketContext";
import Sidebar from "../components/Sidebar";

export default function StartPage() {
  const { name } = useSocket();
  const [isLargerThanOrEqual820] = useMediaQuery("(min-width: 820px)");
  return (
    <>
      <Box sx={flex}>
        {isLargerThanOrEqual820 && <Sidebar />}
        <Box sx={content}>
          <Heading as="h1" size="2xl" mt={"6rem"}>
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
