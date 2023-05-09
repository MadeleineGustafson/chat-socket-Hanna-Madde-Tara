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
  Message,
  ServerToClientEvents,
} from "../../../server/communications";

interface ContextValues {
  socket: Socket;
  name: string;
  room?: string;
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  sendMessage: (message: string) => void;
  joinRoom: (room: string) => void;
  setUsername: (name: string) => void;
  createRoom: (room: string) => void;
  createdRoom: boolean;
}

const SocketContext = createContext<ContextValues>(null as any);

export const useSocket = () => useContext(SocketContext);

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io();

function SocketProvider({ children }: PropsWithChildren) {
  const [name, setName] = useState("");
  const [room, setRoom] = useState<string>();
  const [createdRoom, setCreatedRoom] = useState(false);
  const [rooms, setRooms] = useState<string[]>([]);     
  
  const [messages, setMessages] = useState<Message[]>([]);

  const setUsername = (name: string) => {
    socket.emit("name", name, () => {
      setName(name);
    });
  };

  const joinRoom = (room: string) => {
    socket.emit("join", room, () => {
      setRoom(room);
    });
  };

  const sendMessage = (message: string) => {
    if (room) {
      socket.emit("message", room, message);
      setMessages([...messages, { name, message }]);
    }
  };

  const createRoom = (room: string) => {
    const newRooms = [...rooms, room];
    setRooms(newRooms);
    socket.emit('create', room, () => {
      setRoom(room);
      setCreatedRoom(true);
      console.log(`Created room ${room}`);
    });
  }

  useEffect(() => {
    function connect() {
      console.log("connected to server");
    }

    function disconnect() {
      console.log("disconnected from server");
    }

    function message(name: string, message: string) {
      setMessages((messages) => [...messages, { name, message }]);
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
    <SocketContext.Provider value={{ socket, setUsername, name, joinRoom, room, createRoom, createdRoom }}>
    <SocketContext.Provider
      value={{
        socket,
        setUsername,
        name,
        joinRoom,
        room,
        sendMessage,
        messages,
        setMessages,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
}

export default SocketProvider;
