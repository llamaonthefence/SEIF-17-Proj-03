import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { deleteJob } from "../../service/jobs";

function DeleteJobCardModal({ isOpen, closeModal, data }) {
  const handleDelete = async () => {
    try {
      const deleteJobData = {
        listing_id: data.listing_id,
      };
      const response = await deleteJob(deleteJobData);
      console.log("Job deletion response:", response);

      // Close modal after deletion
      closeModal();
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Delete Job</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          Are you sure you want to delete this job post?
          <br />
          This action cannot be undone.
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="red" mr={3} onClick={handleDelete}>
            Delete
          </Button>
          <Button colorScheme="red" variant="outline" onClick={closeModal}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default DeleteJobCardModal;
