import { Box } from "@chakra-ui/react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <>
      {/* Pagination Component */}
      <Box className="Pagination" margin={4}>
        <div className="flex justify-center items-center space-x-2 mt-4">
          {/* Previous Page Button */}
          <button
            onClick={handlePrevPage}
            className="px-3 py-1 border rounded-md bg-gray-300 disabled:opacity-50"
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          {/* Page Numbers Buttons */}
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => onPageChange(i + 1)}
              className={`px-3 py-1 border rounded-md ${
                currentPage === i + 1 ? "bg-red-500 text-white" : "bg-gray-300"
              }`}
            >
              {i + 1}
            </button>
          ))}
          {/* Next Page Button */}
          <button
            onClick={handleNextPage}
            className="px-3 py-1 border rounded-md bg-gray-300 disabled:opacity-50"
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
      </Box>
    </>
  );
};

export default Pagination;
