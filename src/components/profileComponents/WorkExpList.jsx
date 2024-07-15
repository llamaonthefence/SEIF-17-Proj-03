import PropTypes from 'prop-types';
import { Grid, GridItem, Box, Heading, Text } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

function WorkExpList ({workExpList, handleEditWorkExp, handleDeleteWorkExp}) {

    return (
        <Grid templateColumns='repeat(6, 1fr)'>
            
                {workExpList.map((item, index) => (
                    <GridItem key={index}>
                        <Box>
                            <Heading>{item.jobTitle}</Heading>
                            <Text>{item.companyName}</Text>
                            <Text>{item.fromDate} - {item.toDate}</Text>
                            <Text>{item.workDescription}</Text>
                        </Box>
                        
                        <Box>
                            <EditIcon 
                            color='gray.300' mt="-8px" mr="2" cursor="pointer"
                            onClick={() => handleEditWorkExp(index)}
                            />
                            <DeleteIcon 
                            color='gray.300' mt="-8px" cursor="pointer"
                            onClick={() => handleDeleteWorkExp (index)}
                            />
                        </Box>

                    </GridItem>
                ))}
        
        </Grid>
    )}

    //props validation 
    WorkExpList.propTypes = {
      
        workExpList: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string.isRequired,
            companyName: PropTypes.string.isRequired,
            jobTitle: PropTypes.string.isRequired,
            fromDate: PropTypes.string.isRequired,
            toDate: PropTypes.string.isRequired,
            workDescription: PropTypes.string
          })
        ).isRequired,
        handleEditWorkExp: PropTypes.func.isRequired,
        handleDeleteWorkExp: PropTypes.func.isRequired
      };



    export default WorkExpList
