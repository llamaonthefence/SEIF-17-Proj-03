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

function MeetQueryBar({
  setFilter,
  setFilterField,
  setSortOption,
  setSearchTerm,
  searchTerm,
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
    if (
      e.target.value === "Software Engineering" ||
      e.target.value === "User Experience Design" ||
      e.target.value === "Data Analytics"
    ) {
      setFilterField("course");
      setFilter(e.target.value);
    } else if (
      e.target.value === "2019" ||
      e.target.value === "2020" ||
      e.target.value === "2021" ||
      e.target.value === "2022" ||
      e.target.value === "2023" ||
      e.target.value === "2024"
    ) {
      setFilterField("year");
      setFilter(e.target.value);
    } else {
      setFilterField(null);
      setFilter("");
    }
  };

  const handleSeeAllClick = () => {
    // Reset all filters, sort, and search
    setFilter("");
    setFilterField(null);
    setSortOption("name-asc"); // Set default sort option
    setSearchTerm(""); // Clear search term

    // Reset sort dropdown to default
    document.getElementById("sort-dropdown").selectedIndex = 0;
    // Reset filter dropdown to default
    document.getElementById("filter-dropdown").selectedIndex = 0;
    // Clear search input field using elementById
    document.getElementById("search-input").value = "";
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
              w={600}
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
            w={300}
            onChange={handleSortChange}
          >
            <option value="name-asc">Name: A-Z</option>
            <option value="name-desc">Name: Z-A</option>
            <option value="course-asc">Course: A-Z</option>
            <option value="course-desc">Course: Z-A</option>
            <option value="specialist-asc">Specialist: A-Z</option>
            <option value="specialist-desc">Specialist: Z-A</option>
            <option value="year-asc">Year: Old-New</option>
            <option value="year-desc">Year: New-Old</option>
          </Select>

          {/* Combined Filter Dropdown */}
          <Select
            id="filter-dropdown"
            variant="outline"
            placeholder="Filter"
            size="lg"
            w={300}
            onChange={handleFilterChange}
          >
            <optgroup label="Course Attended">
              <option value="Software Engineering">Software Engineering</option>
              <option value="User Experience Design">
                User Experience Design
              </option>
              <option value="Data Analytics">Data Analytics</option>
            </optgroup>
            <optgroup label="Year Graduated">
              <option value="2019">2019 and below</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </optgroup>
          </Select>
        </Flex>
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
