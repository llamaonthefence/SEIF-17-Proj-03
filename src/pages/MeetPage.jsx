import { Box } from "@chakra-ui/react";
import { ListGrid } from "../components/index";
import { ProfileFakeData } from "../components/index";

function MeetPage() {
  const datas = ProfileFakeData;
  const isCreatedPostPage = false;
  return (
    <>
      {/* MeetPage Component */}
      <Box className="MeetPage" bgColor="whitesmoke">
        <ListGrid datas={datas} isCreatedPostPage={isCreatedPostPage} />
      </Box>
    </>
  );
}

export default MeetPage;
