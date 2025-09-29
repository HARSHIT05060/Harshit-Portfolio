import React, { useState, useEffect, useRef } from 'react';

const Process = () => {
    const [codeAnimationStarted, setCodeAnimationStarted] = useState(false);
    const codeContainerRef = useRef(null);

    const startCodeTypingAnimation = () => {
        const codeContainer = codeContainerRef.current;
        if (!codeContainer || codeAnimationStarted) return;

        setCodeAnimationStarted(true);

        const codeLines = [
            { text: '// Project Setup & Structure', className: 'text-sm text-gray-400 font-mono mb-2' },
            {
                text: '',
                className: 'text-sm leading-relaxed font-mono',
                html: '<span class="text-blue-400">const</span> <span class="text-yellow-300">modules</span> <span class="text-white">= {</span>'
            },
            { text: '  auth: "jwt-auth",', className: 'text-sm leading-relaxed font-mono ml-4 text-green-400' },
            { text: '  api: "rest-endpoints",', className: 'text-sm leading-relaxed font-mono ml-4 text-green-400' },
            { text: '  ui: "react-components"', className: 'text-sm leading-relaxed font-mono ml-4 text-green-400' },
            { text: '};', className: 'text-sm leading-relaxed font-mono text-white' },
            { text: '// Build & Test', className: 'text-sm leading-relaxed font-mono mt-2 text-gray-500' },
            {
                text: '',
                className: 'text-sm leading-relaxed font-mono',
                html: '<span class="text-blue-400">function</span> <span class="text-yellow-300">runTests()</span> <span class="text-white">{</span>'
            },
            { text: '  return integrationTests;', className: 'text-sm leading-relaxed font-mono ml-4' },
            { text: '}', className: 'text-sm leading-relaxed font-mono text-white' }
        ];

        let currentLine = 0;
        const typingSpeed = 80;
        const lineDelay = 400;

        const typeLine = () => {
            if (currentLine >= codeLines.length) return;

            const line = codeLines[currentLine];
            const lineElement = document.createElement('div');
            lineElement.className = line.className;

            if (line.html) {
                lineElement.innerHTML = line.html;
                codeContainer.appendChild(lineElement);
                currentLine++;
                setTimeout(typeLine, lineDelay);
            } else {
                lineElement.classList.add('typing-line');
                codeContainer.appendChild(lineElement);

                let charIndex = 0;
                const typeChar = () => {
                    if (charIndex < line.text.length) {
                        lineElement.textContent = line.text.substring(0, charIndex + 1);
                        charIndex++;
                        setTimeout(typeChar, typingSpeed);
                    } else {
                        lineElement.classList.remove('typing-line');
                        lineElement.classList.add('typed');
                        currentLine++;
                        setTimeout(typeLine, lineDelay);
                    }
                };

                lineElement.style.opacity = '1';
                lineElement.style.borderRight = '2px solid #10B981';
                typeChar();
            }
        };

        setTimeout(typeLine, 1000);
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !codeAnimationStarted) {
                    startCodeTypingAnimation();
                }
            });
        }, {
            threshold: 0.3,
            rootMargin: '0px'
        });

        if (codeContainerRef.current) {
            observer.observe(codeContainerRef.current);
        }

        return () => observer.disconnect();
    }, [codeAnimationStarted]);

    return (
        <section id="process" className="pt-24 pb-24" style={{ backgroundImage: 'url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0d850914-e949-410a-ac08-c604b47ea90f_3840w.jpg)', backgroundSize: 'cover' }}>
            <div className="max-w-7xl lg:px-8 mr-auto ml-auto pr-6 pl-6">
                <div className="relative mb-12 text-center">
                    <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-2 h-12 w-[560px] rounded-full bg-gradient-to-r from-white/5 via-white/25 to-white/5 blur-2xl" aria-hidden="true"></div>
                    <h2 className="relative text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 font-geist tracking-tight font-light">
                        My <span className="text-white/80 bg-none font-geist tracking-tight font-light">Process</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Card 1: Plan & Architect */}
                    <div className="relative rounded-[28px] border border-white/10 bg-black/40 backdrop-blur-xl p-6 lg:p-8">
                        <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-b from-white/10 to-transparent" aria-hidden="true"></div>
                        <div className="relative mb-6">
                            <div className="overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/5">
                                <div className="p-8 h-48 bg-gradient-to-b from-neutral-900 to-neutral-800 flex items-center justify-center">
                                    <div className="text-center text-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4">
                                            <path d="M9 11H1v3h8v3l3-4-3-4v2zM22 12l-4-4v2h-8v4h8v2l4-4z"></path>
                                        </svg>
                                        <p className="text-sm">Planning & Architecture</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <h3 className="text-2xl text-white mb-3 font-geist tracking-tight font-light">Plan & Architect</h3>
                            <p className="text-gray-300 leading-relaxed text-base font-geist">
                                I start projects by designing <span className="font-semibold text-white font-geist">scalable architectures</span> and planning features to ensure efficient development and maintainable code.
                            </p>
                        </div>
                        <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-white/10" aria-hidden="true"></div>
                    </div>

                    {/* Card 2: Develop & Implement */}
                    <div className="relative rounded-[28px] border border-white/10 bg-black/40 backdrop-blur-xl p-6 lg:p-8">
                        <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-b from-white/10 to-transparent" aria-hidden="true"></div>
                        <div className="relative mb-6">
                            <div className="ring-1 ring-white/10 overflow-hidden bg-white/5 rounded-2xl">
                                <div className="h-8 w-full bg-white/10 flex items-center px-3">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                    </div>
                                </div>
                                <div ref={codeContainerRef} className="pt-4 pr-4 pb-4 pl-4 h-40"></div>
                            </div>
                        </div>
                        <div className="relative">
                            <h3 className="text-2xl text-white mb-3 font-geist tracking-tight font-light">Develop & Implement</h3>
                            <p className="text-gray-300 leading-relaxed text-base font-geist">
                                I transform designs into functional applications using <span className="font-semibold text-white font-geist">modern tech stacks</span>, building responsive and high-performance web solutions.
                            </p>
                        </div>
                        <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-white/10" aria-hidden="true"></div>
                    </div>

                    {/* Card 3: Test & Optimize */}
                    <div className="relative rounded-[28px] border border-white/10 bg-black/40 backdrop-blur-xl p-6 lg:p-8">
                        <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-b from-white/10 to-transparent" aria-hidden="true"></div>
                        <div className="relative mb-6">
                            <div className="rounded-2xl bg-neutral-900 border-neutral-800 border p-4 h-48">
                                <div className="text-center text-gray-400 h-full flex flex-col items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mb-4">
                                        <path d="M3 3v5h5"></path>
                                        <path d="M3 8C3 5 5 3 8 3h5l3 3v5"></path>
                                        <path d="M21 21v-5h-5"></path>
                                        <path d="M21 16c0 3-2 5-5 5h-5l-3-3v-5"></path>
                                    </svg>
                                    <p className="text-sm">Testing & Optimization</p>
                                    <div className="mt-2 flex items-center gap-2">
                                        <span className="text-xs text-green-400 font-geist">+99% Stability & Performance</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <h3 className="text-2xl text-white mb-3 font-geist tracking-tight font-light">Test & Optimize</h3>
                            <p className="text-gray-300 leading-relaxed text-base font-geist">
                                I conduct thorough <span className="font-semibold text-white font-geist">testing and code optimization</span> to ensure high-quality, maintainable applications and seamless user experiences.
                            </p>
                        </div>
                        <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-white/10" aria-hidden="true"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
