import { Box, Heading } from "@chakra-ui/react";
function Header() {
  return (
    <>
      <Box sx={header}>
        <Heading as="h2" size="xl">
          ChatterMelon
        </Heading>
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
