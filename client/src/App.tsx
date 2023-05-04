import { ChakraProvider } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <ChakraProvider>
        <main>
          <Outlet />
        </main>
      </ChakraProvider>
    </>
  );
}

export default App;
