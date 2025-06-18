
import React from 'react';
import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import ContentRow from '../components/ContentRow';

const Index = () => {
  // Sample movie data - in a real app, this would come from an API
  const trendingMovies = [
    {
      id: 1,
      title: "Stranger Things",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=225&fit=crop",
      year: "2024",
      rating: "TV-14",
      duration: "45m",
      genre: "Sci-Fi Drama"
    },
    {
      id: 2,
      title: "The Crown",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=225&fit=crop",
      year: "2024",
      rating: "TV-MA",
      duration: "1h",
      genre: "Historical Drama"
    },
    {
      id: 3,
      title: "Bridgerton",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=225&fit=crop",
      year: "2024",
      rating: "TV-MA",
      duration: "1h 2m",
      genre: "Period Romance"
    },
    {
      id: 4,
      title: "Wednesday",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=225&fit=crop",
      year: "2024",
      rating: "TV-14",
      duration: "50m",
      genre: "Comedy Horror"
    },
    {
      id: 5,
      title: "Money Heist",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=225&fit=crop",
      year: "2023",
      rating: "TV-MA",
      duration: "1h 10m",
      genre: "Crime Thriller"
    },
    {
      id: 6,
      title: "Ozark",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=225&fit=crop",
      year: "2023",
      rating: "TV-MA",
      duration: "1h",
      genre: "Crime Drama"
    }
  ];

  const continueWatching = [
    {
      id: 7,
      title: "Breaking Bad",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=225&fit=crop",
      year: "2023",
      rating: "TV-MA",
      duration: "47m",
      genre: "Crime Drama"
    },
    {
      id: 8,
      title: "The Witcher",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=225&fit=crop",
      year: "2024",
      rating: "TV-MA",
      duration: "1h",
      genre: "Fantasy Adventure"
    },
    {
      id: 9,
      title: "Narcos",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=225&fit=crop",
      year: "2023",
      rating: "TV-MA",
      duration: "49m",
      genre: "Crime Biography"
    },
    {
      id: 10,
      title: "Dark",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=225&fit=crop",
      year: "2023",
      rating: "TV-MA",
      duration: "1h",
      genre: "Sci-Fi Mystery"
    }
  ];

  const top10Movies = [
    {
      id: 11,
      title: "Red Notice",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=225&fit=crop",
      year: "2024",
      rating: "PG-13",
      duration: "1h 58m",
      genre: "Action Comedy"
    },
    {
      id: 12,
      title: "The Adam Project",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=225&fit=crop",
      year: "2024",
      rating: "PG-13",
      duration: "1h 46m",
      genre: "Sci-Fi Adventure"
    },
    {
      id: 13,
      title: "Extraction 2",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=225&fit=crop",
      year: "2024",
      rating: "R",
      duration: "2h 2m",
      genre: "Action Thriller"
    },
    {
      id: 14,
      title: "Glass Onion",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=225&fit=crop",
      year: "2024",
      rating: "PG-13",
      duration: "2h 19m",
      genre: "Mystery Comedy"
    }
  ];

  const newReleases = [
    {
      id: 15,
      title: "The Night Agent",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=225&fit=crop",
      year: "2024",
      rating: "TV-MA",
      duration: "50m",
      genre: "Political Thriller"
    },
    {
      id: 16,
      title: "Ginny & Georgia",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=225&fit=crop",
      year: "2024",
      rating: "TV-14",
      duration: "55m",
      genre: "Comedy Drama"
    },
    {
      id: 17,
      title: "You",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=225&fit=crop",
      year: "2024",
      rating: "TV-MA",
      duration: "45m",
      genre: "Psychological Thriller"
    },
    {
      id: 18,
      title: "Emily in Paris",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=225&fit=crop",
      year: "2024",
      rating: "TV-MA",
      duration: "30m",
      genre: "Romantic Comedy"
    }
  ];

  return (
    <div className="bg-black min-h-screen">
      <Header />
      <HeroBanner />
      
      <div className="relative z-10 -mt-32 bg-gradient-to-t from-black to-transparent pt-32">
        <ContentRow title="Trending Now" movies={trendingMovies} isLarge />
        <ContentRow title="Continue Watching" movies={continueWatching} />
        <ContentRow title="Top 10 in United States Today" movies={top10Movies} />
        <ContentRow title="New Releases" movies={newReleases} />
        <ContentRow title="Popular on Netflix" movies={trendingMovies} />
        <ContentRow title="My List" movies={continueWatching} />
      </div>

      {/* Footer spacing */}
      <div className="h-20"></div>
    </div>
  );
};

export default Index;
