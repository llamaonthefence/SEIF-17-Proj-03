import {
  Box,
  Flex,
  Spacer,
  Button,
  Text,
  Heading,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import LogoSVG from "../../assets/group3.svg";

function NavBar({ handleLogout }) {
  const imageStyle = {
    height: "40px",
  };
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
        <Link to="/">
          <Box align="center" mx={8} size={50}>
            <Image src="./homelogo.png" alt="Home" style={imageStyle} />
            <Text fontWeight="semibold">Home</Text>
          </Box>
        </Link>

        <Link to="/meet">
          <Box align="center" mx={8} size={50}>
            <Image src="./meetlogo.png" alt="Meet" style={imageStyle} />
            <Text fontWeight="semibold">Meet</Text>
          </Box>
        </Link>

        <Link to="/opportunities">
          <Box align="center" mx={8} size={50}>
            <Image
              src="./opportunitieslogo.png"
              alt="Opportunities"
              style={imageStyle}
            />
            <Text fontWeight="semibold">Opportunities</Text>
          </Box>
        </Link>

        <Link to={`/profile`}>
          <Box align="center" mx={8} size={50}>
            <Image src="./profilelogo.png" alt="Profile" style={imageStyle} />
            <Text fontWeight="semibold">Profile</Text>
          </Box>
        </Link>

        <Box mx={8}>
          <Button
            colorScheme="red"
            variant="solid"
            size="lg"
            align="center"
            onClick={handleLogout}
          >
            Sign Out
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
}

export default NavBar;
