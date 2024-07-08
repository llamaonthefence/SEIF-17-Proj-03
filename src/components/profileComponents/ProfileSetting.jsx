import { Box, Image } from "@chakra-ui/react";
import PersonalDetails from "./PersonalDetails";
import ContactDetails from "./ContactDetails";

function ProfileSetting() {
  return (
    <>
      {/* ProfileSetting Component */}
      <Box className="ProfileSetting" height="720px" alignContent="center">
        <Image /> 
        <PersonalDetails />
        <ContactDetails />
        <Box className="experience-box"></Box>
        <Box className="skills-box"></Box>
        <Box className="education-box"></Box>
      </Box>
    </>
  );
}

export default ProfileSetting;

