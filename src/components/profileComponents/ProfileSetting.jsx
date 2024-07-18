import { Box, Image, Button } from "@chakra-ui/react";
import PersonalDetails from "./PersonalDetails";
import ContactDetails from "./ContactDetails";
import GAExp from "./GAexperience";
import ProfilePicUpload from "./ProfilePic";
import WorkExp from "./WorkExp";
import EduExp from "./EducationExp";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
// import { getProfile } from "../../api/profiles";

function ProfileSetting() {
  const navigate = useNavigate(); 
  // const {listing_id} = useParams()

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
  });

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
          }
        }
      } else {
        // If it's neither an array nor an object, handle accordingly
        console.warn(`Unknown data type for section ${section}`);
        return prevFormData; 
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

      //Redirect to profile page with newly created listing_id
      const newListingId = result.listing_id

      //URL suffix using object_id
      navigate(`/profile/${newListingId}`, {state: { listing_id: newListingId} })

    } catch (error) {
      console.error("Error saving profile:", error);
    }
  };

  //Runs getProfile on mount - should not. 
  // useEffect(() => {
  //   const fetchProfileData = async() => {
  //     try {
  //       const data = await getProfile(listing_id);
  //       setFormData(data);
  //     } catch(error) {
  //       console.error('Error fetching profile data', error)
  //     }
  //   }
  //   fetchProfileData();
  // }, [listing_id])


  const handleCancel = () => {
    window.location.reload();
  };

  return (
    <>
      {/* ProfileSetting Component */}
      <Box className="ProfileSetting" height="720px" alignContent="center">
        <Image />
        <ProfilePicUpload
          onChange={(data) => handleInputChange("profilePic", data)}
        />
        <PersonalDetails
          onChange={(data) => handleInputChange("personalDetails", data)}
        />
        <ContactDetails
          onChange={(data) => handleInputChange("contactDetails", data)}
        />
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
