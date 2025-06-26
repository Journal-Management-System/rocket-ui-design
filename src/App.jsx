import React from "react";
import Carousel from "./components/Carousel";

const App = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white font-inter transition-colors duration-300">
      <div className="py-10 px-4">
        <Carousel />
      </div>
    </main>
  );
};

export default App;
