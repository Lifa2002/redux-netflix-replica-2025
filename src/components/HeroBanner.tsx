
import React from 'react';
import { Play, Info } from 'lucide-react';

const HeroBanner = () => {
  return (
    <div className="relative h-screen flex items-center justify-start">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&h=1080&fit=crop"
          alt="Featured Content"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 md:px-12 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
          The Matrix
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed">
          A computer programmer is led to fight an underground war against powerful computers who have constructed his entire reality with a system called the Matrix.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="flex items-center justify-center gap-2 bg-white text-black px-8 py-3 rounded font-semibold text-lg hover:bg-gray-200 transition-colors">
            <Play className="w-6 h-6 fill-current" />
            Play
          </button>
          <button className="flex items-center justify-center gap-2 bg-gray-600/70 text-white px-8 py-3 rounded font-semibold text-lg hover:bg-gray-600/90 transition-colors backdrop-blur-sm">
            <Info className="w-6 h-6" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
