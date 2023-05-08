import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from "./Sidebar";

const TopDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        icon={<RxHamburgerMenu />}
        onClick={onOpen}
        aria-label="Open menu"
        variant="ghost"
        size="lg"
      />
      <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader display={"flex"} justifyContent="center">
            Babbly
          </DrawerHeader>
          <DrawerBody>
            <Box
              h="100vh"
              bg="gray.100"
              p={4}
              display="flex"
              justifyContent={"center"}
            >
              <Sidebar />
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default TopDrawer;
