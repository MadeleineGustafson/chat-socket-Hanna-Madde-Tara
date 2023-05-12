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
import { useSessionStorageState } from "../hooks/useSessionStorgeState";

interface ContextValues {
  socket: Socket;
  name: string;
  room?: string;
  messages: Message[];
  rooms: string[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  sendMessage: (message: string) => void;
  joinRoom: (room: string) => void;
  leaveRoom: () => void;
  setUsername: (name: string) => void;
  setRooms: React.Dispatch<React.SetStateAction<string[]>>;
  sendIsTyping: (isTyping: boolean) => void;
  usersTyping: string[];
}

const SocketContext = createContext<ContextValues>(null as any);

export const useSocket = () => useContext(SocketContext);

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io();

function SocketProvider({ children }: PropsWithChildren) {
  const [name, setName] = useSessionStorageState("", "name");
  const [room, setRoom] = useState<string>();

  const [rooms, setRooms] = useState<string[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [usersTyping, setUsersTyping] = useState<string[]>([]);

  const setUsername = (name: string) => {
    setName(name);
  };

  const joinRoom = (room: string) => {
    socket.emit("join", room, () => {
      setRoom(room);
      setMessages([]);
    });
  };

  const leaveRoom = () => {
    if (room !== undefined) {
      socket.emit("leave", room);
    }
    setRoom(undefined);
    setMessages([]);
  };

  const sendMessage = (message: string) => {
    if (room) {
      socket.emit("message", room, message);
    }
  };

  const sendIsTyping = (isTyping: boolean) => {
    socket.emit("typing", isTyping);
  };

  useEffect(() => {
    if (name) {
      socket.emit("name", name);
    }
  }, [name]);

  useEffect(() => {
    function updateRooms(rooms: string[]) {
      setRooms(rooms);
    }

    function connect() {
      console.log("connected to server");
    }

    function disconnect() {
      console.log("disconnected from server");
    }

    function message(name: string, message: string) {
      setMessages((messages) => [...messages, { name, message }]);
    }

    function handleUserTyping(isTyping: boolean, name: string) {
      if (isTyping) {
        setUsersTyping((prevUsersTyping) => {
          const newUsersTyping = [...prevUsersTyping];
          if (!newUsersTyping.includes(name)) {
            newUsersTyping.push(name);
          }
          return newUsersTyping;
        });
      } else {
        setUsersTyping((prevUsersTyping) =>
          prevUsersTyping.filter((user) => user !== name)
        );
      }
    }

    socket.on("connect", connect);
    socket.on("disconnect", disconnect);
    socket.on("message", message);
    socket.on("rooms", updateRooms);
    socket.on("typing", handleUserTyping);

    return () => {
      socket.off("connect", connect);
      socket.off("disconnect", disconnect);
      socket.off("message", message);
      socket.off("rooms", updateRooms);
      socket.off("typing", handleUserTyping);
    };
  }, []);

  return (
    <SocketContext.Provider
      value={{
        socket,
        name,
        joinRoom,
        leaveRoom,
        room,
        rooms,
        messages,
        setMessages,
        setRooms,
        setUsername,
        sendMessage,
        sendIsTyping,
        usersTyping,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
}

export default SocketProvider;
