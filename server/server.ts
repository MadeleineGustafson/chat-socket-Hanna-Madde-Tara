import { Server } from "socket.io";
import type {
  ClientToServerEvents,
  InterServerEvents,
  ServerToClientEvents,
  SocketData,
} from "./communications";

const io = new Server<
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData
>();

io.on("connection", (socket) => {
  console.log("a user connected");
  // Emit all rooms
  io.emit('rooms', getRooms());

  socket.on("name", (name) => {
    socket.data.name = name;
    console.log(`User ${name} logged in`);
  });

  socket.on("message", (room, message) => {
    io.to(room).emit("message", socket.data.name!, message);
    // const name = socket.data.name;
    console.log(
      `User ${socket.data.name} wrote message: ${message} in room: ${room}`
    );
  });

  socket.on("join", (room, ack) => {
    socket.join(room);
    io.emit('rooms', getRooms());
    console.log(room);
    // EMIT ALL ROOMS
    const name = socket.data.name;
    console.log(`User ${name} joined room ${room}`);
    ack();
  });

  socket.on("leave", (room) => {
    socket.leave(room);
    io.to(room).emit("rooms", getRooms());
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
    io.emit('rooms', getRooms());
  });
});

function getRooms() {
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
