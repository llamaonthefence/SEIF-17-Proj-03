import { Box, Image, Button } from "@chakra-ui/react";
import PersonalDetails from "./PersonalDetails";
import ContactDetails from "./ContactDetails";
import GAExp from "./GAexperience";
import ProfilePicUpload from "./ProfilePic";
import WorkExp from "./WorkExp";
import EduExp from "./EducationExp";
import SkillsDetails from "./SkillsDetails";
import { useState } from "react";
import { uploadImage } from "../../api/cloudinary";

function ProfileSetting() {
  const [formData, setFormData] = useState({
    //Initialising form data state - email address should be pre-filled
    personalDetails: {
      firstName: "",
      lastName: "",
      pronoun: "",
      additionalName: "",
    },
    contactDetails: {},
    gaExperience: [],
    workExperience: [],
    educationExperience: [],
    profilePic: null,
    skills: "",
  });

  const handleImageUpload = async (file) => {
    try {
      const folder = "profile_pics"
      const imageURL = await uploadImage(file, folder);
      setFormData((prevFormData) => ({
        ...prevFormData, 
        profilePic: imageURL, 
      }));
    } catch (error) {
      console.error('Error uploading image:', error)
    }
  }


 const handleInputChange = (section, data) => {
    setFormData((prevFormData) => {
      if (Array.isArray(prevFormData[section])) {
        // If the existing section in formData is an array
        return {
          ...prevFormData,
          [section]: [...data], // Assuming data is always an array for array fields
        };
      } else if (typeof prevFormData[section] === "object") {
        // If the existing section in formData is an object (non-array)
        return {
          ...prevFormData,
          [section]: {
            ...prevFormData[section],
            ...data,
          },
        };
      } else {
        // If it's neither an array nor an object, handle accordingly
        console.warn(`Unknown data type for section ${section}`);
        return prevFormData; // Or handle the scenario based on your app logic
      }
    });
  };

  const handleSubmit = async () => {
    try {
      console.log(formData);
      const response = await fetch("http://localhost:3000/profile/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to save profile.");
      }

      const result = await response.json();
      alert("Profile saved.");
      console.log("Saved profile:", result);
    } catch (error) {
      console.error("Error saving profile:", error);
    }
  };

  const handleCancel = () => {
    window.location.reload();
  };

  return (
    <>
      {/* ProfileSetting Component */}
      <Box className="ProfileSetting" height="auto" alignContent="center">

        {/* Preview profile pic */}
        {formData.profilePic && (
          <Image src={formData.profilePic} alt="user-profile-picture"/>)}

        <ProfilePicUpload onUpload={handleImageUpload} />

        <PersonalDetails
          onChange={(data) => handleInputChange("personalDetails", data)}
        />

        <ContactDetails
          onChange={(data) => handleInputChange("contactDetails", data)}
        />

        <SkillsDetails onChange={(data) => handleInputChange("skills", data)} />

        <GAExp onChange={(data) => handleInputChange("gaExperience", data)} />

        <WorkExp
          onChange={(data) => handleInputChange("workExperience", data)}
        />

        <EduExp
          onChange={(data) => handleInputChange("educationExperience", data)}
        />

        <Box>
          <Button colorScheme="red" mt={5} onClick={handleSubmit}>
            Save
          </Button>
          <Button colorScheme="red" mt={5} onClick={handleCancel}>
            Cancel
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default ProfileSetting;
