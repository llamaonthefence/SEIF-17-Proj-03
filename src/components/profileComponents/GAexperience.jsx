import {Box, Heading, Grid, GridItem, Select, FormControl, FormLabel, Button, Text, IconButton} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";
import { gaBootcamps } from "../../constants/ga-courses";
import DateInputYear from "./DateInputYear";
import { v4 as uuidv4 } from 'uuid'
// import formatDate from "../../util/formatDate";
import { getProfile } from "../../api/profiles";
import GaExperienceEdit from "./GAexperienceEdit";

//using ChakraUI "controlled input"

function GAexperience({onChange}) {
    const [gaCourseList, setGaCourseList] = React.useState([])
    const [gaCourse, setGaCourse] = React.useState('')
    const [gradYear, setGradYear] = React.useState(new Date())

    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleGaCourseChange = (event) => {
        const value = event.target.value
        setGaCourse(value)}
        // onChange({gaCourse: value})}

    const handleGradYearChange = (date) => {
        setGradYear(date)}
        // onChange({gradYear: date})}

    const handleAddGaCourse = () => {
        if (gaCourse && gradYear) {
            const formattedGradYear = gradYear.getFullYear();
            const currentYear = new Date().getFullYear();

            if (formattedGradYear > currentYear) {
                alert("Year selected cannot be in the future.")
                return; 
            }

            const gaExpItem = {
                id: uuidv4(),
                gaCourse,
                gradYear: formattedGradYear,  
            }

            // const updatedGaCourseList = [...gaCourseList, gaExpItem]
            // setGaCourseList(prevList => [...prevList, gaExpItem])
            // setGaCourse('')
            // setGradYear(new Date())
            // onChange([...gaCourseList, gaExpItem]);

            setGaCourseList(prevList => {
                const updatedList = [...prevList, gaExpItem];
                onChange(updatedList); // Notify parent component with updated list
                return updatedList;
            });
    
            setGaCourse('');
            setGradYear(new Date());
        }
    }

    const handleEditGaExp = (index) => {
        console.log ("edit GA exp")
    }

    const handleDeleteGaExp = (index) => {
        setGaCourseList(prevList => {
            const updatedList = [...prevList]
            updatedList.splice(index, 1)
            return updatedList
        })
    }

    //handle change in gaCourseList array 
    useEffect(() => {
        onChange(gaCourseList)
    }, [gaCourseList])

    const handleOpenModal = (event) => {
        event.stopPropagation()
        setIsModalOpen(true)
      }
    
      const handleCloseModal = () => {
        setIsModalOpen(false)
      }


    return (
        <Box 
        className="GA-Experience"
        w="90%"
        borderWidth='1px'
        borderRadius='lg' 
        overflow='hidden'
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
        >GA Experience(s)</Heading>

        <Grid templateColumns='repeat(2, 1fr)' gap={4}>

            <GridItem>
            <Box mb="8px" className="gacourse-box">
            <FormControl isRequired>
            <FormLabel mb='8px' textAlign="left">GA Course Attended:</FormLabel>
            <Select 
            placeholder='Select course attended'
            value={gaCourse}
            onChange={handleGaCourseChange}
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
            <Box mb="8px" className="gradyear-box">
            <FormControl isRequired>
            <FormLabel mb='8px' textAlign="left">Graduation Year:</FormLabel>
            <DateInputYear 

            selectedDate={gradYear}
            onChange={handleGradYearChange}
            zIndex={9999}
            />
            </FormControl>
            </Box>
            </GridItem>
        
        </Grid> 

        <Button 
        colorScheme='red' 
        size='sm'
        display='flex'
        justifyContent='center'
        my={2}
        w = "80%"
        style={ {marginLeft: "10%", marginRight: "10%"} }
        onClick={handleAddGaCourse}
        >
        Add
        </Button>

        <Grid templateColumns='repeat(6, 1fr)'>

            {gaCourseList.map((course, index) => (

            <GridItem key={course.id} colSpan={6}>
            <Box maxW="100%" borderWidth="1px" borderRadius="lg" m={2} p={2}>

            <Grid templateColumns='repeat(6, 1fr)'>
                <GridItem colSpan={5}>
                <Box textAlign="left" p={2}>
                    
                        <Text key={index}>
                            {`Course: ${course.gaCourse} | Graduation Year: ${course.gradYear}`}
                        </Text>
                   
                </Box>
                </GridItem>

                <GridItem colSpan={1} display="flex" alignItems="center"> 
                    <IconButton
                      aria-label="Edit"
                      icon={<EditIcon />}
                      colorScheme="blue"
                      onClick={handleOpenModal}
                      mr={2}
                    />
                    <IconButton
                      aria-label="Delete"
                      icon={<DeleteIcon />}
                      colorScheme="red"
                      onClick={() => handleDeleteGaExp(index)}
                    />

                    </GridItem>
            
            </Grid>

            </Box>
             </GridItem>
            ))}
        </Grid>

        {isModalOpen && (
        <GaExperienceEdit isOpen={isModalOpen} closeModal={handleCloseModal}
        data={{ gaCourse, gradYear }}
        />
      )}


        </Box>
    )
}

export default GAexperience