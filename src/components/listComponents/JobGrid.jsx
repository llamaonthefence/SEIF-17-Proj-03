import { useState } from "react";
import { Box, SimpleGrid, Center, Text } from "@chakra-ui/react";
import { JobCard, Pagination } from "../index";

function JobGrid({ datas, onJobSelect, selectedJob }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(datas.length / itemsPerPage);

  // Conditionally render loading text if datas is empty or null
  if (!datas || datas.length === 0) {
    return (
      <Center h="80vh">
        <Box>
          <Text fontSize="3xl" align="center">
            Nothing to show here..
          </Text>
        </Box>
      </Center>
    );
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleJobCardClick = (job) => {
    onJobSelect(job); // Update the selected job
  };

  // Calculate the slice of data for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = datas.slice(startIndex, endIndex);

  return (
    // JobGrid Component
    <Box height="80vh">
      <Box className="JobGrid" h="100%" overflowY="scroll" p={4}>
        {/* Mapped Job datas in Grid */}
        <SimpleGrid columns={1} spacing={4}>
          {currentData.map((data) => (
            <JobCard
              key={data._id}
              data={data}
              onJobSelect={() => handleJobCardClick(data)}
              selected={selectedJob && selectedJob._id === data._id}
            />
          ))}
        </SimpleGrid>
        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </Box>
    </Box>
  );
}

export default JobGrid;
