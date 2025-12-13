import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

import BeersDraught from './img/BeersDraught.png';

const MenuPage = () => {
    const [activeMenu, setActiveMenu] = useState('main');
    const [showBackToTop, setShowBackToTop] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [visibleSections, setVisibleSections] = useState(new Set());

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            setShowBackToTop(window.scrollY > 800);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleSections((prev) => new Set([...prev, entry.target.id]));
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -300px 0px' }
        );

        document.querySelectorAll('[data-animate]').forEach((el) => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Menus', path: '/menus' },
        { name: 'Contact', path: '/contact' }
    ];

    const MenuItem = ({ name, description, price, badges = [] }) => (
        <div className="mb-6 pb-5 border-b border-[#D4C4A8]/30 last:border-0 hover:bg-[#F5F1E8]/30 p-3 rounded transition-all duration-300">
            <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-serif font-bold text-[#3A3A3A] pr-2">{name}</h3>
                <span className="text-lg font-bold text-[#8B6F47] whitespace-nowrap">{price}</span>
            </div>
            {description && (
                <p className="text-gray-700 text-sm mb-2 leading-relaxed">{description}</p>
            )}
            {badges.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-2">
                    {badges.map((badge, i) => (
                        <span key={i} className="text-xs px-2.5 py-0.5 bg-[#8B6F47]/10 text-[#8B6F47] rounded-full border border-[#8B6F47]/30 font-medium">
                            {badge}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );

    // Floating particles
    const [particles] = useState(() =>
        Array.from({ length: 30 }, (_, i) => {
            const size = 1 + Math.random() * 4;
            return {
                id: i,
                left: `${Math.random() * 100}%`,
                startY: `${Math.random() * 100}%`,
                size: size,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 12}s`,
                opacity: 0.9 + Math.random() * 0.6
            };
        })
    );

    const MenuSection = ({ title, items }) => (
        <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#8B6F47] mb-5 pb-2 border-b-2 border-[#8B6F47]">
                {title}
            </h2>
            <div className="space-y-4">
                {items.map((item, i) => (
                    <MenuItem key={i} {...item} />
                ))}
            </div>
        </div>
    );

    const mainMenuData = {
        starters: [
            { name: "Pate of the Day", description: "Served with toast, caramelised red onion marmalade and a salad garnish.", price: "£6.95" },
            { name: "Breaded Garlic Mushrooms", description: "Served with garlic mayonnaise & a salad garnish.", price: "£6.95", badges: ["Vegetarian"] },
            { name: "Soup of the Day", description: "Served with white or malted brown bread", price: "£5.95" },
            { name: "Scottish Smoked Salmon & Prawn Cocktail", description: "Served with malted brown bread & a salad garnish", price: "£8.95" },
            { name: "Breaded chilli & ginger chicken goujons", description: "served with a chilli jam.", price: "£7.95", badges: ["DF"] },
            { name: "Mushroom and blue cheese arancini", description: "vegan blue cheese and mushroom arancini with a spiced tomato chutney", price: "£7.95", badges: ["Gluten free", "Vegetarian", "Vegan"] }
        ],
        fish: [
            { name: "Beer battered haddock fillet", price: "£14.95", badges: ["DF"] },
            { name: "Whitby Wholetail Breaded Scampi", description: "Smaller portion £11.95", price: "£14.95", badges: ["DF"] },
            { name: "Oven baked haddock fillet", price: "£14.25", badges: ["DF", "Gluten free"] },
            { name: "Fillet of salmon with parsley sauce", description: "Fillet of salmon served with a white wine and parsley sauce", price: "£16.95", badges: ["Gluten free"] },
            { name: "Jumbo Cod fish fingers", description: "2 jumbo cod fish fingers", price: "£10.50" }
        ],
        grills: [
            { name: "8oz Rump Steak", description: "Locally Reared steak served with beer battered onion rings and grilled tomato.", price: "£16.95", badges: ["DF", "Gluten free"] },
            { name: "Beef Lasagne", description: "Served with garlic ciabatta & salad.", price: "£13.95" },
            { name: "6oz Beef Burger", description: "Topped with smokey bacon & Cheddar cheese or Blue Stilton in a floured bun.", price: "£13.95", badges: ["DF (without cheese)"] },
            { name: "Chicken with blue stilton sauce", description: "Slices of chicken breast topped with Vicky's famous creamy Blue Stilton sauce.", price: "£15.95", badges: ["Gluten free"] },
            { name: "10oz D-Cut Gammon Steak", description: "Locally sourced served with pineapple rings or fried eggs.", price: "£15.50", badges: ["DF", "Gluten free"] },
            { name: "Carved Cold Ham", description: "Served with pineapple rings or fried eggs. Smaller portion £10.95", price: "£12.95", badges: ["DF", "Gluten free"] }
        ],
        vegetarian: [
            { name: "Candied vegetable seed roast", price: "£15.50", badges: ["Vegetarian", "Vegan"] },
            { name: "Mediterranean vegetable Lasagne", description: "Served with garlic ciabatta & salad", price: "£13.95", badges: ["Vegetarian"] },
            { name: "Sweet Potato, Chickpea & Spinach Curry", description: "Served with rice and garlic ciabatta.", price: "£12.50", badges: ["DF", "Gluten free", "Vegetarian", "Vegan"] },
            { name: "Spicy bean burger", description: "served with leaves and tomato in a floured bun", price: "£11.95", badges: ["Vegetarian", "Vegan"] }
        ],
        salads: [
            { name: "Mature Cheddar Cheese", description: "with Bramley apple & ale chutney. Served with a choice of white or malted brown bread.", price: "£10.50", badges: ["Vegetarian"] },
            { name: "Blue Stilton", description: "with bramley apple & ale chutney. Served with a choice of white or malted brown bread.", price: "£11.50", badges: ["Vegetarian"] },
            { name: "Smoked Salmon & Prawns", description: "with Marie Rose sauce. Served with a choice of white or malted brown bread.", price: "£13.95" },
            { name: "Carved Ham", description: "with English mustard. Served with a choice of white or malted brown bread.", price: "£12.50" }
        ],
        bakedPotatoes: [
            { name: "Cheddar Cheese & Baked Beans", description: "Served with a side salad.", price: "£8.95", badges: ["Gluten free", "Vegetarian"] },
            { name: "Prawns & Marie Rose Sauce", description: "Served with a side salad.", price: "£9.95", badges: ["DF (without butter)", "Gluten free"] },
            { name: "Cheddar Cheese", description: "Served with a side salad.", price: "£7.95", badges: ["Gluten free", "Vegetarian"] },
            { name: "Baked Beans", description: "Served with a side salad.", price: "£7.50", badges: ["DF (without butter)", "Gluten free", "Vegetarian", "Vegan"] }
        ],
        sandwiches: [
            { name: "Smoked Salmon & Prawns", description: "Served with a Marie Rose sauce. Served on white or malted brown bloomer bread with butter and a salad garnish.", price: "£9.50", badges: ["DF (without butter)"] },
            { name: "Jumbo cod fish fingers", description: "served with tartare sauce. Served on white or malted brown bloomer bread with butter and a salad garnish.", price: "£9.25" },
            { name: "Carved Ham and cheese", description: "Served with a choice of creamy brie, mature cheddar or blue stilton served with caramelised red onion marmalade.", price: "£9.50" },
            { name: "Creamy brie & smoky bacon", description: "Served with cranberry sauce.", price: "£8.50" },
            { name: "Carved Ham", description: "Served with English mustard or Bramley apple & ale chutney.", price: "£8.50", badges: ["DF (without butter)"] },
            { name: "Blue Stilton", description: "Served with Bramley & ale chutney.", price: "£8.95", badges: ["Vegetarian"] },
            { name: "Mature Cheddar", description: "Served with Bramley apple & ale chutney.", price: "£7.95", badges: ["Vegetarian"] }
        ],
        sides: [
            { name: "Bowl of Chips", price: "£3.95", badges: ["DF", "Gluten free", "Vegetarian", "Vegan"] },
            { name: "Bowl of Cheesy Chips", price: "£4.50", badges: ["Gluten free", "Vegetarian"] },
            { name: "Bowl of Sweet Potato Fries", price: "£4.50", badges: ["DF", "Gluten free", "Vegetarian", "Vegan"] },
            { name: "Bowl of French Fries", price: "£3.95", badges: ["DF", "Gluten free", "Vegetarian", "Vegan"] },
            { name: "Garlic Ciabatta", price: "£4.50", badges: ["DF", "Vegetarian", "Vegan"] },
            { name: "Cheesy Garlic Ciabatta", price: "£5.50", badges: ["Vegetarian"] },
            { name: "Beer Battered Onion Rings", price: "£4.50", badges: ["DF", "Vegetarian", "Vegan"] }
        ]
    };

    const sundayMenuData = [
        { name: "Roast Topside of Beef", description: "Served with home-made Yorkshire pudding, home-roasted potatoes, seasonal vegetables & red wine gravy. Smaller portion £11.50", price: "£14.95" },
        { name: "Roast Leg of Lamb", description: "Served with home-made Yorkshire pudding, home-roasted potatoes, seasonal vegetables & red wine gravy. Smaller portion £14", price: "£15.50" },
        { name: "Roast Loin of Pork", description: "Served with sage & onion stuffing, home-made Yorkshire pudding, home-roasted potatoes, seasonal vegetables & red wine gravy. Smaller portion £12.45", price: "£13.95" },
        { name: "Side of Cauliflower Cheese", description: "Creamy cauliflower cheese, Perfect pair to a Sunday roast!", price: "£3.00" }
    ];

    return (
        <div className="min-h-screen bg-[#F5F1E8] text-gray-900">
            {/* Header */}
            <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrollY > 80
                ? 'bg-[#1a2820]/95 backdrop-blur-md shadow-2xl py-3'
                : 'bg-[#2d4234]/95 backdrop-blur-sm py-4'
                }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center relative">
                        {/* Logo */}
                        <div className="flex items-center z-10">
                            <h2 className={`font-serif font-bold tracking-wider transition-all duration-500 ${scrollY > 80 ? 'text-white text-base sm:text-xl' : 'text-[#D4C4A8] text-lg sm:text-2xl'}`}>
                                THE ROYAL OAK
                            </h2>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-1">
                            {navLinks.map((link) => (
                                <a key={link.name} href={link.path} className={`relative px-4 py-2 transition-all duration-300 text-sm font-medium uppercase tracking-wider group ${scrollY > 80 ? 'text-white hover:text-[#D4C4A8]' : 'text-[#D4C4A8] hover:text-white'}`}>
                                    {link.name}
                                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#8B6F47] transition-all duration-300 group-hover:w-3/4"></span>
                                </a>
                            ))}
                        </nav>

                        {/* CTA Buttons - Desktop */}
                        <div className="hidden md:flex items-center space-x-3">
                            <button className={`px-5 py-2 font-medium text-sm uppercase tracking-wide rounded transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl ${scrollY > 80 ? 'bg-[#8B6F47] text-white hover:bg-gray-700' : 'bg-[#8B6F47] text-white hover:bg-gray-700'}`}>
                                Menus
                            </button>
                            <button className={`px-5 py-2 border-2 font-medium text-sm uppercase tracking-wide rounded transform hover:scale-105 transition-all duration-300 ${scrollY > 80 ? 'border-white text-white hover:bg-gray-700 hover:text-white hover:border-gray-700' : 'border-[#8B6F47] text-[#D4C4A8] hover:bg-[#8B6F47] hover:text-white'}`}>
                                Book
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button className={`md:hidden z-10 p-2 transition-colors ${scrollY > 80 ? 'text-white' : 'text-[#D4C4A8]'}`} onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                {isMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden absolute left-0 right-0 top-full bg-[#2d4234] border-t border-[#8B6F47]/30 shadow-xl max-h-[calc(100vh-4rem)] overflow-y-auto">
                        <nav className="flex flex-col">
                            {navLinks.map((link, i) => (
                                <a key={link.name} href={link.path} className="text-white hover:text-[#D4C4A8] hover:bg-[#8B6F47]/20 py-4 px-6 border-b border-[#8B6F47]/10 transition-all duration-300 text-sm font-medium uppercase tracking-wider" onClick={() => setIsMenuOpen(false)} style={{ animation: `slideIn 0.3s ease-out ${i * 0.05}s both` }}>
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex flex-col space-y-3 p-6 bg-[#1a2820]/30">
                                <button className="w-full px-5 py-3 bg-[#8B6F47] text-white font-medium text-sm uppercase tracking-wide rounded hover:bg-gray-700 transition-all duration-300 shadow-md">Menus</button>
                                <button className="w-full px-5 py-3 border-2 border-white text-white font-medium text-sm uppercase tracking-wide rounded hover:bg-white hover:text-[#1a2820] transition-all duration-300">Book</button>
                            </div>
                        </nav>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundPosition: "center 55%",  backgroundImage: `url(${BeersDraught})`, transform: `translateY(${scrollY * 0.5}px)` }}></div>
                {/* Gradient over image */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#1a2820]/70 via-[#1a2820]/50 to-[#1a2820]/80"></div>

                {/* Particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {particles.map((particle) => (
                        <div key={particle.id} className="absolute bg-amber-500 rounded-full blur-sm" style={{ width: `${particle.size}px`, height: `${particle.size}px`, left: particle.left, top: particle.startY, opacity: particle.opacity, animationDelay: particle.animationDelay, animationDuration: particle.animationDuration, animation: 'floatParticle 20s infinite ease-in-out' }} />
                    ))}
                </div>

                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 drop-shadow-2xl text-[#D4C4A8]" style={{ animation: 'fadeInUp 1s ease-out' }}>
                        Our Menus
                    </h1>
                    <div className="w-24 h-1 bg-[#8B6F47] mx-auto mb-6" style={{ animation: 'fadeInUp 1.2s ease-out' }}></div>
                    <p className="text-xl md:text-2xl font-light mb-8 text-gray-100 leading-relaxed max-w-2xl mx-auto" style={{ animation: 'fadeInUp 1.4s ease-out' }}>
                        Fresh, Local Ingredients. Traditional Recipes. Award-Winning Quality.
                    </p>
                    <button onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })} className="bg-[#8B6F47] hover:bg-gray-700 text-white px-8 py-3 rounded-md font-semibold transition-all duration-300 hover:scale-105 shadow-lg" style={{ animation: 'fadeInUp 1.6s ease-out' }}>
                        Browse
                    </button>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </section>

            {/* Menu Toggle */}
            <div id="menu-tabs" data-animate className={`bg-white border-b-2 border-[#D4C4A8] sticky z-40 shadow-md transition-all duration-500 ${scrollY > 80 ? 'top-[52px]' : 'top-[64px] md:top-[72px]'
                } ${visibleSections.has('menu-tabs') ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'}`}>
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-center">
                        <button onClick={() => setActiveMenu('main')} className={`flex-1 max-w-xs py-4 text-base md:text-lg font-semibold uppercase tracking-wider transition-all duration-300 ${activeMenu === 'main' ? 'text-[#8B6F47] border-b-4 border-[#8B6F47] bg-[#F5F1E8]' : 'text-gray-600 hover:text-[#8B6F47] hover:bg-[#F5F1E8]/50'}`}>
                            Main Menu
                        </button>
                        <button onClick={() => setActiveMenu('sunday')} className={`flex-1 max-w-xs py-4 text-base md:text-lg font-semibold uppercase tracking-wider transition-all duration-300 ${activeMenu === 'sunday' ? 'text-[#8B6F47] border-b-4 border-[#8B6F47] bg-[#F5F1E8]' : 'text-gray-600 hover:text-[#8B6F47] hover:bg-[#F5F1E8]/50'}`}>
                            Sunday Menu
                        </button>
                    </div>
                </div>
            </div>

            {/* Menu Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {activeMenu === 'main' ? (
                    <div>
                        <div className="bg-white rounded-lg shadow-md p-6 mb-8 border-l-4 border-[#8B6F47]">
                            <p className="text-gray-700 text-center leading-relaxed text-base">All our dishes, where appropriate, are served with a choice of chips, French fries, sweet potato fries, new potatoes, baked or mashed & garden peas, salad, mushy peas, baked beans or a selection of vegetables!</p>
                            <p className="text-sm text-gray-600 text-center mt-2 italic font-medium">DF = dairy free</p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                                {/* Left Column */}
                                <div>
                                    <MenuSection title="Starters" items={mainMenuData.starters} />
                                    <MenuSection title="Fish" items={mainMenuData.fish} />
                                    <MenuSection title="Vegetarian & Vegan" items={mainMenuData.vegetarian} />
                                    <MenuSection title="Baked Potatoes" items={mainMenuData.bakedPotatoes} />
                                </div>

                                {/* Right Column */}
                                <div>
                                    <MenuSection title="Grills" items={mainMenuData.grills} />
                                    <MenuSection title="Salads" items={mainMenuData.salads} />
                                    <MenuSection title="Bloomer Sandwiches" items={mainMenuData.sandwiches} />
                                </div>
                            </div>

                            {/* Side Orders - Full Width */}
                            <div className="mt-8 pt-8 border-t-2 border-[#D4C4A8]">
                                <MenuSection title="Side Orders" items={mainMenuData.sides} />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className="bg-white rounded-lg shadow-md p-6 mb-8 border-l-4 border-[#8B6F47]">
                            <p className="text-2xl md:text-3xl font-serif font-bold text-[#8B6F47] text-center mb-3">Sunday Lunch</p>
                            <p className="text-gray-700 text-center text-base md:text-lg font-medium">Served from 12 noon to 3:30pm</p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-6 md:p-10 max-w-4xl mx-auto">
                            <div className="space-y-4">
                                {sundayMenuData.map((item, i) => (
                                    <MenuItem key={i} {...item} />
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Footer */}
            <footer className="bg-[#566e5d] py-12 border-t-4 border-[#8B6F47]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-serif font-bold mb-6 text-[#D4C4A8]">The Royal Oak</h3>
                        <div className="flex flex-wrap justify-center gap-8">
                            {navLinks.map((link) => (
                                <a key={link.name} href={link.path} className="relative px-4 py-2 transition-all duration-300 text-sm font-medium uppercase tracking-wider group text-[#D4C4A8] hover:text-white">
                                    {link.name}
                                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#8B6F47] transition-all duration-300 group-hover:w-3/4"></span>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400">© 2024 The Royal Oak</p>
                        <div className="flex gap-6">
                            <a href="#privacy" className="text-gray-400 hover:text-[#8B6F47] transition-colors text-sm">Privacy Policy</a>
                            <a href="#terms" className="text-gray-400 hover:text-[#8B6F47] transition-colors text-sm">Terms and Conditions</a>
                            <a href="#cookies" className="text-gray-400 hover:text-[#8B6F47] transition-colors text-sm">Cookies Policy</a>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Back to Top Button */}
            <button onClick={scrollToTop} className={`fixed bottom-10 right-10 bg-[#8B6F47] text-white p-4 rounded-full shadow-lg transform duration-700 ease-out hover:scale-150 hover:bg-gray-600 z-50 border-2 ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'}`} aria-label="Back to top">
                <ChevronUp size={28} />
            </button>

            <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-10px); }
          75% { transform: translateY(-30px) translateX(5px); }
        }
      `}</style>
        </div>
    );
};

export default MenuPage;