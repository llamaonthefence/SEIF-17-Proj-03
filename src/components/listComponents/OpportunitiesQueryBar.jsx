import { useState } from "react";
import { Flex, Select, Button } from "@chakra-ui/react";
import { IoIosCreate } from "react-icons/io";
import { CreateJobFormModal } from "../index";

function OpportunitiesQueryBar() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* OpportunitiesFormModal Component */}
      <CreateJobFormModal isOpen={isOpen} closeModal={closeModal} />

      {/* OpportunitiesQueryBar Component */}
      <Flex bg="lightgray">
        {/* Button & Dropdown Lists Components */}
        <Flex direction="columns" p={8} gap={8}>
          <Button
            leftIcon={<IoIosCreate />}
            colorScheme="red"
            variant="solid"
            size="lg"
            onClick={openModal}
          >
            Create Post
          </Button>
          <Flex spacing={3} gap={8}>
            {/* All types Dropdown */}
            <Select
              variant="outline"
              placeholder="All types"
              size="lg"
              w={300}
              bg="white"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>

            {/* Paying $0 Dropdown */}
            <Select
              variant="outline"
              placeholder="Paying $0"
              size="lg"
              w={300}
              bg="white"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>

            {/* to $50k Dropdown */}
            <Select
              variant="outline"
              placeholder="to $50k+"
              size="lg"
              w={300}
              bg="white"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>

            {/* Listed anytime Dropdown */}
            <Select
              variant="outline"
              placeholder="Listed anytime"
              size="lg"
              w={300}
              bg="white"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>

            {/* Location Dropdown */}
            <Select
              variant="outline"
              placeholder="Location"
              size="lg"
              w={300}
              bg="white"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default OpportunitiesQueryBar;
