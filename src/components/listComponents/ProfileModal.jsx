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
} from "@chakra-ui/react";

function ProfileModal({
  isOpen,
  onClose,
  firstName,
  lastName,
  year,
  course,
  image,
  special,
  skills,
  languages,
  bio,
  data,
}) {
  return (
    // ProfileModal Component
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW="800px" maxH="800px">
        {/* Modal Close Button X */}
        <ModalCloseButton />

        <ModalBody align="center" padding="8">
          {/* Profile Image */}
          <Flex direction="column" align="center" mb={4} gap={4}>
            <Image
              src={image}
              alt={`${firstName} ${lastName}`}
              maxBlockSize="250px"
              borderRadius="50%"
            />

            {/* Profile Name and Job Specialist Title */}
            <Flex direction="column" align="center">
              <Text fontWeight="bold">
                {firstName} {lastName}
              </Text>
              <Text>{special}</Text>
            </Flex>

            {/* Email & Github Buttons */}
            <Flex direction="rows" gap={20}>
              <Button colorScheme="red" variant="outline" paddingX={100}>
                Email
              </Button>
              <Button colorScheme="red" variant="outline" paddingX={100}>
                Github
              </Button>
            </Flex>

            {/* Divider*/}
            <Divider />
          </Flex>

          <Flex direction="column" gap={4}>
            {/* Bio Compartment */}
            <Flex direction="column" align="start">
              <Text fontWeight="bold">About Me</Text>
              <Text>{bio}</Text>
            </Flex>

            {/* SkillsGrid Component */}
            <Flex direction="column">
              <Text fontWeight="bold" align="start">
                Skills
              </Text>
              <SkillsGrid skills={skills} />
            </Flex>

            {/* Course Detail */}
            <Flex direction="column" align="start">
              <Text fontWeight="bold">Course Attended</Text>
              <Text>{course}</Text>
            </Flex>

            {/* Year Attended */}
            <Flex direction="column" align="start">
              <Text fontWeight="bold">Year Attended</Text>
              <Text>{year}</Text>
            </Flex>
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
