import { Box, Flex, Stack, Text } from '@chakra-ui/react';
function RoomButton() {
    return (
        <>
            <Flex justifyContent="center" bg="pink.400" width="200px">
                <Box>
                    <Text as="h1" mb="4" fontSize="25" fontWeight="700">Aktiva rum</Text>
                        <Stack mb="4">
                        <Box as='button'
                        height='34px'
                        width="150px"
                        border='none'
                        px='8px'
                        borderRadius='8px'
                        fontSize='14px'
                        fontWeight='semibold'
                        bg="pink.100"
                        >Rum 1</Box>

                        <Box as='button'
                        height='34px'
                        width="150px"
                        border='none'
                        px='8px'
                        borderRadius='8px'
                        fontSize='14px'
                        fontWeight='semibold'
                        bg="pink.100"
                        >Rum 2</Box>

                        <Box as='button'
                        height='34px'
                        width="150px"
                        border='none'
                        px='8px'
                        borderRadius='8px'
                        fontSize='14px'
                        fontWeight='semibold'
                        bg="pink.100"
                        >Rum 3</Box>

                        <Box as='button'
                        height='34px'
                        width="150px"
                        border='none'
                        px='8px'
                        borderRadius='8px'
                        fontSize='14px'
                        fontWeight='semibold'
                        bg="pink.100"
                        >Rum 4</Box>
                       </Stack>
                </Box>
            </Flex>
        </>
    );
}

export default RoomButton;