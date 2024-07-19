import {
  Box,
  Text,
  Input,
  Heading,
  Grid,
  GridItem,
  FormControl,
  FormLabel,
  IconButton,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { EditIcon } from "@chakra-ui/icons";
import PersonalDetailsEdit from "./PersonalDetailsEdit";

function PersonalDetails({ onChange, userDetails, profileDetails }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [pronoun, setPronoun] = useState("");
  const [additionalName, setAdditionalName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (profileDetails) {
      console.log("PersonalDetails - userDetails Detected: ", userDetails);
      setFirstName(profileDetails.personal_details.firstName || "");
      setLastName(profileDetails.personal_details.lastName || "");
      setPronoun(profileDetails.personal_details.pronoun || "");
      setAdditionalName(profileDetails.personal_details.additionalName || "");
    } else if (userDetails) {
      console.log("PersonalDetails - userDetails Detected: ", userDetails);
      setFirstName(userDetails.user.firstName || "");
      setLastName(userDetails.user.lastName || "");
    }
  }, [userDetails, profileDetails]);

  const handleOpenModal = (event) => {
    event.stopPropagation();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSave = (updatedData) => {
    onChange(updatedData);
    setFirstName(updatedData.firstName);
    setLastName(updatedData.lastName);
    setPronoun(updatedData.pronoun);
    setAdditionalName(updatedData.additionalName);
    handleCloseModal();
  };

  return (
    <Box
      className="personal-details"
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
        Personal Details
      </Heading>

      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        <GridItem>
          <Box mb="8px" className="firstname-box">
            <FormControl isRequired>
              <FormLabel mb="8px" textAlign="left">
                First Name:
              </FormLabel>
              <Input
                value={firstName}
                readOnly
                placeholder="Enter First Name"
                size="sm"
              />
            </FormControl>
          </Box>
        </GridItem>

        <GridItem>
          <Box mb="8px" className="lastname-box">
            <FormControl isRequired>
              <FormLabel mb="8px" textAlign="left">
                Last Name:
              </FormLabel>
              <Input
                value={lastName}
                readOnly
                placeholder="Enter Last Name"
                size="sm"
              />
            </FormControl>
          </Box>
        </GridItem>

        <GridItem>
          <Box mb="8px" className="pronoun-box">
            <Text mb="8px" textAlign="left">
              Pronoun:
            </Text>
            <Input
              value={pronoun}
              readOnly
              placeholder="Enter Pronoun"
              size="sm"
            />
          </Box>
        </GridItem>

        <GridItem>
          <Box mb="8px">
            <Text mb="8px" textAlign="left">
              Additional Name:
            </Text>
            <Input
              value={additionalName}
              readOnly
              placeholder="Enter Additional Name"
              size="sm"
            />
          </Box>
        </GridItem>
      </Grid>

      {isModalOpen && (
        <PersonalDetailsEdit
          isOpen={isModalOpen}
          closeModal={handleCloseModal}
          data={{ firstName, lastName, pronoun, additionalName }}
          onSave={handleSave}
        />
      )}
    </Box>
  );
}

export default PersonalDetails;
