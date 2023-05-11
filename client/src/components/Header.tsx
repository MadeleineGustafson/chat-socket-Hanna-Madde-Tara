import { Box, Heading, useMediaQuery } from "@chakra-ui/react";
import { RiChatSmile2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

interface HeaderProps {
  showMenu: boolean;
}

function Header({ showMenu }: HeaderProps) {
  const [isSmallerThan819] = useMediaQuery("(max-width: 819px)");
  return (
    <>
      <Box sx={header} bg="#EE4C5F">
        <Link to={"/"}>
          <Heading
            color="#FFE897"
            as="h2"
            size="2xl"
            display="flex"
            alignItems="center"
            fontFamily="Rubik"
          >
            Babbly <RiChatSmile2Line />
          </Heading>
        </Link>
        {isSmallerThan819 && showMenu && (
          <Box position="absolute" top="0" right="0">
            <HamburgerMenu></HamburgerMenu>
          </Box>
        )}
      </Box>
    </>
  );
}

const header = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  padding: "1rem",
};

export default Header;
