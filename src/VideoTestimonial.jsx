import { useState } from "react";

const videos = [
  {
    url:"https://www.youtube.com/embed/BTIHu6qjmH0?si=zsWXJn4tBxa1LJEr",
    
  },
  {
    url: "https://www.youtube.com/embed/rrMQ8E8qJc4?si=S1taaMxIErgDY9Kd",
    
  },
  {
   url: "https://www.youtube.com/embed/1qv4bifHSK8?si=oZYttd209dkpdPpH",
    
  },
  {
     url: "https://www.youtube.com/embed/foWwgCMNitI?si=xybBbxiJnNxpdU0-"
    
  },
  {
   url: "https://www.youtube.com/embed/FVIQcT2sNjg?si=bOkyLRWPl_x9xqzk",
    
  },
];

export default function VideoTestimonials() {
  const [index, setIndex] = useState(0);
  const itemsPerPage = 3;

  const next = () => {
    if (index + itemsPerPage < videos.length) setIndex(index + itemsPerPage);
  };

  const prev = () => {
    if (index - itemsPerPage >= 0) setIndex(index - itemsPerPage);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#232526] to-[#414345] text-white px-6 py-20 flex flex-col items-center">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
         Hear from the Members
      </h2>

      {/* Video Cards */}
      <div className="flex flex-wrap justify-center gap-10 max-w-[1300px] w-full">
        {videos.slice(index, index + itemsPerPage).map((v, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-blue-700 to-purple-700 rounded-3xl overflow-hidden shadow-2xl border border-white/10 transition-transform hover:scale-105 w-[360px]"
          >
            <iframe
              src={v.url}
              title={v.name}
              className="w-full h-[400px]"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="p-4 text-center bg-white/10">
              <h3 className="text-lg font-semibold">{v.name}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-6 mt-12">
        <button
          onClick={prev}
          disabled={index === 0}
          className="bg-gradient-to-br from-blue-700 to-purple-700 text-white rounded-full w-12 h-12 flex items-center justify-center hover:scale-110 transition disabled:opacity-30"
        >
          ←
        </button>
        <button
          onClick={next}
          disabled={index + itemsPerPage >= videos.length}
          className="bg-gradient-to-br from-blue-700 to-purple-700 text-white rounded-full w-12 h-12 flex items-center justify-center hover:scale-110 transition disabled:opacity-30"
        >
          →
        </button>
      </div>
    </div>
  );
}
