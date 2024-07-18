import { useState } from "react";
import { Box, SimpleGrid, useDisclosure } from "@chakra-ui/react";
import {
  EditJobCard,
  Pagination,
  ViewJobCardModal,
  EditJobCardModal,
  DeleteJobCardModal,
} from "../index";

function EditJobGrid({ datas, currentPage, setCurrentPage }) {
  const itemsPerPage = 6;
  const totalPages = Math.ceil(datas.length / itemsPerPage);

  const currentData = datas.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Disclosures for ViewJobCardModal and EditJobCardModal
  const {
    isOpen: isViewJobCardOpen,
    onOpen: onViewJobCardOpen,
    onClose: onViewJobCardClose,
  } = useDisclosure();
  const {
    isOpen: isEditJobCardOpen,
    onOpen: onEditJobCardOpen,
    onClose: onEditJobCardClose,
  } = useDisclosure();

  const {
    isOpen: isDeleteJobCardOpen,
    onOpen: onDeleteJobCardOpen,
    onClose: onDeleteJobCardClose,
  } = useDisclosure();

  const [selectedJob, setSelectedJob] = useState(null);

  const openViewJobCardModal = (jobData) => {
    setSelectedJob(jobData);
    onViewJobCardOpen();
  };

  const openEditJobCardModal = (jobData) => {
    setSelectedJob(jobData);
    onEditJobCardOpen();
  };

  const openDeleteJobCardModal = (jobData) => {
    setSelectedJob(jobData);
    onDeleteJobCardOpen();
  };

  return (
    <>
      {/* EditJobGrid Component*/}
      <Box className="EditJobGrid">
        {/* Mapped created posts in Grid */}
        <SimpleGrid columns={3} spacing={4} h="2xl">
          {currentData.map((data, index) => (
            <EditJobCard
              key={index}
              data={data}
              openViewJobCardModal={openViewJobCardModal}
              openEditJobCardModal={openEditJobCardModal}
              openDeleteJobCardModal={openDeleteJobCardModal}
            />
          ))}
        </SimpleGrid>

        {/* ViewJobCardModal */}
        {selectedJob && (
          <ViewJobCardModal
            isOpen={isViewJobCardOpen}
            closeModal={onViewJobCardClose}
            data={selectedJob}
          />
        )}

        {/* EditJobCardModal */}
        {selectedJob && (
          <EditJobCardModal
            isOpen={isEditJobCardOpen}
            closeModal={onEditJobCardClose}
            data={selectedJob}
          />
        )}

        {/* DeleteJobCardModal */}
        {selectedJob && (
          <DeleteJobCardModal
            isOpen={isDeleteJobCardOpen}
            closeModal={onDeleteJobCardClose}
            data={selectedJob}
          />
        )}

        {/* Pagination */}
        <Box pt={4}>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </Box>
      </Box>
    </>
  );
}

export default EditJobGrid;
