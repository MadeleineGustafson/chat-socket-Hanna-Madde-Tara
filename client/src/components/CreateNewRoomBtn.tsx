import { Box, IconButton, Input, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { TbSquareRoundedPlus } from "react-icons/tb";
function CreateNewRoomBtn() {

    const [room, setRoom] = useState('');

    return (
        <>
            <Box bg="pink">
                <Text as='h1' mb="4">Skapa ett nytt rum</Text>
                <form>
                    <Box display="flex" flexDirection="row" gap="2" flex="1">
                        <Input
                        name="Room"
                        placeholder="Room"
                        type="text"
                        size="md"
                        w="10em"
                        value={room}
                        onChange={(e) => setRoom(e.target.value)}
                        />            
                        <IconButton
                        type='submit'
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
                    </Box>
                </form>
            </Box>
        </>
    );
}

export default CreateNewRoomBtn;