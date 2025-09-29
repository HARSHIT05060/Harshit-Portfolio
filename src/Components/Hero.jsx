import React, { useEffect } from 'react';
import profie_img from '../assets/profile_img.png'; 

const Hero = ({ heroRef, isInHero, handleMouseEnter, handleMouseLeave, scrollToSection }) => {
    useEffect(() => {
        const headline = document.getElementById('heroHeadline');
        if (!headline) return;

        const text = 'Full Stack Developer';
        headline.innerHTML = '';

        const letters = text.split('').map((char, index) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.classList.add('letter-animated');

            if (char === ' ') {
                span.style.marginRight = '0.5rem';
            }

            setTimeout(() => {
                span.classList.add('animate');
            }, 1000 + (index * 50));

            return span;
        });

        letters.forEach(letter => headline.appendChild(letter));
    }, []);

    return (
        <section
            ref={heroRef}
            id="heroSection"
            className={`relative lg:pt-40 lg:pb-28 overflow-hidden pt-32 pb-20 cursor-invert-mask ${isInHero ? 'active' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center">
                    {/* Profile image */}
                    <div className="mb-8 flex justify-center opacity-0 animate-scale-in" style={{ animationDelay: '0.8s' }}>
                        <div className="relative">
                            <img
                                alt="Harshit Kapadia"
                                className="h-32 w-32 lg:h-40 lg:w-40 rounded-full object-cover ring-4 ring-white/20 shadow-2xl transition-all duration-300"
                                src={profie_img}
                            />
                        </div>
                    </div>

                    {/* Main heading */}
                    <div className="opacity-0 animate-slide-up" style={{ animationDelay: '1s' }}>
                        <h1 id="heroHeadline" className="lg:text-7xl xl:text-8xl text-5xl font-bold text-white tracking-tight">
                            Full Stack Developer
                        </h1>
                    </div>

                    <div className="opacity-0 animate-slide-up" style={{ animationDelay: '1.2s' }}>
                        <p className="mt-6 max-w-3xl mx-auto text-xl lg:text-2xl text-gray-400 leading-relaxed font-geist tracking-tight font-light">
                            Building full-stack web applications that solve real-world problems. Experienced with MERN stack, React.js, Node.js, and Python. Creator of projects like <strong>Farm2Fresh</strong> and <strong>DocuSync</strong>, and currently developing <strong>SyncWage – Ultimate Payroll Software</strong>.
                        </p>
                    </div>

                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-slide-up" style={{ animationDelay: '1.4s' }}>
                        <a
                            href="#work"
                            className="group inline-flex items-center gap-3 rounded-full bg-white text-black px-8 py-4 text-base font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 font-geist"
                            onClick={(e) => { e.preventDefault(); scrollToSection('work'); }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                                <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
                            </svg>
                            View my work
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                            </svg>
                        </a>
                        <a
                            href="#about"
                            className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 backdrop-blur text-white px-8 py-4 text-base font-medium hover:bg-white/15 transition-all duration-300 hover:scale-105 font-geist"
                            onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                            About me
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '1.6s' }}>
                        <div className="text-center">
                            <div className="text-2xl lg:text-3xl text-white font-geist tracking-tight font-light">1+</div>
                            <div className="text-sm text-gray-400 mt-1 font-geist">Years</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl lg:text-3xl text-white font-geist tracking-tight font-light">5+</div>
                            <div className="text-sm text-gray-400 mt-1 font-geist">Projects</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl lg:text-3xl text-white font-geist tracking-tight font-light">1</div>
                            <div className="text-sm text-gray-400 mt-1 font-geist">Awards</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
