import { Grid, GridItem, Box, Flex } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { CreatedPostSetting, ProfileSetting } from "../components";

function ProfilePage() {
  const location = useLocation();
  function ProfileNav() {
    return (
      <Box className="ProfileNav" p="8">
        <Flex gap="50px" direction="column">
          <Link to="/profile">
            <div className="font-semibold">My Profile</div>
          </Link>
          <Link to={`/profile/createdposts`}>
            <div className="font-semibold">Created Posts</div>
          </Link>
        </Flex>
      </Box>
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
        gap="1"
        bgColor="gray.200"
      >
        {/* Profile Setting navigation on the left "nav" area */}
        <GridItem
          pl="2"
          bg="gray.200"
          alignContent="start"
          area={"nav"}
          bgColor="white"
        >
          <h1 className="text-sm font-bold">
            <ProfileNav />
          </h1>
        </GridItem>

        {/* Setting content on the "main" area */}
        <GridItem pl="2" bg="gray.200" area={"main"}>
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
