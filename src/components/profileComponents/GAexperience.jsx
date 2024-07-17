import {Box, Heading, Grid, GridItem, Select, FormControl, FormLabel, Button, Text} from "@chakra-ui/react";
import React from "react";
import { gaBootcamps } from "../../constants/ga-courses";
import DateInputYear from "./DateInputYear";
import { v4 as uuidv4 } from 'uuid'
import formatDate from "../../util/formatDate";


//using ChakraUI "controlled input"

function GAExp({onSave}) {
    const [gaCourse, setGaCourse] = React.useState('')
    const [gradYear, setGradYear] = React.useState(new Date())
    const [gaCourseList, setGaCourseList] = React.useState([])

    const handleGaCourseChange = (event) => setGaCourse(event.target.value)
    const handleGradYearChange = (date) => setGradYear(date)

    const handleAddGaCourse = () => {
        if (gaCourse && gradYear) {
            const formattedGradYear = gradYear.getFullYear().toString();
            const currentYear = new Date() 

            if (gradYear > currentYear) {
                alert("Year selected cannot be in the future.")
                return; 
            }

            const gaExpItem = {
                id: uuidv4(),
                gaCourse,
                gradYear: formattedGradYear,  
            }

            setGaCourseList([...gaCourseList, gaExpItem])
            setGaCourse('')
            setGradYear(new Date())
            onSave(gaExpItem);
        }
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

            {gaCourseList.length > 0 && (
                <Box>
                    {gaCourseList.map((course, index) => (
                        <Text key={index}>
                            {`Course: ${course.gaCourse}, Graduation Year: ${course.gradYear}`}
                        </Text>
                    ))}

                </Box>
            )}

        </Box>
    )
}

export default GAExp