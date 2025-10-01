import React from 'react';
import about_img from '../assets/about_img.png';
import react_img from '../assets/react_img.jpg';
import node_img from '../assets/nodejs_img.png';
import mongodb_img from '../assets/mongodb_img.png';
import express_img from '../assets/express_img.png';

const About = ({ scrollToSection }) => {
    return (
        <section id="about" className="pt-24 pb-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="relative mb-16 text-center">
                    <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-2 h-12 w-[560px] rounded-full bg-gradient-to-r from-white/5 via-white/25 to-white/5 blur-2xl" aria-hidden="true"></div>
                    <h2 className="relative text-4xl lg:text-5xl text-white font-geist tracking-tight font-light">
                        About <span className="text-white/80 font-geist tracking-tight font-light">Me</span>
                    </h2>
                </div>

                <div className="relative lg:p-12 bg-black/40 border-white/10 border rounded-[32px] p-8 backdrop-blur-xl shadow-2xl">
                    <div className="pointer-events-none absolute inset-0 rounded-[32px] bg-gradient-to-b from-white/10 to-transparent" aria-hidden="true"></div>

                    <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                        {/* Left: images */}
                        <div className="relative space-y-6">
                            <div className="rounded-3xl group p-3 cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:bg-zinc-800/60 hover:shadow-xl bg-zinc-900/80 border-zinc-800 border shadow-2xl">
                                <div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
                                    <img
                                        alt="Working outdoors on a laptop"
                                        className="object-cover w-full h-[400px] lg:h-[480px] transition-transform duration-700 group-hover:scale-105"
                                        src={about_img}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    react_img,
                                    node_img,
                                    mongodb_img,
                                    express_img
                                ].map((src, index) => (
                                    <div
                                        key={index}
                                        className="rounded-2xl bg-white/5 border border-white/10 p-3 shadow-lg hover:bg-white/10 transition-all duration-300 group cursor-pointer"
                                    >
                                        <div className="overflow-hidden rounded-xl ring-1 ring-white/10">
                                            <img
                                                alt="Tech logo"
                                                className="object-cover w-full h-28 lg:h-36 transition-transform duration-500 group-hover:scale-105"
                                                src={src}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: content */}
                        <div className="relative space-y-8">
                            <div className="space-y-4">
                                <h3 className="text-2xl lg:text-3xl text-white font-geist tracking-tight font-light">
                                    Curious about what I do?
                                </h3>
                                <div className="w-16 h-0.5 bg-gradient-to-r from-white/60 to-transparent"></div>
                            </div>

                            <div className="space-y-8">
                                <div className="rounded-2xl bg-white/10 border border-white/10 p-6 lg:p-8 text-gray-300 text-base lg:text-lg leading-relaxed hover:bg-white/[0.12] transition-colors duration-300">
                                    <p className="font-geist mb-6">
                                        I'm a Full Stack Developer and technology enthusiast, passionate about building robust, user-friendly web applications. I specialize in creating solutions that are both performant and visually appealing.
                                    </p>
                                    <p className="font-geist mb-6">
                                        My workflow combines clean coding, problem-solving, and collaboration. I enjoy working closely with designers, product managers, and fellow developers to turn ideas into scalable and maintainable systems.
                                    </p>
                                    <p className="font-geist">
                                        Beyond coding, I focus on creating organized, reusable codebases, optimizing workflows, and building tools that make life easier for users and teams. My goal is to build meaningful digital experiences that truly solve problems.
                                    </p>
                                </div>

                                <ul className="space-y-4 text-gray-300">
                                    {[
                                        { icon: "zap", text: "Passionate about full-stack development" },
                                        { icon: "message-circle", text: "Open to exciting projects and collaborations" },
                                        { icon: "smile", text: "Friendly, approachable, and always eager to learn" }
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start gap-4 group">
                                            <span className="inline-flex items-center justify-center w-10 h-10 bg-[#ffffff]/20 border-[#ffffff]/30 border rounded-xl flex-shrink-0 group-hover:bg-[#ffffff]/25 transition-colors duration-300">
                                                {item.icon === 'zap' && (
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
                                                        <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                                                    </svg>
                                                )}
                                                {item.icon === 'message-circle' && (
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
                                                        <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path>
                                                    </svg>
                                                )}
                                                {item.icon === 'smile' && (
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
                                                        <circle cx="12" cy="12" r="10"></circle>
                                                        <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                                                        <line x1="9" x2="9.01" y1="9" y2="9"></line>
                                                        <line x1="15" x2="15.01" y1="9" y2="9"></line>
                                                    </svg>
                                                )}
                                            </span>
                                            <div className="flex-1 pt-1">
                                                <span className="text-sm lg:text-base font-medium font-geist">{item.text}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex justify-start pt-4">
                                    <a
                                        href="#contact"
                                        className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm lg:text-base font-medium text-white hover:bg-white/15 hover:scale-105 transition-all duration-300 font-geist shadow-lg"
                                        onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                                    >
                                        Learn more
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                                            <path d="M7 7h10v10"></path>
                                            <path d="M7 17 17 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pointer-events-none absolute inset-0 rounded-[32px] ring-1 ring-white/10" aria-hidden="true"></div>
                </div>
            </div>
        </section>
    );
};

export default About;
