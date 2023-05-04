import { Server } from "socket.io";

const io = new Server();

io.on("connection", (socket) => {
  console.log("a user connected");

  // socket.on("disconnect", () => {
  //   console.log("user disconnected");
  // });
});

io.listen(3000);
console.log("listening on port 3000");
