import { Box, SimpleGrid, Text, Center } from "@chakra-ui/react";
import { ProfileCard, PostCard, Pagination } from "../index";

function ListGrid({ datas, isCreatedPostPage, currentPage, setCurrentPage }) {
  const itemsPerPage = 10; // 5 columns x 2 rows
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
      <Box className="ListGrid" px={8}>
        {/* Mapped created posts in Grid */}
        <SimpleGrid columns={5} spacing={4} h="3xl">
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
                specialist={data.specialist}
                skills={data.skills}
                languages={data.languages}
                bio={data.bio}
                data={data}
              />
            )
          )}
        </SimpleGrid>
      </Box>
      <Box py={4}>
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
