import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Box,
  Text,
  Button,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";

function JobCardModal({ isOpen, closeModal, data }) {
  return (
    <>
      {/* JobCardModal Component */}
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        className="JobCardModal"
        size="6xl"
      >
        <ModalOverlay />
        <ModalContent>
          {/* Job Modal Header */}
          <ModalHeader>Job Details</ModalHeader>

          {/* Close Modal Button X */}
          <ModalCloseButton />

          {/* Modal Body */}
          <ModalBody>
            <Box align="start">
              <Grid templateColumns="repeat(3, 1fr)" gap={4} px={4}>
                {/* Upload Image Compartment */}
                <GridItem colSpan={3} id="image" my={2} align="center">
                  <Image
                    src={data.image}
                    alt="Company Image"
                    maxBlockSize="200px"
                    borderRadius="50%"
                  />
                </GridItem>

                {/* Industry */}
                <GridItem>
                  <Box id="industry">
                    <Text fontWeight="600">Industry</Text>
                    <Text>{data.industry}</Text>
                  </Box>
                </GridItem>

                {/* Company Type */}
                <GridItem>
                  <Box id="companyType">
                    <Text fontWeight="600">Company Type</Text>
                    <Text>{data.companyType}</Text>
                  </Box>
                </GridItem>

                {/* Company */}
                <GridItem>
                  <Box id="companyName">
                    <Text fontWeight="600">Company Name</Text>
                    <Text>{data.companyName}</Text>
                  </Box>
                </GridItem>

                {/* Location */}
                <GridItem>
                  <Box id="location">
                    <Text fontWeight="600">Location</Text>
                    <Text>{data.location}</Text>
                  </Box>
                </GridItem>

                {/* Company Size */}
                <GridItem>
                  <Box id="companySize">
                    <Text fontWeight="600">Company Size</Text>
                    <Text>{data.companySize}</Text>
                  </Box>
                </GridItem>

                {/* Company Website */}
                <GridItem>
                  <Box id="companyWebsite">
                    <Text fontWeight="600">Company Website</Text>
                    <Text>{data.companyWebsite}</Text>
                  </Box>
                </GridItem>

                {/* Title */}
                <GridItem>
                  <Box id="title">
                    <Text fontWeight="600">Title</Text>
                    <Text>{data.title}</Text>
                  </Box>
                </GridItem>

                {/* Work Arrangement */}
                <GridItem>
                  <Box id="workArrangement">
                    <Text fontWeight="600">Work Arrangement</Text>
                    <Text>{data.workArrangement}</Text>
                  </Box>
                </GridItem>

                {/* Employment Team */}
                <GridItem>
                  <Box id="employmentTeam">
                    <Text fontWeight="600">Employment Team</Text>
                    <Text>{data.employmentTeam}</Text>
                  </Box>
                </GridItem>

                {/* Skills */}
                <GridItem>
                  <Box id="skills">
                    <Text fontWeight="600">Skills</Text>
                    <Text>{data.skills ? data.skills.join(", ") : ""}</Text>
                  </Box>
                </GridItem>

                {/* Job Offers */}
                <GridItem>
                  <Box id="jobOffers">
                    <Text fontWeight="600">Job Offers</Text>
                    <Text>{data.jobOffers}</Text>
                  </Box>
                </GridItem>

                {/* Responsibilities */}
                <GridItem>
                  <Box id="responsibilities">
                    <Text fontWeight="600">Responsibilities</Text>
                    <Text>{data.responsibilities}</Text>
                  </Box>
                </GridItem>

                {/* Requirements */}
                <GridItem>
                  <Box id="requirements">
                    <Text fontWeight="600">Requirements</Text>
                    <Text>{data.requirements}</Text>
                  </Box>
                </GridItem>

                {/* Employment Type */}
                <GridItem>
                  <Box id="employmentType">
                    <Text fontWeight="600">Employment Type</Text>
                    <Text>{data.employmentType}</Text>
                  </Box>
                </GridItem>

                {/* Certifications */}
                <GridItem>
                  <Box id="certifications">
                    <Text fontWeight="600">Certifications</Text>
                    <Text>{data.certifications}</Text>
                  </Box>
                </GridItem>

                {/* Salary */}
                <GridItem>
                  <Box id="salary">
                    <Text fontWeight="600">Salary</Text>
                    <Text>{data.salary}</Text>
                  </Box>
                </GridItem>

                {/* Description */}
                <GridItem>
                  <Box id="description">
                    <Text fontWeight="600">Description</Text>
                    <Text>{data.description}</Text>
                  </Box>
                </GridItem>

                {/* Date Posted */}
                <GridItem>
                  <Box id="datePosted">
                    <Text fontWeight="600">Date Posted</Text>
                    <Text>
                      {new Date(data.date_posted).toLocaleDateString()}
                    </Text>
                  </Box>
                </GridItem>
              </Grid>
            </Box>
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
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default JobCardModal;
