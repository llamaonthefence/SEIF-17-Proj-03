import { useState } from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { EditJobCard, Pagination } from "../index";

function EditJobGrid({ datas }) {
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
      {/* EditJobGrid Component*/}
      <Box className="EditJobGrid" py={4}>
        {/* Mapped created posts in Grid */}
        <SimpleGrid columns={2} spacing={4}>
          {currentData.map((data, index) => (
            <EditJobCard
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
          ))}
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

export default EditJobGrid;
