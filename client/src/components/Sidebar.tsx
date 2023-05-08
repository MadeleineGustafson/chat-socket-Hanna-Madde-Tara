import { Box, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import CreateNewRoomBtn from './CreateNewRoomBtn';
import RoomButton from './RoomButton';

function Sidebar() {

  const [rooms, setRooms] = useState<string[]>([]);

  const handleCreateRoom = (room: string) => {
    setRooms([...rooms, room]);
  }
  
    return (
        <>
          <Flex height="100vh">
            <Box bg="pink" width="20em" >
              <CreateNewRoomBtn onCreateRoom={handleCreateRoom} />                      
              <RoomButton rooms={rooms}/>           
            </Box>
          </Flex>
        </>
    );
}

export default Sidebar;
