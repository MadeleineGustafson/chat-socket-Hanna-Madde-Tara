import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { io, Socket } from "socket.io-client";
import {
  ClientToServerEvents,
  ServerToClientEvents,
} from "../../../server/communications";

interface ContextValues {
  socket: Socket;
  // joinRoom: (room: string, name: string) => void;
}

const SocketContext = createContext<ContextValues>(null as any);

export const useSocket = () => useContext(SocketContext);

function SocketProvider({ children }: PropsWithChildren) {
  const [socket] = useState<Socket<ServerToClientEvents, ClientToServerEvents>>(
    io()
  );

  useEffect(() => {
    function connect() {
      console.log("connected to server");
    }

    function disconnect() {
      console.log("disconnected from server");
    }

    function message(message: string) {
      console.log(message);
    }

    socket.on("connect", connect);

    socket.on("disconnect", disconnect);

    socket.on("message", message);

    // Städar upp
    return () => {
      socket.off("connect", connect);
      socket.off("disconnect", disconnect);
      socket.off("message", message);
    };
  }, [socket]);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
}

export default SocketProvider;
