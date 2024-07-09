import { useState } from "react";
import { Box, SimpleGrid, useDisclosure } from "@chakra-ui/react";
import { EditJobCard, Pagination, JobCardModal } from "../index";

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

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedJob, setSelectedJob] = useState(null);

  const openModal = (jobData) => {
    setSelectedJob(jobData);
    onOpen();
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
              data={data}
              openModal={openModal} // Pass the openModal function
            />
          ))}
        </SimpleGrid>

        {/* JobCardModal */}
        {selectedJob && (
          <JobCardModal
            isOpen={isOpen}
            closeModal={onClose}
            data={selectedJob}
          />
        )}

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
