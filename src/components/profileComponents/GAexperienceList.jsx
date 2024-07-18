import PropTypes from 'prop-types';
import { Grid, GridItem, Box, Text } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";



function GaExpList({gaExpList, handleEditGaExp, handleDeleteGaExp}) {

    return (
        <Grid templateColumns='repeat(6, 1fr)'>
            
                {gaExpList.map((item, index) => (
                    <GridItem key={index}>
                        <Box>
                            <Text>{item.gaCourse}</Text>
                            <Text>{item.gradYear}</Text>
                        </Box>
                        
                        <Box>
                            <EditIcon 
                            color='gray.300' mt="-8px" mr="2" cursor="pointer"
                            onClick={() => handleEditGaExp(index)}
                            />
                            <DeleteIcon 
                            color='gray.300' mt="-8px" cursor="pointer"
                            onClick={() => handleDeleteGaExp}
                            />
                        </Box>

                    </GridItem>
                ))}
        
        </Grid>
    
    )}


    GaExpList.propTypes = {
        gaExpList: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string.isRequired,
            gaCourse: PropTypes.string.isRequired,
            gradYear: PropTypes.string.isRequired,
          })
        ).isRequired,
        handleEditGaExp: PropTypes.func.isRequired,
        handleDeleteGaExp: PropTypes.func.isRequired
      };

    export default GaExpList