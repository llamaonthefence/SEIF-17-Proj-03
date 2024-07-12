import {
  Flex,
  Select,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Spacer,
  Box,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

function OpportunitiesQueryBar() {
  const navigate = useNavigate();

  const handleNavigateCreatePost = () => {
    navigate("/opportunities/create-post");
  };

  const handleNavigateEditPost = () => {
    navigate("/opportunities/edit-post");
  };

  return (
    <>
      {/* OpportunitiesQueryBar Component */}
      <Flex bg="#F3F0E8">
        {/* Button & Dropdown Lists Components */}
        <Flex direction="columns" p={4}>
          <Flex spacing={4} gap={12}>
            {/* All types Dropdown */}
            <Select
              variant="outline"
              placeholder="All types"
              size="md"
              w="2xl"
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
              size="md"
              w="50%"
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
              size="md"
              w="50%"
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
              size="md"
              w="50%"
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
              size="md"
              w="50%"
              bg="white"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Flex>
        </Flex>
        <Spacer />
        <Box alignContent="center" pr={12}>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<GiHamburgerMenu />}
              variant="solid"
              size="md"
              bgColor="white"
              outlineWidth="1px"
              outlineColor="lightgray"
              outlineOffset="0px"
            />
            <MenuList>
              <MenuItem onClick={handleNavigateCreatePost}>
                Add new opportunity
              </MenuItem>
              <MenuItem onClick={handleNavigateEditPost}>
                Edit opportunity
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </>
  );
}

export default OpportunitiesQueryBar;
