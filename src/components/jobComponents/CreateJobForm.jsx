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
} from "@chakra-ui/react";

function CreateJobForm() {
  const folder = "company_images";
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
        imageUrl = await uploadImage(formState.image, folder);
      }
      await createJob({
        ...formState,
        image: imageUrl,
        skills: formState.skills.split(",").map((skill) => skill.trim()),
      });
      setFormState(initialFormState);
      setImagePreview(null);
    } catch (error) {
      console.error("Error submitting job form:", error);
    }
  }

  const handleImageClick = () => {
    fileInputRef.current.click();
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
                      value={formState.industry}
                      onChange={handleChange}
                      w="lg"
                    >
                      <option value="">Select industry</option>
                      <option value="Technology">Technology</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Finance">Finance</option>
                      <option value="Education">Education</option>
                      <option value="Retail">Retail</option>
                      <option value="Other">Other</option>
                    </Select>
                  </FormControl>
                  <FormControl id="companyType" isRequired>
                    <FormLabel>Company Type</FormLabel>
                    <Select
                      name="companyType"
                      value={formState.companyType}
                      onChange={handleChange}
                      w="lg"
                    >
                      <option value="">Select company type</option>
                      <option value="Startup">Startup</option>
                      <option value="SME">SME</option>
                      <option value="Corporation">Corporation</option>
                      <option value="Nonprofit">Nonprofit</option>
                      <option value="Government">Government</option>
                      <option value="Other">Other</option>
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
                      onChange={handleChange}
                      w="lg"
                    >
                      <option value="">Select location type</option>
                      <option value="Singapore">Singapore</option>
                      <option value="Southeast Asia">Southeast Asia</option>
                      <option value="East Asia">East Asia</option>
                      <option value="North America">North America</option>
                      <option value="Europe">Europe</option>
                      <option value="Other">Other</option>
                    </Select>
                  </FormControl>
                </HStack>

                <HStack spacing={4} align="flex-start">
                  <FormControl id="companySize" isRequired>
                    <FormLabel>Company Size</FormLabel>
                    <Select
                      name="companySize"
                      value={formState.companySize}
                      onChange={handleChange}
                    >
                      <option value="">Select company size</option>
                      <option value="1-10">1-10</option>
                      <option value="11-50">11-50</option>
                      <option value="51-200">51-200</option>
                      <option value="201-500">201-500</option>
                      <option value="501-1000">501-1000</option>
                      <option value="1000+">1000+</option>
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
                      objectFit="cover"
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
                    w="lg"
                  />
                </FormControl>
                <FormControl id="workArrangement" isRequired>
                  <FormLabel>Work Arrangement</FormLabel>
                  <Select
                    name="workArrangement"
                    value={formState.workArrangement}
                    onChange={handleChange}
                  >
                    <option value="">Select work arrangement</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="Work From Home">Work From Home</option>
                    <option value="On-Site">On-Site</option>
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
                <FormControl id="skills" isRequired>
                  <FormLabel>Skillsets (comma separated)</FormLabel>
                  <Input
                    type="text"
                    name="skills"
                    value={formState.skills}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl id="employmentType" isRequired>
                  <FormLabel>Employment Type</FormLabel>
                  <Select
                    name="employmentType"
                    value={formState.employmentType}
                    onChange={handleChange}
                  >
                    <option value="">Select employment type</option>
                    <option value="Contract">Contract</option>
                    <option value="Permanent">Permanent</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Full-Time">Full-Time</option>
                    <option value="Temporary">Temporary</option>
                    <option value="Internship">Internship</option>
                  </Select>
                </FormControl>
                <FormControl id="certifications">
                  <FormLabel>Certifications</FormLabel>
                  <Select
                    name="certifications"
                    value={formState.certifications}
                    onChange={handleChange}
                  >
                    <option value="">Select certification</option>
                    <option value="High School Diploma">
                      High School Diploma
                    </option>
                    <option value="Associate Degree">Associate Degree</option>
                    <option value="Bachelor's Degree">Bachelor's Degree</option>
                    <option value="Master's Degree">Master's Degree</option>
                    <option value="Doctorate">Doctorate</option>
                    <option value="Professional Certification">
                      Professional Certification
                    </option>
                    <option value="None">None</option>
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
                    value={formState.seniority}
                    onChange={handleChange}
                  >
                    <option value="">Select seniority</option>
                    <option value="Fresh Graduate">Fresh Graduate</option>
                    <option value="Entry Level">Entry Level</option>
                    <option value="Junior Level">Junior Level</option>
                    <option value="Mid Level">Mid Level</option>
                    <option value="Senior Level">Senior Level</option>
                    <option value="Lead Level">Lead Level</option>
                    <option value="None">None</option>
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
