/* eslint-disable @typescript-eslint/no-empty-function */
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
  name: string;
  room?: string;
  joinRoom: (room: string) => void;
  setUsername: (name: string) => void;
}

const SocketContext = createContext<ContextValues>(null as any);

export const useSocket = () => useContext(SocketContext);

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io();

function SocketProvider({ children }: PropsWithChildren) {
  const [name, setName] = useState("");
  const [room, setRoom] = useState<string>();
  const [createdRoom, setCreatedRoom] = useState(false);

  const setUsername = (name: string) => {
    socket.emit("name", name, () => {
      setName(name);
    }); 
  };

  const joinRoom = (room: string) => {
    socket.emit('join', room, () => {
      setRoom(room);
    });
  }

  const createRoom = (room: string) => {
    socket.emit('create', room, () => {
      setRoom(room);
      setCreatedRoom(true);
    });
  }

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
  }, []);

  return (
    <SocketContext.Provider value={{ socket, setUsername, name, joinRoom, room }}>
      {children}
    </SocketContext.Provider>
  );
}

export default SocketProvider;
