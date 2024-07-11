import formatDate from "../../util/formatDate";
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
    >
      {/* Top Part */}
      <Flex direction="row" align="start" mb="8" w="75%">
        {/* Image */}
        <Image
          src={job.image || "https://fakeimg.pl/270x270"}
          alt={job.companyName}
          maxBlockSize="200px"
          mb={"4"}
          borderRadius="10px"
        />

        {/* Right Side */}
        <Flex direction="column" pl={4} w="100%" gap={4}>
          {/* Company Name */}
          <Text mb="1" bg="lightgray" p="4" w="100%">
            {job.companyName}
          </Text>

          {/* Title */}
          <Text mb="1" bg="lightgray" p="4" w="100%">
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
            <Flex direction="column" mb={1} w="md">
              <Text bg="lightgray" p="4">
                {formatDate(job.date_posted)}
              </Text>
            </Flex>
            <Flex direction="column" w="md">
              <Text bg="lightgray" p="4">
                {job.location}
              </Text>
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
          <Flex direction="column" align="start" mb="4" w="100%">
            <Text fontWeight="bold" mb="2">
              Salary Range
            </Text>
            <Text bg="lightgray" p="4" w="sm">
              {job.salary}
            </Text>
          </Flex>
          <Flex direction="column" align="start" mb="4" w="100%">
            <Text fontWeight="bold" mb="2">
              Seniority
            </Text>
            <Text bg="lightgray" p="4" w="sm">
              Senior
            </Text>
          </Flex>
        </Flex>

        {/* Right Column */}
        <Flex direction="column">
          <Flex direction="column" align="start" mb="4">
            <Text fontWeight="bold" mb="2">
              Job Type
            </Text>
            <Text bg="lightgray" p="4" w="sm">
              {job.employmentType}
            </Text>
          </Flex>
          <Flex direction="column" align="start" mb="4" w="100%">
            <Text fontWeight="bold" mb="2">
              Years of Experience
            </Text>
            <Text bg="lightgray" p="4" w="sm">
              {job.yoe}
            </Text>
          </Flex>
        </Flex>
      </Grid>

      {/* Third Part - SkillsGrid */}
      <Box w="85%" mb={8}>
        <SkillsGrid />
      </Box>

      {/* Divider */}
      <Divider mb="8" borderWidth="1px" borderColor="lightgray" />

      {/* Fourth Part - Description */}
      <Flex direction="column" mb="8" align="start">
        <Text fontWeight="bold" mb="2">
          Job Description
        </Text>
        <Text>{job.description}</Text>
      </Flex>

      {/* Bottom Part */}
      <Grid templateColumns="1fr 1fr" gap={8} w="85%">
        {/* Left Column */}
        <Flex direction="column">
          <Flex direction="column" align="start" mb="4" w="100%">
            <Text fontWeight="bold" mb="2">
              Industry
            </Text>
            <Text bg="lightgray" p="4" w="md">
              {job.industry}
            </Text>
          </Flex>
          <Flex direction="column" align="start" mb="4" w="100%">
            <Text fontWeight="bold" mb="2">
              Company Type
            </Text>
            <Text bg="lightgray" p="4" w="md">
              {job.companyType}
            </Text>
          </Flex>
          <Flex direction="column" align="start" mb="4" w="100%">
            <Text fontWeight="bold" mb="2">
              Company Size
            </Text>
            <Text bg="lightgray" p="4" w="md">
              {job.companySize}
            </Text>
          </Flex>
          <Flex direction="column" align="start" mb="4" w="100%">
            <Text fontWeight="bold" mb="2">
              Company Website
            </Text>
            <Text bg="lightgray" p="4" w="md">
              {job.companyWebsite}
            </Text>
          </Flex>
        </Flex>

        {/* Right Column */}
        <Flex direction="column">
          <Flex direction="column" align="start" mb="4" w="100%">
            <Text fontWeight="bold" mb="2">
              Job Offers
            </Text>
            <Text bg="lightgray" p="4" w="lg">
              {job.jobOffers}
            </Text>
          </Flex>
          <Flex direction="column" align="start" mb="4" w="100%">
            <Text fontWeight="bold" mb="2">
              Responsibilities
            </Text>
            <Text bg="lightgray" p="4" w="lg">
              {job.responsibilities}
            </Text>
          </Flex>
          <Flex direction="column" align="start" mb="4" w="100%">
            <Text fontWeight="bold" mb="2">
              Requirements
            </Text>
            <Text bg="lightgray" p="4" w="lg">
              {job.requirements}
            </Text>
          </Flex>
          <Flex direction="column" align="start" mb="4" w="100%">
            <Text fontWeight="bold" mb="2">
              Certifications
            </Text>
            <Text bg="lightgray" p="4" w="lg">
              {job.certifications ? job.certifications.join(", ") : ""}
            </Text>
          </Flex>
        </Flex>
      </Grid>
    </Box>
  );
}

export default JobDetailedCard;
