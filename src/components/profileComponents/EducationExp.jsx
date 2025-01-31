import { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalCloseButton,
} from "@chakra-ui/react";
import EduDetails from "./EducationExpForm";
import EduExpList from "./EducationExpList";

function EduExp({ onChange, profileDetails }) {
  // open EducationExp modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  // render EducationExp list
  const [eduExpList, setEduExpList] = useState([]);

  useEffect(() => {
    onChange(eduExpList);
  }, [eduExpList]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSaveEduExp = (eduExpItem) => {
    setEduExpList((prevList) => [...prevList, eduExpItem]);
    closeModal();
  };

  const handleEditEduExp = (index) => {
    console.log("Edit edu exp with index", index);
  };

  const handleDeleteEduExp = (index) => {
    setEduExpList((prevList) => {
      const updatedList = [...prevList];
      updatedList.splice(index, 1);
      return updatedList;
    });
  };

  return (
    <Box
      className="work-Experience"
      w="90%"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      m={10}
      p={5}
    >
      <Heading
        as="h3"
        size="md"
        mb={4}
        fontFamily="heading"
        fontWeight="bold"
        textAlign="left"
      >
        Education Experience
      </Heading>

      <EduExpList
        eduExpList={eduExpList}
        handleEditEduExp={handleEditEduExp}
        handleDeleteEduExp={handleDeleteEduExp}
        profileDetails={profileDetails}
        setEduExpList={setEduExpList}
      />

      <Button
        colorScheme="red"
        size="sm"
        display="flex"
        w="80%"
        justifyContent="center"
        mt={2}
        style={{ marginLeft: "10%", marginRight: "10%" }}
        onClick={openModal}
      >
        Add Education Experience
      </Button>

      <Modal onClose={closeModal} isOpen={isModalOpen} isCentered>
        <ModalOverlay />
        <ModalContent maxWidth="80%">
          <ModalHeader>Education Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <EduDetails onSave={handleSaveEduExp} />
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={closeModal}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default EduExp;
