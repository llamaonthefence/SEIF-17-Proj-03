import { Grid, GridItem, Image, Divider, Box } from "@chakra-ui/react";

function JobCard({
  id,
  companyName,
  jobRole,
  contract,
  place,
  image,
  salary,
  cert,
  data,
  posted,
}) {
  return (
    <>
      {/* JobCard Component */}
      <Box
        className="JobCard"
        gap={4}
        bgColor="white"
        borderWidth="0.1em"
        borderColor="grey"
        borderRadius="10px"
        p="4"
      >
        {/* Job Card Grid Format */}
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
            <Image src={image} alt={companyName} maxW="120px" />
          </GridItem>

          {/* Job Details for companyName */}
          <GridItem
            rowSpan={1}
            colSpan={2}
            bgColor="lightgrey"
            borderRadius="3px"
            p="2"
            paddingStart="4"
          >
            {companyName}
          </GridItem>

          {/* Job Details for jobRole */}
          <GridItem
            rowSpan={1}
            colSpan={2}
            bgColor="lightgrey"
            borderRadius="3px"
            p="2"
            paddingStart="4"
          >
            {jobRole}
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
            {posted}
          </GridItem>

          {/* Job Details for place/location */}
          <GridItem
            rowSpan={1}
            colSpan={1}
            bgColor="lightgrey"
            borderRadius="3px"
            p="2"
            paddingStart="4"
          >
            {place}
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
        <Divider orientation="horizontal" />

        {/* Skill Compartment */}
        <Grid templateColumns="repeat(3, 1fr)" gap={4} mt={4}>
          {/* Skill 1 */}
          <GridItem w="100%" h="10" bgColor="lightgrey" alignContent="center">
            Skill 1
          </GridItem>

          {/* Skill 2 */}
          <GridItem w="100%" h="10" bgColor="lightgrey" alignContent="center">
            Skill 2
          </GridItem>

          {/* Skill 3 */}
          <GridItem w="100%" h="10" bgColor="lightgrey" alignContent="center">
            Skill 3
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}

export default JobCard;
