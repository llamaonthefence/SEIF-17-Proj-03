import PropTypes from "prop-types";
import {
  Grid,
  GridItem,
  Box,
  Heading,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

function EduExpList({
  eduExpList,
  handleEditEduExp,
  handleDeleteEduExp,
  profileDetails,
}) {
  return (
    <Grid templateColumns="repeat(6, 1fr)">
      {eduExpList.map((item, index) => (
        <GridItem key={item.id} colSpan={6}>
          <Box maxW="100%" borderWidth="1px" borderRadius="lg" m={2}>
            <Grid templateColumns="repeat(6, 1fr)">
              <GridItem colSpan={5}>
                <Box textAlign="left" p={2}>
                  <Heading as="h4" size="md">
                    {item.institutionName}
                  </Heading>
                  <Text>
                    {item.qualificationType} | {item.yearAttained}
                  </Text>
                  <Text>{item.fieldOfStudy}</Text>
                </Box>
              </GridItem>

              <GridItem colSpan={1} display="flex" alignItems="center">
                <IconButton
                  aria-label="Edit"
                  icon={<EditIcon />}
                  colorScheme="blue"
                  onClick={() => handleEditEduExp(index)}
                  mr={2}
                />
                <IconButton
                  aria-label="Delete"
                  icon={<DeleteIcon />}
                  colorScheme="red"
                  onClick={() => handleDeleteEduExp(index)}
                />
              </GridItem>
            </Grid>
          </Box>
        </GridItem>
      ))}
    </Grid>
  );
}

// props validation

EduExpList.propTypes = {
  eduExpList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      qualificationType: PropTypes.string.isRequired,
      fieldOfStudy: PropTypes.string.isRequired,
      institutionName: PropTypes.string.isRequired,
      yearAttained: PropTypes.string.isRequired,
      qualificationName: PropTypes.string,
    })
  ).isRequired,
  handleEditEduExp: PropTypes.func.isRequired,
  handleDeleteEduExp: PropTypes.func.isRequired,
};

export default EduExpList;
