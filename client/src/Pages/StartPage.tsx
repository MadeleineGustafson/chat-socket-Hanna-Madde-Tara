import { Box, Heading, useMediaQuery } from "@chakra-ui/react";
import { useSocket } from "../../src/context/SocketContext";
import ChattBox from "../components/ChattBox";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function StartPage() {
  const [isLargerThanOrEqual820] = useMediaQuery("(min-width: 820px)");
  const [isSmallerThan819] = useMediaQuery("(max-width: 819px)");
  const { name, room } = useSocket();
  return (
    <>
      <Header showMenu={true} />
      <Box sx={flex} bg="#EE4C5F">
        {isLargerThanOrEqual820 && <Sidebar />}
        <Box sx={content}>
          {isSmallerThan819 && <Box mt={"10rem"}></Box>}
          {room ? (
            <ChattBox />
          ) : (
            <>
              <Heading color="#F9EFDD" as="h1" size="2xl">
                Hej {name}!
              </Heading>

              <Heading color="#F9EFDD" as="h3" size="l">
                Välj ett rum i menyn och börja chatta!
              </Heading>
            </>
          )}
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
