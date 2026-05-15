import { BrowserRouter, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import { MainRoutes } from "./routes/mainRoutes";

export default function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <Navbar />

      <main>
        <Routes>
          {MainRoutes}
        </Routes>
      </main>

      <Footer />

    </BrowserRouter>
  );
}