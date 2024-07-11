import React, { useState } from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { JobCard, Pagination } from "../index";

function JobGrid({ datas, onJobSelect, selectedJob }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(datas.length / itemsPerPage);

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
