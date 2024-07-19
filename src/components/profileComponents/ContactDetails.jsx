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
  IconButton,
} from "@chakra-ui/react";
import {
  PhoneIcon,
  EmailIcon,
  LinkIcon,
  InfoIcon,
  EditIcon,
} from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";
import ContactDetailsEdit from "../profileComponents/ContactDetailsEdit";

function ContactDetails({ onChange, userDetails, profileDetails }) {
  const [email, setEmail] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (profileDetails) {
      console.log("ContactDetails - userDetails Detected: ", userDetails);
      setEmail(profileDetails.contact_details.email || ""); // Updated based on your schema
      setGithubLink(profileDetails.contact_details.githubLink || "");
      setPhone(profileDetails.contact_details.phone || "");
      setWebsite(profileDetails.contact_details.website || "");
    } else if (userDetails) {
      console.log("ContactDetails - userDetails Detected: ", userDetails);
      setEmail(userDetails.user.email || ""); // Updated based on your schema
    }
  }, [userDetails, profileDetails]);

  const handleOpenModal = (event) => {
    event.stopPropagation();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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

  const handleSave = (updatedData) => {
    onChange(updatedData);
    setEmail(updatedData.email);
    setGithubLink(updatedData.githubLink);
    setPhone(updatedData.phone);
    setWebsite(updatedData.website);
    handleCloseModal();
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
      position="relative"
    >
      <IconButton
        icon={<EditIcon />}
        aria-label="Edit"
        position="absolute"
        top={2}
        right={2}
        onClick={handleOpenModal}
      />

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
                  readOnly
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
                  readOnly
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
            <FormControl isRequired>
              <FormLabel mb="8px" textAlign="left">
                Phone: {phone}
              </FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <PhoneIcon color="gray.300" mt="-8px" />
                </InputLeftElement>
                <Input
                  readOnly
                  value={phone}
                  onChange={handlePhoneChange}
                  placeholder="Enter Phone Number"
                  size="sm"
                />
              </InputGroup>
            </FormControl>
          </Box>
        </GridItem>

        <GridItem>
          <Box mb="8px">
            <FormControl isRequired>
              <FormLabel mb="8px" textAlign="left">
                Website: {website}
              </FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <InfoIcon color="gray.300" mt="-8px" />
                </InputLeftElement>
                <Input
                  readOnly
                  value={website}
                  onChange={handleWebsiteChange}
                  placeholder="Enter Website URL"
                  size="sm"
                />
              </InputGroup>
            </FormControl>
          </Box>
        </GridItem>
      </Grid>
      {isModalOpen && (
        <ContactDetailsEdit
          isOpen={isModalOpen}
          closeModal={handleCloseModal}
          data={{ email, githubLink, phone, website }}
          onSave={handleSave}
        />
      )}
    </Box>
  );
}

export default ContactDetails;
