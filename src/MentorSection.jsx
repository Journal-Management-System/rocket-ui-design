import { useState, useRef } from "react";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

const mentors = [
  {
    name: "Kalyani Vaish",
    title: "Lead Counselling Psychologist",
    image:"/kalyani-vaish.png",


  },
  {
    name: "Harleen Aheja",
    title: "Counselling Psychologist",
    image: "/harleen-aheja.png",
  },
  {
    name: "Bidisha Samanta",
    title: "RCI Registered Clinical Psychologist",
    image: "/bidisha-samanta.png",
  },
  {
     name: "kanika kant",
    title: "Counselling Psychologist",
    image: "/kanika kant.png",
  },
  {
    name: "Sucharita Chatterjee",
    title: "Clinical Psychologist",
    image: "/sucharita-chatterjee.png",
  },
];

const ROTATION_RANGE = 50;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

function TiltCard({ mentor }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x, { stiffness: 500, damping: 10 });
  const ySpring = useSpring(y, { stiffness: 500, damping: 10 });
  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;
    const rX = (mouseY / rect.height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / rect.width - HALF_ROTATION_RANGE;
    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 border border-purple-300 rounded-2xl w-full max-w-sm p-6 hover:shadow-xl hover:shadow-purple-500 transition-transform duration-150"
    >
      <img
        src={mentor.image}
        alt={mentor.name}
        className="w-full h-80 object-cover rounded-md mb-4"
      />
      <div className="text-center">
        <h3 className="text-xl font-bold text-white">{mentor.name}</h3>
        <div className="w-10 h-[2px] bg-white mx-auto my-2" />
        <p className="text-sm text-white">{mentor.title}</p>
      </div>
    </motion.div>
  );
}

export default function MentorSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const prev = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  const next = () => {
    if (currentIndex + itemsPerPage < mentors.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  return (
    <div
      className="relative min-h-screen text-white px-6 py-20 overflow-hidden"
      style={{
        background: "linear-gradient(to bottom right, #232526, #414345)",
      }}
    >
      <div className="text-center mb-16">
        <p className="text-sm text-gray-400 tracking-widest uppercase">Meet Our Mentors</p>
        <h2 className="text-4xl md:text-5xl font-bold mt-2 leading-tight">
          Guided by world-class psychologists,
          <br />
          every week.
        </h2>
      </div>

      <div className="flex justify-center gap-6 transition-all duration-500 flex-wrap">
        {mentors.slice(currentIndex, currentIndex + itemsPerPage).map((mentor, index) => (
          <TiltCard key={index} mentor={mentor} />
        ))}
      </div>

      <button
        onClick={prev}
        disabled={currentIndex === 0}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-gradient-to-br from-blue-700 to-purple-700 text-white rounded-full w-12 h-12 flex items-center justify-center hover:scale-110 transition disabled:opacity-30"
      >
        <span className="text-2xl">←</span>
      </button>

      <button
        onClick={next}
        disabled={currentIndex + itemsPerPage >= mentors.length}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-gradient-to-br from-blue-700 to-purple-700 text-white rounded-full w-12 h-12 flex items-center justify-center hover:scale-110 transition disabled:opacity-30"
      >
        <span className="text-2xl">→</span>
      </button>
    </div>
  );
}
