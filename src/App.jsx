import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { MeetPage, OpportunitiesPage, HomePage, ProfilePage } from "./pages";

function App() {
  return (
    <ChakraProvider>
      <main className="App">
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/meet" element={<MeetPage />} />
            <Route path="/opportunities" element={<OpportunitiesPage />} />
            <Route path="/profile/*" element={<ProfilePage />} />
          </Routes>
          <Footer />
        </>
      </main>
    </ChakraProvider>
  );
}

export default App;
