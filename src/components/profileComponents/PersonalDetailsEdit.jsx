import { useEffect, useState } from "react"
import { updateProfile } from "../../service/profiles"
import { Modal, ModalCloseButton, ModalContent, 
    ModalHeader, ModalOverlay, Button, ModalFooter, Text,
    ModalBody, GridItem, Box, Grid,
    FormLabel, FormControl, Input
     } from "@chakra-ui/react"

function PersonalDetailsEdit({isOpen, closeModal, data}) { 
    const [formData, setFormData] = useState({
        personal_details: {
        firstName: "",
        lastName: "",
        pronoun: "",
        additionalName: "",
        _id: ""
        }
    })

    useEffect(() => {
        if(data) {
            setFormData({
                personal_details: {
                    firstName: data.firstName,
                    lastName: data.lastName,
                    pronoun: data.pronoun,
                    additionalName: data.additionalName,
                    _id: ""
                    }
            })
        }
    },[data])


    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    };

    async function handleSubmit(event) {
        event.preventDefault(); 

        try {
            const updatedProfileData = {
                ...formData,
                listing_id: data.listing_id
            }
            await updateProfile(updatedProfileData)
            closeModal()
            console.log('Submitting data:', updatedProfileData);
            window.location.reload() 
        } catch (error) {
            console.error('Error updating personal details:', error)
        }
    }

    return (

        <Modal
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={closeModal}
        size="xl"
        >
            <ModalOverlay>
                <ModalContent>
                    <ModalHeader>Edit Personal Details</ModalHeader>
                        <ModalCloseButton/>
                        <ModalBody>

                        <Grid templateColumns="repeat(2, 1fr)" gap={4}>

            <GridItem>
            <Box mb="8px" className="firstname-box">
            <FormControl isRequired>
            <FormLabel mb="8px" textAlign="left">
                First Name:
            </FormLabel>
            <Input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
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
                value={formData.lastName}
                onChange={handleChange}
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
                value={formData.pronoun}
                onChange={handleChange}
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
                value={formData.additionalName}
                onChange={handleChange}
                placeholder="Enter Additional Name"
                size="sm"
            />
          </Box>
          </GridItem>

      </Grid>

        </ModalBody>
        <ModalFooter>
          <Button colorScheme="red" mr={3} onClick={handleSubmit}>
            Save Changes
          </Button>
          <Button variant="outline" colorScheme="red" onClick={closeModal}>
            Cancel
          </Button>
        </ModalFooter>

                </ModalContent>
            </ModalOverlay>
        </Modal>

    )}


    export default PersonalDetailsEdit;