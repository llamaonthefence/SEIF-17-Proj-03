import { useState, useEffect } from "react";
import {
  Grid,
  GridItem,
  Box,
  Flex,
  Text,
  Button,
  Spacer,
  Image,
  IconButton,
} from "@chakra-ui/react";
import { EditJobNav, EditJobGrid } from "../components";
import { FaSort, FaFilter } from "react-icons/fa";
import { getAllJobs, getUserJobs } from "../service/jobs";

function EditPostPage() {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    const fetchDatas = async () => {
      try {
        // const data = await getAllJobs();
        const userid = "66951a8c09843c3abe28e210";
        const data = await getUserJobs(userid);
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
      <Box py={4} px={4} bg="#F3F0E8">
        <Flex bgColor="white" borderRadius="md" p={4} boxShadow="sm" h="8vh">
          <Text fontSize="2xl" fontWeight="600">
            Listed Jobs
          </Text>
          <Spacer />
          <Flex gap={8} pr={4}>
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
        <Box borderRadius="md" boxShadow="sm" h="4xl" p={4}>
          <EditJobGrid datas={datas} />
        </Box>
      </Box>
    </>
  );
}

export default EditPostPage;
