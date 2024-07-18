import { ProfileModal } from "../index";
import { useState } from "react";
import { Image, Text, Heading, Flex, Box } from "@chakra-ui/react";
function ProfileCard({
  id,
  firstName,
  lastName,
  year,
  course,
  image,
  specialist,
  skills,
  languages,
  bio,
  data,
}) {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <>
      {/* ProfileCard Component */}
      <Box
        className="ProfileCard"
        align="center"
        borderWidth="1px"
        borderRadius="15px"
        boxShadow="md"
        p="4"
        bg="whitesmoke"
        onClick={openModal}
        cursor="pointer"
        h="sm"
      >
        {/* Profile Picture */}
        <Image
          src={image}
          alt={`${firstName} ${lastName}`}
          borderRadius="50%"
          p={2}
          blockSize={200}
        />

        {/* Profile Details */}
        <Flex direction="column" align="center" gap="4" p={2}>
          <Heading size="sm">{`${firstName} ${lastName}`}</Heading>
          <Flex direction="row" gap="4">
            <Text>{course}</Text>
            <Text>{year}</Text>
          </Flex>
          <Text>{specialist}</Text>
        </Flex>
      </Box>

      {/* ProfileModal Component */}
      <ProfileModal
        isOpen={isModalOpen}
        onClose={closeModal}
        id={id}
        firstName={firstName}
        lastName={lastName}
        year={year}
        course={course}
        image={image}
        specialist={specialist}
        skills={skills}
        langagues={languages}
        bio={bio}
      />
    </>
  );
}

export default ProfileCard;
