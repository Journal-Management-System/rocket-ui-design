import React from 'react';

const ApplyPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-cyan-500/10 to-purple-500/5 flex items-center justify-center px-4 py-16 md:py-24">
            <div
                className="bg-amber-300 border-2 border-amber-500 rounded-md p-6 sm:p-10 w-full sm:w-[28rem] bg-gradient-to-br from-[#1b180f] to-[hsl(52,47%,46%)] text-white shadow-lg animate-fadeIn"
            >
                <div className="text-center mb-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2 text-white">Hello Hello</h1>
                    <p className="text-3xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent mb-2">
                        Welcome to Rocket Academy
                    </p>
                    <p className="text-xl font-medium text-white">
                        Please fill in the following questions to help us know you better.
                    </p>
                </div>

                <form className="space-y-4">
                    {/* Full Name */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Full Name</label>
                        <input
                            type="text"
                            placeholder="Enter your full name"
                            className="w-full px-4 py-2 rounded-md bg-[#1f1c15] border border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-300 text-white"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Email Address</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-2 rounded-md bg-[#1f1c15] border border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-300 text-white"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Phone Number</label>
                        <input
                            type="tel"
                            placeholder="00-000 00 000"
                            className="w-full px-4 py-2 rounded-md bg-[#1f1c15] border border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-300 text-white"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Location</label>
                        <input
                            type="text"
                            placeholder="City, State"
                            className="w-full px-4 py-2 rounded-md bg-[#1f1c15] border border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-300 text-white"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Gender</label>
                        <select
                            className="w-full px-4 py-2 rounded-md bg-[#1f1c15] border border-amber-500 text-white focus:outline-none focus:ring-2 focus:ring-amber-300"
                            required
                        >
                            <option value="">Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        <div>
                            <label className="block text-sm font-medium mb-1">Age</label>
                            <input
                                type="number"
                                min="16"
                                placeholder="Your Age"
                                className="w-full px-4 py-2 rounded-md bg-[#1f1c15] border border-amber-500 text-white focus:outline-none focus:ring-2 focus:ring-amber-300"
                                required
                            />
                        </div>
                    </div>
                    {/* Submit */}
                    <div className="text-center pt-4">
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300"
                        >
                            Submit Application
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ApplyPage;
