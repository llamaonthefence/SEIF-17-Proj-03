import PropTypes from 'prop-types';
import { Grid, GridItem, Box, Heading, Text, IconButton } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import React from 'react'

function WorkExpList ({workExpList, handleEditWorkExp, handleDeleteWorkExp}) {

    return (
        <Grid templateColumns='repeat(6, 1fr)'>
            
                {workExpList.map((item, index) => (

          <GridItem key={item.id} colSpan={6}>
        
                <Box maxW="100%" borderWidth="1px" borderRadius="lg" m={2}>   
                  <Grid templateColumns='repeat(6, 1fr)'>
                    <GridItem colSpan={5}>
                      <Box textAlign="left" p={2}>
                            <Heading as="h4" size="md">{item.jobTitle} | {item.companyName}</Heading>
                            <Text>{item.fromDate} - {item.isCurrentJob ? "Present" : item.toDate}</Text>
                            <Text>{item.workDescription}</Text>
                          </Box>
                    </GridItem>

                    <GridItem colSpan={1} display="flex" alignItems="center">
                    <IconButton
                      aria-label="Edit"
                      icon={<EditIcon />}
                      colorScheme="blue"
                      onClick={() => handleEditWorkExp(index)}
                      mr={2}
                    />
                    <IconButton
                      aria-label="Delete"
                      icon={<DeleteIcon />}
                      colorScheme="red"
                      onClick={() => handleDeleteWorkExp(index)}
                    />
                    </GridItem>
                  </Grid>
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
