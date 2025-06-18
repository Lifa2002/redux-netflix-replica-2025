
import React, { useState } from 'react';
import { Play, Plus, ThumbsUp, ChevronDown } from 'lucide-react';

interface MovieCardProps {
  title: string;
  image: string;
  year?: string;
  rating?: string;
  duration?: string;
  genre?: string;
  isLarge?: boolean;
}

const MovieCard: React.FC<MovieCardProps> = ({ 
  title, 
  image, 
  year = "2024", 
  rating = "PG-13", 
  duration = "1h 45m",
  genre = "Action",
  isLarge = false 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative group cursor-pointer transition-all duration-300 ${
        isLarge ? 'w-72 md:w-80' : 'w-48 md:w-56'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Image */}
      <div className={`relative overflow-hidden rounded-md ${
        isLarge ? 'h-40 md:h-48' : 'h-28 md:h-32'
      }`}>
        <img 
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Hover Overlay */}
        {isHovered && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Play className="w-12 h-12 text-white fill-current" />
          </div>
        )}
      </div>

      {/* Expanded Card on Hover */}
      {isHovered && (
        <div className="absolute top-0 left-0 w-full bg-gray-900 rounded-md shadow-2xl z-50 transform scale-110 transition-all duration-300">
          <div className={`relative overflow-hidden rounded-t-md ${
            isLarge ? 'h-40 md:h-48' : 'h-28 md:h-32'
          }`}>
            <img 
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          </div>

          <div className="p-4">
            <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
            
            <div className="flex items-center gap-2 mb-3">
              <button className="flex items-center justify-center w-8 h-8 bg-white rounded-full hover:bg-gray-200 transition-colors">
                <Play className="w-4 h-4 text-black fill-current ml-0.5" />
              </button>
              <button className="flex items-center justify-center w-8 h-8 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors">
                <Plus className="w-4 h-4 text-white" />
              </button>
              <button className="flex items-center justify-center w-8 h-8 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors">
                <ThumbsUp className="w-4 h-4 text-white" />
              </button>
              <button className="flex items-center justify-center w-8 h-8 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors ml-auto">
                <ChevronDown className="w-4 h-4 text-white" />
              </button>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-300 mb-2">
              <span className="text-green-400 font-semibold">98% Match</span>
              <span className="border border-gray-500 px-1 text-xs">{rating}</span>
              <span>{duration}</span>
            </div>

            <div className="flex flex-wrap gap-1">
              <span className="text-gray-400 text-sm">{genre}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
