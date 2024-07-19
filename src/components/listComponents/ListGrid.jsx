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
          {currentData.map((data, index) => (
            <ProfileCard
              key={index}
              id={data.listing_id}
              firstName={data.personal_details.firstName}
              lastName={data.personal_details.lastName}
              pronoun={data.personal_details.pronoun}
              additionalName={data.personal_details.additionalName}
              email={data.contact_details.email}
              githubLink={data.contact_details.githubLink}
              phone={data.contact_details.phone}
              website={data.contact_details.website}
              gaExperience={data.ga_experience}
              workExperience={data.work_experience}
              educationExperience={data.education_experience}
              skills={data.skills}
              profilePic={data.profilePic}
              user_id={data.user_id}
            />
          ))}
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
