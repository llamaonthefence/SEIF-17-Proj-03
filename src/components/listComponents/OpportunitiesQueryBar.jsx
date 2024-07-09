import {
  Flex,
  Select,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
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
        <Flex direction="columns" p={8}>
          <Flex spacing={3} gap={14}>
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
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<GiHamburgerMenu />}
                variant="solid"
                size="lg"
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
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default OpportunitiesQueryBar;
