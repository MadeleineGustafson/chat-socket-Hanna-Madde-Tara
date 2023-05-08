import { Box, Heading, useMediaQuery } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
function Header() {
  const [isSmallerThan819] = useMediaQuery("(max-width: 819px)");
  return (
    <>
      <Box sx={header}>
        <Link to={"/"}>
          <Heading as="h2" size="xl">
            Babbly
          </Heading>
        </Link>
        {isSmallerThan819 && (
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
