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
} from "@chakra-ui/react";
import { useState } from "react";

function ContactDetailsEdit({ isOpen, closeModal, data, onSave }) {
  const [email, setEmail] = useState(data.email || "");
  const [githubLink, setGithubLink] = useState(data.githubLink || "");
  const [phone, setPhone] = useState(data.phone || "");
  const [website, setWebsite] = useState(data.website || "");

  const handleSave = () => {
    const updatedData = {
      email,
      githubLink,
      phone,
      website,
    };
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
          <ModalHeader>Edit Contact Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
              <GridItem>
                <Box mb="8px">
                  <FormControl isRequired>
                    <FormLabel mb="8px" textAlign="left">
                      Email:
                    </FormLabel>
                    <Input
                      name="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      size="sm"
                    />
                  </FormControl>
                </Box>
              </GridItem>

              <GridItem>
                <Box mb="8px">
                  <FormControl isRequired>
                    <FormLabel mb="8px" textAlign="left">
                      Github Link:
                    </FormLabel>
                    <Input
                      name="githubLink"
                      placeholder="Github Link"
                      value={githubLink}
                      onChange={(e) => setGithubLink(e.target.value)}
                      size="sm"
                    />
                  </FormControl>
                </Box>
              </GridItem>

              <GridItem>
                <Box mb="8px">
                  <FormControl isRequired>
                    <FormLabel mb="8px" textAlign="left">
                      Phone:
                    </FormLabel>
                    <Input
                      name="phone"
                      placeholder="Phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      size="sm"
                    />
                  </FormControl>
                </Box>
              </GridItem>

              <GridItem>
                <Box mb="8px">
                  <FormControl isRequired>
                    <FormLabel mb="8px" textAlign="left">
                      Website:
                    </FormLabel>
                    <Input
                      name="website"
                      placeholder="Website"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      size="sm"
                    />
                  </FormControl>
                </Box>
              </GridItem>
            </Grid>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={handleSave}>
              Save Changes
            </Button>
            <Button variant="outline" onClick={closeModal}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
}

export default ContactDetailsEdit;
