import { Image, Text, Heading, Flex, Box } from "@chakra-ui/react";
function ProfileCard({
  firstName,
  lastName,
  year,
  course,
  image,
  special,
  data,
}) {
  return (
    <>
      {/* ProfileCard Component */}
      <Box
        className="ProfileCard"
        align="center"
        borderWidth="1px"
        borderRadius="15px"
        boxShadow="md"
        p="4"
        bg="whitesmoke"
      >
        {/* Profile Picture */}
        <Image
          src={image}
          alt={`${firstName} ${lastName}`}
          borderRadius="50%"
          p={2}
        />

        {/* Profile Details */}
        <Flex direction="column" align="center" gap="4" p={2}>
          <Heading size="sm">{`${firstName} ${lastName}`}</Heading>
          <Flex direction="row" gap="4">
            <Text>{course}</Text>
            <Text>{year}</Text>
          </Flex>
          <Text>{special}</Text>
        </Flex>
      </Box>
    </>
  );
}

export default ProfileCard;
