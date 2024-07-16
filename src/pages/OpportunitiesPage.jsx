import { useState, useEffect } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { JobGrid, OpportunitiesQueryBar, JobDetailedCard } from "../components";
import { getAllJobs } from "../service/jobs";
import { filterData } from "../util/query";

function OpportunitiesPage() {
  const [datas, setDatas] = useState([]);
  const [filteredDatas, setFilteredDatas] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [filters, setFilters] = useState({
    type: "",
    minSalary: "",
    maxSalary: "",
    location: "",
  });

  const fetchData = async () => {
    try {
      const data = await getAllJobs();
      setDatas(data.jobs);
      setFilteredDatas(data.jobs);
    } catch (error) {
      console.error("Error fetching datas:", error);
      setDatas([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const applyFilters = () => {
    let filtered = [...datas];

    // Apply filtering based on filters
    if (filters.type) {
      filtered = filterData(filtered, ["employmentType"], filters.type);
    }
    if (filters.minSalary) {
      filtered = filtered.filter(
        (job) => job.salary >= parseInt(filters.minSalary)
      );
    }
    if (filters.maxSalary) {
      filtered = filtered.filter(
        (job) => job.salary <= parseInt(filters.maxSalary)
      );
    }
    if (filters.location) {
      filtered = filterData(filtered, ["location"], filters.location);
    }

    setFilteredDatas(filtered);
  };

  const handleJobCardClick = (job) => {
    setSelectedJob(selectedJob === job ? null : job); // Toggle selection
  };

  return (
    <>
      {/* OpportunitiesQueryBar Component */}
      <OpportunitiesQueryBar
        filters={filters}
        setFilters={setFilters}
        onApplyFilters={applyFilters}
        onClearFilters={fetchData}
      />
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
        <GridItem
          pl="2"
          bg="white"
          alignContent="start"
          area={"nav"}
          h="auto"
          borderRight="1px solid lightgray"
        >
          <JobGrid
            datas={filteredDatas}
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
