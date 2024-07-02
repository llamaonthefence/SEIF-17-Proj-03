import { useState } from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { ProfileCard, PostCard, Pagination } from "../index";

function ListGrid({ datas, isCreatedPostPage }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15; // 5 columns x 3 rows
  const totalPages = Math.ceil(datas.length / itemsPerPage);

  const currentData = datas.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      {/* ListGrid Component*/}
      <Box className="ListGrid" p={8}>
        {/* Grid */}
        <SimpleGrid columns={5} spacing={10}>
          {currentData.map((data, index) =>
            isCreatedPostPage ? (
              // Create Post details
              <PostCard
                key={index}
                id={data.id}
                companyName={data.companyName}
                jobRole={data.jobRole}
                contract={data.contract}
                place={data.place}
                image={data.image}
                salary={data.salary}
                cert={data.cert}
                data={data}
              />
            ) : (
              // Show Profile details
              <ProfileCard
                key={index}
                id={data.id}
                firstName={data.firstName}
                lastName={data.lastName}
                year={data.year}
                course={data.course}
                image={data.image}
                special={data.special}
                data={data}
              />
            )
          )}
        </SimpleGrid>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </Box>
    </>
  );
}

export default ListGrid;
