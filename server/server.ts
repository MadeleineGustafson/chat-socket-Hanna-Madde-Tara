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

  socket.on("name", (name, ack) => {
    socket.data.name = name;
    ack();
    console.log(name);
  });

  socket.on("join", (room, ack) => {
    socket.data.room = room;
    ack();
    console.log(room);
  });

  socket.on('create', (roomName, ack) => {
    const newRoom = { name: roomName};
    rooms.push(newRoom);
    socket.join(newRoom.name);
    io.to(socket.id).emit('roomCreated', newRoom.name);
    ack();
    console.log(newRoom);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
    if (socket.data.room) {
      socket.leave(socket.data.room);
    }
  });
});

  

io.listen(3000);
console.log("listening on port 3000");
