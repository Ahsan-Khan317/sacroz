import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png"
import {
  Menu,
  X,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <>
      {/* ================= TOP NAV ================= */}
      <nav className="sticky top-0 z-50 bg-white/30 backdrop-blur-2xl border border-white rounded-b-2xl">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Sacroz Industries"
              className="h-12 object-contain"
            />
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <div className="hidden md:flex items-center gap-7 text-[15px] font-medium text-slate-800">

            {/* Home FIRST */}
            <Link to="/" className="hover:text-indigo-600">
              Home
            </Link>

            {/* Products */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("products")}
                className="flex items-center gap-1 hover:text-indigo-600"
              >
                Products
                {openDropdown === "products" ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </button>

              {openDropdown === "products" && (
                <div className="absolute left-0 top-full mt-3 w-52 bg-white/90 backdrop-blur-xl border rounded-xl shadow-lg">
                  {["Sanitary Ware", "CP", "Faucet"].map((item) => (
                    <Link
                      key={item}
                      to="/"
                      className="block px-4 py-2 text-base hover:bg-slate-100/70"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Catalogue */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("catalogue")}
                className="flex items-center gap-1 hover:text-indigo-600"
              >
                Catalogue Details
                {openDropdown === "catalogue" ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </button>

              {openDropdown === "catalogue" && (
                <div className="absolute left-0 top-full mt-3 w-52 bg-white/90 backdrop-blur-xl border rounded-xl shadow-lg">
                  {["PDF Catalogue", "Price List"].map((item) => (
                    <Link
                      key={item}
                      to="/"
                      className="block px-4 py-2 text-base hover:bg-slate-100/70"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Resources */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("resources")}
                className="flex items-center gap-1 hover:text-indigo-600"
              >
                Resources
                {openDropdown === "resources" ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </button>

              {openDropdown === "resources" && (
                <div className="absolute left-0 top-full mt-3 w-52 bg-white/90 backdrop-blur-xl border rounded-xl shadow-lg">
                  {["Blogs", "Guides"].map((item) => (
                    <Link
                      key={item}
                      to="/"
                      className="block px-4 py-2 text-base hover:bg-slate-100/70"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/" className="hover:text-indigo-600">Become a Dealer</Link>
            <Link to="/locate" className="hover:text-indigo-600">Locate Us</Link>
            <Link to="/about" className="hover:text-indigo-600">About</Link>
            <Link to="/service" className="hover:text-indigo-600">Services</Link>
            <Link to="/contact" className="hover:text-indigo-600">Contact</Link>
          </div>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {menuOpen && (
          <div className="md:hidden bg-white/90 backdrop-blur-2xl border-t border-slate-200/40 rounded-t-2xl px-4 py-5 space-y-4">

            {[
              { key: "products", label: "Products", items: ["Sanitary Ware", "CP", "Faucet"] },
              { key: "catalogue", label: "Catalogue Details", items: ["PDF Catalogue", "Price List"] },
              { key: "resources", label: "Resources", items: ["Blogs", "Guides"] },
            ].map((section) => (
              <div key={section.key}>
                <button
                  onClick={() => toggleDropdown(section.key)}
                  className="w-full flex justify-between items-center text-base font-medium"
                >
                  {section.label}
                  {openDropdown === section.key ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </button>

                {openDropdown === section.key && (
                  <div className="pl-4 mt-2 space-y-2 text-base text-slate-700">
                    {section.items.map((item) => (
                      <Link key={item} to="/" className="block">
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link to="/" className="block text-base font-medium">Become a Dealer</Link>
            <Link to="/locate" className="block text-base font-medium">Locate Us</Link>
          </div>
        )}
      </nav>

      {/* ================= MOBILE BOTTOM NAV ================= */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/30 backdrop-blur-2xl border-t border-slate-200/40 rounded-t-2xl md:hidden z-40">
        <div className="flex justify-around py-3 text-base font-medium">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/service">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
