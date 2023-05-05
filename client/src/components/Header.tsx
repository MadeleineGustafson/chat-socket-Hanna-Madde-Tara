import { Box, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <Box sx={header}>
        <Link to={"/"}>
          <Heading as="h2" size="xl">
            ChatterMelon
          </Heading>
        </Link>
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
