import {Box, Text, Input, Heading, Grid, GridItem, FormControl, FormLabel} from "@chakra-ui/react";
import React, { useCallback, useEffect } from "react";

//using ChakraUI "controlled input"

function PersonalDetails({onChange}) {
    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [pronoun, setPronoun] = React.useState('')
    const [additionalName, setAdditionalName] = React.useState('')

    const handleFirstNameChange = (event) => {
        const value = event.target.value
        setFirstName(value)
        onChange({first_Name: value})}

    const handleLastNameChange = (event) => {
        const value = event.target.value
        setLastName(value)
        onChange({last_name: value})}

    const handlePronounChange = (event) => {
        const value = event.target.value
        setPronoun(value)
        onChange({pronoun: value})}

    const handleAdditionalNameChange = (event) => {
        const value = event.target.value
        setAdditionalName(value)
        onChange({additional_name: value})
        }

    return (
        <Box 
        className="personal-details"
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
        >Personal Details</Heading>

        <Grid templateColumns='repeat(2, 1fr)' gap={4}>

            <GridItem>
            <Box mb="8px" className="firstname-box">
            <FormControl isRequired>
            <FormLabel mb='8px' textAlign="left">First Name:</FormLabel>
            <Input
             value={firstName}
             onChange={handleFirstNameChange}
             placeholder='Enter First Name'
             size='sm'
             />
             </FormControl>
            </Box>
            </GridItem>

            <GridItem>
            <Box mb="8px" className="lastname-box">
            <FormControl isRequired>
            <FormLabel mb='8px' textAlign="left">Last Name:</FormLabel>
            <Input
             value={lastName}
             onChange={handleLastNameChange}
             placeholder='Enter Last Name'
             size='sm'
             />   
             </FormControl>
            </Box>
            </GridItem>


            <GridItem>
            <Box mb="8px" className="pronoun-box">
            <Text mb='8px' textAlign="left">Pronoun:</Text>
            <Input
             value={pronoun}
             onChange={handlePronounChange}
             placeholder='Enter Pronoun'
             size='sm'
             />
            </Box>
            </GridItem>


            <GridItem>
            <Box mb="8px">
            <Text mb='8px' textAlign="left">Additional Name:</Text>
            <Input
             value={additionalName}
             onChange={handleAdditionalNameChange}
             placeholder='Enter Additional Name'
             size='sm'
             />
            </Box>
            </GridItem>

        
        </Grid> 

        </Box>
    )
}

export default PersonalDetails