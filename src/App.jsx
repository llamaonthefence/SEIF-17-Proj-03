import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import {
  MeetPage,
  OpportunitiesPage,
  HomePage,
  ProfilePage,
  CreatePostPage,
  EditPostPage,
} from "./pages";
import theme from "./util/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <main className="App">
        <>
          <Navbar />
          <div className="content-wrapper">
            <div className="content">
              <Routes>
                <Route path="/" element={<HomePage />} />
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
          <Footer className="footer" />
        </>
      </main>
    </ChakraProvider>
  );
}

export default App;
