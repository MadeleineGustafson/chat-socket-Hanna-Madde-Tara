import { Button, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

function JoinRoomForm() {
    const [room, setRoom] = useState('');

    const joinRoom = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    
    return (
        <form>
            <Text>Välj rum</Text>
            <Input
            name="Room"
            placeholder="Room"
            type="text"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            />
            <Button type="submit">Gå med!</Button>
        </form>
    );
}

export default JoinRoomForm;