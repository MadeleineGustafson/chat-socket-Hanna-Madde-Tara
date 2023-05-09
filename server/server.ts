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

const rooms: { name: string }[] = [];


io.on("connection", (socket) => {
  console.log("a user connected");  
  // Emit all rooms

  socket.on("name", (name) => {
    socket.data.name = name;
    console.log(name);
  });

  socket.on("message", (room, message) => {
    io.to(room).emit("message", socket.data.name!, message);
    console.log(room, socket.data.name, message);
  });

  socket.on("join", (room, ack) => {
    socket.join(room);
    // EMIT ALL ROOMS
    console.log(room);
    ack();
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
    // EMIT ALL ROOMS
  });
});

  

io.listen(3000);
console.log("listening on port 3000");
