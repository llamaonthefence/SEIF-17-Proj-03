import { SkillsGrid } from "../index";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Image,
  Divider,
  Flex,
  Box,
} from "@chakra-ui/react";

function ProfileModal({
  isOpen,
  onClose,
  firstName,
  lastName,
  pronoun, // Assuming pronoun is used for job title or special
  profilePic,
  skills,
  bio, // Ensure you have a bio field or adjust accordingly
  email,
  githubLink,
  phone,
  website,
  gaExperience,
  workExperience,
  educationExperience,
}) {
  return (
    // ProfileModal Component
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent maxW="800px" maxH="80vh" overflow="hidden">
        {/* Modal Close Button X */}
        <ModalCloseButton />

        <ModalBody
          align="center"
          padding="8"
          overflowY="auto" // Enable vertical scrolling
        >
          <Flex direction="column" align="center" mb={4} gap={4}>
            {/* Profile Image */}
            <Image
              src={profilePic}
              alt={`${firstName} ${lastName}`}
              maxBlockSize="250px"
              borderRadius="50%"
            />

            {/* Profile Name and Job Specialist Title */}
            <Flex direction="column" align="center">
              <Text fontWeight="bold">
                {firstName} {lastName}
              </Text>
              <Text>{pronoun}</Text> {/* Update if 'special' is different */}
            </Flex>

            {/* Email & Github Buttons */}
            <Flex direction="row" gap={4}>
              <Button
                colorScheme="red"
                variant="outline"
                onClick={() => (window.location.href = `mailto:${email}`)}
              >
                Email
              </Button>
              <Button
                colorScheme="red"
                variant="outline"
                onClick={() => (window.location.href = githubLink)}
              >
                Github
              </Button>
            </Flex>

            {/* Divider */}
            <Divider />
          </Flex>

          <Flex direction="column" gap={4}>
            {/* Bio Compartment */}
            {/* <Flex direction="column" align="start">
              <Text fontWeight="bold">About Me</Text>
              <Text>{bio}</Text>
            </Flex> */}

            {/* SkillsGrid Component */}
            <Flex direction="column">
              <Text fontWeight="bold" align="start">
                Skills
              </Text>
              <SkillsGrid skills={skills} />
            </Flex>

            {/* GA Experience */}
            {gaExperience && gaExperience.length > 0 && (
              <Flex direction="column" align="start">
                <Text fontWeight="bold">GA Experience</Text>
                {gaExperience.map((exp) => (
                  <Text
                    key={exp._id}
                  >{`${exp.gaCourse} (${exp.gradYear})`}</Text>
                ))}
              </Flex>
            )}

            {/* Work Experience */}
            {workExperience && workExperience.length > 0 && (
              <Flex direction="column" align="start">
                <Text fontWeight="bold">Work Experience</Text>
                {workExperience.map((work) => (
                  <Box
                    key={work._id}
                    p={2}
                    borderWidth="1px"
                    borderRadius="8px"
                  >
                    <Text fontWeight="bold">{work.companyName}</Text>
                    <Text>{work.jobTitle}</Text>
                    <Text>{work.specialisation}</Text>
                    <Text>{`${work.fromDate} - ${
                      work.toDate || "Present"
                    }`}</Text>
                    <Text>{work.industry}</Text>
                    <Text>{work.employmentType}</Text>
                    <Text>{work.workDescription}</Text>
                  </Box>
                ))}
              </Flex>
            )}

            {/* Education Experience */}
            {educationExperience && educationExperience.length > 0 && (
              <Flex direction="column" align="start">
                <Text fontWeight="bold">Education Experience</Text>
                {educationExperience.map((edu) => (
                  <Box key={edu._id} p={2} borderWidth="1px" borderRadius="8px">
                    <Text fontWeight="bold">{edu.institutionName}</Text>
                    <Text>{edu.qualificationType}</Text>
                    <Text>{edu.fieldOfStudy}</Text>
                    <Text>{edu.qualificationName}</Text>
                    <Text>{edu.yearAttained}</Text>
                  </Box>
                ))}
              </Flex>
            )}
          </Flex>
        </ModalBody>

        {/* Close Modal Button (bottom) */}
        <ModalFooter>
          <Button
            colorScheme="red"
            size="lg"
            maxW="200px"
            w="150px"
            mr={3}
            onClick={onClose}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ProfileModal;
