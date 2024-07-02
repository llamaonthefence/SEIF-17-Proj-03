import { Grid, GridItem } from "@chakra-ui/react";
import { JobGrid, JobFakeData } from "../components";

function OpportunitiesPage() {
  const datas = JobFakeData;
  return (
    <>
      {/* OpportunitiesPage Component */}
      <Grid
        className="OpportunitiesPage"
        templateAreas={`"nav main"`}
        gridTemplateRows={"100% 1fr 0px"}
        gridTemplateColumns={"700px 1fr"}
        h="840px"
        gap="0"
      >
        {/* Job Listing Grid on the left Nav area */}
        <GridItem
          pl="2"
          bg="gray.200"
          alignContent="start"
          area={"nav"}
          bgColor="white"
        >
          <JobGrid datas={datas} />
        </GridItem>

        {/* Job Selected Card on the Main area */}
        <GridItem
          pl="2"
          bg="gray.200"
          alignContent="center"
          area={"main"}
        ></GridItem>
      </Grid>
    </>
  );
}

export default OpportunitiesPage;
