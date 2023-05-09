import { Input } from "@chakra-ui/react";
import { useState } from "react";
import { useSocket } from "../context/SocketContext";

function JoinRoomForm() {
  const [room, setRoom] = useState("");
  const { joinRoom } = useSocket();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    joinRoom(room);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="Room"
        placeholder="Namn på nytt rum"
        type="text"
        value={room}
        onChange={(e) => setRoom(e.target.value)}
      />
    </form>
  );
}

export default JoinRoomForm;
