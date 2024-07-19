import { Box, Flex, Spacer, Button, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import LogoSVG from "../../assets/group3.svg";

function NoUserNavBar() {
  return (
    <Flex
      bgColor="white"
      borderBottom="1px"
      borderColor="lightgrey"
      align="center"
      p={4}
    >
      {/* Logo and Header */}
      <Link to="/">
        <Flex align="center">
          <Box display="flex" alignItems="center">
            <img
              src={LogoSVG}
              alt="Group Assembly Logo"
              style={{ height: "90px", width: "90px" }}
            />
          </Box>
          <Box ml={3}>
            <Heading as="h1" size="lg" color="#414042">
              Group
            </Heading>
            <Heading as="h1" size="lg" color="#414042">
              Assembly
            </Heading>
          </Box>
        </Flex>
      </Link>

      <Spacer />

      {/* Navigation Links */}
      <Flex align="center" pr={4}>
        <Box mx={4}>
          <Link to="/signin">
            <Button colorScheme="red" variant="solid" size="lg" align="center">
              Sign in
            </Button>
          </Link>
        </Box>
        <Box mx={4}>
          <Link to="/signup">
            <Button colorScheme="red" variant="solid" size="lg" align="center">
              Sign Up
            </Button>
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
}

export default NoUserNavBar;
