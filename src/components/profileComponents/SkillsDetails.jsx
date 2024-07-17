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
import React from "react";

function SkillsDetails({ onChange }) {
  const [selectedSkills, setSelectedSkills] = React.useState([]);

  const handleSkillChange = (e) => {
    const selectedSkill = e.target.value;
    if (!selectedSkills.includes(selectedSkill) && selectedSkills.length < 12) {
      setSelectedSkills([...selectedSkills, selectedSkill]);
      const skillsArray = [...selectedSkills, selectedSkill];
      console.log(skillsArray);
      onChange(skillsArray);
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    const updatedSkills = selectedSkills.filter(
      (skill) => skill !== skillToRemove
    );
    setSelectedSkills(updatedSkills);
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
