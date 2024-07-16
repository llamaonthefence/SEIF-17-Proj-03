import {
  Input,
  Stack,
  InputGroup,
  InputLeftElement,
  Text,
  Flex,
  Select,
  Spacer,
  Button,
} from "@chakra-ui/react";
import { GoSearch } from "react-icons/go";
import { gaBootcamps, gaShortCourses } from "../../constants/ga-courses";

function MeetQueryBar({
  setFilters,
  setSortOption,
  setSearchTerm,
  searchTerm,
  onApply,
  onSeeAll,
}) {
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortOption(value);
  };

  const handleFilterChange = (e) => {
    const value = e.target.value;
    const fieldName = e.target.id;

    if (fieldName === "courses-dropdown") {
      setFilters((prevFilters) => ({
        ...prevFilters,
        course: value,
      }));
    } else if (fieldName === "years-dropdown") {
      setFilters((prevFilters) => ({
        ...prevFilters,
        year: value,
      }));
    }
  };

  const handleSeeAllClick = () => {
    // Reset all filters, sort, and search
    setFilters({
      course: "",
      year: "",
    });
    setSortOption(""); // Set default sort option
    setSearchTerm(""); // Clear search term

    // Reset sort dropdown to default
    document.getElementById("sort-dropdown").selectedIndex = 0;
    // Reset filter dropdowns to default
    document.getElementById("courses-dropdown").selectedIndex = 0;
    // Reset filter dropdowns to default
    document.getElementById("years-dropdown").selectedIndex = 0;
    // Clear search input field using elementById
    document.getElementById("search-input").value = "";

    // Refetch all data
    onSeeAll();
  };

  return (
    <Flex>
      {/* Query Components */}
      <Flex direction="row" p={8} gap={8}>
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
            <Input
              id="search-input"
              value={searchTerm}
              placeholder="Search"
              size="lg"
              w={400}
              boxShadow="inner"
              onChange={handleSearchChange}
            />
          </InputGroup>
        </Stack>

        {/* Filter Form */}
        <Flex spacing={3} gap={8}>
          {/* Sort Dropdown */}
          <Select
            id="sort-dropdown"
            variant="outline"
            placeholder="Sort"
            size="lg"
            w={200}
            onChange={handleSortChange}
          >
            <option value="fullName-asc">Name: A-Z</option>
            <option value="fullName-desc">Name: Z-A</option>
            <option value="course-asc">Course: A-Z</option>
            <option value="course-desc">Course: Z-A</option>
            <option value="specialist-asc">Specialist: A-Z</option>
            <option value="specialist-desc">Specialist: Z-A</option>
            <option value="year-asc">Year: Old-New</option>
            <option value="year-desc">Year: New-Old</option>
          </Select>

          {/* Combined Filter Dropdown */}
          <Select
            id="courses-dropdown"
            variant="outline"
            placeholder="Courses Filter"
            size="lg"
            w={200}
            onChange={handleFilterChange}
          >
            <optgroup label="Bootcamp Courses">
              {gaBootcamps.map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </optgroup>
            <optgroup label="Short Courses">
              {gaShortCourses.map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </optgroup>
          </Select>

          {/* Years Dropdown */}
          <Select
            id="years-dropdown"
            variant="outline"
            placeholder="Years Filter"
            size="lg"
            w={200}
            onChange={handleFilterChange}
          >
            <option value="2019">2019 and below</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </Select>
        </Flex>
        {/* Apply Button */}
        <Stack justifyContent="center" paddingRight={8}>
          <Button onClick={onApply} colorScheme="red" size="lg">
            Apply
          </Button>
        </Stack>
      </Flex>

      {/* Spacer */}
      <Spacer />

      {/* See all */}
      <Stack justifyContent="center" paddingRight={8}>
        <Text
          fontSize="1xl"
          cursor="pointer"
          color="black"
          _hover={{ textDecoration: "underline" }}
          onClick={handleSeeAllClick}
        >
          See all
        </Text>
      </Stack>
    </Flex>
  );
}

export default MeetQueryBar;
