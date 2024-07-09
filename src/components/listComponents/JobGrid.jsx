import React, { useState } from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { JobCard, Pagination } from "../index";

function JobGrid({ datas, onJobSelect, selectedJob }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // 5 columns x 3 rows
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
    <Box className="JobGrid" p={4} height="100%" overflowY="scroll">
      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      {/* Mapped Job datas in Grid */}
      <SimpleGrid columns={1} spacing={10}>
        {currentData.map((data) => (
          <JobCard
            key={data._id}
            id={data._listing_id}
            listing_id={data.listing_id}
            title={data.title}
            description={data.description}
            company={data.company}
            location={data.location}
            image={data.image}
            skills={data.skills}
            salary={data.salary}
            date_posted={data.date_posted}
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
  );
}

export default JobGrid;
