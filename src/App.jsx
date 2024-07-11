import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar, Footer } from "./components";
import {
  SignUpPage,
  MeetPage,
  OpportunitiesPage,
  HomePage,
  ProfilePage,
} from "./pages";

function App() {
  const location = useLocation();
  const isSignUpPage = location.pathname === "/signup";
  
  return (
    <ChakraProvider>
      <main className="App">
        <>
          {!isSignUpPage && <Navbar />}
          <div className="content-wrapper">
            <div className="content">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/meet" element={<MeetPage />} />
                <Route path="/opportunities" element={<OpportunitiesPage />} />
                <Route path="/profile/*" element={<ProfilePage />} />
              </Routes>
            </div>
          </div>
          {!isSignUpPage && <Footer className="footer"/>}
        </>
      </main>
    </ChakraProvider>
  );
}

export default App;