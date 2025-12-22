import React from 'react';
import { motion } from 'framer-motion';
import { 
  Droplets, 
  Waves, 
  Settings, 
  Layout, 
  ShieldCheck, 
  Sparkles,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const About = () => {
  const products = [
    { title: "Toilets (Commode)", desc: "Blending cutting-edge technology with timeless design.", icon: <Settings className="text-indigo-600" /> },
    { title: "Washbasins", desc: "Meticulously designed to be your bathroom’s centerpiece.", icon: <Sparkles className="text-indigo-600" /> },
    { title: "Premium Faucets", desc: "Indulge in the artistry of water flow and luxury.", icon: <Droplets className="text-indigo-600" /> },
    { title: "Spa Showers", desc: "Engineered for relaxation and angelic rejuvenation.", icon: <Waves className="text-indigo-600" /> },
    { title: "Bath Tubs", desc: "Immerse yourself in opulence and lifetime luxury.", icon: <ShieldCheck className="text-indigo-600" /> },
    { title: "Vanities & Cabinets", desc: "Practical and opulent storage solutions.", icon: <Layout className="text-indigo-600" /> },
  ];

  return (
    <div className="bg-white font-sans text-slate-900">
      
      {/* ======= HERO SECTION ======= */}
      <section className="relative h-[60vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
            <img 
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2070" 
                alt="Bathroom Interior" 
                className="w-full h-full object-cover"
            />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-slate-900/80 z-10" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-20 text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">About Us</h1>
          <p className="text-indigo-200 text-lg md:text-2xl italic max-w-2xl mx-auto">
            "Where Elegance Meets Innovation and Technology"
          </p>
        </motion.div>
      </section>

      {/* ======= CORE PHILOSOPHY ======= */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-indigo-600 uppercase tracking-widest mb-4">The Sacroz Symbol</h2>
            <p className="text-slate-600 leading-relaxed text-lg mb-6">
              At Sacroz Industries, we're more than just a name; we're a symbol of style, innovation, and technology. 
              We reflect your elegant lifestyle and redefine the state of comfort with our splendid bath products.
            </p>
            <div className="bg-indigo-50 p-8 rounded-3xl border-l-8 border-indigo-600">
              <h3 className="text-xl font-bold mb-2">Crafting Excellence</h3>
              <p className="text-slate-600 italic">
                "For us, it's not merely about product development; it's a way of life. We live the procedure, 
                ensuring every creation bears the mark of excellence."
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <img src="https://i.pinimg.com/736x/bb/85/31/bb853133aaed0d5fc219adcf6105c001.jpg" className="rounded-2xl shadow-xl mt-8" alt="Basin" />
            <img
             src="https://i.pinimg.com/736x/68/90/32/6890323a80e5596c0d11e203838535f2.jpg" className="rounded-2xl shadow-xl" alt="Faucet" />
          </motion.div>
        </div>
      </section>

      {/* ======= PRODUCT GRID SECTION ======= */}
      <section className="py-20 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-slate-900">Experience the Difference</h2>
          <p className="text-slate-500">State-of-the-art technology driven by angelic tranquility</p>
        </div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6">
                {p.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{p.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ======= TEAM SECTION ======= */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Leadership</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((m) => (
            <motion.div key={m} className="group relative">
              <div className="aspect-square bg-slate-200 rounded-3xl overflow-hidden mb-4 shadow-lg">
                <img src={`https://i.pravatar.cc/400?img=${m+10}`} alt="Team" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <h4 className="font-bold text-lg text-center">Expert Consultant</h4>
              <p className="text-indigo-600 text-center text-sm font-medium">Sacroz Specialist</p>
            </motion.div>
          ))}
        </div>
      </section>


    </div>
  );
};

export default About;