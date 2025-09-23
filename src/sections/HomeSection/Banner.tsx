import React from 'react';
import { ChevronRight } from 'lucide-react';

function Banner() {
  return (
   <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Your Gateway to
            <span className=" text-[#1F497D] block">Career Success</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Connecting talented individuals with top companies through comprehensive training programs, 
            campus recruitment drives, and personalized career placement services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className=" bg-[#1F497D] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>Get a Quote</span>
              <ChevronRight className="h-5 w-5" />
            </button>
            <button 
              className="border-2 border-blue-600  text-[#1F497D] px-8 py-4 rounded-full text-lg font-semibold hover: text-[#1F497D] hover:text-white transition-all duration-200"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>
  )
}

export default Banner