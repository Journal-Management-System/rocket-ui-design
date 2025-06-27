import { useState } from "react";
import { LuChevronDown } from "react-icons/lu";

// List of FAQs to display on the page.
// Each FAQ contains an id, a question string, and its corresponding answer.
const faqs = [
    {
        id: 1,
        question: "Will Rocket Academy help me get a job?",
        answer: "Not directly, but the program equips you with the practical skills and confidence required to land roles in the mental health field. You can apply to Rocket Health from here after completing the course.",
    },
    {
        id: 2,
        question: "Will Rocket Health hire me after Rocket Academy?",
        answer: "You’ll need to go through our hiring process for academy members. If selected, your program fee will be completely reimbursed.",
    },
    {
        id: 3,
        question: "Who should join Rocket Academy?",
        answer: "Psychologists who want hands-on experience and are committed to bridging the gap between theory and practice.",
    },
    {
        id: 4,
        question: "Who shouldn’t join Rocket Academy?",
        answer: "Those still 6+ months from completing their Master’s or not ready to dedicate time and effort to skill-building.",
    },
    {
        id: 5,
        question: "Is this a remote program? How much time will I need to commit?",
        answer: "Yes, it’s remote. You’ll need to dedicate 2-4 hours per day (Monday - Saturday) for six weeks. All core sessions are held Monday to Friday from 10:00 AM to 5:00 PM, with scheduled breaks. We recommend allocating about 30 hours per week to get the most out of the cohort experience.",
    },
    {
        id: 6,
        question: "Will I get to meet my fellow cohort members?",
        answer: "Yes, we’ll host offline events starting in Bangalore, specially curated for academy members, beginning in 2025.",
    },
    {
        id: 7,
        question: "What else will I get?",
        answer: "Exclusive early access to new course launches by Rocket Academy.",
    },
    {
        id: 8,
        question: "What kind of support will I get during the program?",
        answer: "You’ll receive guidance from experienced mentors, access to learning materials, and opportunities to engage with peers and instructors for feedback.",
    },
    {
        id: 9,
        question: "Are there assessments or certifications at the end of the program?",
        answer: "Yes, you’ll complete assessments to track your progress and receive a certificate of completion upon graduating.",
    },
    {
        id: 10,
        question: "What practical exposure will I gain?",
        answer: "You’ll work on case discussions, mock sessions, and real-world scenarios to build confidence and skills.",
    },
    {
        id: 11,
        question: "Will I get to work with real users?",
        answer: "Yes, selected academy members who excel during the program will gain access to real users. These users, volunteers from our community and networks, will participate in free sessions.",
    },
];

export default function FAQPage() {
    const [openId, setOpenId] = useState(null);

    // Toggle function to open or close a specific FAQ
    const toggle = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <div className="min-h-screen bg-[#0d0d13] font-[Inter] text-[#547792] ">
            <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 py-8 md:py-12 lg:py-12 relative ">
                <span className="absolute inset-0 bg-[#000]/75 z-0"></span>

                <div className="relative z-10 max-w-5xl mx-auto px-4">
                    <h1 className="text-3xl leading-[1.2] font-semibold bg-gradient-to-r from-pink-100 via-purple-200 to-indigo-200 bg-clip-text text-transparent">
                        Frequently Asked Questions
                    </h1>
                </div>
            </div>

            <div className="max-w-5xl mx-auto py-12 px-4">
                <div className="space-y-4">
                    {faqs.map((faq) => (
                        <div key={faq.id} className="bg-bg-[#0d0d13] border-b border-b-white/20 py-4 transition-all duration-300">
                            <button
                                onClick={() => toggle(faq.id)}
                                className="w-full flex justify-between border-0 outline-0 items-center text-left text-lg font-medium text-white"
                            >
                                <span>{faq.question}</span>
                                <span className={`transform transition-transform duration-300 ${openId === faq.id ? "rotate-180" : "rotate-0"}`}>
                                    <LuChevronDown size={22} />
                                </span>
                            </button>
                            {/* Conditionally show the answer with animation */}
                            <div
                                className={`transition-all duration-500 overflow-hidden ${
                                    openId === faq.id ? "max-h-96 opacity-100 pt-2 mt-4" : "max-h-0 opacity-0"
                                } text-white/75`}
                            >
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Encourages users to reach out if their question is not answered */}
                <div className="py-30">
                    <h1 className="text-3xl leading-[1.2] font-semibold bg-gradient-to-r from-pink-100 via-purple-200 to-indigo-200 bg-clip-text text-transparent">
                        Still have questions?
                    </h1>

                    <p className="py-4 text-white/70">Reach out to our team on email and we'll be happy to answer your questions :)</p>
                    <button className="mt-6 border border-pink-300 hover:border-purple-300 text-white px-10 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 bg-[130%_auto] cursor-pointer hover:bg-right transition-all duration-500 hover:shadow-[0_0_15px_rgba(236,72,153,0.6)] ">
                        Contact
                    </button>
                </div>
            </div>
        </div>
    );
}
