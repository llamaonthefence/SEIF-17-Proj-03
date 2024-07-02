import { useState } from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { JobCard, Pagination } from "../index";

function JobGrid({ datas }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // 5 columns x 3 rows
  const totalPages = Math.ceil(datas.length / itemsPerPage);

  const currentData = datas.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  function PaginationComponent({ currentPage, totalPages, handlePageChange }) {
    return (
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    );
  }

  return (
    <>
      {/* JobGrid Component */}
      <Box className="JobGrid" p={4} maxH="100%" overflowY="auto">
        {/* Pagination */}
        <PaginationComponent
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />

        {/* Grid */}
        <SimpleGrid columns={1} spacing={10}>
          {/* Mapping of data */}
          {currentData.map((data, index) => (
            // Job Card Details
            <JobCard
              key={index}
              id={data.id}
              companyName={data.companyName}
              jobRole={data.jobRole}
              contract={data.contract}
              place={data.place}
              image={data.image}
              salary={data.salary}
              cert={data.cert}
              posted={data.posted}
              data={data}
            />
          ))}
        </SimpleGrid>

        {/* Pagination */}
        <PaginationComponent
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      </Box>
    </>
  );
}

export default JobGrid;
