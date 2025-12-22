import { Link } from "react-router-dom";
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const socialIcons = [
    { Icon: Twitter, link: "/" },
    { Icon: Facebook, link: "/" },
    { Icon: Instagram, link: "/" },
    { Icon: Linkedin, link: "/" },
       
   
  ];

  return (
    <footer className="bg-black/40 backdrop-blur-2xl text-gray-300 not-sm:pb-12">
      {/* TOP INFO */}
      <div className="max-w-7xl mx-auto px-4 py-10 text-center">
        <h2 className="text-white text-xl font-semibold tracking-wide">
          SACROZ INDUSTRIES PRIVATE LIMITED
        </h2>

        <p className="text-lg mt-3 text-gray-700">Head Office</p>
        <p className="text-sm mt-1 text-white">
          Plot No 76-D, Udyog Vihar, Phase-4, Gurgaon, HR 122001
        </p>

        <p className="mt-4 text-md">
          📞 <span className="text-white">+91 76695 30004</span>
        </p>

        <p className="text-md mt-2 text-white">✉️ Services@sacrozindustries.com</p>
        <p className="text-md text-white">✉️ Info@sacrozindustries.com</p>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center gap-4 mt-6">
          {socialIcons.map(({ Icon, link }, index) => (
            <Link
              key={index}
              to={link}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0c223a] hover:bg-orange-500 transition"
            >
              <Icon size={20} strokeWidth={2} className="text-white" />
            </Link>
          ))}
           <Link
              
              to={"/"}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0c223a] hover:bg-orange-500 transition"
            >
       <i className="fa-brands fa-whatsapp  text-2xl"></i>
            </Link>
        </div>
      </div>

      {/* LINKS GRID */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {/* COMPANY */}
          <div>
            <h4 className="text-gray-700 text-2xl font-semibold mb-4 ">Company</h4>
            <ul className="space-y-2 text-lg text-white">
              <li><Link to="/" className="hover:text-orange-400">Home</Link></li>
              <li><Link to="/" className="hover:text-orange-400">About Us</Link></li>
              <li><Link to="/" className="hover:text-orange-400">Services</Link></li>
              <li><Link to="/" className="hover:text-orange-400">Terms of Service</Link></li>
              <li><Link to="/" className="hover:text-orange-400">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* PRODUCTS */}
          <div>
            <h4 className="text-gray-700 text-2xl font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-lg text-white">
              {["Sanitary Ware","CP","PVD","Faucet","Wellness","Vanity"].map(item => (
                <li key={item}><Link to="/" className="hover:text-orange-400">{item}</Link></li>
              ))}
            </ul>
          </div>

          {/* SANITARY */}
          <div>
            <h4 className="text-gray-700 text-2xl font-semibold mb-4">Sanitary</h4>
            <ul className="space-y-2 text-lg text-white">
              {["Kitchen Sink","Closet","Urinals","Orissa Pan","City Pan","Cistern"].map(item => (
                <li key={item}><Link to="/" className="hover:text-orange-400">{item}</Link></li>
              ))}
            </ul>
          </div>

          {/* BATH */}
          <div>
            <h4 className="text-gray-700 text-2xl font-semibold mb-4">Bath</h4>
            <ul className="space-y-2 text-lg text-white">
              {["Wall Mount","Floor Mount","Hot Tub","Hot Spa","Pedestal","Counter Basin"].map(item => (
                <li key={item}><Link to="/" className="hover:text-orange-400">{item}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="text-center text-lg text-gray-700 py-4 border-t border-gray-700">
        <p>© 2023 All Rights Reserved</p>
        <p className="mt-1">
          Designed by <span className="text-orange-400">Arden Telecom Infra Project Ltd.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
