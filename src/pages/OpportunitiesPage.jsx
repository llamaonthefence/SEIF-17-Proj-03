import { useState, useEffect } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { JobGrid, OpportunitiesQueryBar, JobDetailedCard } from "../components";
import { getAllJobs } from "../service/jobs";

function OpportunitiesPage() {
  const [datas, setDatas] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    const fetchDatas = async () => {
      try {
        const data = await getAllJobs();
        setDatas(data.jobs);
      } catch (error) {
        console.error("Error fetching datas:", error);
        setDatas([]);
      }
    };

    fetchDatas();
  }, []);

  const handleJobCardClick = (job) => {
    setSelectedJob(selectedJob === job ? null : job); // Toggle selection
  };

  return (
    <>
      {/* OpportunitiesQueryBar Component */}

      <OpportunitiesQueryBar />
      {/* OpportunitiesPage Component */}
      <Grid
        className="OpportunitiesPage"
        templateAreas={`"nav main"`}
        gridTemplateRows={"100% 1fr 0px"}
        gridTemplateColumns={"600px 1fr"}
        h="auto"
        gap="0"
      >
        {/* Job Listing Grid on the left Nav area */}
        <GridItem pl="2" bg="white" alignContent="start" area={"nav"} h="auto">
          <JobGrid
            datas={datas}
            onJobSelect={handleJobCardClick}
            selectedJob={selectedJob}
          />
        </GridItem>

        {/* Job Selected Card on the Main area */}
        <GridItem pl="2" bg="white" align="start" area={"main"} h="100%">
          <JobDetailedCard job={selectedJob} />
        </GridItem>
      </Grid>
    </>
  );
}

export default OpportunitiesPage;
