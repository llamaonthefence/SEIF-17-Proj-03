import { Box, Image } from "@chakra-ui/react";
import PersonalDetails from "./PersonalDetails";
import ContactDetails from "./ContactDetails";
import GAExp from "./GAexperience";
import ProfilePicUpload from "./ProfilePic";

function ProfileSetting() {
  return (
    <>
      {/* ProfileSetting Component */}
      <Box className="ProfileSetting" height="720px" alignContent="center">
        <Image /> 
        <ProfilePicUpload /> 
        <PersonalDetails />
        <ContactDetails />
        <GAExp />
        <Box className="skills-box"></Box>
        <Box className="education-box"></Box>
      </Box>
    </>
  );
}

export default ProfileSetting;

