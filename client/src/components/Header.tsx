import { Box, Heading } from "@chakra-ui/react";
function Header() {
  return (
    <>
      <Box sx={header}>
        <Heading as="h2" size="xl">
          Babbly
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
  color: "#FFE897",
};

export default Header;
