import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  Button,
  ModalFooter,
  Grid,
  GridItem,
  Box,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

function PersonalDetailsEdit({ isOpen, closeModal, data, onSave }) {
  const [firstName, setFirstName] = useState(data.firstName || "");
  const [lastName, setLastName] = useState(data.lastName || "");
  const [pronoun, setPronoun] = useState(data.pronoun || "");
  const [additionalName, setAdditionalName] = useState(
    data.additionalName || ""
  );

  const handleSave = () => {
    const updatedData = {
      firstName,
      lastName,
      pronoun,
      additionalName,
    };
    console.log("Saving updated data:", updatedData);
    onSave(updatedData);
  };

  return (
    <Modal
      blockScrollOnMount={false}
      isOpen={isOpen}
      onClose={closeModal}
      size="xl"
    >
      <ModalOverlay>
        <ModalContent>
          <ModalHeader>Edit Personal Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
              <GridItem>
                <Box mb="8px" className="firstname-box">
                  <FormControl isRequired>
                    <FormLabel mb="8px" textAlign="left">
                      First Name:
                    </FormLabel>
                    <Input
                      name="firstName"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      size="sm"
                    />
                  </FormControl>
                </Box>
              </GridItem>

              <GridItem>
                <Box mb="8px" className="lastname-box">
                  <FormControl isRequired>
                    <FormLabel mb="8px" textAlign="left">
                      Last Name:
                    </FormLabel>
                    <Input
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      size="sm"
                    />
                  </FormControl>
                </Box>
              </GridItem>

              <GridItem>
                <Box mb="8px" className="pronoun-box">
                  <Text mb="8px" textAlign="left">
                    Pronoun:
                  </Text>
                  <Input
                    placeholder="Pronoun"
                    value={pronoun}
                    onChange={(e) => setPronoun(e.target.value)}
                    size="sm"
                  />
                </Box>
              </GridItem>

              <GridItem>
                <Box mb="8px">
                  <Text mb="8px" textAlign="left">
                    Additional Name:
                  </Text>
                  <Input
                    placeholder="Additional Name"
                    value={additionalName}
                    onChange={(e) => setAdditionalName(e.target.value)}
                    size="sm"
                  />
                </Box>
              </GridItem>
            </Grid>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={handleSave}>
              Save Changes
            </Button>
            <Button variant="outline" colorScheme="red" onClick={closeModal}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
}

export default PersonalDetailsEdit;
