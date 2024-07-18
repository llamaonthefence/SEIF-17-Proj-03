
import {Box, Heading, Button, Modal, ModalOverlay, ModalContent, ModalBody,ModalFooter, ModalHeader, ModalCloseButton} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import WorkDetails from "./WorkExpForm";
import WorkExpList from "./WorkExpList";
import { v4 as uuidv4 } from 'uuid'

//using ChakraUI "controlled input"

function WorkExp({onChange}) {
    // button to open workExp modal - start with closed modal
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [workExperienceList, setWorkExperienceList] = useState([]);

    // const [editIndex, setEditIndex] = useState(-1); //To track index of modal being edited. 
    // const [currentWorkExp, setCurrentWorkExp] = useState(null);

    useEffect(() => {
      onChange(workExperienceList)
    }, [workExperienceList])

    const openModal = () => {
      setIsModalOpen(true)
      // setCurrentWorkExp(null)
      // setEditIndex(-1)
    }

    const closeModal = () => {
      setIsModalOpen(false)
      // setEditIndex(-1)  
    }

    const handleSaveWorkExp = (workExpItem) => {

      // setWorkExperienceList(prevList => {
      //       const updatedList = [...prevList, workExpItem];
      //       // onChange(updatedList);
      //       return updatedList;
          // })
      setWorkExperienceList(prevList => [...prevList, workExpItem])

    //     // if (editIndex !== -1) {
    //     //   //Function to edit existing item
    //     //   const updatedList = [...workExpList];
    //     //   updatedList[editIndex] = workExpItem;
    //     //   //Use callback fn to get updatedList because async state update of list.
    //     //   setWorkExpList(updatedList, () => {
    //     //     onChange(updatedList)
    //     //   }); 
    //     // } else {
    //     // // If not existing item, add new item
    //     // const newItem = { ...workExpItem, id: uuidv4() } 
    //     // const updatedList = [...workExpList, newItem]
    //     // setWorkExpList(updatedList, () => {
    //     //   onChange(updatedList) //Notify parent - ProfileSetting.jsx of changes
    //     // });
    //     // }
            closeModal();
    //     // onChange(workExpList) 
    }

    // const handleWorkExpListChange = (event) => setWorkExpList(event.target.value)

    // const handleEditWorkExp = (index) => {
    //     // Set editIndex to the idx of item being edited
    //     setEditIndex(index)
    //     setCurrentWorkExp(workExpList[index]) 
    //     setIsModalOpen(true); 
    // }

    const handleDeleteWorkExp = (index) => {
        // const updatedList = [...workExperienceList]
        // updatedList.splice(index, 1);
        // setWorkExperienceList(updatedList)
        // onChange(updatedList); //Notify parent - ProfileSetting.jsx of changes

        setWorkExperienceList(prevList => {
          const updatedList = [...prevList]
          updatedList.splice(index, 1)
          return updatedList
        })


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
                {/* <WorkDetails onSave={handleSaveWorkExp} />  */}
                 <WorkExpList 
                 workExpList={workExperienceList} 
                //  handleEditWorkExp={handleEditWorkExp} 
                 handleDeleteWorkExp={handleDeleteWorkExp}/> 
                
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
            <WorkDetails 
            onSave={handleSaveWorkExp}
            // workExpItem={currentWorkExp}
            />
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