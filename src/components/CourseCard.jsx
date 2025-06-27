import React from 'react';
import { motion } from 'framer-motion';
import RatingStars from './RatingStars';

const fallbackImage = 'https://placehold.co/400x250/e0e0e0/555555?text=Image+Unavailable';

const CourseCard = ({ title, description, rating, image }) => {
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = fallbackImage;
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -5, boxShadow: '0px 10px 30px rgba(0,0,0,0.15)' }}
      whileFocus={{ scale: 1.03, y: -5, boxShadow: '0px 10px 30px rgba(0,0,0,0.15)' }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 10, duration: 0.4 }}
      viewport={{ once: true, amount: 0.5 }}
      className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden max-w-sm mx-auto font-inter transform hover:-translate-y-1 transition-all duration-300"
    >
      <img
        src={image}
        alt={title}
        onError={handleImageError}
        loading="lazy"
        className="w-full h-52 object-cover rounded-t-2xl"
      />

      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2 leading-tight">
          {title}
        </h3>
        <p className="text-gray-600 text-base mb-4 leading-relaxed">
          {description}
        </p>
        <RatingStars rating={Math.round(rating)} />

        <button
          type="button"
          aria-label={`Explore course: ${title}`}
          className="mt-6 w-full bg-gradient-to-r from-purple-700 to-blue-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Explore Course
        </button>
      </div>
    </motion.div>
  );
};

export default CourseCard;
