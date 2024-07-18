import { useState, useEffect } from "react";
import { Box, Flex, Text, Spacer, IconButton } from "@chakra-ui/react";
import { EditJobGrid } from "../components";
import { FaSort, FaFilter } from "react-icons/fa";
import { getUserJobs } from "../service/jobs";
import { getUserIdFromToken } from "../util/security";

function EditPostPage() {
  const [datas, setDatas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchDatas = async () => {
      try {
        const user = getUserIdFromToken();
        const data = await getUserJobs(user);
        setDatas(data.jobs);
      } catch (error) {
        console.error("Error fetching datas:", error);
        setDatas([]);
      }
    };

    fetchDatas();
  }, []);

  return (
    <>
      <Box pt={4} px={4} bg="#F3F0E8" align="center">
        <Flex bgColor="white" borderRadius="md" p={4} boxShadow="sm" h="8vh">
          <Text fontSize="2xl" fontWeight="600">
            Listed Jobs
          </Text>
          <Spacer />
          <Flex gap={8}>
            <Flex align="center" gap={2}>
              <IconButton aria-label="Sort" icon={<FaSort />} />
              <Text>Sort</Text>
            </Flex>
            <Flex align="center" gap={2}>
              <IconButton aria-label="Filter" icon={<FaFilter />} />
              <Text>Filter</Text>
            </Flex>
          </Flex>
        </Flex>
        <Box borderRadius="md" boxShadow="sm" h="85vh" py={4}>
          <EditJobGrid
            datas={datas}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </Box>
      </Box>
    </>
  );
}

export default EditPostPage;
