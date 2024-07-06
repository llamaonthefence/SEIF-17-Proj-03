import { Box, Stack } from "@chakra-ui/react";
import { ListGrid } from "../components/index";
import { ProfileFakeData, MeetQueryBar } from "../components/index";

function MeetPage() {
  const datas = ProfileFakeData;
  const isCreatedPostPage = false;
  return (
    <>
      <Stack bgColor="lightgray">
        <Stack bgColor="white" m={8} borderRadius="10px">
          {/* MeetQueryBar Component */}
          <MeetQueryBar />
          {/* MeetPage Component */}
          <Box className="MeetPage">
            <ListGrid datas={datas} isCreatedPostPage={isCreatedPostPage} />
          </Box>
        </Stack>
      </Stack>
    </>
  );
}

export default MeetPage;
