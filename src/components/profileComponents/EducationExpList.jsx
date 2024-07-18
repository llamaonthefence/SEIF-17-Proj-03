import PropTypes from 'prop-types';
import { Grid, GridItem, Box, Heading, Text } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";



function EduExpList({eduExpList, handleEditEduExp, handleDeleteEduExp}) {

    return (
        <Grid templateColumns='repeat(6, 1fr)'>
            
                {eduExpList.map((item, index) => (
                    <GridItem key={item.id}>
                        <Box>
                            <Heading>{item.qualificationType}</Heading>
                            <Text>{item.yearAttained}</Text>
                            <Text>{item.fieldOfStudy}</Text>
                            <Text>{item.institutionName}</Text>
                        </Box>
                        
                        <Box>
                            <EditIcon 
                            color='gray.300' mt="-8px" mr="2" cursor="pointer"
                            onClick={() => handleEditEduExp(index)}
                            />
                            <DeleteIcon 
                            color='gray.300' mt="-8px" cursor="pointer"
                            onClick={() => handleDeleteEduExp(index)}
                            />
                        </Box>

                    </GridItem>
                ))}
        
        </Grid>
    
    )}

// props validation 

EduExpList.propTypes = {
    eduExpList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        qualificationType: PropTypes.string.isRequired,
        fieldOfStudy: PropTypes.string.isRequired,
        institutionName: PropTypes.string.isRequired,
        yearAttained: PropTypes.string.isRequired,
        qualificationName: PropTypes.string
      })
    ).isRequired,
    handleEditEduExp: PropTypes.func.isRequired,
    handleDeleteEduExp: PropTypes.func.isRequired
  };



export default EduExpList