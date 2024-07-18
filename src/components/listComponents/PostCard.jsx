import { Image, Text, Heading, Box, Flex } from "@chakra-ui/react";
function PostCard({
  id,
  companyName,
  jobRole,
  contract,
  place,
  image,
  salary,
  cert,
  posted,
  data,
}) {
  return (
    <>
      {/* Pagination Component */}
      <Box
        className="PostCard"
        align="center"
        borderWidth="1px"
        boxShadow="md"
        p="4"
        bg="white"
        h="md"
      >
        {/* Company Image */}
        <Image src={image} alt={companyName} p={2} />

        {/* Company Details */}
        <Flex direction="column" align="center" gap="4" p={2}>
          <Heading size="sm">{jobRole}</Heading>
          <Flex direction="row" gap="4">
            <Text>{place}</Text>
            <Text>{contract}</Text>
          </Flex>
          <Text>{salary}</Text>
        </Flex>
      </Box>
    </>
  );
}

export default PostCard;
