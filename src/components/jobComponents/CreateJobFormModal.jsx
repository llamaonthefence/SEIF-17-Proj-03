import { useState, useRef } from "react";
import { createJob } from "../../service/jobs";
import { uploadImage } from "../../service/cloudinary";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
} from "@chakra-ui/react";

function CreateJobFormModal({ isOpen, closeModal }) {
  // Define folder name
  const folder = "company_images";

  // Create Form State
  const [formState, setFormState] = useState({
    title: "",
    description: "",
    company: "",
    location: "",
    image: null,
    skills: "",
    salary: "",
  });

  // Create a reference to manage interactions with the file input element
  const fileInputRef = useRef(null);

  // Handle Form State changes
  function handleChange(evt) {
    const { name, value, files } = evt.target;
    if (name === "image") {
      setFormState((prevState) => ({
        ...prevState,
        image: files[0], // store the file object directly in state
      }));
    } else {
      setFormState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  }

  // Handle form submission
  async function handleSubmit(evt) {
    try {
      evt.preventDefault();

      // Upload image to Cloudinary and return back image URL
      let imageUrl = "";
      if (formState.image) {
        imageUrl = await uploadImage(formState.image, folder);
      }

      // Upload user data to mongoDB
      await createJob({
        title: formState.title,
        description: formState.description,
        company: formState.company,
        location: formState.location,
        message: formState.message,
        image: imageUrl, // use the URL returned by Cloudinary
        skills: formState.skills.split(",").map((skill) => skill.trim()),
        salary: Number(formState.salary),
      });

      // Close Modal after success

      closeModal();
    } catch (error) {
      console.error("Error submitting job form:", error);
    }
  }

  // When chakraui Upload Image Button (<Button />) is clicked, the UGLY Upload Image Button (<Input />) is clicked as well
  // This is because I can't find a way to style the ugly default button, and I need that button
  // The form modal will appear after clicking the chakraui button
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      {/* CreateJobModal Component */}
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        className="CreateJobFormModal"
        size="2xl"
      >
        <ModalOverlay />
        <ModalContent>
          {/* Create Job Modal Header */}
          <ModalHeader>Create Post</ModalHeader>

          {/* Close Modal Button X */}
          <ModalCloseButton />

          {/* Modal Body */}
          <ModalBody>
            <form
              id="job-form"
              autoComplete="off"
              onSubmit={handleSubmit}
              encType="multipart/form-data"
            >
              {/* Title */}
              <FormControl id="title" isRequired>
                <FormLabel>Title</FormLabel>
                <Input type="text" name="title" onChange={handleChange} />
              </FormControl>

              {/* Description */}
              <FormControl id="description" isRequired>
                <FormLabel>Description</FormLabel>
                <Textarea
                  name="description"
                  onChange={handleChange}
                  h="150px"
                />
              </FormControl>

              {/* Company */}
              <FormControl id="company" isRequired>
                <FormLabel>Company</FormLabel>
                <Input type="text" name="company" onChange={handleChange} />
              </FormControl>

              {/* Location */}
              <FormControl id="location" isRequired>
                <FormLabel>Location</FormLabel>
                <Input type="text" name="location" onChange={handleChange} />
              </FormControl>

              {/* Upload Image Compartment */}
              <FormControl id="image" my={4}>
                <FormLabel>Upload Image (JPG/PNG)</FormLabel>
                {/* UGLY default Upload Image Button */}
                <Input
                  type="file"
                  accept=".png, .jpg, .jpeg"
                  name="image"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleChange}
                />
                {/* Upload Image Button */}
                <Button onClick={handleButtonClick} colorScheme="red">
                  Upload Image
                </Button>
              </FormControl>

              {/* Skills */}
              <FormControl id="skills" isRequired>
                <FormLabel>Skills (comma separated)</FormLabel>
                <Input type="text" name="skills" onChange={handleChange} />
              </FormControl>

              {/* Salary */}
              <FormControl id="salary" isRequired>
                <FormLabel>Salary</FormLabel>
                <Input type="number" name="salary" onChange={handleChange} />
              </FormControl>
            </form>
          </ModalBody>

          {/* Footer */}
          <ModalFooter>
            {/* Close Button */}
            <Button
              colorScheme="red"
              variant="outline"
              mr={3}
              onClick={closeModal}
            >
              Close
            </Button>

            {/* Submit Button */}
            <Button
              type="submit"
              form="job-form"
              colorScheme="red"
              variant="solid"
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CreateJobFormModal;
