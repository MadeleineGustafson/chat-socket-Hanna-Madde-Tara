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
  socket.data.room = null;
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
  socket.on("typing", (isTyping: boolean) => {
    socket.broadcast
      .to(socket.data.room)
      .emit("typing", isTyping, socket.data.name);
    console.log(`User ${socket.data.name} is typing a message`);
  });

  // JOIN A ROOM
  socket.on("join", (newRoom: string, ack: () => void) => {
    // Current room
    const currentRoom = socket.data.room;
    // If the user is in a room then leave it
    if (currentRoom) {
      socket.leave(currentRoom);
    }
    // Join the new room
    socket.join(newRoom);
    // Update the users current room
    socket.data.room = newRoom;
    // Emit updated list of rooms to all clients
    io.emit("rooms", getRooms());
    console.log(`User ${socket.data.name} joined room ${newRoom}`);

    ack();
  });

  // LEAVE A ROOM
  socket.on("leave", (room: string) => {
    socket.leave(room);
    // Update the user's current room to null
    socket.data.room = null;
    io.emit("rooms", getRooms());
  });

  // DISCONNECT
  socket.on("disconnect", () => {
    console.log("user disconnected");
    // If the user is in a room, leave it before disconnecting
    const currentRoom = socket.data.room;
    if (currentRoom) {
      socket.leave(currentRoom);
    }
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
