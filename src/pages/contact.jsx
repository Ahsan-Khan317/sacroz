import React, { useState } from 'react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Send, 
  Clock,
  Download,
  MessageCircle,
  CheckCircle,
  Globe
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // YOUR WHATSAPP CONFIGURATION
    const myNumber = "918521252299"; // Your provided number with country code
    
    // Formatting the message for WhatsApp
    const whatsappMessage = 
      `*New Website Inquiry - SACROZ*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Subject:* ${formData.subject}%0A` +
      `*Message:* ${formData.message}`;

    // Constructing the WhatsApp URL
    const whatsappUrl = `https://wa.me/${myNumber}?text=${whatsappMessage}`;

    // Opening WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

    // Show success state on website
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#fafbfc] pb-20">
      
      {/* ======= Hero Section ======= */}
      <div className="relative h-112.5 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.pinimg.com/736x/82/fe/21/82fe2149a24e593441049b554bcd1244.jpg" 
            alt="Luxury Bathware" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[2px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Connect <span className="text-indigo-400 font-light text-4xl md:text-6xl italic block md:inline">with us</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-300 text-lg font-light">
            Direct access to premium bath solutions. Reach us via the form below or chat instantly on WhatsApp.
          </p>
        </div>
      </div>

      {/* ======= Main Content ======= */}
      <div className="container mx-auto px-4 -mt-24 relative z-20">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-[2.5rem] shadow-xl p-8 md:p-10 border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Direct Contact</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="p-3 rounded-2xl bg-indigo-600 text-white shadow-lg">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">Corporate Office</h3>
                    <p className="text-slate-500 text-sm">Patel Marg, Mansarovar Jaipur-302020</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="p-3 rounded-2xl bg-slate-800 text-white shadow-lg">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">Email Us</h3>
                    <p className="text-slate-500 text-sm">Services@sacrozindustries.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="p-3 rounded-2xl bg-green-600 text-white shadow-lg">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">Call/WhatsApp</h3>
                    <p className="text-slate-500 text-sm">+91 85212 52299</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-slate-50 rounded-3xl border border-dashed border-slate-200 text-center">
                <Globe className="mx-auto mb-3 text-slate-400" size={32} />
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Global Support Available</p>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 border border-slate-100">
              {isSubmitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-green-600" size={40} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-2">Inquiry Initialized!</h3>
                  <p className="text-slate-500">Opening WhatsApp for instant communication...</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Your Name</label>
                      <input 
                        type="text" name="name" required
                        value={formData.name} onChange={handleChange}
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all"
                        placeholder="Full Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email</label>
                      <input 
                        type="email" name="email" required
                        value={formData.email} onChange={handleChange}
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all"
                        placeholder="Email Address"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Subject</label>
                    <input 
                      type="text" name="subject" required
                      value={formData.subject} onChange={handleChange}
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all"
                      placeholder="Product Inquiry / Dealer Request"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Message</label>
                    <textarea 
                      name="message" required rows="4"
                      value={formData.message} onChange={handleChange}
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all resize-none"
                      placeholder="How can we help?"
                    ></textarea>
                  </div>

                  <button className="w-full py-5 bg-green-600 hover:bg-green-700 text-white font-bold rounded-2xl shadow-xl shadow-green-200 transition-all flex items-center justify-center gap-3 group">
                    <span>Send via WhatsApp</span>
                    <MessageCircle size={18} className="group-hover:scale-125 transition-transform" />
                  </button>
                </form>
              )}

              <div className="mt-8 flex items-center gap-4 text-slate-400 justify-center">
                <Clock size={16} />
                <span className="text-xs font-bold tracking-widest uppercase">Mon - Sat: 10AM - 7PM</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;