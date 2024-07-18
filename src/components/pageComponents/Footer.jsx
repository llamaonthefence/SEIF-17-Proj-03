import { Box, Flex, Link } from "@chakra-ui/react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <Box as="footer" bgColor="#1a1a1a" height="180px" py={8} color="white">
      <Flex direction="column" justify="center" align="center" height="100%">
        <Flex mb={4}>
          <Link href="#" mx={2}>
            <FaFacebook size="32px" />
          </Link>
          <Link href="#" mx={2}>
            <FaInstagram size="32px" />
          </Link>
          <Link href="#" mx={2}>
            <FaTwitter size="32px" />
          </Link>
          <Link href="#" mx={2}>
            <FaYoutube size="32px" />
          </Link>
          <Link href="#" mx={2}>
            <FaLinkedin size="32px" />
          </Link>
        </Flex>
        <Flex fontSize="12px">
          <Link href="#" mx={4} color="white">
            Home
          </Link>
          <Link href="#" mx={4} color="white">
            News
          </Link>
          <Link href="#" mx={4} color="white">
            About Us
          </Link>
          <Link href="#" mx={4} color="white">
            Contact Us
          </Link>
          <Link href="#" mx={4} color="white">
            Our Team
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Footer;
