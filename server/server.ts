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
    console.log(name);
  });

  socket.on("message", (room, message) => {
    io.to(room).emit("message", socket.data.name!, message);
    console.log(room, socket.data.name, message);
  });

  socket.on("join", (room, ack) => {
    socket.join(room);
    io.emit('rooms', getRooms());
    console.log(room);
    ack();
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
