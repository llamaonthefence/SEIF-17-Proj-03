import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { Navbar, Footer, NoUserNavBar } from "./components";
import {
  SignUpPage,
  SignInPage,
  MeetPage,
  OpportunitiesPage,
  HomePage,
  ProfilePage,
  ProfileEditPage,
  CreatePostPage,
  EditPostPage,
} from "./pages";
import theme from "./util/theme";
import { getUser, logoutUser } from "./service/users";

function App() {
  const [user, setUser] = useState(getUser);
  // console.log("App.jsx - getUser: ", user);

  async function handleLogout() {
    await logoutUser();
    setUser(null);
    window.location.reload(true);
  }

  const location = useLocation();
  const isSignUpPage = location.pathname === "/signup";
  const isSignInPage = location.pathname === "/signin";

  return (
    <ChakraProvider theme={theme}>
      <main className="App">
        <>
          {!isSignInPage &&
            !isSignUpPage &&
            (user ? <Navbar handleLogout={handleLogout} /> : <NoUserNavBar />)}
          <div className="content-wrapper">
            <div className="content">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/signin" element={<SignInPage />} />

                {/* Protected Routes */}
                {user && (
                  <>
                    <Route path="/meet" element={<MeetPage />} />
                    <Route
                      path="/opportunities"
                      element={<OpportunitiesPage />}
                    />
                    <Route path="/profile/:listing_id" element={<ProfileEditPage/>} />
                    <Route path="/profile/*" element={<ProfilePage />} />
                    <Route
                      path="/opportunities/create-post"
                      element={<CreatePostPage />}
                    />
                    <Route
                      path="/opportunities/edit-post"
                      element={<EditPostPage />}
                    />
                  </>
                )}
                {/* Redirect to home if trying to access protected routes when not logged in */}
                {!user && (
                  <>
                    <Route path="/meet" element={<Navigate to="/" />} />
                    <Route
                      path="/opportunities"
                      element={<Navigate to="/" />}
                    />
                    <Route path="/profile/*" element={<Navigate to="/" />} />
                    <Route
                      path="/opportunities/create-post"
                      element={<Navigate to="/" />}
                    />
                    <Route
                      path="/opportunities/edit-post"
                      element={<Navigate to="/" />}
                    />
                  </>
                )}
              </Routes>
            </div>
          </div>
          {!isSignInPage && !isSignUpPage && <Footer className="footer" />}
        </>
      </main>
    </ChakraProvider>
  );
}

export default App;
