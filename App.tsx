
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { AIAssistant } from './components/AIAssistant';
import { 
  LineChart, 
  PieChart, 
  Briefcase, 
  Home, 
  Search, 
  TrendingUp, 
  MapPin, 
  Download,
  Mail,
  Phone,
  Clock,
  ArrowRight,
  Globe,
  CheckCircle,
  Loader2
} from 'lucide-react';
import { COLORS, SERVICES, PARTNERS, LOCATIONS, SOCIALS, LOGO_URL } from './constants';

const App: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'LineChart': return <LineChart className="w-8 h-8" />;
      case 'PieChart': return <PieChart className="w-8 h-8" />;
      case 'Briefcase': return <Briefcase className="w-8 h-8" />;
      case 'Home': return <Home className="w-8 h-8" />;
      case 'Search': return <Search className="w-8 h-8" />;
      case 'TrendingUp': return <TrendingUp className="w-8 h-8" />;
      default: return null;
    }
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      const offset = 80; // Account for fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Update URL hash without jumping
      window.history.pushState(null, '', id);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 5000);
  };

  const handleDownload = () => {
    setIsDownloading(true);
    // Simulate a delay for the download process
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = 'https://img1.wsimg.com/isteam/ip/3ad2672c-57b2-4548-ad5a-cc567fce70aa/blob-10c9aa7.png'; // Placeholder for PDF
      link.setAttribute('download', 'Insights_Advisory_Profile_2025.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setIsDownloading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <AIAssistant />

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://img1.wsimg.com/isteam/getty/1363104915/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1280,h:720" 
            className="w-full h-full object-cover filter brightness-50"
            alt="Hero Background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e2258]/60 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Empowering Businesses <br /> with Planning and <br />
            <span className="text-teal-400">Strategic Insights</span>
          </h1>
          <p className="text-xl text-slate-200 mb-8 max-w-2xl font-light">
            Turn Insights into Action! We are committed to excellence, delivering innovative financial, economic, and real estate consulting solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, '#contact')}
              className="bg-white text-[#1e2258] px-8 py-4 rounded-lg font-semibold hover:bg-teal-500 hover:text-white transition-all duration-300 shadow-xl text-center"
            >
              CONTACT US
            </a>
            <a 
              href="#services" 
              onClick={(e) => scrollToSection(e, '#services')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#1e2258] transition-all duration-300 text-center"
            >
              OUR SERVICES
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-50 overflow-hidden lg:overflow-visible">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative pb-10 lg:pb-0">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-teal-600/20 rounded-full blur-2xl"></div>
              <img 
                src="https://img1.wsimg.com/isteam/ip/3ad2672c-57b2-4548-ad5a-cc567fce70aa/IMG_1824.PNG/:/cr=t:0%25,l:10.23%25,w:88.24%25,h:100%25/rs=w:984,h:984" 
                alt="Our Workspace"
                className="rounded-2xl shadow-2xl relative z-10 w-full"
              />
              <div className="absolute -bottom-6 -right-2 sm:-right-6 bg-[#3d5a5a] text-white p-6 sm:p-8 rounded-2xl hidden md:block shadow-2xl z-20 border-4 border-white animate-in slide-in-from-bottom-5 duration-500">
                <p className="text-3xl sm:text-4xl font-bold mb-1">10+</p>
                <p className="text-xs sm:text-sm font-medium tracking-wide uppercase opacity-90">Years Expertise</p>
              </div>
            </div>
            <div>
              <span className="text-teal-600 font-bold uppercase tracking-widest text-sm">Empowering Your Growth</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#1e2258] mt-4 mb-8">About Insights Advisory</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Insights Advisory is a leading consulting firm specializing in financial and economic advisory services, providing innovative solutions based on in-depth data analysis and strategic planning to help businesses achieve sustainable growth and long-term success.
              </p>
              <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-teal-600 italic text-slate-700 mb-8 relative">
                <span className="absolute -top-4 left-4 text-6xl text-slate-100 font-serif leading-none">“</span>
                At Insights Advisory, we believe that knowledge and vision are the true drivers of growth. Founded with a commitment to excellence, our firm specializes in delivering innovative financial, economic, and real estate consulting solutions.
              </div>
              <a 
                href="#services" 
                onClick={(e) => scrollToSection(e, '#services')}
                className="inline-flex items-center gap-2 text-[#1e2258] font-bold hover:text-teal-600 transition-colors group"
              >
                LEARN MORE <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-[#1e2258] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <svg viewBox="0 0 400 400" className="w-full h-full text-white fill-current">
            <path d="M0,400 Q100,200 400,0 L400,400 Z" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Premium Services</h2>
            <div className="w-24 h-1 bg-teal-400 mx-auto"></div>
            <p className="mt-6 text-slate-300 max-w-2xl mx-auto font-light text-lg">
              Together towards well-studied investments that achieve sustainable growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group hover:-translate-y-2">
                <div className="mb-6 text-teal-400 group-hover:scale-110 transition-transform">
                  {getIcon(service.icon)}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <h2 className="text-4xl sm:text-5xl font-bold text-[#1e2258] mb-8">Our Elite Team</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Our team includes a group of highly experienced and qualified financial and economic specialists. We work collaboratively to provide accurate analyses and innovative solutions that support our clients' investment decisions and contribute to their success.
              </p>
              <div className="flex gap-4">
                <a 
                  href="#contact" 
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="bg-[#3d5a5a] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1e2258] transition-colors"
                >
                  FIND OUT MORE
                </a>
              </div>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <img 
                src="https://img1.wsimg.com/isteam/ip/3ad2672c-57b2-4548-ad5a-cc567fce70aa/blob-3e9e1e7.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true" 
                alt="Our Team"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="py-24 bg-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <span className="text-teal-600 font-bold uppercase tracking-widest text-sm">Regional Presence</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#1e2258] mt-4 mb-12">Expanding Our Reach Across <br /> the Region</h2>
              
              <div className="space-y-12">
                {LOCATIONS.map((loc) => (
                  <div key={loc.id} className="relative pl-12 group">
                    <div className="absolute left-0 top-0 text-teal-600 bg-white p-2 rounded-lg shadow-sm group-hover:scale-110 transition-transform">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1e2258] mb-2">{loc.name}</h3>
                    <p className="text-teal-700 font-semibold mb-2">{loc.description}</p>
                    <p className="text-slate-600 leading-relaxed font-light">{loc.details}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative">
               <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                 <img 
                   src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                   alt="Regional Operations" 
                   className="w-full h-[600px] object-cover" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#1e2258]/80 to-transparent flex flex-col justify-end p-12">
                   <div className="flex items-center gap-4 text-white mb-4">
                     <Globe className="w-10 h-10 text-teal-400" />
                     <span className="text-3xl font-bold serif-font">Global Vision, Local Expertise</span>
                   </div>
                   <p className="text-slate-200 text-lg font-light leading-relaxed">
                     Strategically positioned in key Middle Eastern markets to provide unparalleled local insights backed by international standards.
                   </p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-slate-400 font-medium mb-12 text-sm uppercase tracking-[0.3em]">Institutions that received our studies via our clients</h3>
          <div className="flex flex-wrap justify-center items-center gap-12 sm:gap-20 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {PARTNERS.map((partner) => (
              <img key={partner.id} src={partner.logoUrl} alt={partner.name} className="h-10 sm:h-12 w-auto object-contain" />
            ))}
          </div>
        </div>
      </section>

      {/* Company Profile Section */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#1e2258] mb-8">Company Profile</h2>
          <p className="text-slate-600 mb-12 text-lg">Learn more about our methodology, track record, and values.</p>
          <div className="bg-slate-50 border border-slate-200 p-12 rounded-2xl flex flex-col items-center">
            <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
              <Download className="w-12 h-12 text-teal-600" />
            </div>
            <p className="font-semibold text-[#1e2258] mb-6">Insights Advisory Profile 20250826 (pdf)</p>
            <button 
              onClick={handleDownload}
              disabled={isDownloading}
              className="bg-[#1e2258] text-white px-10 py-4 rounded-lg font-bold hover:bg-teal-700 transition-all duration-300 shadow-xl flex items-center gap-3 disabled:opacity-50"
            >
              {isDownloading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Download className="w-5 h-5" />}
              {isDownloading ? 'PREPARING...' : 'DOWNLOAD NOW'}
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-8">Contact Us</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-teal-400">Get Started Today</h3>
                  <p className="text-slate-400">Reach out with any questions or to set up a meeting to discover the best path to your financial freedom!</p>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-teal-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Address</h4>
                    <p className="text-slate-400">Egypt - Saudi Arabia</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-teal-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Call Us</h4>
                    <p className="text-slate-400">+966 594312308</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-teal-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p className="text-slate-400">Insights.Advisory@hotmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-teal-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Hours</h4>
                    <p className="text-slate-400">Sun - Thu: 09:00 am – 08:00 pm</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-sm relative min-h-[500px]">
              {formSubmitted ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-10 animate-in zoom-in duration-500">
                  <CheckCircle className="w-20 h-20 text-teal-400 mb-6" />
                  <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                  <p className="text-slate-300">Thank you for reaching out. One of our advisors will contact you shortly.</p>
                  <button 
                    onClick={() => setFormSubmitted(false)}
                    className="mt-8 text-teal-400 hover:text-teal-300 font-bold uppercase tracking-widest text-sm underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleFormSubmit}>
                  <div>
                    <label className="block text-sm font-medium mb-2 uppercase tracking-wider">Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 uppercase tracking-wider">Email*</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 uppercase tracking-wider">Message</label>
                    <textarea 
                      rows={4} 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    ></textarea>
                  </div>
                  <button type="submit" className="w-full bg-teal-600 hover:bg-teal-500 text-white font-bold py-4 rounded-lg transition-all duration-300 shadow-xl">
                    SEND MESSAGE
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black text-white border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <a href="#home" onClick={(e) => scrollToSection(e, '#home')}>
              <img src={LOGO_URL} alt="Logo" className="h-14 w-auto brightness-0 invert hover:opacity-100 transition-opacity opacity-90" />
            </a>
            <div className="flex gap-6">
              {SOCIALS.map((social) => (
                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-slate-500 text-sm">
              © 2024 Insights Advisory. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
