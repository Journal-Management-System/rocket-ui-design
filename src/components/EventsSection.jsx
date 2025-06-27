import React from 'react';
import { motion } from 'framer-motion';
import { events } from './data';

const Events = ({ darkMode }) => {
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6 },
        },
    };

    return (
        <section
            style={{
                padding: '5rem 1.5rem',
                width: '100%',
                background: darkMode
                    ? 'linear-gradient(90deg, rgba(6, 182, 212, 0.10) 0%, rgba(168, 85, 247, 0.05) 100%)'
                    : '#f9fafb',
                color: darkMode ? '#ffffff' : '#111827'
            }}
        >
            <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
                <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '3.5rem' }}>
                    Upcoming <span style={{ color: '#3b82f6' }}>Events & Webinars</span>
                </h2>

                <motion.div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '1.5rem',
                        justifyContent: 'flex-start',
                    }}
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                >
                    {events.map((event) => (
                        <motion.div
                            key={event.id}
                            style={{
                                width: '100%',
                                maxWidth: '400px',
                                backgroundColor: darkMode ? '#1f2937' : '#ffffff',
                                borderRadius: '1rem',
                                overflow: 'hidden',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                transition: 'transform 0.3s ease-in-out',
                                position: 'relative'
                            }}
                            variants={item}
                            whileHover={{ y: -6 }}
                        >
                            {/* Outer Glow on Hover */}
                            <div style={{
                                pointerEvents: 'none',
                                position: 'absolute',
                                top: '-10px',
                                left: '-10px',
                                width: 'calc(100% + 20px)',
                                height: 'calc(100% + 20px)',
                                zIndex: -2,
                                filter: 'blur(2vmin)',
                                display: 'none',
                                background: 'radial-gradient(circle at 0 0,hsl(27deg 93% 60%),transparent), radial-gradient(circle at 100% 0,#00a6ff,transparent), radial-gradient(circle at 0 100%,#ff0056,transparent), radial-gradient(circle at 100% 100%,#6500ff,transparent)',
                                animation: 'blur-glow 3s ease infinite',
                                opacity: 0
                            }} className="hover-block" />

                            {/* Inner Glow on Hover */}
                            <div style={{
                                pointerEvents: 'none',
                                position: 'absolute',
                                top: '-1px',
                                left: '-1px',
                                width: 'calc(100% + 2px)',
                                height: 'calc(100% + 2px)',
                                zIndex: -1,
                                display: 'none',
                                background: 'radial-gradient(circle at 0 0,hsl(27deg 93% 60%),transparent), radial-gradient(circle at 100% 0,#00a6ff,transparent), radial-gradient(circle at 0 100%,#ff0056,transparent), radial-gradient(circle at 100% 100%,#6500ff,transparent)',
                                opacity: 0
                            }} className="hover-block" />

                            <div style={{ position: 'relative' }}>
                                <img
                                    src={event.image || 'https://via.placeholder.com/400x200'}
                                    alt={event.title}
                                    style={{ width: '100%', height: '12rem', objectFit: 'cover' }}
                                />
                                {event.isFree && (
                                    <span style={{
                                        position: 'absolute',
                                        top: '1rem',
                                        left: '1rem',
                                        backgroundColor: '#22c55e',
                                        color: '#ffffff',
                                        fontSize: '0.75rem',
                                        fontWeight: 'bold',
                                        padding: '0.25rem 0.75rem',
                                        borderRadius: '9999px'
                                    }}>
                                        FREE
                                    </span>
                                )}
                            </div>

                            <div style={{ padding: '1.5rem' }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    fontSize: '0.875rem',
                                    color: darkMode ? '#9ca3af' : '#6b7280'
                                }}>
                                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        style={{ marginRight: '0.5rem', color: '#3b82f6' }}>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    {event.date}
                                </div>

                                <h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>{event.title}</h3>
                                <p style={{
                                    fontSize: '0.875rem',
                                    color: darkMode ? '#d1d5db' : '#4b5563',
                                    margin: '0.5rem 0 1rem'
                                }}>
                                    {event.description}
                                </p>

                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <span style={{
                                        fontSize: '0.875rem',
                                        color: darkMode ? '#9ca3af' : '#6b7280'
                                    }}>
                                        By {event.speaker}
                                    </span>
                                    <button style={{
                                        padding: '0.5rem 1rem',
                                        backgroundColor: '#3b82f6',
                                        color: '#ffffff',
                                        fontSize: '0.875rem',
                                        fontWeight: '500',
                                        borderRadius: '0.375rem',
                                        border: 'none',
                                        cursor: 'pointer'
                                    }}>
                                        {event.cta}
                                    </button>
                                </div>
                            </div>

                            {/* Animation styles */}
                            <style>{`
                                @keyframes blur-glow {
                                    0% { opacity: 0.2; transform: scale(0.95); }
                                    50% { opacity: 0.7; transform: scale(1.05); }
                                    100% { opacity: 0.2; transform: scale(0.95); }
                                }
                                .hover-block {
                                    transition: opacity 0.3s ease;
                                }
                                .motion-div:hover .hover-block {
                                    display: block;
                                    opacity: 1;
                                }
                            `}</style>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Events;