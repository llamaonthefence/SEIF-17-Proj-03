import { Grid, GridItem, Box, Flex, Heading } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { CreatedPostSetting, ProfileSetting } from "../components";

function ProfilePage() {
  const location = useLocation();
  function ProfileNav() {
    return (
      <>
        <Box className="ProfileNav" p={8}>
          <Flex gap="20px" direction="column">
            <Link to="/profile">
              <div className="font-semibold">My Profile</div>
            </Link>
            <Link to={`/profile/createdposts`}>
              <div className="font-semibold">Created Posts</div>
            </Link>
          </Flex>
        </Box>
      </>
    );
  }
  return (
    <>
      {/* ProfilePage Component */}
      <Grid
        className="ProfilePage"
        templateAreas={`"nav main"`}
        gridTemplateRows={"100% 1fr 30px"}
        gridTemplateColumns={"300px 1fr"}
        h="840px"
        gap="0"
        bgColor="gwhite"
      >
        {/* Profile Setting navigation on the left "nav" area  */}
        <GridItem pl="2" bg="lightgray" alignContent="start" area={"nav"} p={8}>
          <Heading fontSize="2xl">My Profile</Heading>
          <ProfileNav />
        </GridItem>

        {/* Setting content on the "main" area */}
        <GridItem pl="2" bg="white" area={"main"}>
          {/* If page is /profile show ProfileSetting contents */}
          {location.pathname === "/profile" && <ProfileSetting />}

          {/* If page is /profile/createdposts show CreatedPostSetting contents */}
          {location.pathname === "/profile/createdposts" && (
            <CreatedPostSetting />
          )}
        </GridItem>
      </Grid>
    </>
  );
}

export default ProfilePage;
