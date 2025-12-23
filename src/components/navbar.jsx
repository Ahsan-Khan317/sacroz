import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";
import {
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  PhoneCall,
  HelpCircle,
  FileText,
  Download,
} from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <>
      <nav className="sticky xl:pt-5 top-0 z-50 bg-white/40 backdrop-blur-2xl border border-white rounded-b-2xl">

        {/* ================= DESKTOP UPPER UTILITY LINKS ================= */}
        <div className="hidden md:flex absolute top-0 right-0 z-50">
          <div className="flex items-center gap-4 px-4 py-2 bg-white/90 backdrop-blur-xl border border-white rounded-bl-2xl shadow-md">
            <Link to="/whatsapp" className="flex items-center gap-1 text-sm font-medium hover:text-green-600">
              <MessageCircle size={15} /> WhatsApp
            </Link>
            <Link to="/callback" className="flex items-center gap-1 text-sm font-medium hover:text-indigo-600">
              <PhoneCall size={15} /> Callback
            </Link>
            <Link to="/helpdesk" className="flex items-center gap-1 text-sm font-medium hover:text-amber-600">
              <HelpCircle size={15} /> Helpdesk
            </Link>
          </div>
        </div>

        {/* ================= MAIN NAV ================= */}
        <div className="relative max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Sacroz Industries" className="h-12 object-contain" />
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <div className="hidden md:flex items-center gap-7 text-[15px] font-medium text-slate-800">
            <Link to="/" className="hover:text-indigo-600">Home</Link>

            {/* Products Dropdown */}
            <div className="group">
              <button className="flex items-center gap-1 hover:text-indigo-600 py-6">
                Products <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 right-0 top-full mx-auto max-w-7xl px-4 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
                <div className="bg-white shadow-xl border border-slate-100 rounded-xl p-8 grid grid-cols-4 gap-8 text-sm">
                  <div className="space-y-2">
                    <h3 className="font-bold text-indigo-600 mb-3">WATER CLOSET</h3>
                    <Link to="/products/single-piece-wc" className="block hover:text-indigo-600">Single Piece WC</Link>
                    <Link to="/products/wall-hung" className="block hover:text-indigo-600">Wall Hung</Link>
                    <Link to="/products/coupled-closet" className="block hover:text-indigo-600">Coupled Closet</Link>
                    <Link to="/products/floor-mounted-closet" className="block hover:text-indigo-600">Floor Mounted Closet</Link>
                    <Link to="/products/urinals" className="block hover:text-indigo-600">Urinals</Link>
                    <Link to="/products/squatting-pan" className="block hover:text-indigo-600">Squatting Pan</Link>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-indigo-600 mb-3">BATHROOM BASIN</h3>
                    <Link to="/products/bowl-basins" className="block hover:text-indigo-600">Bowl Basins</Link>
                    <Link to="/products/wall-hung-basin-full-pedestal" className="block hover:text-indigo-600">Wall Hung Basin Full Pedestal</Link>
                    <Link to="/products/wall-hung-basin-half-pedestal" className="block hover:text-indigo-600">Wall Hung Basin Half Pedestal</Link>
                    <Link to="/products/wall-hung-basin-no-pedestal" className="block hover:text-indigo-600">Wall Hung Basin No Pedestal</Link>
                    <Link to="/products/integrated-basin" className="block hover:text-indigo-600">Integrated Basin</Link>
                    <Link to="/products/countertop-basin" className="block hover:text-indigo-600">Countertop Basin</Link>
                    <Link to="/products/below-counter-basins" className="block hover:text-indigo-600">Below Counter Basins</Link>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-indigo-600 mb-3">PEDESTALS & FAUCETS</h3>
                    <Link to="/products/lab-sink" className="block hover:text-indigo-600">Lab Sink</Link>
                    <Link to="/products/freestanding" className="block hover:text-indigo-600">Freestanding</Link>
                    <h3 className="font-bold text-indigo-600 mt-4 mb-3">BATHROOM FAUCETS</h3>
                    <Link to="/products/cardinal" className="block hover:text-indigo-600">Cardinal</Link>
                    <Link to="/products/praseo" className="block hover:text-indigo-600">Praseo</Link>
                    <Link to="/products/quattro" className="block hover:text-indigo-600">Quattro</Link>
                    <Link to="/products/sensor-faucet" className="block hover:text-indigo-600">Sensor Faucet</Link>
                    <Link to="/products/espirion" className="block hover:text-indigo-600">Espirion</Link>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-indigo-600 mb-3 text-xs uppercase">Showers & Others</h3>
                    <Link to="/products/rain-shower" className="block hover:text-indigo-600">Rain Shower</Link>
                    <Link to="/products/overhead-showers" className="block hover:text-indigo-600">Overhead showers</Link>
                    <Link to="/products/hand-shower" className="block hover:text-indigo-600">Hand Shower</Link>
                    <Link to="/products/wellness" className="block hover:text-indigo-600">Wellness</Link>
                    <Link to="/products/kitchen-sink" className="block hover:text-indigo-600">Kitchen Sink</Link>
                    <Link to="/products/new-collections" className="block hover:text-indigo-600 font-semibold">New Collections</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Catalogue Dropdown */}
            <div className="group">
              <button className="flex items-center gap-1 hover:text-indigo-600 py-6">
                Catalogue <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 right-0 top-full mx-auto max-w-7xl px-4 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
                <div className="bg-white shadow-xl border border-slate-100 rounded-xl p-6 w-80 ml-auto mr-40">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded-lg cursor-pointer">
                      <div className="bg-indigo-100 p-2 rounded-md text-indigo-600"><FileText size={20} /></div>
                      <div><p className="font-semibold text-sm">Main Catalogue 2024</p></div>
                    </div>
                    <div className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded-lg cursor-pointer">
                      <div className="bg-green-100 p-2 rounded-md text-green-600"><Download size={20} /></div>
                      <div><p className="font-semibold text-sm">Download Price List</p></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* About Dropdown */}
            <div className="group">
              <button className="flex items-center gap-1 hover:text-indigo-600 py-6">
                About <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 right-0 top-full mx-auto max-w-7xl px-4 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
                <div className="bg-white shadow-xl border border-slate-100 rounded-xl p-8 grid grid-cols-3 gap-8 text-sm">
                  <div className="space-y-2">
                    <h3 className="font-bold text-indigo-600 mb-3 uppercase text-xs">Our Company</h3>
                    <Link to="/about/parryware" className="block hover:text-indigo-600">About Parryware</Link>
                    <Link to="/about/history" className="block hover:text-indigo-600">History</Link>
                    <Link to="/about/values" className="block hover:text-indigo-600">Values</Link>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-indigo-600 mb-3 uppercase text-xs">Excellence</h3>
                    <Link to="/about/excellence" className="block hover:text-indigo-600">Parryware Excellence</Link>
                    <Link to="/about/quality-certifications" className="block hover:text-indigo-600">Quality & Certifications</Link>
                    <Link to="/about/manufacturing" className="block hover:text-indigo-600">Manufacturing</Link>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-indigo-600 mb-3 uppercase text-xs">Community</h3>
                    <Link to="/about/csr" className="block hover:text-indigo-600">CSR</Link>
                    <Link to="/about/loyalty" className="block hover:text-indigo-600">Loyalty Program</Link>
                    <Link to="/about/projects" className="block hover:text-indigo-600">Parryware Projects</Link>
                  </div>
                </div>
              </div>
            </div>

            <Link to="/" className="hover:text-indigo-600">Dealer</Link>
            <Link to="/contact" className="hover:text-indigo-600">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {menuOpen && (
          <div className="md:hidden bg-white fixed inset-x-0 top-16 border-t overflow-y-auto max-h-[calc(100vh-120px)] px-4 py-5 space-y-4 shadow-2xl z-60">
            <Link to="/" className="block font-semibold text-slate-800" onClick={closeMenu}>Home</Link>

            {/* Mobile Products */}
            <div className="space-y-2">
              <button onClick={() => toggleDropdown("products")} className="w-full flex justify-between font-semibold text-slate-800">
                Products {openDropdown === "products" ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              {openDropdown === "products" && (
                <div className="pl-4 border-l-2 border-indigo-100 space-y-4 mt-2">
                  <div>
                    <p className="text-xs font-bold text-indigo-600 uppercase mb-2">Water Closet</p>
                    <div className="grid grid-cols-1 gap-2 text-sm text-slate-600">
                      <Link to="/products/single-piece-wc" onClick={closeMenu}>Single Piece WC</Link>
                      <Link to="/products/wall-hung" onClick={closeMenu}>Wall Hung</Link>
                      <Link to="/products/urinals" onClick={closeMenu}>Urinals</Link>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-indigo-600 uppercase mb-2">Basins</p>
                    <div className="grid grid-cols-1 gap-2 text-sm text-slate-600">
                      <Link to="/products/bowl-basins" onClick={closeMenu}>Bowl Basins</Link>
                      <Link to="/products/countertop-basin" onClick={closeMenu}>Countertop Basin</Link>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-indigo-600 uppercase mb-2">Faucets & Showers</p>
                    <div className="grid grid-cols-1 gap-2 text-sm text-slate-600">
                      <Link to="/products/cardinal" onClick={closeMenu}>Cardinal Faucets</Link>
                      <Link to="/products/rain-shower" onClick={closeMenu}>Rain Showers</Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Catalogue */}
            <div className="space-y-2">
              <button onClick={() => toggleDropdown("catalogue")} className="w-full flex justify-between font-semibold text-slate-800">
                Catalogue {openDropdown === "catalogue" ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              {openDropdown === "catalogue" && (
                <div className="pl-4 border-l-2 border-indigo-100 space-y-3 mt-2 text-sm text-slate-600">
                  <p className="flex items-center gap-2"><FileText size={16}/> Main Catalogue 2024</p>
                  <p className="flex items-center gap-2"><Download size={16}/> Download Price List</p>
                </div>
              )}
            </div>

            {/* Mobile About */}
            <div className="space-y-2">
              <button onClick={() => toggleDropdown("about")} className="w-full flex justify-between font-semibold text-slate-800">
                About {openDropdown === "about" ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              {openDropdown === "about" && (
                <div className="pl-4 border-l-2 border-indigo-100 space-y-2 mt-2 text-sm text-slate-600">
                  <Link to="/about/parryware" className="block" onClick={closeMenu}>About Parryware</Link>
                  <Link to="/about/history" className="block" onClick={closeMenu}>History</Link>
                  <Link to="/about/excellence" className="block" onClick={closeMenu}>Excellence</Link>
                  <Link to="/about/manufacturing" className="block" onClick={closeMenu}>Manufacturing</Link>
                  <Link to="/about/projects" className="block" onClick={closeMenu}>Projects</Link>
                </div>
              )}
            </div>

            <Link to="/dealer" className="block font-semibold text-slate-800" onClick={closeMenu}>Become a Dealer</Link>
            <Link to="/contact" className="block font-semibold text-slate-800" onClick={closeMenu}>Contact</Link>
          </div>
        )}
      </nav>

      {/* ================= MOBILE BOTTOM NAV ================= */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t md:hidden z-50">
        <div className="flex justify-around py-3 text-[10px] font-bold text-slate-500 uppercase">
          <Link to="/whatsapp" className="flex flex-col items-center gap-1"><MessageCircle size={20} className="text-green-500"/>WhatsApp</Link>
          <Link to="/callback" className="flex flex-col items-center gap-1"><PhoneCall size={20} className="text-indigo-500"/>Callback</Link>
          <Link to="/helpdesk" className="flex flex-col items-center gap-1"><HelpCircle size={20} className="text-orange-500"/>Helpdesk</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;