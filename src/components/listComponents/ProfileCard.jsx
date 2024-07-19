import { ProfileModal } from "../index";
import { useState } from "react";
import { Image, Text, Heading, Flex, Box } from "@chakra-ui/react";

function ProfileCard({
  id,
  firstName,
  lastName,
  gaExperience,
  profilePic,
  pronoun,
  additionalName,
  email,
  githubLink,
  phone,
  website,
  workExperience,
  educationExperience,
  skills,
  listing_id,
  user_id,
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
          src={profilePic}
          alt={`${firstName} ${lastName}`}
          borderRadius="50%"
          p={2}
          boxSize="220px"
        />

        {/* Profile Details */}
        <Flex direction="column" align="center" gap="4" p={2}>
          <Heading size="sm">{`${firstName} ${lastName}`}</Heading>

          {gaExperience && gaExperience.length > 0 && (
            <Flex direction="column" align="center">
              {gaExperience.map((exp) => (
                <Text key={exp._id}>{`${exp.gaCourse} (${exp.gradYear})`}</Text>
              ))}
            </Flex>
          )}
        </Flex>
      </Box>

      {/* ProfileModal Component */}
      <ProfileModal
        isOpen={isModalOpen}
        onClose={closeModal}
        id={id}
        firstName={firstName}
        lastName={lastName}
        pronoun={pronoun}
        additionalName={additionalName}
        email={email}
        githubLink={githubLink}
        phone={phone}
        website={website}
        gaExperience={gaExperience}
        workExperience={workExperience}
        educationExperience={educationExperience}
        skills={skills}
        profilePic={profilePic}
        listing_id={listing_id}
        user_id={user_id}
      />
    </>
  );
}

export default ProfileCard;
