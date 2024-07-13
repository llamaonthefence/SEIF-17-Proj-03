import {Box, Text, Input, Heading, Grid, GridItem, FormControl, FormLabel, Select, Editable, EditablePreview, EditableTextarea, Checkbox, Button} from "@chakra-ui/react";
import React from "react";

//using ChakraUI "controlled input"

function WorkDetails({ onSave }) {
    const [companyName, setCompanyName] = React.useState('')
    const [jobTitle, setJobTitle] = React.useState('')
    const [occupation, setOccupation] = React.useState('')
    const [fromDate, setFromDate] = React.useState('')
    const [toDate, setToDate] = React.useState('')
    const [industry, setIndustry] = React.useState('')
    const [employmentType, setEmploymentType] = React.useState('')
    const [workDescription, setWorkDescription] = React.useState('')
    const [remainingChars, setRemainingChars] = React.useState(300);

    const handleCompanyNameChange = (event) => setCompanyName(event.target.value)
    const handleJobTitleChange = (event) => setJobTitle(event.target.value)
    const handleOccupationChange = (event) => setOccupation(event.target.value)
    const handleFromDateChange = (event) => setFromDate(event.target.value)
    const handleToDateChange = (event) => setToDate(event.target.value)
    const handleIndustryChange = (event) => setIndustry(event.target.value)
    const handleEmploymentTypeChange = (event) => setEmploymentType(event.target.value)
    // const handleWorkDescriptionChange = (event) => setWorkDescription(event.target.value)

    const handleWorkDescriptionChange = (text) => {
        if (text.length <= 300) {
            setWorkDescription(text); 
            setRemainingChars(300 - text.length)
        }}


    const handleSubmit = () => {
        //workExp object
        const workExpItem = {
            companyName, 
            jobTitle,
            fromDate,
            toDate,
            workDescription
        }
        //pass workExpItem to WorkExp.jsx (parent)
        onSave(workExpItem)

        setCompanyName('')
        setJobTitle('')
        setFromDate('')
        setToDate('')
        setWorkDescription(''); 
    }

    return (
        <Box 
        className="work-details"
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
        >Work Details</Heading>

        <Grid 
        templateColumns='repeat(4, 1fr)'
        templateRows='repeat(6.5, 1fr)' 
        gap={4}>

            <GridItem rowSpan={0.5} colSpan={4} justifySelf="start">
            <Box mb="8px" className="currentjob-box">
            <Checkbox defaultChecked>This is my current job.</Checkbox>
            </Box>
            </GridItem>

            <GridItem rowSpan={1} colSpan={2}>
            <Box mb="8px" className="companyname-box" >
            <FormControl isRequired>
            <FormLabel mb='8px' textAlign="left">Company Name: {companyName}</FormLabel>
            <Input
             value={companyName}
             onChange={handleCompanyNameChange}
             placeholder='Enter Company Name'
             size='sm'
             />
             </FormControl>
            </Box>
            </GridItem>

            <GridItem rowSpan={1} colSpan={2}>
            <Box mb="8px" className="jobtitle-box" >
            <FormControl isRequired>
            <FormLabel mb='8px' textAlign="left">Job Title: {jobTitle}</FormLabel>
            <Input
             value={jobTitle}
             onChange={handleJobTitleChange}
             placeholder='Enter Job Title'
             size='sm'
             />   
             </FormControl>
            </Box>
            </GridItem>


            <GridItem rowSpan={1} colSpan={2}>
            <Box mb="8px" className="occupation-box">
            <Text mb='8px' textAlign="left">Occupation: {occupation}</Text>
            <Input
             value={occupation}
             onChange={handleOccupationChange}
             placeholder='Enter Occupation'
             size='sm'
             />
            </Box>
            </GridItem>


            <GridItem rowSpan={1} colSpan={1}>
            <Box mb="8px">
            <Text mb='8px' textAlign="left">From: {fromDate}</Text>
            <Input
             value={fromDate}
             onChange={handleFromDateChange}
             placeholder='Enter Job Start Date'
             size='sm'
             />
            </Box>
            </GridItem>

            <GridItem rowSpan={1} colSpan={1}>
            <Box mb="8px">
            <Text mb='8px' textAlign="left">To: {toDate}</Text>
            <Input
             value={toDate}
             onChange={handleToDateChange}
             placeholder='Enter Job End Date'
             size='sm'
             />
            </Box>
            </GridItem>

            <GridItem rowSpan={1} colSpan={2}>
            <Box mb="8px" className="industry-box">
            <FormControl isRequired>
            <FormLabel mb='8px' textAlign="left">Industry:</FormLabel>
            <Select 
            placeholder='Select industry'
            value={industry}
            onChange={handleIndustryChange}
            >
             <option value='option1'>Option 1</option>
             <option value='option2'>Option 2</option>
             <option value='option3'>Option 3</option>
            </Select>
            </FormControl>
            </Box>
            </GridItem>

            <GridItem rowSpan={1} colSpan={2}>
            <Box mb="8px" className="employmenttype-box">
            <FormControl isRequired>
            <FormLabel mb='8px' textAlign="left">Employment Type:</FormLabel>
            <Select 
            placeholder='Select employment type'
            value={employmentType}
            onChange={handleEmploymentTypeChange}
            >
             <option value='option1'>Option 1</option>
             <option value='option2'>Option 2</option>
             <option value='option3'>Option 3</option>
            </Select>
            </FormControl>
            </Box>
            </GridItem>

            <GridItem rowSpan={2} colSpan={4}>
            <Box mb="8px" className="workdescription-box">
            <FormControl>
            <FormLabel mb='8px' textAlign="left">Work Description (Optional):</FormLabel>
            <Editable 
            placeholder='Write something about this job'
            textAlign="left"
            value={workDescription}
            onChange={handleWorkDescriptionChange}
            >
            <EditablePreview />
            <EditableTextarea />
            </Editable>
            <Text mt={2} color={remainingChars >= 0 ? "gray.500" : "red.500"} fontSize='xs' textAlign='left'>Characters remaining: {remainingChars}</Text>
            </FormControl>
            </Box>
            </GridItem>
        
        </Grid> 

            <Button colorScheme='red' mt={5} onClick={handleSubmit}>Save</Button>

        </Box>
    )
}

export default WorkDetails
