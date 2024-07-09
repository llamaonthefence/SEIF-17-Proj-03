import { Text, Flex, Box, Spacer, IconButton, Icon } from "@chakra-ui/react";
import { IoEyeSharp } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { FaTrashCan } from "react-icons/fa6";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

function EditJobCard({
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
      {/* EditJobCard Component */}
      <Box
        className="EditJobCard"
        align="center"
        borderWidth="1px"
        borderRadius="15px"
        boxShadow="md"
        p="4"
        bg="whitesmoke"
        cursor="pointer"
        h={350}
      >
        {/* Job Details */}
        <Flex direction="column" align="start" gap="10" p={2} h="100%">
          <Flex w="100%">
            <Text fontSize="3xl" fontWeight="600">
              {jobRole}
            </Text>
            <Spacer />
            <Flex gap={2}>
              <IconButton
                aria-label="Visibility"
                icon={<IoEyeSharp />}
                size="lg"
                bg="white"
                border="1px solid lightgray"
                borderRadius="50%"
                color="black"
                _hover={{ bg: "gray.200" }}
                _active={{ bg: "gray.300" }}
              />
              <IconButton
                aria-label="Edit"
                icon={<MdEdit />}
                size="lg"
                bg="white"
                border="1px solid lightgray"
                borderRadius="50%"
                color="black"
                _hover={{ bg: "gray.200" }}
                _active={{ bg: "gray.300" }}
              />
              <IconButton
                aria-label="Delete"
                icon={<FaTrashCan />}
                size="lg"
                bg="white"
                border="1px solid lightgray"
                borderRadius="50%"
                color="black"
                _hover={{ bg: "gray.200" }}
                _active={{ bg: "gray.300" }}
              />
            </Flex>
          </Flex>
          <Flex
            direction="column"
            align="start"
            gap="0"
            fontSize="xl"
            fontWeight={200}
          >
            <Flex direction="row" gap="4">
              <Text>Hybrid</Text>
              <Text>{contract}</Text>
            </Flex>
            <Text>{place}</Text>
            <Text>{"Skill1, Skill2, Skill3"}</Text>
          </Flex>
          <Flex direction="row" gap="4" fontSize="2xl" fontWeight="200">
            <Flex align="center">
              <Icon as={RiMoneyDollarCircleFill} mr={2} />
              <Text>{salary}</Text>
            </Flex>
            <Flex align="center">
              <Icon as={GiGraduateCap} mr={2} />
              <Text>Cert</Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default EditJobCard;
