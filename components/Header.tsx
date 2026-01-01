
import React, { useState, useEffect } from 'react';

interface HeaderProps {
    onNavigate: (view: 'home' | 'games' | 'about' | 'contact' | 'privacy' | 'terms' | 'cookies') => void;
    activeView: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, activeView }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNav = (view: any) => {
        onNavigate(view);
        setIsMenuOpen(false);
    };

    return (
        <header 
            className={`bg-white border-b transition-all duration-300 sticky top-0 z-50 ${
                scrolled 
                ? 'h-14 md:h-16 border-slate-200 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] bg-white/95 backdrop-blur-md' 
                : 'h-16 md:h-20 border-transparent bg-white'
            }`}
        >
            <div className="container mx-auto px-4 h-full flex items-center justify-between">
                <div 
                    className="flex items-center gap-2 cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95" 
                    onClick={() => handleNav('home')}
                >
                    <div className="w-8 h-8 md:w-9 md:h-9 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-lg shadow-lg shadow-blue-200">
                        P
                    </div>
                    <span className="text-base md:text-lg font-black tracking-tight text-slate-800">PLAY ARCADE HQ</span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-500">
                    <button 
                        onClick={() => handleNav('home')}
                        className={`hover:text-blue-600 transition-all ${activeView === 'home' ? 'text-blue-600 scale-105' : ''}`}
                    >
                        Home
                    </button>
                    <button 
                        onClick={() => handleNav('games')}
                        className={`hover:text-blue-600 transition-all ${activeView === 'games' ? 'text-blue-600 scale-105' : ''}`}
                    >
                        All Games
                    </button>
                    <button 
                        onClick={() => handleNav('about')}
                        className={`hover:text-blue-600 transition-all ${activeView === 'about' ? 'text-blue-600 scale-105' : ''}`}
                    >
                        About
                    </button>
                    <button 
                        onClick={() => handleNav('contact')}
                        className="bg-slate-800 text-white px-5 py-2 rounded-full hover:bg-slate-700 transition-all shadow-md active:scale-95 hover:shadow-lg hover:-translate-y-0.5"
                    >
                        Contact
                    </button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden p-2 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors"
                >
                    {isMenuOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Drawer */}
            {isMenuOpen && (
                <div className="md:hidden fixed inset-0 top-14 z-50 bg-white animate-in slide-in-from-top duration-300">
                    <div className="flex flex-col p-6 gap-2">
                        <button 
                            onClick={() => handleNav('home')}
                            className={`p-4 rounded-xl text-left font-bold transition-all ${activeView === 'home' ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50'}`}
                        >
                            🏠 Home
                        </button>
                        <button 
                            onClick={() => handleNav('games')}
                            className={`p-4 rounded-xl text-left font-bold transition-all ${activeView === 'games' ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50'}`}
                        >
                            🎮 All Games
                        </button>
                        <button 
                            onClick={() => handleNav('about')}
                            className={`p-4 rounded-xl text-left font-bold transition-all ${activeView === 'about' ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50'}`}
                        >
                            ℹ️ About Us
                        </button>
                        <button 
                            onClick={() => handleNav('contact')}
                            className={`p-4 rounded-xl text-left font-bold transition-all ${activeView === 'contact' ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50'}`}
                        >
                            📧 Contact
                        </button>
                        <div className="h-px bg-slate-100 my-4" />
                        <div className="grid grid-cols-2 gap-4 mt-2">
                            <button onClick={() => handleNav('privacy')} className="text-xs text-slate-400 font-bold uppercase text-left hover:text-blue-600 transition-colors">Privacy</button>
                            <button onClick={() => handleNav('terms')} className="text-xs text-slate-400 font-bold uppercase text-left hover:text-blue-600 transition-colors">Terms</button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
