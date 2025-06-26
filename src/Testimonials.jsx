import { useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sampurna Nag",
    title: "Counselling Psychologist",
    image: "https://i.imgur.com/XfCc8wH.png",
    stars: 5,
    text: `The training program was packed with <mark>relatable stories</mark> and <mark>practical examples</mark> that made technical concepts come alive. It demystified the therapist’s role, emphasizing being authentic and approachable. Techniques like grounding exercises and <mark>structured case formulations</mark> were game-changers.`,
  },
  {
    name: "Celina Daniel",
    title: "Counselling Psychologist",
    image: "https://i.imgur.com/lKJiT77.png",
    stars: 5,
    text: `The sessions were incredibly engaging, with diverse perspectives from the trainers. Case discussions and mock therapy sessions were invaluable, preparing me for <mark>real-world practice</mark>. Tackling real therapy concerns like managing overabundant speech was a highlight. Overall, the training was challenging, inspiring, and rewarding—<mark>a perfect launchpad</mark>.`,
  },
  {
    name: "Arnav Gupta",
    title: "Therapist",
    image: "https://i.imgur.com/bxQeT7g.png",
    stars: 5,
    text: `Each module encouraged interaction and <mark>hands-on application</mark> of learned techniques. The structured feedback and assessments helped me refine my approach.`,
  },
  {
    name: "Priya Mehta",
    title: "Psychology Intern",
    image: "https://i.imgur.com/qkdpN.jpg",
    stars: 5,
    text: `The trainers were amazing mentors. I loved the <mark>real insight</mark> they provided into the mental health industry and ethical practices.`,
  },
  {
    name: "Ravi Sharma",
    title: "Mental Health Coach",
    image: "https://i.imgur.com/1r7U69U.png",
    stars: 5,
    text: `Loved the balance between theory and <mark>real case studies</mark>. The course structure made it easy to apply complex concepts in everyday therapy.`,
  },
  {
    name: "Sneha Rao",
    title: "Student",
    image: "https://i.imgur.com/Mhn1HZ4.png",
    stars: 5,
    text: `From foundational theories to advanced techniques, the training covered it all. <mark>Practical application</mark> really helped boost my confidence.`,
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(2);

  const prev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const next = () => {
    if (currentIndex < testimonials.length - 1) setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="relative bg-gradient-to-br from-[#232526] to-[#414345] text-black px-6 py-20 min-h-screen overflow-hidden flex flex-col items-center pt-10">
       <p className="text-sm text-gray-400 tracking-widest uppercase">Reviews</p>
      <div className="relative w-full max-w-7xl flex justify-center items-center min-h-[450px]">
        {testimonials.map((t, index) => {
          const offset = index - currentIndex;
          const isCenter = offset === 0;
          let scale = 1.1 - Math.abs(offset) * 0.05;
          let rotate = offset * 3;
          let zIndex = 10 - Math.abs(offset);
          let translateX = offset * 120;

          return (
            <motion.div
              key={index}
              className={`absolute w-[400px] p-6 rounded-xl origin-center transition-all duration-500 ease-in-out cursor-pointer hover:scale-105 hover:shadow-xl ${
                isCenter
                  ? "bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-2xl"
                  : "bg-white text-black"
              }`}
              style={{
                zIndex,
                transform: `translateX(${translateX}px) rotateZ(${rotate}deg) scale(${scale})`,
              }}
              animate={{
                opacity: Math.abs(offset) > 3 ? 0 : 1,
              }}
              onClick={() => setCurrentIndex(index)}
            >
              <img
                src={t.image}
                className="w-14 h-14 rounded-full mb-4"
                alt={t.name}
              />
              <p
                className="text-sm leading-relaxed mb-6"
                dangerouslySetInnerHTML={{ __html: `"${t.text}"` }}
              />
              <p className="italic text-xs">– {t.name}, {t.title}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="flex gap-6 mt-12">
        <button
          onClick={prev}
          disabled={currentIndex === 0}
          className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition disabled:opacity-30"
        >
          ←
        </button>
        <button
          onClick={next}
          disabled={currentIndex === testimonials.length - 1}
          className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition disabled:opacity-30"
        >
          →
        </button>
      </div>
    </div>
  );
}
