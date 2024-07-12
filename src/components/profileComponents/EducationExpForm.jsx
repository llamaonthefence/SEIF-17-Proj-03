import React from "react"
import {Box, Text, Input, Heading, Grid, GridItem, FormControl, FormLabel, Select, Checkbox, Button} from "@chakra-ui/react";

function EduDetails( {onSave} ) {
    const [qualificationType, setQualificationType] = React.useState('')
    const [fieldOfStudy, setFieldOfStudy] = React.useState('')
    const [institutionName, setInstitutionName] = React.useState('')
    const [yearAttained, setYearAttained] = React.useState('')
    const [qualificationName, setQualificationName] = React.useState('')

    const handleQualificationTypeChange = (event) => setQualificationType(event.target.value)
    const handleFieldOfStudyChange = (event) => setFieldOfStudy(event.target.value)
    const handleInstitutionNameChange = (event) => setInstitutionName(event.target.value)
    const handleYearAttainedChange = (event) => setYearAttained(event.target.value)
    const handleQualificationNameChange = (event) => setQualificationName(event.target.value)

    const handleSubmit = () => {

        const eduExpItem = {
            qualificationType,
            fieldOfStudy,
            institutionName,
            yearAttained,
            qualificationName
        }

        onSave(eduExpItem)

        setQualificationType('')
        setFieldOfStudy('')
        setInstitutionName('')
        setYearAttained('')
        setQualificationName('')
    }

    return (
        <Box
        className="edu-details"
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
        >Education Details</Heading>

        <Grid
        templateColumns='repeat(4, 1fr)'
        templateRows='repeat(3, 1fr)' 
        gap={4}
        >
            
            <GridItem rowSpan={0.5} colSpan={4} justifySelf="start">
            <Box mb="8px" className="currentedu-box">
            <Checkbox defaultChecked>I currently study here.</Checkbox>
            </Box>
            </GridItem>


            <GridItem rowSpan={1} colSpan={2}>
            <Box mb="8px" className="qualification-type-box">
            <FormControl isRequired>
            <FormLabel mb='8px' textAlign="left">Qualification Type:</FormLabel>
            <Select 
            placeholder='Select qualification type'
            value={qualificationType}
            onChange={handleQualificationTypeChange}
            >
             <option value='option1'>Option 1</option>
             <option value='option2'>Option 2</option>
             <option value='option3'>Option 3</option>
            </Select>
            </FormControl>
            </Box>
            </GridItem>

            <GridItem rowSpan={1} colSpan={2}>
            <Box mb="8px" className="field-of-study-box">
            <FormControl isRequired>
            <FormLabel mb='8px' textAlign="left">Field of Study:</FormLabel>
            <Select 
            placeholder='Select field of study'
            value={fieldOfStudy}
            onChange={handleFieldOfStudyChange}
            >
             <option value='option1'>Option 1</option>
             <option value='option2'>Option 2</option>
             <option value='option3'>Option 3</option>
            </Select>
            </FormControl>
            </Box>
            </GridItem>

            <GridItem rowSpan={1} colSpan={2}>
            <Box mb="8px">
            <Text mb='8px' textAlign="left">Institution Name: {institutionName}</Text>
            <Input
             value={institutionName}
             onChange={handleInstitutionNameChange}
             placeholder='Enter institution name'
             size='sm'
             />
            </Box>
            </GridItem>

            <GridItem rowSpan={1} colSpan={1}>
            <Box mb="8px">
            <Text mb='8px' textAlign="left">Year Attained: {yearAttained}</Text>
            <Input
             value={yearAttained}
             onChange={handleYearAttainedChange}
             placeholder='Enter year attained'
             size='sm'
             />
            </Box>
            </GridItem>

            <GridItem rowSpan={1} colSpan={2}>
            <Box mb="8px">
            <Text mb='8px' textAlign="left">Qualification Name (optional): {qualificationName}</Text>
            <Input
             value={qualificationName}
             onChange={handleQualificationNameChange}
             placeholder='Enter qualification name'
             size='sm'
             />
            </Box>
            </GridItem>

        </Grid>

            <Button colorScheme='red' mt={5} onClick={handleSubmit}>Save</Button>

        </Box>


    )
}

export default EduDetails