import { useState } from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";

function EditJobNav(/*{ jobData }*/) {
  //   const [imagePreview, setImagePreview] = useState(null);
  return (
    <>
      <Box className="JobNav" pt={4} align="center">
        <Flex gap="20px" direction="column">
          {/* <Box>
            <Text fontWeight="600">Company Logo:</Text>
            {JobData.image ? (
              <Image
                src={imagePreview}
                alt="Preview"
                boxSize="250px"
                padding="20px"
                objectFit="cover"
              />
            ) : (
              <Box
                boxSize="250px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                Upload company logo
              </Box>
            )}
          </Box> */}
          <Box
            boxSize="100%"
            bgColor="whitesmoke"
            borderStyle="dashed"
            borderRadius="5%"
            borderWidth="1px"
            borderColor="lightgray"
            display="flex"
            cursor="pointer"
          >
            <Box
              boxSize="500px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              Upload company logo
            </Box>
          </Box>
          <Box bgColor="lightgray" p={2} textAlign="left">
            {/* <Text>{jobData.industry}</Text> */}
            <Text>Company Industry Detail</Text>
          </Box>
          <Box Box bgColor="lightgray" p={2} textAlign="left">
            {/* <Text>{jobData.companyType}</Text> */}
            <Text>Company Type Detail</Text>
          </Box>
          <Box Box bgColor="lightgray" p={2} textAlign="left">
            {/* <Text>{jobData.companyName}</Text> */}
            <Text>Company Name Detail</Text>
          </Box>
          <Box Box bgColor="lightgray" p={2} textAlign="left">
            {/* <Text>{jobData.location}</Text> */}
            <Text>Company Location Detail</Text>
          </Box>
          <Box Box bgColor="lightgray" p={2} textAlign="left">
            {/* <Text>{jobData.companySize}</Text> */}
            <Text>Company Size Detail</Text>
          </Box>
          <Box Box bgColor="lightgray" p={2} textAlign="left">
            {/* <Text>{jobData.companyWebsite}</Text> */}
            <Text>Company Website Detail</Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default EditJobNav;
