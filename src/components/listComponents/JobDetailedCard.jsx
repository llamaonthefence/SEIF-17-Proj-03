import {
  Box,
  Flex,
  Text,
  Image,
  Divider,
  Grid,
  GridItem,
  Center,
} from "@chakra-ui/react";
import formatDate from "../../util/formatDate";

// Reusable text style object
const textStyle = {
  bg: "lightgray",
  p: "4",
  w: "100%",
};

// Reusable Flex column component
function FlexColumn({ title, children }) {
  return (
    <Flex direction="column" align="start" mb="4" w="90%">
      <Text fontWeight="bold" mb="2">
        {title}
      </Text>
      {children}
    </Flex>
  );
}

function JobDetailedCard({ job, isViewJobCardModal }) {
  if (!job) {
    return (
      <Center align="center" h="80vh">
        <Text fontSize="3xl">No job selected.</Text>
      </Center>
    );
  }

  // SkillsGrid Component
  function SkillsGrid() {
    const skills = job.skills;
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
            <Text py={3}>{skill}</Text>
          </GridItem>
        ))}
      </Grid>
    );
  }

  return (
    <Box
      className="JobDetailedCard"
      maxW="auto"
      maxH="auto"
      bgColor="white"
      py={20}
      px={8}
      h={isViewJobCardModal ? "70vh" : "80vh"}
      overflowY="auto"
      overflowX="hidden"
      textAlign="left"
    >
      {/* Top Part */}
      <Flex direction="row" align="start" mb="8">
        {/* Image */}
        <Image
          src={job.image || "https://fakeimg.pl/270x270"}
          alt={job.companyName}
          maxBlockSize="200px"
          w="200px"
          borderStyle="dashed"
          borderRadius="5%"
          borderWidth="1px"
          borderColor="lightgray"
          bgColor="white"
        />

        {/* Right Side */}
        <Flex direction="column" pl={4} w="70%" gap={4}>
          {/* Company Name */}
          <Text mb="1" {...textStyle}>
            {job.companyName}
          </Text>

          {/* Title */}
          <Text mb="1" {...textStyle}>
            {job.title}
          </Text>

          {/* Date Posted & Location */}
          <Flex
            direction="row"
            align="start"
            justify="space-between"
            w="100%"
            gap={4}
          >
            <Flex direction="column" w="md">
              <Text {...textStyle}>{formatDate(job.date_posted)}</Text>
            </Flex>
            <Flex direction="column" w="md">
              <Text {...textStyle}>{job.location}</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      {/* Divider */}
      <Divider mb="8" borderWidth="2px" borderColor="lightgray" />

      {/* Second Part */}
      <Grid templateColumns="1fr 1fr" mb="8" w="80%">
        {/* Left Column */}
        <Flex direction="column">
          <FlexColumn title="Salary Range">
            <Text {...textStyle}>{job.salary}</Text>
          </FlexColumn>
          <FlexColumn title="Seniority">
            <Text {...textStyle}>{job.seniority}</Text>
          </FlexColumn>
          <FlexColumn title="Work Arrangement">
            <Text {...textStyle}>{job.workArrangement}</Text>
          </FlexColumn>
        </Flex>

        {/* Right Column */}
        <Flex direction="column">
          <FlexColumn title="Job Type">
            <Text {...textStyle}>{job.employmentType}</Text>
          </FlexColumn>
          <FlexColumn title="Years of Experience">
            <Text {...textStyle}>{job.yoe}</Text>
          </FlexColumn>
        </Flex>
      </Grid>

      {/* Third Part - SkillsGrid */}
      <Box w="85%" mb={8}>
        <Text fontWeight="bold" mb="2">
          Tech Stacks
        </Text>
        <SkillsGrid />
      </Box>

      {/* Divider */}
      <Divider mb="8" borderWidth="1px" borderColor="lightgray" />

      {/* Fourth Part - Descriptions */}
      <Flex direction="column" mb="8" align="start">
        <Text fontWeight="bold" mb="2">
          Job Descriptions
        </Text>
        <Text>{job.descriptions}</Text>
      </Flex>

      {/* Bottom Part */}
      <Grid templateColumns="1fr 1fr" gap={8} w="85%">
        {/* Left Column */}
        <Flex direction="column">
          <FlexColumn title="Industry">
            <Text {...textStyle}>{job.industry}</Text>
          </FlexColumn>
          <FlexColumn title="Company Type">
            <Text {...textStyle}>{job.companyType}</Text>
          </FlexColumn>
          <FlexColumn title="Company Size">
            <Text {...textStyle}>{job.companySize}</Text>
          </FlexColumn>
          <FlexColumn title="Company Website">
            <Text {...textStyle}>{job.companyWebsite}</Text>
          </FlexColumn>
        </Flex>

        {/* Right Column */}
        <Flex direction="column">
          <FlexColumn title="Job Offers">
            <Text {...textStyle}>{job.jobOffers}</Text>
          </FlexColumn>
          <FlexColumn title="Responsibilities">
            <Text {...textStyle}>{job.responsibilities}</Text>
          </FlexColumn>
          <FlexColumn title="Requirements">
            <Text {...textStyle}>{job.requirements}</Text>
          </FlexColumn>
          <FlexColumn title="Certifications">
            <Text {...textStyle}>
              {job.certifications ? job.certifications.join(", ") : ""}
            </Text>
          </FlexColumn>
        </Flex>
      </Grid>
    </Box>
  );
}

export default JobDetailedCard;
