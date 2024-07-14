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
  Text,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

function OpportunitiesQueryBar({ filters, setFilters, onClearFilters }) {
  const navigate = useNavigate();

  const handleNavigateCreatePost = () => {
    navigate("/opportunities/create-post");
  };

  const handleNavigateEditPost = () => {
    navigate("/opportunities/edit-post");
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <>
      {/* OpportunitiesQueryBar Component */}
      <Flex bg="#F3F0E8">
        {/* Button & Dropdown Lists Components */}
        <Flex direction="row" p={4} gap={4}>
          {/* All types Dropdown */}
          <Select
            id="employmentType-dropdown"
            variant="outline"
            placeholder="All types"
            size="md"
            w="200px"
            bg="white"
            name="type"
            value={filters.employmentType}
            onChange={handleFilterChange}
          >
            <option value="Contract">Contract</option>
            <option value="Permanent">Permanent</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Full-Time">Full-Time</option>
            <option value="Temporary">Temporary</option>
            <option value="Internship">Internship</option>
          </Select>

          {/* Min Salary Dropdown */}
          <Select
            id="minsalary-dropdown"
            variant="outline"
            placeholder="Min Salary"
            size="md"
            w="200px"
            bg="white"
            name="minSalary"
            value={filters.minSalary}
            onChange={handleFilterChange}
          >
            <option value="0">Paying $0</option>
            <option value="50000">to 50K</option>
            <option value="100000">to 100K</option>
            <option value="200000">to 200K</option>
            <option value="300000">to 300K</option>
          </Select>

          {/* Max Salary Dropdown */}
          <Select
            id="maxsalary-dropdown"
            variant="outline"
            placeholder="Max Salary"
            size="md"
            w="200px"
            bg="white"
            name="maxSalary"
            value={filters.maxSalary}
            onChange={handleFilterChange}
          >
            <option value="50000">to 50K</option>
            <option value="100000">to 100K</option>
            <option value="200000">to 200K</option>
            <option value="300000">to 300K</option>
          </Select>

          {/* Location Dropdown */}
          <Select
            id="location-dropdown"
            variant="outline"
            placeholder="Location"
            size="md"
            w="200px"
            bg="white"
            name="location"
            value={filters.location}
            onChange={handleFilterChange}
          >
            <option value="Singapore">Singapore</option>
            <option value="Southeast Asia">Southeast Asia</option>
            <option value="East Asia">East Asia</option>
            <option value="America">America</option>
            <option value="Europe">Europe</option>
          </Select>
          <Box alignContent="center">
            <Text
              onClick={onClearFilters}
              fontSize="1xl"
              cursor="pointer"
              color="black"
              _hover={{ textDecoration: "underline" }}
              mr={4}
            >
              Clear All Filters
            </Text>
          </Box>
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
