import { useState, useRef, useEffect } from "react";
import { updateJob } from "../../service/jobs";
import { uploadImage } from "../../service/cloudinary";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
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
  Text,
} from "@chakra-ui/react";

function EditJobCardModal({ isOpen, closeModal, data }) {
  const folder = "company_images";
  const [formState, setFormState] = useState({
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
  });
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (data) {
      setFormState({
        industry: data.industry,
        companyType: data.companyType,
        companyName: data.companyName,
        location: data.location,
        companySize: data.companySize,
        companyWebsite: data.companyWebsite,
        image: data.image,
        title: data.title,
        workArrangement: data.workArrangement,
        employmentTeam: data.employmentTeam,
        skills: data.skills.join(", "),
        jobOffers: data.jobOffers,
        responsibilities: data.responsibilities,
        requirements: data.requirements,
        salary: data.salary,
        employmentType: data.employmentType,
        certifications: data.certifications,
      });
      setImagePreview(data.image);
    }
  }, [data]);

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
      let imageUrl = formState.image;
      if (formState.image && typeof formState.image !== "string") {
        imageUrl = await uploadImage(formState.image, folder);
      }
      const updatedJobData = {
        ...formState,
        image: imageUrl,
        skills: formState.skills.split(",").map((skill) => skill.trim()),
        listing_id: data.listing_id,
      };
      await updateJob(updatedJobData); // Ensure jobData object is passed correctly
      closeModal();
    } catch (error) {
      console.error("Error updating job:", error);
    }
  }

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal} size="6xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Job Details</ModalHeader>
        <ModalCloseButton />
        <ModalBody maxH="70vh" overflowY="auto">
          <Box mx="auto" p={4}>
            <form
              id="job-form"
              autoComplete="off"
              onSubmit={handleSubmit}
              encType="multipart/form-data"
            >
              {/* Image Container */}
              <VStack spacing={0} align="stretch">
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
                  <Text p={2}>Click to upload image</Text>
                </VStack>

                {/* Details Container */}
                <Box bgColor="white" p={6} borderRadius="2xl">
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
                          <Input
                            type="text"
                            name="location"
                            value={formState.location}
                            onChange={handleChange}
                          />
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
                  </HStack>
                </Box>

                {/* Second Container */}
                <Box bgColor="white" p={6} borderRadius="2xl">
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
                          <option value="Remote">Remote</option>
                          <option value="Hybrid">Hybrid</option>
                          <option value="Onsite">Onsite</option>
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
                    </VStack>

                    <VStack spacing={4} align="stretch" flex="1">
                      <FormControl id="skills" isRequired>
                        <FormLabel>Skillset</FormLabel>
                        <Input
                          type="text"
                          name="skills"
                          value={formState.skills}
                          onChange={handleChange}
                          placeholder="Separate skills with commas"
                          w="lg"
                        />
                      </FormControl>
                      <FormControl id="jobOffers" isRequired>
                        <FormLabel>What the Job Offers</FormLabel>
                        <Textarea
                          name="jobOffers"
                          value={formState.jobOffers}
                          onChange={handleChange}
                        />
                      </FormControl>
                    </VStack>
                  </HStack>

                  <HStack spacing={4} align="flex-start" mt={6}>
                    <VStack spacing={4} align="stretch" flex="1">
                      <FormControl id="responsibilities" isRequired>
                        <FormLabel>Your Responsibilities</FormLabel>
                        <Textarea
                          name="responsibilities"
                          value={formState.responsibilities}
                          onChange={handleChange}
                          placeholder="Describe responsibilities"
                          w="lg"
                        />
                      </FormControl>
                      <FormControl id="requirements" isRequired>
                        <FormLabel>Job Requirements</FormLabel>
                        <Textarea
                          name="requirements"
                          value={formState.requirements}
                          onChange={handleChange}
                          placeholder="Describe requirements"
                          w="lg"
                        />
                      </FormControl>
                    </VStack>

                    <VStack spacing={4} align="stretch" flex="1">
                      <FormControl id="salary">
                        <FormLabel>Salary</FormLabel>
                        <Input
                          type="text"
                          name="salary"
                          value={formState.salary}
                          onChange={handleChange}
                        />
                      </FormControl>
                      <FormControl id="employmentType">
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
                          <option value="Associate Degree">
                            Associate Degree
                          </option>
                          <option value="Bachelor's Degree">
                            Bachelor's Degree
                          </option>
                          <option value="Master's Degree">
                            Master's Degree
                          </option>
                          <option value="Doctorate">Doctorate</option>
                          <option value="Professional Certification">
                            Professional Certification
                          </option>
                          <option value="None">None</option>
                        </Select>
                      </FormControl>
                    </VStack>
                  </HStack>
                </Box>
              </VStack>
            </form>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="red" mr={3} onClick={handleSubmit}>
            Save Changes
          </Button>
          <Button colorScheme="red" variant="outline" onClick={closeModal}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default EditJobCardModal;
