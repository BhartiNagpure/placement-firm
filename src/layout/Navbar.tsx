import React, { useState, useEffect } from 'react';
import { X, Menu } from 'lucide-react';
import logo from '../assests/logo.png';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <div>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/95 backdrop-blur-md shadow-lg mx-4 mt-4 rounded-2xl'
                : 'bg-transparent'
                }`}>
                <div className={`px-6 ${isScrolled ? 'py-3' : 'py-6'} transition-all duration-300`}>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <img
                                src={logo} alt='logo' className="h-12 w-40"
                            />
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            <button className="text-gray-700 hover: text-[#1F497D] transition-colors">
                                Home
                            </button>
                            <button className="text-gray-700 hover: text-[#1F497D] transition-colors">
                                About
                            </button>
                            <button className="text-gray-700 hover: text-[#1F497D] transition-colors">
                                Services
                            </button>
                            <button className="text-gray-700 hover: text-[#1F497D] transition-colors">
                                Partners
                            </button>
                            <button className="text-gray-700 hover: text-[#1F497D] transition-colors">
                                Success Stories
                            </button>
                            <button
                                onClick={() => navigate('/contact')}
                                className=" bg-[#1F497D] text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                                Contact Us
                            </button>
                        </div>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <div className="md:hidden mt-4 py-4 border-t border-gray-200">
                            <div className="flex flex-col space-y-4">
                                <button className="text-gray-700 hover: text-[#1F497D] transition-colors text-left">
                                    Home
                                </button>
                                <button className="text-gray-700 hover: text-[#1F497D] transition-colors text-left">
                                    About
                                </button>
                                <button className="text-gray-700 hover: text-[#1F497D] transition-colors text-left">
                                    Services
                                </button>
                                <button className="text-gray-700 hover: text-[#1F497D] transition-colors text-left">
                                    Partners
                                </button>
                                <button className="text-gray-700 hover: text-[#1F497D] transition-colors text-left">
                                    Success Stories
                                </button>
                                <button
                                    onClick={() => navigate('/contact')}
                                    className=" bg-[#1F497D] text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors text-left w-fit">
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    )
}

export default Navbar