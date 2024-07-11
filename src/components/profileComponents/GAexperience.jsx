import {Box, Heading, Grid, GridItem, Select, FormControl, FormLabel, Button, Text} from "@chakra-ui/react";
import React from "react";

//using ChakraUI "controlled input"

function GAExp() {
    const [gaCourse, setGaCourse] = React.useState('')
    const [gradYear, setGradYear] = React.useState('')
    const [gaCourseList, setGaCourseList] = React.useState([])

    const handleGaCourseChange = (event) => setGaCourse(event.target.value)
    const handleGradYearChange = (event) => setGradYear(event.target.value)

    const handleAddGaCourse = () => {
        if (gaCourse && gradYear) {
            setGaCourseList([...gaCourseList, { gaCourse, gradYear}])
            setGaCourse('')
            setGradYear('')
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
            >
             <option value='option1'>Option 1</option>
             <option value='option2'>Option 2</option>
             <option value='option3'>Option 3</option>
            </Select>
            </FormControl>
            </Box>
            </GridItem>

            <GridItem>
            <Box mb="8px" className="gradyear-box">
            <FormControl isRequired>
            <FormLabel mb='8px' textAlign="left">Graduation Year:</FormLabel>
            <Select 
            placeholder='Select graduation year'
            value={gradYear}
            onChange={handleGradYearChange}
            >
             <option value='option1'>Option 1</option>
             <option value='option2'>Option 2</option>
             <option value='option3'>Option 3</option>
            </Select>
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