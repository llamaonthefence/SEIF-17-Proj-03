import { Box, Image, Heading, Text } from "@chakra-ui/react";
import landingImg from '../assets/pexels-canvastudio-3277808-grayscalish.jpg'

function HomePage() {
  return (
    <>
      {/* HomePage Component */}
      <Box
        className="HomePage"
        align="center"
        height="840px"
        alignContent="center"
      >
        <Image src={landingImg} alt='image of group meeting'/>
        <Box 
        className="textbox" 
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-55%, -30%)"
        bgColor="rgba(0,0,0,0.7)"
        p={4}
        borderRadius="lg"
        color="white"
        textAlign="center"
        maxWidth="500px"
        >
          <Heading 
          as="h1"
          size="xl" 
          mb={4} 
          fontFamily="heading" 
          fontWeight="bold"
          >TAKE YOUR TECH CIRCLE TO THE NEXT LEVEL</Heading>
          <Text fontSize="lg" fontFamily="body">
            Whether you’re a GA student or an alumni in search of fellow talents, network with your ideal candidate among our tech-ready community.
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default HomePage;
