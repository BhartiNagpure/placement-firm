
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import logo from '../assests/logo.png';
import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-gray-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="md:col-span-2">
                        <div className="flex items-center space-x-2 mb-6">
                            <img
                                src={logo} alt='logo' className="h-12 w-40"
                            />
                        </div>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Your trusted partner in career development and talent acquisition.
                            We connect aspirations with opportunities, creating success stories that inspire.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#1F497D] transition-colors">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-400 transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors">
                                <Instagram className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            <li>
                                <button className="text-gray-400 hover:text-white transition-colors">
                                    About Us
                                </button>
                            </li>
                            <li>
                                <button className="text-gray-400 hover:text-white transition-colors">
                                    Services
                                </button>
                            </li>
                            <li>
                                <button className="text-gray-400 hover:text-white transition-colors">
                                    Partners
                                </button>
                            </li>
                            <li>
                                <button 
                                 onClick={() => navigate('/contact')}
                                className="text-gray-400 hover:text-white transition-colors">
                                    Contact
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Services</h3>
                        <ul className="space-y-4">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">Campus Drives</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">Training Programs</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">Job Placement</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">Career Counseling</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        © {currentYear} All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
                        <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
                        <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer