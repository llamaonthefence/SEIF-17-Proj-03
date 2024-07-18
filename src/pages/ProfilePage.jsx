import { Grid, GridItem, Box, Flex, Heading } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { CreatedPostSetting, ProfileSetting } from "../components";

function ProfilePage() {
  const location = useLocation();
  function ProfileNav() {
    return (
      <>
        <Box className="ProfileNav" p={8} h="auto">
          <Flex gap="20px" direction="column">
            <Link to="/profile">
              <div className="font-semibold">My Profile</div>
            </Link>
            <Link to={`/profile/mysavedjobs`}>
              <div>
                <span className="font-semibold">My saved jobs</span>
                <br />
                <span className="font-regular">(coming soon)</span>
              </div>
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
        gridTemplateRows={"100% 1fr 70vh"}
        gridTemplateColumns={"300px 1fr"}
        h="auto"
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
