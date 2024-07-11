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
import { JobDetailedCard } from "../index";

function ViewJobCardModal({ isOpen, closeModal, data }) {
  const isViewJobCardModal = true;
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
            <Box>
              <JobDetailedCard
                job={data}
                isViewJobCardModal={isViewJobCardModal}
              />
            </Box>
          </ModalBody>

          {/* Footer */}
          <ModalFooter>
            {/* Close Button */}
            <Button colorScheme="red" mr={3} onClick={closeModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ViewJobCardModal;
