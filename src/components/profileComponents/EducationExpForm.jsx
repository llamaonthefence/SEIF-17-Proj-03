import React from "react";
import {
  Box,
  Text,
  Input,
  Heading,
  Grid,
  GridItem,
  FormControl,
  FormLabel,
  Select,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import DateInputYear from "./DateInputYear";
import formatDate from "../../util/formatDate";
import { v4 as uuidv4 } from "uuid";
import qualificationTypes from "../../constants/qualificationTypes";
import fieldsOfStudy from "../../constants/fieldsOfStudyString";

function EduDetails({ onSave }) {
  const [qualificationType, setQualificationType] = React.useState("");
  const [fieldOfStudy, setFieldOfStudy] = React.useState("");
  const [institutionName, setInstitutionName] = React.useState("");
  const [yearAttained, setYearAttained] = React.useState(new Date());
  const [qualificationName, setQualificationName] = React.useState("");
  const [isCurrentEdu, setIsCurrentEdu] = React.useState(false);

  const toggleCurrentEdu = () => {
    setIsCurrentEdu(!isCurrentEdu);
  };

  const disabledStyle = {
    color: "grey",
  };

  const handleQualificationTypeChange = (event) =>
    setQualificationType(event.target.value);
  const handleFieldOfStudyChange = (event) =>
    setFieldOfStudy(event.target.value);
  const handleInstitutionNameChange = (event) =>
    setInstitutionName(event.target.value);
  const handleYearAttainedChange = (date) => setYearAttained(date);
  const handleQualificationNameChange = (event) =>
    setQualificationName(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    //Form validations
    if (!qualificationType || !fieldOfStudy) {
      alert("Please fill in all required fields.");
      return;
    }

    const formattedYearAttained = formatDate(yearAttained);
    const currentYear = new Date();

    if (yearAttained > currentYear) {
      alert("Year attained cannot be in the future.");
      return;
    }

    const eduExpItem = {
      id: uuidv4(),
      qualificationType,
      fieldOfStudy,
      institutionName,
      yearAttained: formattedYearAttained,
      qualificationName,
    };

    onSave(eduExpItem);

    setIsCurrentEdu(false);
    setQualificationType("");
    setFieldOfStudy("");
    setInstitutionName("");
    setYearAttained(new Date());
    setQualificationName("");
  };

  return (
    <Box
      className="edu-details"
      w="90%"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
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
      >
        Education Details
      </Heading>

      <Grid
        templateColumns="repeat(4, 1fr)"
        templateRows="repeat(3, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={0.5} colSpan={4} justifySelf="start">
          <Box mb="8px" className="currentedu-box">
            <Checkbox checked={isCurrentEdu} onChange={toggleCurrentEdu}>
              I currently study here.
            </Checkbox>
          </Box>
        </GridItem>

        <GridItem rowSpan={1} colSpan={2}>
          <Box mb="8px" className="qualification-type-box">
            <FormControl isRequired>
              <FormLabel mb="8px" textAlign="left">
                Qualification Type:
              </FormLabel>
              <Select
                placeholder="Select qualification type"
                value={qualificationType}
                onChange={handleQualificationTypeChange}
              >
                {qualificationTypes.map((qType, index) => (
                  <option key={index} value={qType}>
                    {qType}
                  </option>
                ))}
              </Select>
            </FormControl>
          </Box>
        </GridItem>

        <GridItem rowSpan={1} colSpan={2}>
          <Box mb="8px" className="field-of-study-box">
            <FormControl isRequired>
              <FormLabel mb="8px" textAlign="left">
                Field of Study:
              </FormLabel>
              <Select
                placeholder="Select field of study"
                value={fieldOfStudy}
                onChange={handleFieldOfStudyChange}
              >
                {fieldsOfStudy.map((field, index) => (
                  <option key={index} value={field}>
                    {field}
                  </option>
                ))}
              </Select>
            </FormControl>
          </Box>
        </GridItem>

        <GridItem rowSpan={1} colSpan={2}>
          <Box mb="8px">
            <Text mb="8px" textAlign="left">
              Institution Name: {institutionName}
            </Text>
            <Input
              value={institutionName}
              onChange={handleInstitutionNameChange}
              placeholder="Enter institution name"
              size="sm"
            />
          </Box>
        </GridItem>

        <GridItem rowSpan={1} colSpan={1}>
          <Box mb="8px">
            <Text mb="8px" textAlign="left">
              Year Attained:
            </Text>
            <DateInputYear
              selectedDate={yearAttained}
              onChange={handleYearAttainedChange}
              size="sm"
              disabled={isCurrentEdu}
              disabledStyle={disabledStyle}
              //  showYearPicker
              //  dateFormat="yyyy"
            />
          </Box>
        </GridItem>

        <GridItem rowSpan={1} colSpan={2}>
          <Box mb="8px">
            <Text mb="8px" textAlign="left">
              Qualification Name (optional): {qualificationName}
            </Text>
            <Input
              value={qualificationName}
              onChange={handleQualificationNameChange}
              placeholder="Enter qualification name"
              size="sm"
            />
          </Box>
        </GridItem>
      </Grid>

      <Button colorScheme="red" mt={5} onClick={handleSubmit}>
        Save
      </Button>
    </Box>
  );
}

export default EduDetails;
