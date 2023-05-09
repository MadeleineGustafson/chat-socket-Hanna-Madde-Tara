import { Box, IconButton, Text } from "@chakra-ui/react";
import { TbSquareRoundedPlus } from "react-icons/tb";
function CreateNewRoomBtn() {
  return (
    <>
      <Box display="flex" flexDirection="row" gap="2" flex="1">
        <Text as="h1">Skapa ett nytt rum</Text>
        <IconButton
          variant="outline"
          color="#FFEDAD"
          aria-label="plus"
          fontSize="40px"
          border="none"
          icon={<TbSquareRoundedPlus />}
        ></IconButton>
        {/*<Button
                            size="md"
                            border="1px" 
                            borderColor="yellow"
                            borderRadius="10"> + </Button>
                        */}
      </Box>
    </>
  );
}

export default CreateNewRoomBtn;
