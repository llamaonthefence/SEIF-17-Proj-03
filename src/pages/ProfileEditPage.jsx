import { useState, useEffect } from "react";
import {
  Box,
  Image,
  Button,
  Heading,
  Grid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import ContactDetails from "../components/profileComponents/ContactDetails";
import GAExp from "../components/profileComponents/GAexperience";
import ProfilePicUpload from "../components/profileComponents/ProfilePic";
import WorkExp from "../components/profileComponents/WorkExp";
import EduExp from "../components/profileComponents/EducationExp";
import SkillsDetails from "../components/profileComponents/SkillsDetails";
import { useNavigate, useParams } from "react-router-dom";
import { updateProfile, getUserProfile } from "../service/profiles"; // Import the new getUserProfile function
import { uploadImage } from "../api/cloudinary";

function ProfileEditPage() {
  const { listing_id } = useParams(); // Access listing_id from URL params
  const [formData, setFormData] = useState({
    personal_details: {
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

  const [imagePreview, setImagePreview] = useState(null);
  const [selectedSkills, setSelectedSkills] = useState([]);

  const fetchProfile = async () => {
    try {
      const data = await getUserProfile(listing_id); // Fetch profile data using getUserProfile
      console.log("Fetched Data:", data);

      setFormData({
        personal_details: {
          firstName: data.personal_details.firstName,
          lastName: data.personal_details.lastName,
          pronoun: data.personal_details.pronoun,
          additionalName: data.personal_details.additionalName,
        },
        contactDetails: {
          email: data.email || "",
          phone: data.phone || "",
          address: data.address || "",
        },
        gaExperience: data.gaExperience || [],
        workExperience: data.workExperience || [],
        educationExperience: data.educationExperience || [],
        profilePic: data.profilePic || null,
        skills: data.skills || "",
      });
      setImagePreview(data.profilePic);
      setSelectedSkills(data.skills || []);
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [listing_id]);

  const handleChange = (evt) => {
    const { name, value, files } = evt.target;
    if (name === "profilePic") {
      const file = files[0];
      setFormData((prevState) => ({
        ...prevState,
        profilePic: file,
      }));
      setImagePreview(URL.createObjectURL(file));
    } else {
      console.log("Change Event:", name, value); // Log the change event

      setFormData((prevState) => {
        const [section, key] = name.split(".");
        if (section && key) {
          return {
            ...prevState,
            [section]: {
              ...prevState[section],
              [key]: value,
            },
          };
        } else {
          return {
            ...prevState,
            [name]: value,
          };
        }
      });
    }
  };

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      let imageUrl = formData.image;
      if (formData.image && typeof formData.image !== "string") {
        imageUrl = await uploadImage(formData.image);
      }
      const updatedProfileData = {
        ...formData,
        image: imageUrl,
        skills: selectedSkills,
        listing_id: listing_id,
      };

      console.log("Submitting Data:", updatedProfileData); // Log the data before submitting

      await updateProfile(updatedProfileData); // Ensure profileData object is passed correctly
      window.location.reload();
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  }

  const handleCancel = () => {
    window.location.reload(); // Refresh the page or handle as needed
  };

  return (
    <Box className="ProfileSetting" height="auto" alignContent="center">
      {/* Preview profile pic */}
      {formData.profilePic && (
        <Image src={formData.profilePic} alt="user-profile-picture" />
      )}

      <ProfilePicUpload src={imagePreview} />

      <Box
        className="personal-details"
        w="90%"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        m={10}
        p={5}
        position="relative"
      >
        <Heading
          as="h3"
          size="md"
          mb={4}
          fontFamily="heading"
          fontWeight="bold"
          textAlign="left"
        >
          Personal Details
        </Heading>

        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          <GridItem>
            <Box mb="8px" className="firstname-box">
              <FormControl isRequired>
                <FormLabel mb="8px" textAlign="left">
                  First Name:
                </FormLabel>
                <Input
                  name="personal_details.firstName"
                  value={formData.personal_details.firstName}
                  onChange={handleChange}
                  placeholder="Enter First Name"
                  size="sm"
                />
              </FormControl>
            </Box>
          </GridItem>

          <GridItem>
            <Box mb="8px" className="lastname-box">
              <FormControl isRequired>
                <FormLabel mb="8px" textAlign="left">
                  Last Name:
                </FormLabel>
                <Input
                  name="personal_details.lastName"
                  value={formData.personal_details.lastName}
                  onChange={handleChange}
                  placeholder="Enter Last Name"
                  size="sm"
                />
              </FormControl>
            </Box>
          </GridItem>

          <GridItem>
            <Box mb="8px" className="pronoun-box">
              <FormControl>
                <FormLabel mb="8px" textAlign="left">
                  Pronoun:
                </FormLabel>
                <Input
                  name="personal_details.pronoun"
                  value={formData.personal_details.pronoun}
                  onChange={handleChange}
                  placeholder="Enter Pronoun"
                  size="sm"
                />
              </FormControl>
            </Box>
          </GridItem>

          <GridItem>
            <Box mb="8px" className="additionalname-box">
              <FormControl>
                <FormLabel mb="8px" textAlign="left">
                  Additional Name:
                </FormLabel>
                <Input
                  name="personal_details.additionalName"
                  value={formData.personal_details.additionalName}
                  onChange={handleChange}
                  placeholder="Enter Additional Name"
                  size="sm"
                />
              </FormControl>
            </Box>
          </GridItem>
        </Grid>
      </Box>

      {/* <ContactDetails value={formData.contactDetails}/>

      <SkillsDetails  value={formData.skills}/>

      <GAExp  value={formData.gaExperience}/>

      <WorkExp  value={formData.workExperience}/>

      <EduExp value={formData.educationExperience}/> */}

      <Box>
        <Button colorScheme="red" mt={5} onClick={handleSubmit}>
          Save
        </Button>
        <Button colorScheme="red" mt={5} onClick={handleCancel}>
          Cancel
        </Button>
      </Box>
    </Box>
  );
}

export default ProfileEditPage;
