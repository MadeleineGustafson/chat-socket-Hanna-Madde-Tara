import { Server } from "socket.io";
import type {
  ClientToServerEvents,
  InterServerEvents,
  ServerToClientEvents,
} from "./communications";

const io = new Server<
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents
>();

// CONNECT
io.on("connection", (socket) => {
  console.log("a user connected");

  // Emit all rooms
  io.emit("rooms", getRooms());

  // NAME
  socket.on("name", (name: string) => {
    socket.data.name = name;
    console.log(`User ${name} logged in`);
  });

  // MESSAGE
  socket.on("message", (room: string, message: string) => {
    if (!socket.data.name) {
      console.error("Missing user name");
      return;
    }
    io.to(room).emit("message", socket.data.name, message);
    console.log(
      `User ${socket.data.name} wrote message: ${message} in room: ${room}`
    );
  });

  // IS STYPING
  socket.on("typing", (isTyping: boolean, room: string) => {
    socket.broadcast.to(room).emit("typing", isTyping, socket.data.name);
    console.log(`User ${socket.data.name} is typing a message`);
  });

  // JOIN ROOM
  socket.on("join", (room: string, ack?: () => void) => {
    socket.join(room);
    io.emit("rooms", getRooms());
    console.log(`User ${socket.data.name} joined room ${room}`);
    if (ack) {
      ack();
    }
  });

  socket.on("leave", (room) => {
    socket.leave(room);
    io.to(room).emit("rooms", getRooms());
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
    io.emit("rooms", getRooms());
  });
});

// GET ALL ROOMS
function getRooms(): string[] {
  const { rooms } = io.sockets.adapter;
  const roomsFound: string[] = [];
  console.log(rooms);
  for (const [name, setOfSocketIds] of rooms) {
    if (!setOfSocketIds.has(name)) {
      roomsFound.push(name);
    }
  }
  return roomsFound;
}

io.listen(3000);
console.log("listening on port 3000");
