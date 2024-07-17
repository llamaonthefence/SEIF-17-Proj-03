import {
  Box,
  Text,
  Input,
  Heading,
  Grid,
  GridItem,
  InputGroup,
  InputLeftElement,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";
import { PhoneIcon, EmailIcon, LinkIcon, InfoIcon } from "@chakra-ui/icons";
import React from "react";

function ContactDetails({ onChange }) {
  const [email, setEmail] = React.useState("");
  const [githubLink, setGithubLink] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [website, setWebsite] = React.useState("");

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    onChange({ email: value });
  };

  const handleGithubLinkChange = (event) => {
    const value = event.target.value;
    setGithubLink(value);
    onChange({ githubLink: value });
  };

  const handlePhoneChange = (event) => {
    const value = event.target.value;
    setPhone(value);
    onChange({ phone: value });
  };

  const handleWebsiteChange = (event) => {
    const value = event.target.value;
    setWebsite(value);
    onChange({ website: value });
  };

  return (
    <Box
      className="contact-details"
      w="90%"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      m={10}
      p={5}
    >
      <Heading
        as="h3"
        size="md"
        mb={4}
        fontFamily="heading"
        fontWeight="bold"
        textAlign="left"
      >
        Contact Details
      </Heading>

      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        <GridItem>
          <Box mb="8px" className="email-box">
            <FormControl isRequired>
              <FormLabel mb="8px" textAlign="left">
                Email: {email}
              </FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <EmailIcon color="gray.300" mt="-8px" />
                </InputLeftElement>
                <Input
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter Email"
                  size="sm"
                />
              </InputGroup>
            </FormControl>
          </Box>
        </GridItem>

        <GridItem>
          <Box mb="8px" className="githublink-box">
            <FormControl isRequired>
              <FormLabel mb="8px" textAlign="left">
                Github Link: {githubLink}
              </FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <LinkIcon color="gray.300" mt="-8px" />
                </InputLeftElement>
                <Input
                  value={githubLink}
                  onChange={handleGithubLinkChange}
                  placeholder="Enter Github Link"
                  size="sm"
                />
              </InputGroup>
            </FormControl>
          </Box>
        </GridItem>

        <GridItem>
          <Box mb="8px" className="phone-box">
            <Text mb="8px" textAlign="left">
              Phone: {phone}
            </Text>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <PhoneIcon color="gray.300" mt="-8px" />
              </InputLeftElement>
              <Input
                value={phone}
                onChange={handlePhoneChange}
                placeholder="Enter Phone Number"
                size="sm"
              />
            </InputGroup>
          </Box>
        </GridItem>

        <GridItem>
          <Box mb="8px">
            <Text mb="8px" textAlign="left">
              Website: {website}
            </Text>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <InfoIcon color="gray.300" mt="-8px" />
              </InputLeftElement>
              <Input
                value={website}
                onChange={handleWebsiteChange}
                placeholder="Enter Website URL"
                size="sm"
              />
            </InputGroup>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default ContactDetails;
