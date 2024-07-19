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
import React, { useEffect, useState } from "react";
import { EditIcon } from "@chakra-ui/icons";
import PersonalDetailsEdit from "./PersonalDetailsEdit";
import { updateProfile, getProfile } from "../../api/profiles";
import { useParams } from "react-router-dom";
import { data } from "autoprefixer";

//using ChakraUI "controlled input"

function PersonalDetails({ onChange }) {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [pronoun, setPronoun] = React.useState("");
  const [additionalName, setAdditionalName] = React.useState("");
  const [isModalOpen, setIsModalOpen] = useState(false)

  const {listing_id} = useParams()
  const [formData, setFormData] = useState({

    personal_details: {
      firstName: '',
      lastName: '',
      pronoun: '',
      additionalName: '',
    }

  })

  useEffect(() => {

    const fetchData = async () => {

      try {
        const data = await getProfile(listing_id)
        if (data) {
          console.log('Fetched data:', data);
          setFormData (
            { personal_details: {
              firstName: data.personal_details.firstName,
              lastName: data.personal_details.lastName,
              pronoun: data.personal_details.pronoun,
              additionalName: data.personal_details.additionalName,
            }}
          )}
      } catch (error) {
        console.error ("Error fetching data", error)
      }}
      fetchData()
  }, [listing_id]);

  const handleChange = (event) => {
    const {name, value} = event.target
    setFormData(prevState => {
      const [section, key] = name.split('.')
      if (section && key) {
        return {
          ...prevState,
          [section]: {
            ...prevState[section],
            [name]: value,
          }
        }
      }
    })
  }
  
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      let imageUrl = formData.image;
      if (formData.image && typeof formData.image !== "string") {
        imageUrl = await uploadImage(formData.image);
      }
      const updatedProfileData = {
        ...formData,
        image: imageUrl,
        listing_id: data.listing_id,
      };

      console.log('Submitting Data:', updatedProfileData); // Log the data before submitting

      await updateProfile(updatedProfileData); // Ensure jobData object is passed correctly
      window.location.reload();
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  }

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
                value={formData.personal_details.firstName}
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
                value={formData.personal_details.lastName}
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
              value={formData.personal_details.pronoun}
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
              value={formData.personal_details.additionalName}
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
