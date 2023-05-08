import { Box, IconButton, Input, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { TbSquareRoundedPlus } from "react-icons/tb";
import { useSocket } from '../context/SocketContext';
function CreateNewRoomBtn() {
    const { createRoom } = useSocket();
    const [room, setRoom] = useState('');
    const { joinRoom } = useSocket();
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        joinRoom(room);
    }

    return (
        <>  
          <Box display="flex" flexDirection="row" gap="2" flex="1">                
                <form onSubmit={handleSubmit}>
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
                                icon={<TbSquareRoundedPlus />}>
                                </IconButton>
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