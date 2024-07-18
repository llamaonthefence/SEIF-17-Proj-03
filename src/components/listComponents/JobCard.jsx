import { Grid, GridItem, Image, Divider, Box, Text } from "@chakra-ui/react";
import formatDate from "../../util/formatDate";

function JobCard({ data, onJobSelect, selected }) {
  // SkillsGrid Component
  function SkillsGrid() {
    const skills = data.skills;
    return (
      <Grid templateColumns="repeat(3, 1fr)" gap={2}>
        {skills.slice(0, 3).map((skill, index) => (
          <GridItem
            key={index}
            w="100%"
            bgColor="lightgray"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="6px"
          >
            <Text fontSize="xs" py={1}>
              {skill}
            </Text>
          </GridItem>
        ))}
      </Grid>
    );
  }

  const handleCardClick = () => {
    onJobSelect({
      data,
    });
  };

  return (
    // JobCard Component
    <Box
      className="JobCard"
      bgColor="white"
      borderWidth="0.1em"
      borderColor="gray"
      outline={selected ? "0.3em solid salmon" : "none"}
      outlineOffset={selected ? "-0.3em" : "0"}
      borderRadius="10px"
      cursor="pointer"
      onClick={handleCardClick}
    >
      {/* Job Card Grid Format 4 rows x 1 column */}
      <Grid
        templateRows="repeat(4, 1fr)"
        templateColumns="120px 1fr 1fr"
        gap={2}
        p={4}
        textAlign="left"
        w="100%"
      >
        {/* Job Image */}
        <GridItem colSpan={1} rowSpan={4}>
          <Box
            w="120px"
            h="120px"
            bgColor="white"
            borderRadius="10px"
            overflow="hidden"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image
              src={data.image}
              alt={data.companyName}
              objectFit="cover"
              objectPosition="center"
            />
          </Box>
        </GridItem>

        {/* Job Details for company name */}
        <GridItem rowSpan={1} colSpan={2} bgColor="lightgrey" paddingStart="4">
          <Text fontSize="xs" py={1}>
            {data.companyName}
          </Text>
        </GridItem>

        {/* Job Details for job title */}
        <GridItem rowSpan={1} colSpan={2} bgColor="lightgrey" paddingStart="4">
          <Text fontSize="xs" py={1}>
            {data.title}
          </Text>
        </GridItem>

        {/* Job Details for date posted */}
        <GridItem rowSpan={1} colSpan={1} bgColor="lightgrey" paddingStart="4">
          <Text fontSize="xs" py={1}>
            {formatDate(data.date_posted)}
          </Text>
        </GridItem>

        {/* Job Details for location */}
        <GridItem rowSpan={1} colSpan={1} bgColor="lightgrey" paddingStart="4">
          <Text fontSize="xs" py={1}>
            {data.location}
          </Text>
        </GridItem>

        {/* Job Details for salary */}
        <GridItem rowSpan={1} colSpan={1} bgColor="lightgrey" paddingStart="4">
          <Text fontSize="xs" py={1}>
            {data.salary}
          </Text>
        </GridItem>
      </Grid>

      {/* Divider */}
      <Divider orientation="horizontal" />

      {/* Skills Compartment */}
      <Box p={2} w="85%">
        <SkillsGrid />
      </Box>
    </Box>
  );
}

export default JobCard;
