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
import React, { useState } from "react";
import { EditIcon } from "@chakra-ui/icons";
import PersonalDetailsEdit from "./PersonalDetailsEdit";

//using ChakraUI "controlled input"

function PersonalDetails({ data, onChange }) {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [pronoun, setPronoun] = React.useState("");
  const [additionalName, setAdditionalName] = React.useState("");
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleFirstNameChange = (event) => {
    const value = event.target.value;
    setFirstName(value);
    onChange({ firstName: value });
  };

  const handleLastNameChange = (event) => {
    const value = event.target.value;
    setLastName(value);
    onChange({ lastName: value });
  };

  const handlePronounChange = (event) => {
    const value = event.target.value;
    setPronoun(value);
    onChange({ pronoun: value });
  };

  const handleAdditionalNameChange = (event) => {
    const value = event.target.value;
    setAdditionalName(value);
    onChange({ additionalName: value });
  };

  const handleOpenModal = (event) => {
    event.stopPropagation()
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

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

    <IconButton icon={<EditIcon/>}
    aria-label="Edit"
    position="absolute"
    top={2}
    right={2}
    onClick={handleOpenModal}>
    </IconButton>

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
                onChange={handleFirstNameChange}
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
                onChange={handleLastNameChange}
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
              onChange={handlePronounChange}
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
              onChange={handleAdditionalNameChange}
              placeholder="Enter Additional Name"
              size="sm"
            />
          </Box>
        </GridItem>
      </Grid>

      {isModalOpen && (
        <PersonalDetailsEdit isOpen={isModalOpen} closeModal={handleCloseModal}
        data={{ firstName, lastName, pronoun, additionalName }}
        />
      )}

    </Box>
  );
}

export default PersonalDetails;
