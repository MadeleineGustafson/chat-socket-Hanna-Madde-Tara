import { Box, Drawer, DrawerCloseButton, DrawerContent, DrawerOverlay, IconButton, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { SlMenu } from 'react-icons/sl';

function Sidebar() {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const breakPoints = ({ base: "30em", md: "48em" });

    return (
        <>
            <IconButton
              aria-label="Open Sidebar"
              icon={<SlMenu />}
              position="fixed"
              size='lg'
              left={0}
              top={0}
              m={8}
              mb={10}
              onClick={toggle}
              zIndex={1}
              display={{ base: "block", md: "none" }}
            />

            <Drawer placement="left" size={breakPoints} isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <DrawerOverlay />
                <DrawerContent bg="pink">
                    <DrawerCloseButton />
                    <Box p={4}>
                      <Text as='h4'>Hej Sidbar</Text>
                    </Box>
                </DrawerContent>
            </Drawer>
           
        </>
    );
}

export default Sidebar;