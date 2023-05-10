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
    <Box>
      <IconButton
        icon={<RxHamburgerMenu />}
        onClick={onOpen}
        aria-label="Open menu"
        variant="ghost"
        size="lg"
        color={"#e0e5cb"}
        bg="#ee4c5f"
        _hover={{ bg: "#ee4c5f", opacity: "70%" }}
      />
      <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="#ee4c5f">
          <DrawerCloseButton color={"#e0e5cb"} />
          <DrawerHeader
            display={"flex"}
            justifyContent="center"
            color={"#FFE897"}
            bg="#ee4c5f"
          >
            Babbly
          </DrawerHeader>
          <DrawerBody>
            <Box
              h="100vh"
              bg="#ee4c5f"
              p={4}
              display="flex"
              justifyContent={"center"}
            >
              <Sidebar />
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default TopDrawer;
