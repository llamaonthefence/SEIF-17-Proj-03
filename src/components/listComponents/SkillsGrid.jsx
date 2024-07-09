import { Grid, GridItem, Text } from "@chakra-ui/react";

function SkillsGrid({ skills = [] }) {
  return (
    // SkillsGrid Component
    <Grid templateColumns="repeat(3, 1fr)" gap={2}>
      {skills.slice(0, 3).map((skill, index) => (
        <GridItem
          key={index}
          w="100%"
          bgColor="lightgray"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="6px"
        >
          <Text fontSize="xs" py={1}>
            {skill}
          </Text>
        </GridItem>
      ))}
    </Grid>
  );
}

export default SkillsGrid;
