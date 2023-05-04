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

  // socket.on("disconnect", () => {
  //   console.log("user disconnected");
  // });
});

io.listen(3000);
console.log("listening on port 3000");
