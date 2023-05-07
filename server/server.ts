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
});

io.listen(3000);
console.log("listening on port 3000");
