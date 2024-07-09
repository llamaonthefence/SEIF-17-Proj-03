import { SkillsGrid } from "../index";
import formatDate from "../../util/formatDate";
import { Box, Flex, Text, Image, Divider } from "@chakra-ui/react";

function JobDetailedCard({ job }) {
  if (!job) {
    return <Text fontSize="3xl">No job selected.</Text>;
  }

  return (
    // JobDetailedCard Component
    <Box className="JobDetailedCard" p="8" maxW="1200px" bgColor="white">
      {/* Job Image */}
      <Flex direction="column" align="center" mb="8">
        <Image
          src={job.image || "https://fakeimg.pl/270x270"}
          alt={job.company}
          maxBlockSize="200px"
          mb="4"
        />
        {/* Company Name */}
        <Text fontSize="2xl" fontWeight="bold">
          {job.company}
        </Text>
      </Flex>

      {/* Divider */}
      <Divider mb="4" />

      {/* Job Title & Description Compartment */}
      <Flex direction="column" align="start" mb="8" gap={4}>
        {/* Job Title */}
        <Flex direction="column" align="start" mb="2">
          <Text fontWeight="bold" mb="2">
            Job Title
          </Text>
          <Text>{job.title}</Text>
        </Flex>

        {/* Job Description */}
        <Flex direction="column" align="start">
          <Text fontWeight="bold" mb="2">
            Job Description
          </Text>
          <Text align="start">{job.description}</Text>
        </Flex>
      </Flex>

      {/* SkillsGrid Component */}
      <Flex direction="column" mb="4">
        <Text fontWeight="bold" align="start">
          Skills
        </Text>
        <SkillsGrid skills={job.skills || []} />
      </Flex>

      {/* Job Details */}
      <Flex direction="column" align="start" gap={4} my="8">
        {/* Job Location */}
        <Flex direction="column" mb="4" align="start">
          <Text fontWeight="bold" mb="2">
            Location
          </Text>
          <Text>{job.location}</Text>
        </Flex>

        {/* Salary */}
        <Flex direction="column" mb="4" align="start">
          <Text fontWeight="bold" mb="2">
            Salary
          </Text>
          <Text>{job.salary}</Text>
        </Flex>

        {/* Date Posted */}
        <Flex direction="column" mb="4" align="start">
          <Text fontWeight="bold" mb="2">
            Date Posted
          </Text>
          <Text>{formatDate(job.date_posted)}</Text>
        </Flex>
      </Flex>
    </Box>
  );
}

export default JobDetailedCard;
