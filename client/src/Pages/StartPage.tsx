import { Box } from "@chakra-ui/react";
import ChattBox from "../components/ChattBox";
import Sidebar from "../components/Sidebar";

export default function StartPage() {
  return (
    <>
      <Box sx={flex}>
        <Sidebar />
        <ChattBox />
      </Box>
    </>
  );
}

const flex = {
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
};
