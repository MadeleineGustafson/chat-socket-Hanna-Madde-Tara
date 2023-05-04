import { ChakraProvider } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <ChakraProvider>
        <Outlet />
      </ChakraProvider>
    </>
  );
}

export default App;
