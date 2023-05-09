import { Box, Flex } from '@chakra-ui/react';
import CreateNewRoomBtn from './CreateNewRoomBtn';
import RoomsList from './RoomButton';

function Sidebar() {
    return (
      <Flex height="100vh">
        <Box bg="pink" width="20em" >
          <CreateNewRoomBtn/>                      
          <RoomsList/>           
        </Box>
      </Flex>
    );
}

export default Sidebar;
