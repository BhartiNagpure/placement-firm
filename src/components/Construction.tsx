import React from "react";
import { ConstructionIcon } from 'lucide-react'

export default function UnderConstruction() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white text-center p-6">
            <ConstructionIcon className="text-blue-700 text-7xl mb-6 animate-bounce" />
            <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
                🚧 Infolink Website Under Construction
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-xl mb-8">
                We’re working hard to bring you an amazing experience. Check back soon!
            </p>

        </div>
    );
}
