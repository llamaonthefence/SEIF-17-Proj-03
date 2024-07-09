import { Box } from "@chakra-ui/react";

function Footer() {
  return (
    <>
      {/* Footer Component */}
      <Box
        as="footer"
        className="footer"
        height="50px"
        bgColor="grey"
      >
        <h1 className="text-md font-bold">Footer</h1>
      </Box>
    </>
  );
}

export default Footer;
