import React from 'react'

const Footer = ({ scrollToSection, scrollToTop }) => {
    const socialLinks = [
        { icon: 'linkedin', path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z', link: 'http://linkedin.com/in/harshit-kapadia-872606228/' },
        { icon: 'github', path: 'M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4M9 18c-4.51 2-5-2-7-2', link: 'https://github.com/harshit05060' },
        { icon: 'twitter', path: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z', link: 'https://x.com/HARSHIT_0705' },
        { icon: 'stackoverflow', path: 'M4 17h16v2H4zM8 12h8v2H8zM10 7h4v2h-4z', link: '#' }
    ];

    return (
        <footer id="contact" className="relative border-white/10 border-t pt-24 pb-24">
            <div className="max-w-7xl lg:px-8 mr-auto ml-auto pr-6 pl-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-4xl lg:text-5xl text-white mb-6 opacity-0 animate-slide-up font-geist tracking-tight font-light" style={{ animationDelay: '5.2s' }}>
                            Let’s build something awesome together
                        </h2>
                        <p className="text-xl text-gray-400 mb-8 opacity-0 animate-slide-up font-geist" style={{ animationDelay: '5.4s' }}>
                            Have an idea or a project in mind? I specialize in building robust web apps and scalable solutions. Let's collaborate and bring your vision to life.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-8 opacity-0 animate-slide-up" style={{ animationDelay: '5.6s' }}>
                            <a href="mailto:kapadiaharshit563@gmail.com" className="inline-flex items-center gap-3 rounded-full bg-white text-black px-8 py-4 text-base font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 font-geist">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                                </svg>
                                kapadiaharshit563@gmail.com
                            </a>
                            <a href="#" className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 backdrop-blur text-white px-8 py-4 text-base font-medium hover:bg-white/15 transition-all duration-300 hover:scale-105 font-geist">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                                    <path d="M8 2v4"></path>
                                    <path d="M16 2v4"></path>
                                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                    <path d="M3 10h18"></path>
                                </svg>
                                Schedule a call
                            </a>
                        </div>

                        <div className="flex items-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '5.8s' }}>
                            {socialLinks.map((social, index) => (
                                <a key={index} href={social.link} target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-white/10 border border-white/20 p-3 hover:bg-white/15 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-300">
                                        <path d={social.path}></path>
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="opacity-0 animate-fade-in" style={{ animationDelay: '6s' }}>
                        <div className="rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 p-8">
                            <h3 className="text-2xl text-white mb-6 font-geist tracking-tight font-light">Quick Links</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-3">
                                    {['Work', 'About', 'Process', 'Projects'].map((link, index) => (
                                        <a
                                            key={index}
                                            href={`#${link.toLowerCase()}`}
                                            className="block text-gray-300 hover:text-white transition-colors font-geist"
                                            onClick={(e) => { e.preventDefault(); scrollToSection(link.toLowerCase()); }}
                                        >
                                            {link}
                                        </a>
                                    ))}
                                </div>
                                <div className="space-y-3">
                                    {['Resume', 'Case Studies', 'Blog', 'Mentoring'].map((link, index) => {
                                        if (link === 'Resume') {
                                            return (
                                                <a
                                                    href="/HARSHIT_KAPADIA_RESUME_.pdf"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    download="HARSHIT_KAPADIA_RESUME_.pdf"
                                                    className="hover:text-white transition-colors duration-200 text-sm font-medium text-gray-300 font-geist"
                                                >
                                                    Resume
                                                </a>
                                            );
                                        }

                                        return (
                                            <a
                                                key={index}
                                                href="#"
                                                className="block text-gray-300 hover:text-white transition-colors font-geist"
                                            >
                                                {link}
                                            </a>
                                        );
                                    })}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in border-white/10 border-t mt-16 pt-8 items-center justify-between" style={{ animationDelay: '6.2s' }}>
                    <div className="flex items-center gap-2">
                        <div className="bg-white/10 border-white/20 border rounded-xl pt-2 pr-3 pb-2 pl-3">
                            <span className="block text-lg font-semibold tracking-tight font-geist">HK</span>
                        </div>
                        <span className="text-sm text-gray-500 font-geist">© 2025 Harshit Kapadia. All rights reserved.</span>
                    </div>
                    <div className="text-sm text-gray-500 font-geist">Built with React & MERN stack</div>
                </div>
            </div>

            {/* Go to Top Button */}
            <div className="fixed bottom-8 right-8 z-50 opacity-0 animate-fade-in" style={{ animationDelay: '6.4s' }}>
                <button
                    onClick={scrollToTop}
                    className="group relative inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-white/10"
                    aria-label="Go to top"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300">
                        <path d="M12 19V6m-7 7l7-7 7 7"></path>
                    </svg>
                </button>
            </div>
        </footer>
    );
};

export default Footer
