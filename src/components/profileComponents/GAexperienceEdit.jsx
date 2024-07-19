import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getProfile, updateProfile } from "../../api/profiles";
import { Box, Button, Grid,GridItem,FormControl, FormLabel, Modal,
    ModalContent, ModalOverlay, ModalFooter, ModalCloseButton, ModalBody,
    ModalHeader, Select} from '@chakra-ui/react';
import DateInputYear from "./DateInputYear";
import { gaBootcamps } from "../../constants/ga-courses";

function GaExperienceEdit({isOpen, closeModal}) {

    const { listing_id } = useParams();
    const [selectedDate, setSelectedDate] = useState(null); 

    const [formData, setFormData] = useState({
        ga_experience: {
            gaCourse: "",
            gradYear: ""
        }
    });


    useEffect(() => {

        const fetchData = async () => {
            console.log("useEffect triggered")

            try {
                const data = await getProfile(listing_id)
                if (data) {
                    console.log('Fetched data', data) // log to check fetched data 
                    setFormData(
                        {ga_experience: {
                            gaCourse: data.ga_experience.firstName,
                            gradYear: data.ga_experience.gradYear
                        }}
                    )}
            } catch (error) {
                console.error("error fetching GA experience data", error)
            }}
            fetchData() 
    }, [listing_id])

    const handleChange = (event) => {
        const {name, value} = event.target

        setFormData(prevState => {
            const [section, key] = name.split ('.')
            if (section && key) {
                return {
                    ...prevState,
                    [section]: {
                        ...prevState[section],
                        [key]: value, 
                    },
                };
            } else {
                return {
                    ...prevState,
                    [name]: value, 
                }}
        })};

    async function handleSubmit(event) {
        event.preventDefault(); 

        try {
            const updatedProfileData = {
                ...formData, 
                listing_id: data.listing_id
            }
            console.log('Submitting data:', updatedProfileData)

            await updateProfile(updatedProfileData)
            window.location.reload()
        } catch (error) {
            console.error('error updating GA experience:', error)
        }
    }
    
    const handleYearChange = (date) => {
        setSelectedDate(date);
        const year = date.getFullYear();
    
        // Update the formData state with the selected year
        setFormData(prevState => ({
          ...prevState,
          ga_experience: {
            ...prevState.ga_experience,
            gradYear: year.toString()
          }
        }));
      };

    return (
        
        <Modal
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={closeModal}
        size="xl"
        >
            <ModalOverlay>
                <ModalContent>
                    <ModalHeader>Edit GA Experience(s)</ModalHeader>
                        <ModalCloseButton/>
                        <ModalBody>

                        <Grid templateColumns="repeat(2, 1fr)" gap={4}>

            <GridItem>
            <Box mb="8px" className="firstname-box">
            <FormControl isRequired>
            <FormLabel mb="8px" textAlign="left">
            GA Course Attended:
            </FormLabel>
            <Select 
            placeholder='Select course attended'
            value={formData.ga_experience.gaCourse}
            onChange={handleChange}
            fontSize="sm"
            >
             {gaBootcamps.map((course, index) => (
                <option key={index} value={course}>{course}</option>
             ))}
            </Select>
            </FormControl>
            </Box>
            </GridItem>

        <GridItem>
          <Box mb="8px" className="lastname-box">
            <FormControl isRequired>
              <FormLabel mb="8px" textAlign="left">
              Graduation Year:
                </FormLabel>
                <DateInputYear 
                selectedDate={selectedDate}
                onChange={handleYearChange}
                zIndex={9999}
            />
            </FormControl>
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


    )

}



export default GaExperienceEdit
    