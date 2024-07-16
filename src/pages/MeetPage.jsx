import { Box, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ListGrid, MeetQueryBar } from "../components/index";
import { getAllProfiles } from "../service/profiles";
import {
  sortByAscending,
  sortByDescending,
  filterData,
  searchProfiles,
} from "../util/query";

function MeetPage() {
  const [datas, setDatas] = useState([]);
  const [filteredDatas, setFilteredDatas] = useState([]);
  const [filters, setFilters] = useState({
    course: "",
    year: "",
  });
  const [sortOption, setSortOption] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // Function to fetch the data
  const fetchData = async () => {
    try {
      const profiles = await getAllProfiles();
      setDatas(profiles);
      setFilteredDatas(profiles);
    } catch (error) {
      console.error("Error fetching profiles:", error);
    }
  };

  // Fetch the data initially
  useEffect(() => {
    fetchData();
  }, []);

  // Handle sorting and filtering when the Apply button is clicked
  const handleApply = () => {
    let updatedData = [...datas];

    // Apply sorting based on sortOption
    if (sortOption) {
      const [key, order] = sortOption.split("-");
      if (order === "asc") {
        updatedData = sortByAscending(updatedData, key);
      } else if (order === "desc") {
        updatedData = sortByDescending(updatedData, key);
      }
    }

    // Apply search term filtering
    if (searchTerm) {
      updatedData = searchProfiles(updatedData, searchTerm);
    }

    // Apply filtering based on filters
    if (filters.course) {
      updatedData = filterData(updatedData, ["course"], filters.course);
    }
    if (filters.year) {
      updatedData = filterData(updatedData, ["year"], filters.year);
    }

    // Update state with filtered and sorted data
    setFilteredDatas(updatedData);
  };

  return (
    <Stack bgColor="#F3F0E8" overflow="scroll">
      <Stack bgColor="white" m={8} borderRadius="10px">
        {/* MeetQueryBar Component */}
        <MeetQueryBar
          setFilters={setFilters}
          setSortOption={setSortOption}
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
          onApply={handleApply}
          onSeeAll={fetchData}
        />
        {/* MeetPage Component */}
        <Box className="MeetPage">
          <ListGrid datas={filteredDatas} />
        </Box>
      </Stack>
    </Stack>
  );
}

export default MeetPage;
