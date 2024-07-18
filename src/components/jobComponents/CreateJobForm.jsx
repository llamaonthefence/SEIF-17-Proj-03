import { useState, useRef } from "react";
import { createJob } from "../../service/jobs";
import { uploadImage } from "../../service/cloudinary";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
  VStack,
  HStack,
  Image,
  Select,
  Flex,
  Tag,
  TagLabel,
  TagCloseButton,
} from "@chakra-ui/react";
import locations from "../../constants/locations";
import employmentTypes from "../../constants/employmenttypes";
import qualificationTypes from "../../constants/qualificationTypes";
import INDUSTRIES from "../../constants/industries";
import {
  companyTypes,
  companySizes,
  workArrangements,
  seniorities,
} from "../../constants/jobDetails";
import techstacks from "../../constants/techstacks";

function CreateJobForm() {
  const initialFormState = {
    industry: "",
    companyType: "",
    companyName: "",
    location: "",
    companySize: "",
    companyWebsite: "",
    image: null,
    title: "",
    workArrangement: "",
    employmentTeam: "",
    skills: "",
    jobOffers: "",
    responsibilities: "",
    requirements: "",
    salary: "",
    employmentType: "",
    certifications: "",
    descriptions: "",
    yoe: "",
    seniority: "",
    region: "",
  };

  const [formState, setFormState] = useState(initialFormState);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  function handleChange(evt) {
    const { name, value, files } = evt.target;
    if (name === "image") {
      const file = files[0];
      setFormState((prevState) => ({
        ...prevState,
        image: file,
      }));
      setImagePreview(URL.createObjectURL(file));
    } else {
      setFormState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      let imageUrl = "";
      if (formState.image) {
        imageUrl = await uploadImage(formState.image, "company_images");
      }
      await createJob({
        ...formState,
        image: imageUrl,
        skills: selectedSkills,
      });
      setFormState(initialFormState);
      setSelectedSkills([]); // Reset selected skills
      setImagePreview(null);
    } catch (error) {
      console.error("Error submitting job form:", error);
    }
  }

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleSkillChange = (e) => {
    const selectedSkill = e.target.value;
    if (!selectedSkills.includes(selectedSkill) && selectedSkills.length < 5) {
      setSelectedSkills([...selectedSkills, selectedSkill]);
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSelectedSkills(
      selectedSkills.filter((skill) => skill !== skillToRemove)
    );
  };
  return (
    <Box mx="auto" p={8}>
      <form
        id="job-form"
        autoComplete="off"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <VStack spacing={8} align="stretch">
          {/* First Container */}
          <Box bgColor="white" p={6} borderRadius="2xl" boxShadow="md">
            <FormLabel fontSize="2xl">Company Details</FormLabel>
            <HStack spacing={4} align="flex-start">
              <VStack spacing={4} align="stretch" flex="1">
                <HStack spacing={4} align="flex-start">
                  <FormControl id="industry" isRequired>
                    <FormLabel>Industry</FormLabel>
                    <Select
                      name="industry"
                      placeholder="Select industry"
                      value={formState.industry}
                      onChange={handleChange}
                      w="lg"
                    >
                      <option value="Other">Other</option>
                      {INDUSTRIES.map((industry) => (
                        <option key={industry} value={industry}>
                          {industry}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl id="companyType" isRequired>
                    <FormLabel>Company Type</FormLabel>
                    <Select
                      name="companyType"
                      placeholder="Select company type"
                      value={formState.companyType}
                      onChange={handleChange}
                      w="lg"
                    >
                      <option value="Other">Other</option>
                      {companyTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                </HStack>

                <HStack spacing={4} align="flex-start">
                  <FormControl id="companyName" isRequired>
                    <FormLabel>Company Name</FormLabel>
                    <Input
                      type="text"
                      name="companyName"
                      value={formState.companyName}
                      onChange={handleChange}
                    />
                  </FormControl>
                  <FormControl id="location" isRequired>
                    <FormLabel>Company HQ Location</FormLabel>
                    <Select
                      name="location"
                      value={formState.location}
                      placeholder="Select location type"
                      onChange={handleChange}
                      w="lg"
                    >
                      <option value="Other">Other</option>
                      {locations.map((location) => (
                        <option key={location} value={location}>
                          {location}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                </HStack>

                <HStack spacing={4} align="flex-start">
                  <FormControl id="companySize" isRequired>
                    <FormLabel>Company Size</FormLabel>
                    <Select
                      name="companySize"
                      placeholder="Select company size"
                      value={formState.companySize}
                      onChange={handleChange}
                    >
                      <option value="Other">Other</option>
                      {companySizes.map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl id="companyWebsite" isRequired>
                    <FormLabel>Company Website</FormLabel>
                    <Input
                      type="text"
                      name="companyWebsite"
                      value={formState.companyWebsite}
                      onChange={handleChange}
                    />
                  </FormControl>
                </HStack>
              </VStack>
              <VStack spacing={0} align="center" flex="1">
                <Box
                  boxSize="250px"
                  bgColor="whitesmoke"
                  borderStyle="dashed"
                  borderRadius="5%"
                  borderWidth="1px"
                  borderColor="lightgray"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  cursor="pointer"
                  onClick={handleImageClick}
                >
                  {imagePreview ? (
                    <Image
                      src={imagePreview}
                      alt="Preview"
                      boxSize="250px"
                      padding="20px"
                      objectFit="fit"
                    />
                  ) : (
                    <Box
                      boxSize="250px"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      Upload company logo
                    </Box>
                  )}
                </Box>
                <Input
                  type="file"
                  accept=".png, .jpg, .jpeg"
                  name="image"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleChange}
                />
              </VStack>
            </HStack>
          </Box>

          {/* Second Container */}
          <Box bgColor="white" p={6} borderRadius="2xl" boxShadow="md">
            <FormLabel fontSize="2xl">Job Details</FormLabel>
            <HStack spacing={4} align="flex-start">
              <VStack spacing={4} align="stretch" flex="1">
                <FormControl id="title" isRequired>
                  <FormLabel>Job Role</FormLabel>
                  <Input
                    type="text"
                    name="title"
                    value={formState.title}
                    onChange={handleChange}
                    w="2xl"
                  />
                </FormControl>
                <FormControl id="workArrangement" isRequired>
                  <FormLabel>Work Arrangement</FormLabel>
                  <Select
                    name="workArrangement"
                    placeholder="Select work arrangement"
                    value={formState.workArrangement}
                    onChange={handleChange}
                  >
                    <option value="Other">Other</option>
                    {workArrangements.map((arrange) => (
                      <option key={arrange} value={arrange}>
                        {arrange}
                      </option>
                    ))}
                  </Select>
                </FormControl>
                <FormControl id="employmentTeam" isRequired>
                  <FormLabel>Employment Team</FormLabel>
                  <Input
                    type="text"
                    name="employmentTeam"
                    value={formState.employmentTeam}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl id="skills">
                  <FormLabel>Skills</FormLabel>
                  <Select
                    name="skills"
                    placeholder="Select a skill"
                    value=""
                    onChange={handleSkillChange}
                  >
                    {techstacks.map((skill) => (
                      <option key={skill} value={skill}>
                        {skill}
                      </option>
                    ))}
                  </Select>

                  {/* Display selected skills as tags */}
                  <Flex mt={2} flexWrap="wrap">
                    {selectedSkills.map((skill) => (
                      <Tag
                        key={skill}
                        size="md"
                        borderRadius="full"
                        variant="solid"
                        colorScheme="red"
                        mr={2}
                        mb={2}
                      >
                        <TagLabel>{skill}</TagLabel>
                        <TagCloseButton
                          onClick={() => handleRemoveSkill(skill)}
                        />
                      </Tag>
                    ))}
                  </Flex>
                </FormControl>
                <FormControl id="employmentType" isRequired>
                  <FormLabel>Employment Type</FormLabel>
                  <Select
                    name="employmentType"
                    placeholder="Select employment type"
                    value={formState.employmentType}
                    onChange={handleChange}
                  >
                    <option value="Other">Other</option>
                    {employmentTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </Select>
                </FormControl>
                <FormControl id="certifications">
                  <FormLabel>Certifications</FormLabel>
                  <Select
                    name="certifications"
                    placeholder="Select certification"
                    value={formState.certifications}
                    onChange={handleChange}
                  >
                    <option value="Other">Other</option>
                    {qualificationTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </Select>
                </FormControl>
                <FormControl id="salary" isRequired>
                  <FormLabel>Salary</FormLabel>
                  <Input
                    type="number"
                    name="salary"
                    value={formState.salary}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl id="yoe" isRequired>
                  <FormLabel>Years of Experiences</FormLabel>
                  <Input
                    type="number"
                    name="yoe"
                    value={formState.yoe}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl id="seniority" isRequired>
                  <FormLabel>Seniority</FormLabel>
                  <Select
                    name="seniority"
                    placeholder="Select seniority"
                    value={formState.seniority}
                    onChange={handleChange}
                  >
                    <option value="Other">Other</option>
                    {seniorities.map((senior) => (
                      <option key={senior} value={senior}>
                        {senior}
                      </option>
                    ))}
                  </Select>
                </FormControl>
              </VStack>
              <VStack spacing={4} align="stretch" flex="1">
                <FormControl id="jobOffers" isRequired>
                  <FormLabel>What The Job Offers</FormLabel>
                  <Textarea
                    name="jobOffers"
                    value={formState.jobOffers}
                    onChange={handleChange}
                    h="150px"
                    w="3xl"
                  />
                </FormControl>
                <FormControl id="responsibilities" isRequired>
                  <FormLabel>Your Responsibilities</FormLabel>
                  <Textarea
                    name="responsibilities"
                    value={formState.responsibilities}
                    onChange={handleChange}
                    h="150px"
                  />
                </FormControl>
                <FormControl id="requirements" isRequired>
                  <FormLabel>Job Requirements</FormLabel>
                  <Textarea
                    name="requirements"
                    value={formState.requirements}
                    onChange={handleChange}
                    h="150px"
                  />
                </FormControl>
                <FormControl id="descriptions" isRequired>
                  <FormLabel>Job Descriptions</FormLabel>
                  <Textarea
                    name="descriptions"
                    value={formState.descriptions}
                    onChange={handleChange}
                    h="150px"
                  />
                </FormControl>
              </VStack>
            </HStack>
          </Box>

          <Button type="submit" colorScheme="red" variant="solid">
            Submit
          </Button>
        </VStack>
      </form>
    </Box>
  );
}

export default CreateJobForm;
