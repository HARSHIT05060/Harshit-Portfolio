import React from 'react'

const Services = () => {
    const services = [
        {
            title: "Full Stack Development",
            description: "Building robust and scalable web applications using the MERN stack (MongoDB, Express, React, Node.js) tailored to client needs.",
            features: ["Frontend development with React.js", "Backend APIs with Node.js & Express", "Database design with MongoDB", "RESTful & GraphQL endpoints"],
            delay: "2.4s"
        },
        {
            title: "Project Deployment & Maintenance",
            description: "Deploying applications with best practices and maintaining them for performance, scalability, and security.",
            features: ["Cloud deployment (AWS, Vercel, Netlify)", "CI/CD integration", "Performance optimization", "Bug fixing & updates"],
            delay: "2.6s"
        },
        {
            title: "Team Collaboration & Mentorship",
            description: "Working effectively in teams, mentoring juniors, and ensuring code quality with modern development workflows.",
            features: ["Code reviews & version control (Git)", "Agile & Scrum methodologies", "Mentoring & knowledge sharing", "Documentation & best practices"],
            delay: "2.8s"
        }
    ];

    return (
        <section id="work" className="pt-24 pb-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl text-white opacity-0 animate-slide-up font-geist tracking-tight font-light" style={{ animationDelay: '2s' }}>
                        What I do
                    </h2>
                    <p className="mt-4 text-xl text-gray-400 opacity-0 animate-slide-up font-geist" style={{ animationDelay: '2.2s' }}>
                        Full-stack development services for ambitious companies
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="group rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 p-8 hover:from-white/15 hover:to-white/10 transition-all duration-500 hover:scale-105 opacity-0 animate-scale-in" style={{ animationDelay: service.delay }}>
                            <h3 className="text-2xl text-white mb-4 font-geist tracking-tight font-light">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed mb-6 font-geist">{service.description}</p>
                            <ul className="space-y-3 text-sm text-gray-300">
                                {service.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-center gap-3 font-geist">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-green-400">
                                            <path d="M20 6 9 17l-5-5"></path>
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
