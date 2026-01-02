import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import BlogPost from "./pages/BlogPost";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/manifesto" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
