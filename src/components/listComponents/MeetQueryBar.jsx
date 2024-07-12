import {
  Input,
  Stack,
  InputGroup,
  InputLeftElement,
  Text,
  Flex,
  Select,
  Spacer,
} from "@chakra-ui/react";
import { GoSearch } from "react-icons/go";

function MeetQueryBar() {
  return (
    <>
      {/* MeetQueryBar Component */}
      <Flex>
        {/* Query Components */}
        <Flex direction="columns" p={8} gap={8}>
          {/* Explore People Text */}
          <Stack justifyContent="center">
            <Text fontSize="3xl">Explore People</Text>
          </Stack>

          {/* Search Bar */}
          <Stack spacing={4}>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <GoSearch />
              </InputLeftElement>
              <Input placeholder="Search" size="lg" w={600} boxShadow="inner" />
            </InputGroup>
          </Stack>

          {/* Dropdown Lists */}
          <Flex spacing={3} gap={8}>
            {/* Sort Dropdown */}
            <Select variant="outline" placeholder="Sort" size="lg" w={300}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>

            {/* Filter Dropdown */}
            <Select variant="outline" placeholder="Filter" size="lg" w={300}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Flex>
        </Flex>

        {/* Spacer */}
        <Spacer />

        {/* See all */}
        <Stack justifyContent="center" paddingRight={8}>
          <Text fontSize="1xl">See all</Text>
        </Stack>
      </Flex>
    </>
  );
}

export default MeetQueryBar;
