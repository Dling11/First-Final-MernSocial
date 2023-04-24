import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "pages/a - navbar/index";
import UserWidget from "pages/e - widgets/UserWidget";
import MyPostWidget from "pages/e - widgets/MyPostWidget";
import PostsWidget from "pages/e - widgets/PostsWidget";
import AboutLayout from "pages/e - widgets/AboutLayout"
import FriendListWidget from "pages/e - widgets/FriendListWidget";

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);

  return (
    <Box>
{/* ========> Navbar <======== */}
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
{/* ========> UserWidget <======== */}
          <UserWidget userId={_id} picturePath={picturePath} />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
{/* ========> MyPostWidget <======== */}
          <MyPostWidget 
            picturePath={picturePath} 
          />
{/* ========> MyPostWidget <======== */}
          <PostsWidget 
            userId={_id} 
          />
        </Box>

{/* ========> Third && AboutDesign && FriendListWidget  <======== */}
        {isNonMobileScreens && (
          <Box flexBasis="26%">
            <AboutLayout />
            <Box m="2rem 0" />
            <FriendListWidget userId={_id} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HomePage;
