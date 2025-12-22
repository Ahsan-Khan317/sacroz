import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx"

import Footer from "./components/footer.jsx"
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx"
import Service from "./pages/serv.jsx"
import  Contact from "./pages/contact.jsx"
import LocateUs from "./pages/loc.jsx"
const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/locate" element={<LocateUs />} />
        </Routes>
  <Footer />

    </div>
  );
};

export default App;
