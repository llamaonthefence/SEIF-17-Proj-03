import { Box, Flex, Spacer, Button, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function NavBar() {
  function BoxButton({ children }) {
    return (
      <Box
        className="Header"
        height="120px"
        width="120px"
        alignContent="center"
        color="black"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {children}
      </Box>
    );
  }

  return (
    <>
      {/* NavBar Component */}
      <Flex bgColor="white" borderBottom="1px" borderColor="lightgrey">
        {/* Header Component */}
        <Link to="/">
          <Box
            className="Header"
            height="120px"
            width="300px"
            alignContent="center"
            bgColor="grey"
            color="black"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <h1 className="text-3xl font-bold">Header</h1>
          </Box>
        </Link>

        <Spacer />

        {/* Link Buttons */}
        <Flex gap="4px" align="center" pr={8}>
          {/* Link to Home */}
          <BoxButton>
            <Link to="/">
              <div className="font-semibold">Home</div>
            </Link>
          </BoxButton>
          {/* Link to Profile Listing page */}
          <BoxButton>
            <Link to="/meet">
              <div className="font-semibold">Meet</div>
            </Link>
          </BoxButton>
          {/* Link to Job Listing page */}
          <BoxButton>
            <Link to="/opportunities">
              <div className="font-semibold">Opportunities</div>
            </Link>
          </BoxButton>
          {/* Link to User Profile page */}
          <BoxButton>
            <Link to="/profile">
              <div className="font-semibold">Profile</div>
            </Link>
          </BoxButton>
          <Stack direction="row" spacing={4} align="center">
            <Button colorScheme="red" variant="solid" size="lg">
              Sign Out
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}

export default NavBar;
