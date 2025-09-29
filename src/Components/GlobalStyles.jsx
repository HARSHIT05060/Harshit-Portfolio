import React from 'react'

const GlobalStyles = () => {
    return (
        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&display=swap');
        
        .cursor-invert-mask {
            position: relative;
        }

        .cursor-invert-mask::before {
            content: '';
            position: fixed;
            width: 155px;
            height: 155px;
            border-radius: 50%;
            background: white;
            mix-blend-mode: difference;
            pointer-events: none;
            z-index: 9999;
            opacity: 0;
            transition: opacity 0.3s ease-out;
            transform: translate(-50%, -50%);
            left: var(--cursor-x, 0px);
            top: var(--cursor-y, 0px);
        }
        
        .cursor-invert-mask.active::before {
        opacity: 0.8;
        }


        .letter-animated {
        display: inline-block;
        opacity: 0;
        transform: translateY(24px);
        transition: none;
        }

        .letter-animated.animate {
        animation: letterReveal 0.6s ease-out forwards;
        }
      
        @keyframes letterReveal {
        0% { opacity: 0; transform: translateY(24px); }
        100% { opacity: 1; transform: translateY(0); }
        }
      
        .typing-line {
        opacity: 0;
        white-space: nowrap;
        overflow: hidden;
        border-right: 2px solid #10B981;
        }
       
        .typing-line.typing {
        animation: typing 3s steps(40, end) forwards, blink 1s infinite;
        }
      
        .typing-line.typed {
        opacity: 1;
        border-right: none;
        }
      
        @keyframes typing {
        0% { opacity: 1; width: 0; }
        100% { opacity: 1; width: 100%; }
        }
      
        @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
        }
      
        @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
        }
      
        @keyframes slideUp {
        0% { opacity: 0; transform: translateY(24px); }
        100% { opacity: 1; transform: translateY(0); }
        }
      
        @keyframes scaleIn {
        0% { opacity: 0; transform: scale(0.95); }
        100% { opacity: 1; transform: scale(1); }
        }
      
        @keyframes marquee {
        0% { transform: translateX(0%); }
        100% { transform: translateX(-100%); }
        }
      
        @keyframes pulseGlow {
        0%, 100% { box-shadow: 0 0 20px rgba(34, 197, 94, 0.3); }
        50% { box-shadow: 0 0 40px rgba(34, 197, 94, 0.6), 0 0 80px rgba(34, 197, 94, 0.2); }
        }
      
        .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }
        .animate-slide-up { animation: slideUp 0.8s ease-out forwards; }
        .animate-scale-in { animation: scaleIn 0.8s ease-out forwards; }
        .animate-marquee { animation: marquee 25s linear infinite; }
        .animate-pulse-glow { animation: pulseGlow 3s ease-in-out infinite; }
        
        .font-geist { font-family: 'Geist', sans-serif; }
    `}</style>
    );
};

export default GlobalStyles