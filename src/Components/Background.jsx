import React from 'react'

const Background = () => {
    return (
        <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
            <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-1/2 -right-32 h-96 w-96 rounded-full bg-purple-600/15 blur-3xl opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}></div>
            <div className="absolute bottom-0 left-1/2 h-72 w-72 rounded-full bg-indigo-600/10 blur-3xl opacity-0 animate-fade-in" style={{ animationDelay: '1.2s' }}></div>
        </div>
    );
};
export default Background