import React from "react";
import Carousel from "./components/Carousel";
import FeatureGrid from './components/FeatureGrid';

const App = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white font-inter transition-colors duration-300">
      <div className="py-10 px-4">
        <Carousel />
           <FeatureGrid />
      </div>
    </main>
  );
};

export default App;
