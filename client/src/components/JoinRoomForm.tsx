import { Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useSocket } from "../context/SocketContext";

function JoinRoomForm() {
    const [room, setRoom] = useState('');
    const { joinRoom } = useSocket();
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        joinRoom(room);
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <Text>Välj rum</Text>
            <Input
            name="Room"
            placeholder="Room"
            type="text"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            />
            
        </form>
    );
}

export default JoinRoomForm;