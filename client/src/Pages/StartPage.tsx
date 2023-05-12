import { Box, Heading, useMediaQuery } from "@chakra-ui/react";
import { useSocket } from "../../src/context/SocketContext";
import ChattBox from "../components/ChattBox";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function StartPage() {
  const [isLargerThanOrEqual850] = useMediaQuery("(min-width: 850px)");
  const [isSmallerThan849] = useMediaQuery("(max-width: 849px)");
  const { name, room } = useSocket();
  return (
    <>
      <>
        <Header showMenu={true} />
        <Box sx={flex} bg="#EE4C5F">
          {isLargerThanOrEqual850 && <Sidebar />}
          {isLargerThanOrEqual850 && (
            <Box sx={content}>
              {room ? (
                <ChattBox />
              ) : (
                <>
                  <Heading
                    fontFamily="Rubik"
                    color="#F9EFDD"
                    as="h1"
                    size="2xl"
                  >
                    Hej {name}!
                  </Heading>

                  <Heading fontFamily="Rubik" color="#F9EFDD" as="h3" size="l">
                    Välj ett rum i menyn och börja chatta!
                  </Heading>
                </>
              )}
            </Box>
          )}
          {isSmallerThan849 && (
            <Box sx={content}>
              {room ? (
                <ChattBox />
              ) : (
                <>
                  <Heading
                    fontFamily="Rubik"
                    color="#F9EFDD"
                    as="h1"
                    size="2xl"
                    mt={"10rem"}
                  >
                    Hej {name}!
                  </Heading>

                  <Heading fontFamily="Rubik" color="#F9EFDD" as="h3" size="l">
                    Välj ett rum i menyn och börja chatta!
                  </Heading>
                </>
              )}
            </Box>
          )}
        </Box>
      </>
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
