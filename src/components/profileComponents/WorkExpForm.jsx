import {Box, Text, Input, Heading, Grid, GridItem, FormControl, FormLabel, Select, Editable, EditablePreview, EditableTextarea, Checkbox, Button} from "@chakra-ui/react";
import React from "react";
import DateInput from "./DateInput";
import { v4 as uuidv4 } from 'uuid'
import formatDate from "../../util/formatDate";
import specialisations from "../../constants/specialisations";
import INDUSTRIES from "../../constants/industries";
import employmentTypes from "../../constants/employmenttypes";

//using ChakraUI "controlled input"

function WorkDetails({ onSave }) {
    const [companyName, setCompanyName] = React.useState('')
    const [jobTitle, setJobTitle] = React.useState('')
    const [specialisation, setSpecialisation] = React.useState('')
    const [fromDate, setFromDate] = React.useState(new Date())
    const [toDate, setToDate] = React.useState(new Date())
    const [industry, setIndustry] = React.useState('')
    const [employmentType, setEmploymentType] = React.useState('')
    const [workDescription, setWorkDescription] = React.useState('')
    const [remainingChars, setRemainingChars] = React.useState(300);
    const [isCurrentJob, setIsCurrentJob] = React.useState(false); 

    const toggleCurrentJob = () => {
        setIsCurrentJob(!isCurrentJob); 
    }

    const disabledStyle = {
        color: "grey"
    }

    const handleCompanyNameChange = (event) => setCompanyName(event.target.value)
    const handleJobTitleChange = (event) => setJobTitle(event.target.value)
    const handleSpecialisationChange = (event) => setSpecialisation(event.target.value)
    const handleFromDateChange = (date) => setFromDate(date)
    const handleToDateChange = (date) => setToDate(date)
    const handleIndustryChange = (event) => setIndustry(event.target.value)
    const handleEmploymentTypeChange = (event) => setEmploymentType(event.target.value)
    // const handleWorkDescriptionChange = (event) => setWorkDescription(event.target.value)

    const handleWorkDescriptionChange = (text) => {
        if (text.length <= 300) {
            setWorkDescription(text); 
            setRemainingChars(300 - text.length)
        }}


    const handleSubmit = (event) => {
        event.preventDefault(); 

        if (!companyName || !jobTitle || !industry || !employmentType) {
            alert("Please fill in all required fields.")
            return; 
        }

        const formattedFromDate = formatDate(fromDate);
        const formattedToDate = formatDate (toDate); 
        const currentDate = new Date();

        //Date validation: fromDate < toDate 
        if (fromDate >= toDate) {
            alert("Start date must be before end date.")
            return; 
        }

        //Date validation 2: Dates cannot be in the future 
        if (fromDate > currentDate || toDate > currentDate) {
            alert("Dates cannot be in the future.")
            return; 
        }

        //workExp object
        const workExpItem = {
            id: uuidv4(),
            companyName, 
            jobTitle,
            fromDate: formattedFromDate,
            toDate: formattedToDate,
            workDescription
        }
        //pass workExpItem to WorkExp.jsx (parent)
        onSave(workExpItem)

        setCompanyName('')
        setJobTitle('')
        setFromDate(new Date())
        setToDate(new Date())
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
        as="form"
        onSubmit={handleSubmit}
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
            <Checkbox checked={isCurrentJob} onChange={toggleCurrentJob}>This is my current job.</Checkbox>
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
            <Box mb="8px" className="specialisation-box">
            <Text mb='8px' textAlign="left">Specialisation:</Text>
            <Select 
            placeholder='Specialisation'
            value={specialisation}
            onChange={handleSpecialisationChange}
            >
             {specialisations.map((specialise, index) => (
                <option key={index} value={specialise}>{specialise}</option>
             ))}
            </Select>
            </Box>
            </GridItem>


            <GridItem rowSpan={1} colSpan={1}>
            <Box mb="8px">
            <Text mb='8px' textAlign="left">From:</Text>
            <DateInput
             selectedDate={fromDate}
             onChange={handleFromDateChange}
             />
            </Box>
            </GridItem>

            <GridItem rowSpan={1} colSpan={1}>
            <Box mb="8px">
            <Text mb='8px' textAlign="left">To:</Text>
            <DateInput
             selectedDate={toDate}
             onChange={handleToDateChange}
             disabled={isCurrentJob}
            //  inputStyle={{color: isCurrentJob ? `grey` : `inherit`}}
            disabledStyle={disabledStyle}
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
             {INDUSTRIES.map((industry, index) => (
                <option key={index} value={industry}>{industry}</option>
             ))}
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
             {employmentTypes.map((type, index) => (
                <option key={index} value={type}>{type}</option>
             ))}
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
