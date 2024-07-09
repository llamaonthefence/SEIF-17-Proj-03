import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar, Footer } from "./components";
import {
  SignInPage,
  MeetPage,
  OpportunitiesPage,
  HomePage,
  ProfilePage,
  CreatePostPage,
  EditPostPage,
} from "./pages";
import theme from "./util/theme";

function App() {
  const location = useLocation();
  const isSignInPage = location.pathname === "/signin";
  
  return (
    <ChakraProvider theme={theme}>
      <main className="App">
        <>
          {!isSignInPage && <Navbar />}
          <div className="content-wrapper">
            <div className="content">
              <Routes>
                <Route path="/" element={<HomePage />} />
                  <Route path="/signin" element={<SignInPage />} />
                <Route path="/meet" element={<MeetPage />} />
                <Route path="/opportunities" element={<OpportunitiesPage />} />
                <Route
                  path="/opportunities/create-post"
                  element={<CreatePostPage />}
                />
                <Route
                  path="/opportunities/edit-post"
                  element={<EditPostPage />}
                />
                <Route path="/profile/*" element={<ProfilePage />} />
              </Routes>
            </div>
          </div>
          {!isSignInPage && <Footer className="footer"/>}
        </>
      </main>
    </ChakraProvider>
  );
}

export default App;
