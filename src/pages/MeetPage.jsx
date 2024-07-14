import { Box, Stack } from "@chakra-ui/react";
import { useEffect } from "react";
import { ListGrid, MeetQueryBar } from "../components/index";
import useFakeApi from "../api/useFakeApi";

function MeetPage() {
  const { datas, setFilter, setFilterField, setSortOption, setSearchTerm } =
    useFakeApi();

  useEffect(() => {
    // Reset sorting and filtering when searchTerm changes
    setFilterField(null);
    setFilter("");
    setSortOption("name-asc");
  }, [setFilterField, setFilter, setSortOption, setSearchTerm]);

  return (
    <Stack bgColor="#F3F0E8">
      <Stack bgColor="white" m={8} borderRadius="10px">
        {/* MeetQueryBar Component */}
        <MeetQueryBar
          setFilter={setFilter}
          setFilterField={setFilterField}
          setSortOption={setSortOption}
          setSearchTerm={setSearchTerm}
        />
        {/* MeetPage Component */}
        <Box className="MeetPage">
          <ListGrid datas={datas} />
        </Box>
      </Stack>
    </Stack>
  );
}

export default MeetPage;
