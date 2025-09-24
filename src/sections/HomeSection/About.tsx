import React from "react";
import {Users, Award, Building2} from 'lucide-react'

const About = () => {
  return (
    // <section className="relative bg-[#1F497D] text-white py-20">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
    //     {/* Left Content */}
    //     <div data-aos="fade-right">
    //       <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
    //         About <span className="text-yellow-300">INFOLINK</span>
    //       </h2>
    //       <p className="text-lg mb-6 leading-relaxed text-blue-100">
    //         Founded in 2010, <strong>INFOLINK</strong> is a leading HR & Placement
    //         solutions provider. We connect talented individuals with
    //         opportunities across industries and conduct impactful job fairs,
    //         training programs, and campus drives.
    //       </p>
    //       <ul className="space-y-3">
    //         <li className="flex items-start">
    //           <span className="bg-yellow-400 text-[#1F497D] font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3">
    //             ✓
    //           </span>
    //           Over 100 successful Job Fairs organized across Maharashtra
    //         </li>
    //         <li className="flex items-start">
    //           <span className="bg-yellow-400 text-[#1F497D] font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3">
    //             ✓
    //           </span>
    //           Partnered with 1000+ industries for recruitment
    //         </li>
    //         <li className="flex items-start">
    //           <span className="bg-yellow-400 text-[#1F497D] font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3">
    //             ✓
    //           </span>
    //           Mission: Unemployment Free India & Rural Development
    //         </li>
    //       </ul>
    //     </div>

    //     {/* Right Image / Stats */}
    //     <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-6" data-aos="fade-left">
    //       <img
    //         src="https://images.unsplash.com/photo-1581090700227-4c4b6baf2f6b?auto=format&fit=crop&w=1000&q=80"
    //         alt="About INFOLINK"
    //         className="rounded-2xl shadow-2xl max-w-md"
    //       />
    //       <div className="grid grid-cols-2 gap-6 mt-6 text-yellow-300">
    //         <div>
    //           <p className="text-4xl font-bold">13+</p>
    //           <p className="text-sm text-blue-100">Years Experience</p>
    //         </div>
    //         <div>
    //           <p className="text-4xl font-bold">1000+</p>
    //           <p className="text-sm text-blue-100">Partner Industries</p>
    //         </div>
    //         <div>
    //           <p className="text-4xl font-bold">100+</p>
    //           <p className="text-sm text-blue-100">Job Fairs</p>
    //         </div>
    //         <div>
    //           <p className="text-4xl font-bold">9000+</p>
    //           <p className="text-sm text-blue-100">Students Reached</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
      <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Us</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                      With over a decade of experience, we're the leading placement and training firm
                      dedicated to bridging the gap between education and employment.
                  </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                      <img
                          src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800"
                          alt="Professional team meeting"
                          className="rounded-2xl shadow-2xl"
                      />
                  </div>
                  <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-6">Empowering Careers Since 2010</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                          We specialize in creating meaningful connections between talented individuals and leading companies.
                          Our comprehensive approach combines industry expertise with personalized guidance to ensure
                          successful career transitions.
                      </p>
                      <div className="space-y-4">
                          <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                  <Award className="h-4 w-4  text-[#1F497D]" />
                              </div>
                              <span className="text-gray-700">10+ Years of Excellence</span>
                          </div>
                          <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                  <Users className="h-4 w-4  text-[#1F497D]" />
                              </div>
                              <span className="text-gray-700">50,000+ Successful Placements</span>
                          </div>
                          <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                  <Building2 className="h-4 w-4  text-[#1F497D]" />
                              </div>
                              <span className="text-gray-700">500+ Partner Companies</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );
};

export default About;
