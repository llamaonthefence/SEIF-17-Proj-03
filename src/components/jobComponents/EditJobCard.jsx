import { Text, Flex, Box, Spacer, IconButton, Icon } from "@chakra-ui/react";
import { IoEyeSharp } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { FaTrashCan } from "react-icons/fa6";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { GiGraduateCap } from "react-icons/gi";

function EditJobCard({
  data,
  openViewJobCardModal,
  openEditJobCardModal,
  openDeleteJobCardModal,
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
        p="8"
        bg="white"
        cursor="pointer"
        h="35vh"
        w="65vh"
      >
        {/* Job Details */}
        <Flex direction="column" align="start" gap="10" h="100%">
          <Flex w="100%">
            <Text fontSize="3xl" fontWeight="600">
              {data.title}
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
                onClick={() => openViewJobCardModal(data)}
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
                onClick={() => openEditJobCardModal(data)}
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
                onClick={() => openDeleteJobCardModal(data)}
              />
            </Flex>
          </Flex>
          <Flex direction="column" align="start" fontSize="xl" fontWeight={200}>
            <Flex direction="row" gap="4">
              <Text>
                {data.workArrangement}
                {"\u25AA"} {data.employmentType}
              </Text>
            </Flex>
            <Text>{data.location}</Text>
            <Text>{data.skills ? data.skills.join(" \u25AA ") : ""}</Text>
          </Flex>
          <Flex direction="row" gap="2" fontSize="2xl" fontWeight="200">
            <Flex align="center">
              <Icon as={RiMoneyDollarCircleFill} mr={2} />
              <Text>{data.salary}</Text>
            </Flex>
            <Text>{"\u25AA"}</Text>
            <Flex align="center">
              <Icon as={GiGraduateCap} mr={2} />
              <Text>{data.certifications}</Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default EditJobCard;
