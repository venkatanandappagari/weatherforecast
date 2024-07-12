import { Route, BrowserRouter, Routes } from "react-router-dom";

import HomePage from "./pages/Home";
import AboutPage from "./pages/About";

import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
