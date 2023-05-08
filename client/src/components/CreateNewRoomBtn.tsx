import { Box, IconButton, Input, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { TbSquareRoundedPlus } from "react-icons/tb";
import { useSocket } from '../context/SocketContext';

function CreateNewRoomBtn({ onCreateRoom }: { onCreateRoom: (room: string) => void }) {
    const { createRoom } = useSocket();
    const [room, setRoom] = useState('');

    const handleCreateRoom = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createRoom(room);
        onCreateRoom(room);
        setRoom('');
    }

    return (
        <>  
          <Box display="flex" flexDirection="row" gap="2" flex="1">                
                <form onSubmit={handleCreateRoom}>
                    <Text as='h1' fontWeight="500" fontSize="18">Skapa ett nytt rum:</Text>
                        <Input
                        name="Room"
                        placeholder="Room"
                        type="text"
                        size="md"
                        width="11rem"
                        value={room}
                        onChange={(e) => setRoom(e.target.value)}
                        />
                        <IconButton
                                variant='outline'
                                colorScheme='yellow'
                                aria-label='plus'
                                fontSize='40px'
                                border="none"
                                icon={<TbSquareRoundedPlus />}
                                type='submit'
                                onClick={() => createRoom(room)}
                                />
                                    {/*<Button
                                        size="md"
                                        border="1px" 
                                        borderColor="yellow"
                                        borderRadius="10"> + </Button>
                                    */}                
                </form>     
            </Box>
        </>
    );
}

export default CreateNewRoomBtn;