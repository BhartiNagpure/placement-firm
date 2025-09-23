import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ChevronRight,
  Users,
  BookOpen,
  Target,
  Award,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Star,
  Building2,
  GraduationCap,
  Briefcase,
  TrendingUp
} from 'lucide-react';
import Navbar from './layout/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Footer from './layout/Footer';
import Contactpage from './pages/Contactpage';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    // <div className="min-h-screen bg-white">
    //   {/* Navigation */}
    //   <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    //     isScrolled 
    //       ? 'bg-white/95 backdrop-blur-md shadow-lg mx-4 mt-4 rounded-2xl' 
    //       : 'bg-transparent'
    //   }`}>
    //     <div className={`px-6 ${isScrolled ? 'py-3' : 'py-6'} transition-all duration-300`}>
    //       <div className="flex items-center justify-between">
    //         <div className="flex items-center space-x-2">
    //           <GraduationCap className="h-8 w-8  text-[#1F497D]" />
    //           <span className="text-2xl font-bold text-gray-900">PlacePro</span>
    //         </div>

    //         {/* Desktop Navigation */}
    //         <div className="hidden md:flex items-center space-x-8">
    //           <button onClick={() => scrollToSection('home')} className="text-gray-700 hover: text-[#1F497D] transition-colors">
    //             Home
    //           </button>
    //           <button onClick={() => scrollToSection('about')} className="text-gray-700 hover: text-[#1F497D] transition-colors">
    //             About
    //           </button>
    //           <button onClick={() => scrollToSection('services')} className="text-gray-700 hover: text-[#1F497D] transition-colors">
    //             Services
    //           </button>
    //           <button onClick={() => scrollToSection('clients')} className="text-gray-700 hover: text-[#1F497D] transition-colors">
    //             Partners
    //           </button>
    //           <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover: text-[#1F497D] transition-colors">
    //             Success Stories
    //           </button>
    //           <button onClick={() => scrollToSection('contact')} className=" text-[#1F497D] text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
    //             Contact Us
    //           </button>
    //         </div>

    //         {/* Mobile menu button */}
    //         <button
    //           onClick={() => setIsMenuOpen(!isMenuOpen)}
    //           className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
    //         >
    //           {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    //         </button>
    //       </div>

    //       {/* Mobile Navigation */}
    //       {isMenuOpen && (
    //         <div className="md:hidden mt-4 py-4 border-t border-gray-200">
    //           <div className="flex flex-col space-y-4">
    //             <button onClick={() => scrollToSection('home')} className="text-gray-700 hover: text-[#1F497D] transition-colors text-left">
    //               Home
    //             </button>
    //             <button onClick={() => scrollToSection('about')} className="text-gray-700 hover: text-[#1F497D] transition-colors text-left">
    //               About
    //             </button>
    //             <button onClick={() => scrollToSection('services')} className="text-gray-700 hover: text-[#1F497D] transition-colors text-left">
    //               Services
    //             </button>
    //             <button onClick={() => scrollToSection('clients')} className="text-gray-700 hover: text-[#1F497D] transition-colors text-left">
    //               Partners
    //             </button>
    //             <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover: text-[#1F497D] transition-colors text-left">
    //               Success Stories
    //             </button>
    //             <button onClick={() => scrollToSection('contact')} className=" text-[#1F497D] text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors text-left w-fit">
    //               Contact Us
    //             </button>
    //           </div>
    //         </div>
    //       )}
    //     </div>
    //   </nav>

    //   {/* Hero Section */}
    //   <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
    //     <div className="max-w-7xl mx-auto px-6 text-center">
    //       <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
    //         Your Gateway to
    //         <span className=" text-[#1F497D] block">Career Success</span>
    //       </h1>
    //       <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
    //         Connecting talented individuals with top companies through comprehensive training programs, 
    //         campus recruitment drives, and personalized career placement services.
    //       </p>
    //       <div className="flex flex-col sm:flex-row gap-4 justify-center">
    //         <button 
    //           onClick={() => scrollToSection('contact')} 
    //           className=" text-[#1F497D] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
    //         >
    //           <span>Get a Quote</span>
    //           <ChevronRight className="h-5 w-5" />
    //         </button>
    //         <button 
    //           onClick={() => scrollToSection('about')} 
    //           className="border-2 border-blue-600  text-[#1F497D] px-8 py-4 rounded-full text-lg font-semibold hover: text-[#1F497D] hover:text-white transition-all duration-200"
    //         >
    //           Learn More
    //         </button>
    //       </div>
    //     </div>
    //   </section>

    //   {/* About Section */}
    //   <section id="about" className="py-20 bg-white">
    //     <div className="max-w-7xl mx-auto px-6">
    //       <div className="text-center mb-16">
    //         <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About PlacePro</h2>
    //         <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
    //           With over a decade of experience, we're the leading placement and training firm 
    //           dedicated to bridging the gap between education and employment.
    //         </p>
    //       </div>

    //       <div className="grid md:grid-cols-2 gap-12 items-center">
    //         <div>
    //           <img 
    //             src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800" 
    //             alt="Professional team meeting"
    //             className="rounded-2xl shadow-2xl"
    //           />
    //         </div>
    //         <div>
    //           <h3 className="text-3xl font-bold text-gray-900 mb-6">Empowering Careers Since 2010</h3>
    //           <p className="text-gray-600 mb-6 leading-relaxed">
    //             We specialize in creating meaningful connections between talented individuals and leading companies. 
    //             Our comprehensive approach combines industry expertise with personalized guidance to ensure 
    //             successful career transitions.
    //           </p>
    //           <div className="space-y-4">
    //             <div className="flex items-center space-x-3">
    //               <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
    //                 <Award className="h-4 w-4  text-[#1F497D]" />
    //               </div>
    //               <span className="text-gray-700">10+ Years of Excellence</span>
    //             </div>
    //             <div className="flex items-center space-x-3">
    //               <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
    //                 <Users className="h-4 w-4  text-[#1F497D]" />
    //               </div>
    //               <span className="text-gray-700">50,000+ Successful Placements</span>
    //             </div>
    //             <div className="flex items-center space-x-3">
    //               <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
    //                 <Building2 className="h-4 w-4  text-[#1F497D]" />
    //               </div>
    //               <span className="text-gray-700">500+ Partner Companies</span>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Services Section */}
    //   <section id="services" className="py-20 bg-gray-50">
    //     <div className="max-w-7xl mx-auto px-6">
    //       <div className="text-center mb-16">
    //         <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
    //         <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
    //           Comprehensive solutions designed to accelerate your career journey and help companies 
    //           find the perfect talent match.
    //         </p>
    //       </div>

    //       <div className="grid md:grid-cols-3 gap-8">
    //         {/* Campus Drives */}
    //         <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
    //           <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
    //             <GraduationCap className="h-8 w-8  text-[#1F497D]" />
    //           </div>
    //           <h3 className="text-2xl font-bold text-gray-900 mb-4">Campus Drives</h3>
    //           <p className="text-gray-600 mb-6 leading-relaxed">
    //             Organize comprehensive campus recruitment drives connecting fresh graduates 
    //             with leading companies across various industries.
    //           </p>
    //           <ul className="space-y-2 text-gray-600">
    //             <li className="flex items-center space-x-2">
    //               <div className="w-2 h-2  text-[#1F497D] rounded-full"></div>
    //               <span>Pre-placement training</span>
    //             </li>
    //             <li className="flex items-center space-x-2">
    //               <div className="w-2 h-2  text-[#1F497D] rounded-full"></div>
    //               <span>Multiple company visits</span>
    //             </li>
    //             <li className="flex items-center space-x-2">
    //               <div className="w-2 h-2  text-[#1F497D] rounded-full"></div>
    //               <span>Interview coordination</span>
    //             </li>
    //           </ul>
    //         </div>

    //         {/* Training Programs */}
    //         <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
    //           <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
    //             <BookOpen className="h-8 w-8 text-green-600" />
    //           </div>
    //           <h3 className="text-2xl font-bold text-gray-900 mb-4">Training Programs</h3>
    //           <p className="text-gray-600 mb-6 leading-relaxed">
    //             Comprehensive skill development programs designed to enhance employability 
    //             and prepare candidates for industry requirements.
    //           </p>
    //           <ul className="space-y-2 text-gray-600">
    //             <li className="flex items-center space-x-2">
    //               <div className="w-2 h-2 bg-green-600 rounded-full"></div>
    //               <span>Technical skill development</span>
    //             </li>
    //             <li className="flex items-center space-x-2">
    //               <div className="w-2 h-2 bg-green-600 rounded-full"></div>
    //               <span>Soft skills training</span>
    //             </li>
    //             <li className="flex items-center space-x-2">
    //               <div className="w-2 h-2 bg-green-600 rounded-full"></div>
    //               <span>Industry certifications</span>
    //             </li>
    //           </ul>
    //         </div>

    //         {/* Job Placement */}
    //         <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
    //           <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
    //             <Briefcase className="h-8 w-8 text-purple-600" />
    //           </div>
    //           <h3 className="text-2xl font-bold text-gray-900 mb-4">Job Placement</h3>
    //           <p className="text-gray-600 mb-6 leading-relaxed">
    //             Personalized job placement services matching candidates with the right opportunities 
    //             based on skills, experience, and career goals.
    //           </p>
    //           <ul className="space-y-2 text-gray-600">
    //             <li className="flex items-center space-x-2">
    //               <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
    //               <span>Career counseling</span>
    //             </li>
    //             <li className="flex items-center space-x-2">
    //               <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
    //               <span>Resume optimization</span>
    //             </li>
    //             <li className="flex items-center space-x-2">
    //               <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
    //               <span>Interview preparation</span>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Clients/Partners Section */}
    //   <section id="clients" className="py-20 bg-white">
    //     <div className="max-w-7xl mx-auto px-6">
    //       <div className="text-center mb-16">
    //         <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Trusted Partners</h2>
    //         <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
    //           We've built strong partnerships with industry leaders who trust us to deliver 
    //           exceptional talent for their organizations.
    //         </p>
    //       </div>

    //       <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
    //         {[
    //           'TechCorp', 'InnovateLabs', 'GlobalSoft', 'DataDyne', 'CloudNine', 'FutureTech',
    //           'DigitalEdge', 'SmartSys', 'NextGen', 'ProTech', 'MegaCorp', 'EliteSoft'
    //         ].map((company, index) => (
    //           <div key={index} className="bg-gray-50 p-6 rounded-xl text-center hover:bg-gray-100 transition-colors">
    //             <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
    //               <Building2 className="h-6 w-6  text-[#1F497D]" />
    //             </div>
    //             <h3 className="font-semibold text-gray-700">{company}</h3>
    //           </div>
    //         ))}
    //       </div>

    //       <div className="mt-16 text-center">
    //         <div className="grid md:grid-cols-3 gap-8">
    //           <div className="text-center">
    //             <div className="text-4xl font-bold  text-[#1F497D] mb-2">500+</div>
    //             <div className="text-gray-600">Partner Companies</div>
    //           </div>
    //           <div className="text-center">
    //             <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
    //             <div className="text-gray-600">Placement Success Rate</div>
    //           </div>
    //           <div className="text-center">
    //             <div className="text-4xl font-bold text-purple-600 mb-2">50K+</div>
    //             <div className="text-gray-600">Successful Placements</div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Testimonials Section */}
    //   <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
    //     <div className="max-w-7xl mx-auto px-6">
    //       <div className="text-center mb-16">
    //         <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Success Stories</h2>
    //         <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
    //           Hear from our successful candidates and partner companies about their experience with PlacePro.
    //         </p>
    //       </div>

    //       <div className="grid md:grid-cols-3 gap-8">
    //         {[
    //           {
    //             name: "Sarah Johnson",
    //             role: "Software Engineer at TechCorp",
    //             content: "PlacePro's training program and placement services transformed my career. The personalized guidance and industry connections helped me land my dream job.",
    //             rating: 5
    //           },
    //           {
    //             name: "Michael Chen",
    //             role: "Data Analyst at GlobalSoft",
    //             content: "The campus drive organized by PlacePro was incredibly well-structured. From preparation to final placement, everything was handled professionally.",
    //             rating: 5
    //           },
    //           {
    //             name: "Emily Rodriguez",
    //             role: "Project Manager at InnovateLabs",
    //             content: "Thanks to PlacePro's comprehensive training and support, I successfully transitioned from academia to the corporate world. Highly recommended!",
    //             rating: 5
    //           }
    //         ].map((testimonial, index) => (
    //           <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
    //             <div className="flex items-center mb-4">
    //               {[...Array(testimonial.rating)].map((_, i) => (
    //                 <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
    //               ))}
    //             </div>
    //             <p className="text-gray-600 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
    //             <div className="flex items-center space-x-4">
    //               <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
    //                 <Users className="h-6 w-6  text-[#1F497D]" />
    //               </div>
    //               <div>
    //                 <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
    //                 <p className="text-gray-600 text-sm">{testimonial.role}</p>
    //               </div>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </section>

    //   {/* Contact Section */}
    //   <section id="contact" className="py-20 bg-white">
    //     <div className="max-w-7xl mx-auto px-6">
    //       <div className="text-center mb-16">
    //         <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h2>
    //         <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
    //           Ready to take the next step in your career journey? Contact us today and let's discuss 
    //           how we can help you achieve your goals.
    //         </p>
    //       </div>

    //       <div className="grid md:grid-cols-2 gap-12">
    //         {/* Contact Info */}
    //         <div>
    //           <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
    //           <div className="space-y-6">
    //             <div className="flex items-center space-x-4">
    //               <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
    //                 <Mail className="h-6 w-6  text-[#1F497D]" />
    //               </div>
    //               <div>
    //                 <h4 className="font-semibold text-gray-900">Email</h4>
    //                 <p className="text-gray-600">info@placepro.com</p>
    //               </div>
    //             </div>
    //             <div className="flex items-center space-x-4">
    //               <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
    //                 <Phone className="h-6 w-6 text-green-600" />
    //               </div>
    //               <div>
    //                 <h4 className="font-semibold text-gray-900">Phone</h4>
    //                 <p className="text-gray-600">+1 (555) 123-4567</p>
    //               </div>
    //             </div>
    //             <div className="flex items-center space-x-4">
    //               <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
    //                 <MapPin className="h-6 w-6 text-purple-600" />
    //               </div>
    //               <div>
    //                 <h4 className="font-semibold text-gray-900">Address</h4>
    //                 <p className="text-gray-600">123 Business District, Tech City, TC 12345</p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>

    //         {/* Contact Form */}
    //         <div className="bg-gray-50 p-8 rounded-2xl">
    //           <form className="space-y-6">
    //             <div className="grid md:grid-cols-2 gap-6">
    //               <div>
    //                 <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
    //                 <input 
    //                   type="text" 
    //                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
    //                   placeholder="John"
    //                 />
    //               </div>
    //               <div>
    //                 <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
    //                 <input 
    //                   type="text" 
    //                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
    //                   placeholder="Doe"
    //                 />
    //               </div>
    //             </div>
    //             <div>
    //               <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
    //               <input 
    //                 type="email" 
    //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
    //                 placeholder="john@example.com"
    //               />
    //             </div>
    //             <div>
    //               <label className="block text-sm font-medium text-gray-700 mb-2">Service Interest</label>
    //               <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
    //                 <option>Select a service</option>
    //                 <option>Campus Drives</option>
    //                 <option>Training Programs</option>
    //                 <option>Job Placement</option>
    //                 <option>Corporate Partnership</option>
    //               </select>
    //             </div>
    //             <div>
    //               <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
    //               <textarea 
    //                 rows={4}
    //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
    //                 placeholder="Tell us about your requirements..."
    //               ></textarea>
    //             </div>
    //             <button 
    //               type="submit"
    //               className="w-full  text-[#1F497D] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200"
    //             >
    //               Send Message
    //             </button>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   </section>


    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/contact' element={<Contactpage />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;