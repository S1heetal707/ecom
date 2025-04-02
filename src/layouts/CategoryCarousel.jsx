import React, { useState, useEffect } from 'react';
import menimage from '../assets/mans_clothing.avif'
import womenimage1 from '../assets/women_category1.jpg'
import shoesimage from '../assets/shoesimage.avif'
import kidsimage from '../assets/kids.webp'
import beautyimage from '../assets/beauty.jpg'

const CategoryCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const categories = [
    { name: 'MEN', imageUrl: menimage, alt: 'Men\'s fashion category' },
    { name: 'WOMEN', imageUrl: womenimage1, alt: 'Women\'s fashion category' },
    { name: 'KIDS', imageUrl: kidsimage, alt: 'Kids\' fashion category' },
    { name: 'BEAUTY', imageUrl: beautyimage, alt: 'Beauty products category' },
    { name: 'SHOES', imageUrl: shoesimage, alt: 'Shoes category' }
  ];
  
  // Auto-rotate slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current === categories.length - 1 ? 0 : current + 1));
    }, 3000);
    
    return () => clearInterval(interval);
  }, [categories.length]);
  
  // Manual navigation
  const goToSlide = (index) => {
    setActiveIndex(index);
  };
  
  return (
    <div className="relative w-full overflow-hidden h-96 mt-8 mx-auto">
        {/* Slides */}
        <div className="relative h-full">
            {categories.map((category, index) => (
            <div
                key={category.name}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
                index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
            >
                <img
                src={category.imageUrl}
                alt={category.alt}
                className="object-cover w-full h-full max-w-[90%] mx-auto rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                />
            </div>
            ))}
        </div>

        {/* Navigation dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {categories.map((_, index) => (
            <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                index === activeIndex ? 'bg-white scale-125' : 'bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
            />
            ))}
        </div>
    </div>
  );
};

export default CategoryCarousel;