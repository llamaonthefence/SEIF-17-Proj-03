import React from "react";
import { Grid, GridItem, Image, Divider, Box } from "@chakra-ui/react";
import formatDate from "../../util/formatDate";
import { SkillsGrid } from "../index";

function JobCard({
  id,
  title,
  company,
  location,
  image,
  skills,
  salary,
  date_posted,
  onJobSelect,
  selected,
}) {
  const handleCardClick = () => {
    onJobSelect({
      id,
      title,
      company,
      location,
      image,
      skills,
      salary,
      date_posted,
    });
  };

  return (
    // JobCard Component
    <Box
      className="JobCard"
      gap={4}
      bgColor={selected ? "whitesmoke" : "white"}
      borderWidth="0.1em"
      borderColor="grey"
      borderRadius="10px"
      p="4"
      cursor="pointer"
      onClick={handleCardClick}
    >
      {/* Job Card Grid Format 4 rows x 1 column */}
      <Grid
        h="250px"
        w="85%"
        templateRows="repeat(4, 1fr)"
        templateColumns="120px 1fr 1fr"
        gap={4}
        p="4"
        textAlign="left"
      >
        {/* Job Image */}
        <GridItem colSpan={1} rowSpan={4}>
          <Image src={image} alt={company} maxW="120px" />
        </GridItem>

        {/* Job Details for company name */}
        <GridItem
          rowSpan={1}
          colSpan={2}
          bgColor="lightgrey"
          borderRadius="3px"
          p="2"
          paddingStart="4"
        >
          {company}
        </GridItem>

        {/* Job Details for job title */}
        <GridItem
          rowSpan={1}
          colSpan={2}
          bgColor="lightgrey"
          borderRadius="3px"
          p="2"
          paddingStart="4"
        >
          {title}
        </GridItem>

        {/* Job Details for date posted */}
        <GridItem
          rowSpan={1}
          colSpan={1}
          bgColor="lightgrey"
          borderRadius="3px"
          p="2"
          paddingStart="4"
        >
          {formatDate(date_posted)}
        </GridItem>

        {/* Job Details for location */}
        <GridItem
          rowSpan={1}
          colSpan={1}
          bgColor="lightgrey"
          borderRadius="3px"
          p="2"
          paddingStart="4"
        >
          {location}
        </GridItem>

        {/* Job Details for salary */}
        <GridItem
          rowSpan={1}
          colSpan={1}
          bgColor="lightgrey"
          borderRadius="3px"
          p="2"
          paddingStart="4"
        >
          {salary}
        </GridItem>
      </Grid>

      {/* Divider */}
      <Divider orientation="horizontal" mb={4} />

      {/* Skills Compartment */}
      <SkillsGrid skills={skills} />
    </Box>
  );
}

export default JobCard;
