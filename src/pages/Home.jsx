import React from 'react';
import Button from '../components/Button';
import videoBg from '../assets/backgound3.mp4'; 

const Home = () => {
  return (
    <div className="relative h-screen text-white flex items-center justify-center px-4">
      {/* 🔹 Background Video */}
      <video
        src={videoBg}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      />

      {/* 🔸 Foreground Content */}
      <div className="relative z-10 text-center max-w-2xl p-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          From Theory to Therapy – 
          <span className="bg-gradient-to-r from-[#DA4E15] via-[#F25C1F] to-white bg-clip-text text-transparent">
            Skill Building Courses
          </span>
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Transform academic knowledge into practical skills with expert-led courses, hands-on experience, and mentorship—designed to prepare you for success as a professional psychologist.
        </p>
        <Button />
      </div>
    </div>
  );
};

export default Home;
