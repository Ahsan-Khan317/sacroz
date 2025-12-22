import { Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";

import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import Loading from "./components/load.jsx";

// Lazy-loaded pages
const Home = lazy(() => import("./pages/home.jsx"));
const About = lazy(() => import("./pages/about.jsx"));
const Service = lazy(() => import("./pages/serv.jsx"));
const Contact = lazy(() => import("./pages/contact.jsx"));
const LocateUs = lazy(() => import("./pages/loc.jsx"));

const App = () => {
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 3000); // smooth entry

    return () => clearTimeout(timer);
  }, []);

  if (initialLoading) {
    return <Loading text="Preparing your experience..." />;
  }

  return (
    <div className="flex flex-col min-h-screen">
    

      <Suspense fallback={<Loading text="Loading page..." />}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/locate" element={<LocateUs />} />
        </Routes>
         <Footer />
      </Suspense>

     
    </div>
  );
};

export default App;
