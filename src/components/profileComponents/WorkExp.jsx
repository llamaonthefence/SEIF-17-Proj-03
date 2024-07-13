
import {Box, Heading, Button, Modal, ModalOverlay, ModalContent, ModalBody,ModalFooter, ModalHeader, ModalCloseButton} from "@chakra-ui/react";
import { useState } from "react";
import WorkDetails from "./WorkExpForm";
import WorkExpList from "./WorkExpList";



// import React from "react";


//using ChakraUI "controlled input"

function WorkExp() {
    // button to open workExp modal 
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [workExpList, setWorkExpList] = useState([]); 

    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    // const [workExpList, setWorkExpList] = React.useState([])

    const handleSaveWorkExp = (workExpItem) => {
        setWorkExpList([...workExpList, workExpItem]);
        closeModal();
    }

    // const handleWorkExpListChange = (event) => setWorkExpList(event.target.value)

    const handleEditWorkExp = (index) => {
        console.log("Edit work exp with index", index)
    }

    const handleDeleteWorkExp = (index) => {
        const updatedList = [...workExpList]
        updatedList.splice(index, 1);
        setWorkExpList(updatedList)
    }

    return (
        <Box 
        className="work-Experience"
        w="90%"
        borderWidth='1px'
        borderRadius='lg' 
        overflow='hidden'
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
        >Work Experience</Heading>

        {/* <Grid templateColumns='repeat(6, 1fr)'>

            <GridItem colSpan={6}>
            <Box mb="8px" className="workexp-box"> */}
                
                <WorkExpList workExpList={workExpList} handleEditWorkExp={handleEditWorkExp} handleDeleteWorkExp={handleDeleteWorkExp}/> 
                
                {/* <Box>
                    <EditIcon color='gray.300' mt="-8px" />
                    <DeleteIcon color='gray.300' mt="-8px" />
                </Box>
            </Box>
            </GridItem>

            <GridItem colSpan={1}>
            <Box mb="8px" className="icon-edit-box">
            <EditIcon color='gray.300' mt="-8px" />
            </Box>
            </GridItem>

            <GridItem colSpan={1}>
            <Box mb="8px" className="icon-del-box">
            <DeleteIcon color='gray.300' mt="-8px" />
            </Box>
            </GridItem>
        
        </Grid>  */}

        <Button 
        colorScheme='red' 
        size='sm'
        display='flex'
        w='80%'
        justifyContent='center'
        mt={2}
        style={ {marginLeft: "10%", marginRight: "10%"} }
        onClick={openModal}
        >
        Add Work Experience
        </Button>

        <Modal onClose={closeModal} isOpen={isModalOpen} isCentered>
        <ModalOverlay />
        <ModalContent 
        maxWidth='80%'>
          <ModalHeader>Work Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <WorkDetails onSave={handleSaveWorkExp}/>
          </ModalBody>
          <ModalFooter>
            {/* <Button colorScheme='red' mr={3} onClick={closeModal}>Save</Button> */}
            <Button variant='ghost' onClick={closeModal}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>


        </Box>
    )
}

export default WorkExp