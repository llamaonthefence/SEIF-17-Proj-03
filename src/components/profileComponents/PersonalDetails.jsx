import {Box, Text, Input, Heading, Grid, GridItem, FormControl, FormLabel} from "@chakra-ui/react";
import React from "react";

//using ChakraUI "controlled input"

function PersonalDetails() {
    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [pronoun, setPronoun] = React.useState('')
    const [additionalName, setAdditionalName] = React.useState('')

    const handleFirstNameChange = (event) => setFirstName(event.target.value)
    const handleLastNameChange = (event) => setLastName(event.target.value)
    const handlePronounChange = (event) => setPronoun(event.target.value)
    const handleAdditionalNameChange = (event) => setAdditionalName(event.target.value)

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
            <FormLabel mb='8px' textAlign="left">First Name: {firstName}</FormLabel>
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
            <FormLabel mb='8px' textAlign="left">Last Name: {lastName}</FormLabel>
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
            <Text mb='8px' textAlign="left">Pronoun: {pronoun}</Text>
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
            <Text mb='8px' textAlign="left">Additional Name: {additionalName}</Text>
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