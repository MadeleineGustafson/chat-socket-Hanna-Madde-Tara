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
}

const SocketContext = createContext<ContextValues>(null as any);

export const useSocket = () => useContext(SocketContext);

function SocketProvider({ children }: PropsWithChildren) {
  const [socket] = useState<Socket<ServerToClientEvents, ClientToServerEvents>>(
    io()
  );

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected to server");
    });
    socket.on("disconnect", () => {
      console.log("disconnected from server");
    });

    socket.on("message", (message) => {
      console.log(message);
    });
  }, [socket]);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
}

export default SocketProvider;
