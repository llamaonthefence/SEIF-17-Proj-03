// ProfilePic.jsx
import React, { useEffect } from "react";
import { Box, Center, Icon, Text, Input, Button, Flex } from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";

function ProfilePicUpload({ userDetails, profileDetails, onProfilePicChange }) {
  const [profilePic, setProfilePic] = React.useState(null);

  useEffect(() => {
    if (profileDetails && profileDetails.profilePic) {
      setProfilePic(profileDetails.profilePic);
    }
  }, [profileDetails]);

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file)); // Set preview of the selected file
      onProfilePicChange(file); // Pass the file to the parent
    }
  };

  return (
    <Flex alignItems="center" justifyContent="center">
      <Box
        position="relative"
        mt={10}
        pt={10}
        w="200px"
        h="200px"
        border="2px"
        borderStyle="dotted"
        borderColor="gray.300"
        borderRadius="50%"
        cursor="pointer"
        _hover={{ borderColor: "blue.300" }}
      >
        <Center w="100%" h="100%" position="absolute" top="0" left="0">
          {profilePic ? (
            <img
              src={profilePic}
              alt="Profile"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />
          ) : (
            <Icon as={FaUserCircle} boxSize="25%" color="gray.400" />
          )}
        </Center>

        <Text>Upload Profile Pic</Text>

        <Input
          type="file"
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          opacity="0"
          cursor="pointer"
          onChange={handleProfilePicChange}
        />
      </Box>
    </Flex>
  );
}

export default ProfilePicUpload;
