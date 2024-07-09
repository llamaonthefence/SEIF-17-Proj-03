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
import { JobNav, EditJobGrid, PostFakeData } from "../components";
import { FaSort, FaFilter } from "react-icons/fa";

function EditPostPage() {
  const datas = PostFakeData;
  return (
    <>
      {/* ProfilePage Component */}
      <Grid
        className="EditPostPage"
        templateAreas={`"nav main"`}
        gridTemplateRows={"100% 1fr 0px"}
        gridTemplateColumns={"550px 1fr 0px"}
        h="100%"
        bgColor="#F3F0E8"
      >
        {/* Profile Setting navigation on the left "nav" area  */}
        <GridItem pl="2" alignContent="start" area={"nav"} p={4} w="xl">
          <Box borderRight="1px solid lightgray" px={4}>
            <Flex bgColor="white" borderRadius="md" p={4} boxShadow="sm">
              <Text fontSize="2xl" fontWeight="600">
                My Company
              </Text>
              <Spacer />
              <Button colorScheme="red" h="30px" w="100px">
                Edit
              </Button>
            </Flex>
            <JobNav />
          </Box>
        </GridItem>

        {/* Setting content on the "main" area */}
        <GridItem pl="2" area={"main"} w="100%" p={4}>
          <Box px={4}>
            <Flex bgColor="white" borderRadius="md" p={4} boxShadow="sm">
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
            <EditJobGrid datas={datas} />
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}

export default EditPostPage;
