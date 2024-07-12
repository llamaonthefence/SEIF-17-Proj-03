import { useState, useEffect } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { JobGrid, OpportunitiesQueryBar, JobDetailedCard } from "../components";
import { getAllJobs } from "../service/jobs";

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

  useEffect(() => {
    const applyFilters = () => {
      let filtered = datas;
      if (filters.type) {
        filtered = filtered.filter(
          (job) => job.employmentType === filters.type
        );
      }
      if (filters.minSalary) {
        filtered = filtered.filter((job) => job.salary >= filters.minSalary);
      }
      if (filters.maxSalary) {
        filtered = filtered.filter((job) => job.salary <= filters.maxSalary);
      }
      if (filters.location) {
        filtered = filtered.filter((job) => job.location === filters.location);
      }
      setFilteredDatas(filtered);
    };

    applyFilters();
  }, [filters, datas]);

  const handleJobCardClick = (job) => {
    setSelectedJob(selectedJob === job ? null : job); // Toggle selection
  };

  const handleClearFilters = () => {
    setFilters({
      type: "",
      minSalary: "",
      maxSalary: "",
      location: "",
    });

    // Reset sort dropdown to default
    document.getElementById("employmentType-dropdown").selectedIndex = 0;
    // Reset filter dropdown to default
    document.getElementById("minsalary-dropdown").selectedIndex = 0;
    // Reset filter dropdown to default
    document.getElementById("maxsalary-dropdown").selectedIndex = 0;
    // Reset filter dropdown to default
    document.getElementById("location-dropdown").selectedIndex = 0;
  };

  return (
    <>
      {/* OpportunitiesQueryBar Component */}
      <OpportunitiesQueryBar
        filters={filters}
        setFilters={setFilters}
        onClearFilters={handleClearFilters}
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
        <GridItem pl="2" bg="white" alignContent="start" area={"nav"} h="auto">
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
