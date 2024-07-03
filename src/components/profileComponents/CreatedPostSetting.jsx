import { Box } from "@chakra-ui/react";
import { PostFakeData, ListGrid } from "../index";

function CreatedPostSetting() {
  const datas = PostFakeData;
  const isCreatedPostPage = true;
  return (
    <>
      {/* CreatePostedSetting Component */}
      <Box className="CreatePostingSetting">
        <ListGrid datas={datas} isCreatedPostPage={isCreatedPostPage} />
      </Box>
    </>
  );
}

export default CreatedPostSetting;
