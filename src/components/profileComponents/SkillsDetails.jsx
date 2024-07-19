import {
  Box,
  Select,
  Flex,
  Tag,
  TagLabel,
  TagCloseButton,
  Heading,
} from "@chakra-ui/react";
import techstacks from "../../constants/techstacks";
import React, { useEffect } from "react";

function SkillsDetails({ onChange, userDetails, profileDetails }) {
  const [selectedSkills, setSelectedSkills] = React.useState([]);

  useEffect(() => {
    if (profileDetails && profileDetails.skills) {
      setSelectedSkills(profileDetails.skills);
    }
  }, [profileDetails]);

  const handleSkillChange = (e) => {
    const selectedSkill = e.target.value;
    if (!selectedSkills.includes(selectedSkill) && selectedSkills.length < 12) {
      const newSkills = [...selectedSkills, selectedSkill];
      setSelectedSkills(newSkills);
      onChange(newSkills);
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    const updatedSkills = selectedSkills.filter(
      (skill) => skill !== skillToRemove
    );
    setSelectedSkills(updatedSkills);
    onChange(updatedSkills);
  };

  return (
    <Box
      className="Skills-Details"
      w="90%"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
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
      >
        Skills Detail(s)
      </Heading>

      <Select
        name="skills"
        placeholder="Select a skill"
        value=""
        onChange={handleSkillChange}
      >
        {techstacks.map((skill) => (
          <option key={skill} value={skill}>
            {skill}
          </option>
        ))}
      </Select>

      {/* Display selected skills as tags */}
      <Flex mt={2} flexWrap="wrap">
        {selectedSkills.map((skill) => (
          <Tag
            key={skill}
            size="md"
            borderRadius="full"
            variant="solid"
            colorScheme="red"
            mr={2}
            mb={2}
          >
            <TagLabel>{skill}</TagLabel>
            <TagCloseButton onClick={() => handleRemoveSkill(skill)} />
          </Tag>
        ))}
      </Flex>
    </Box>
  );
}

export default SkillsDetails;
