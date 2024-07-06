import { Flex, Select } from "@chakra-ui/react";

function OpportunitiesQueryBar() {
  return (
    <>
      {/* OpportunitiesQueryBar Component */}
      <Flex bg="lightgray">
        {/* Dropdown Lists Components */}
        <Flex direction="columns" p={8} gap={8}>
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
