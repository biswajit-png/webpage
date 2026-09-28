import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Fintech from "./pages/fintech/Fintech";
import Health from "./pages/health/Health";
import Portfolio from "./pages/portfolio/Portfolio";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fintech" element={<Fintech />} />
        <Route path="/health" element={<Health />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}
