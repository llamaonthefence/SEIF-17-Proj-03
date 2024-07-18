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
  Button,
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import employmentTypes from "../../constants/employmenttypes";
import { salary } from "../../constants/salary";
import locations from "../../constants/locations";

function OpportunitiesQueryBar({
  filters,
  setFilters,
  onApplyFilters,
  onClearFilters,
  setSearchTerm,
  searchTerm,
  setCurrentPage,
  setSelectedJob,
}) {
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

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

  const handleClearFilters = () => {
    // Reset all filters, sort, and search
    setFilters({
      type: "",
      minSalary: "",
      maxSalary: "",
      location: "",
    });

    setSearchTerm(""); // Clear search term

    // Reset sort dropdown to default
    document.getElementById("employmentType-dropdown").selectedIndex = 0;
    // Reset filter dropdowns to default
    document.getElementById("minsalary-dropdown").selectedIndex = 0;
    // Reset filter dropdowns to default
    document.getElementById("maxsalary-dropdown").selectedIndex = 0;
    // Clear search input field using elementById
    document.getElementById("location-dropdown").selectedIndex = 0;

    // Refetch all data
    onClearFilters();
    setCurrentPage(1);
    setSelectedJob(null);
  };

  return (
    <>
      {/* OpportunitiesQueryBar Component */}
      <Flex bg="#F3F0E8">
        {/* Button & Dropdown Lists Components */}
        <Flex direction="row" p={4} gap={4}>
          {/* Search Bar */}
          <Stack spacing={4}>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                {/* <GoSearch /> */}
              </InputLeftElement>
              <Input
                id="search-input"
                value={searchTerm}
                placeholder="Search"
                size="md"
                bg="white"
                w={400}
                boxShadow="inner"
                onChange={handleSearchChange}
              />
            </InputGroup>
          </Stack>

          {/* All types Dropdown */}
          <Select
            id="employmentType-dropdown"
            variant="outline"
            placeholder="All types"
            size="md"
            w="200px"
            bg="white"
            name="type"
            value={filters.type}
            onChange={handleFilterChange}
          >
            {employmentTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
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
            {salary.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
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
            {salary.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
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
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </Select>

          <Button colorScheme="red" onClick={onApplyFilters}>
            Apply Filters
          </Button>

          <Box alignContent="center">
            <Text
              onClick={handleClearFilters}
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
