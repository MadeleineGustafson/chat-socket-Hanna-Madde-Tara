import { Box, ChakraProvider } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import "./index.css";

function App() {
  return (
    <>
      <ChakraProvider>
        <Box background={" #ee4c5f"}>
          <Header />
          <Outlet />
        </Box>
      </ChakraProvider>
    </>
  );
}

export default App;
