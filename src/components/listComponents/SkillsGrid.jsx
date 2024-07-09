import { Grid, GridItem } from "@chakra-ui/react";

function SkillsGrid({ skills = [] }) {
  return (
    // SkillsGrid Component
    <Grid templateColumns="repeat(3, 1fr)" gap={4}>
      {skills.slice(0, 3).map((skill, index) => (
        <GridItem
          key={index}
          w="100%"
          h="10"
          bgColor="salmon"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {skill}
        </GridItem>
      ))}
    </Grid>
  );
}

export default SkillsGrid;
