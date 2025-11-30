
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, ChevronUp } from 'lucide-react';

import barArea from './img/barArea.png';

const contactUs = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showBackToTop, setShowBackToTop] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [visibleSections, setVisibleSections] = useState(new Set());

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Menus', path: '/menus' },
        { name: 'Contact', path: '/contact' }
    ];

    // Floating particles
    const [particles] = useState(() =>
        Array.from({ length: 30 }, (_, i) => {
            const size = 1 + Math.random() * 4;
            return {
                id: i,
                left: `${Math.random() * 100}%`,
                startY: `${Math.random() * 100}%`, // starting position is now random
                size: size,
                animationDelay: `${Math.random() * 5}s`,     //falling animation random speed
                animationDuration: `${8 + Math.random() * 12}s`,
                opacity: 0.9 + Math.random() * 0.6 // Varying opacity 0.5-0.9 (more visible)
            };
        })
    );


    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            setShowBackToTop(window.scrollY > 800);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleSections((prev) => new Set([...prev, entry.target.id]));
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -200px 0px' }
        );

        document.querySelectorAll('[data-animate]').forEach((el) => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen bg-[#F5F1E8] text-gray-900">
            <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrollY > 80
                    ? 'bg-[#1a2820]/95 backdrop-blur-md shadow-2xl py-3'
                    : 'bg-[#2d4234]/95 backdrop-blur-sm py-4'
                }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center relative">

                        {/* Logo */}
                        <div className="flex items-center z-10">
                            <h2
                                className={`font-serif font-bold tracking-wider transition-all duration-500 ${scrollY > 80
                                        ? 'text-white text-base sm:text-xl'
                                        : 'text-[#D4C4A8] text-lg sm:text-2xl'
                                    }`}
                            >
                                THE ROYAL OAK
                            </h2>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`relative px-4 py-2 transition-all duration-300 text-sm font-medium uppercase tracking-wider group ${scrollY > 80
                                            ? 'text-white hover:text-[#D4C4A8]'
                                            : 'text-[#D4C4A8] hover:text-white'
                                        }`}
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#8B6F47] transition-all duration-300 group-hover:w-3/4"></span>
                                </Link>
                            ))}
                        </nav>

                        {/* CTA Buttons - Desktop */}
                        <div className="hidden md:flex items-center space-x-3">
                            <button
                                className={`px-5 py-2 font-medium text-sm uppercase tracking-wide rounded transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl ${scrollY > 80
                                        ? 'bg-[#8B6F47] text-white hover:bg-gray-700'
                                        : 'bg-[#8B6F47] text-white hover:bg-gray-700'
                                    }`}
                            >
                                Menus
                            </button>

                            <button
                                className={`px-5 py-2 border-2 font-medium text-sm uppercase tracking-wide rounded transform hover:scale-105 transition-all duration-300 ${scrollY > 80
                                        ? 'border-white text-white hover:bg-gray-700 hover:text-white hover:border-gray-700'
                                        : 'border-[#8B6F47] text-[#D4C4A8] hover:bg-[#8B6F47] hover:text-white'
                                    }`}
                            >
                                Book
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className={`md:hidden z-10 p-2 transition-colors ${scrollY > 80 ? 'text-white' : 'text-[#D4C4A8]'
                                }`}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isMenuOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden absolute left-0 right-0 top-full bg-[#2d4234] border-t border-[#8B6F47]/30 shadow-xl max-h-[calc(100vh-4rem)] overflow-y-auto">
                        <nav className="flex flex-col">
                            {navLinks.map((link, i) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="text-white hover:text-[#D4C4A8] hover:bg-[#8B6F47]/20 py-4 px-6 border-b border-[#8B6F47]/10 transition-all duration-300 text-sm font-medium uppercase tracking-wider"
                                    onClick={() => setIsMenuOpen(false)}
                                    style={{
                                        animation: `slideIn 0.3s ease-out ${i * 0.05}s both`
                                    }}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex flex-col space-y-3 p-6 bg-[#1a2820]/30">
                                <button className="w-full px-5 py-3 bg-[#8B6F47] text-white font-medium text-sm uppercase tracking-wide rounded hover:bg-gray-700 transition-all duration-300 shadow-md">
                                    Menus
                                </button>
                                <button className="w-full px-5 py-3 border-2 border-white text-white font-medium text-sm uppercase tracking-wide rounded hover:bg-white hover:text-[#1a2820] transition-all duration-300">
                                    Book
                                </button>
                            </div>
                        </nav>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundPosition: "center 40%",
                        backgroundImage: `url(${barArea})`,
                        transform: `translateY(${scrollY * 0.5}px)`
                    }}
                ></div>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#1a2820]/70 via-[#1a2820]/50 to-[#1a2820]/80"></div>

                {/* Particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {particles.map((particle) => (
                        <div
                            key={particle.id}
                            className="absolute bg-amber-500 rounded-full blur-sm"
                            style={{
                                width: `${particle.size}px`,
                                height: `${particle.size}px`,
                                left: particle.left,
                                top: particle.startY,
                                opacity: particle.opacity,
                                animationDelay: particle.animationDelay,
                                animationDuration: particle.animationDuration,
                                animation: 'floatParticle 20s infinite ease-in-out'
                            }}
                        />
                    ))}
                </div>

                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1
                        className="text-5xl md:text-7xl font-serif font-bold mb-6 drop-shadow-2xl"
                        style={{ animation: 'fadeInUp 1s ease-out' }}
                    >
                        GET IN TOUCH
                    </h1>

                    <div className="w-24 h-1 bg-[#8B6F47] mx-auto mb-6" style={{ animation: 'fadeInUp 1.2s ease-out' }}></div>

                    <p
                        className="text-xl md:text-2xl font-light mb-8 text-gray-100 leading-relaxed max-w-2xl mx-auto"
                        style={{ animation: 'fadeInUp 1.4s ease-out' }}
                    >
                        We'd love to hear from you. Visit us, call us, or drop us a line.
                    </p>

                    <button
                        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                        className="bg-[#8B6F47] hover:bg-gray-700 text-white px-8 py-3 rounded-md font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                        style={{ animation: 'fadeInUp 1.6s ease-out' }}
                    >
                        Contact Details
                    </button>
                </div>

                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </section>

            {/* Contact Information Section */}
            <section className="py-32 bg-[#F5F1E8]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        {/* Contact Details */}
                        <div
                            id="contact-info"
                            data-animate
                            className={`space-y-8 transition-all duration-1000 ${visibleSections.has('contact-info')
                                ? 'opacity-100 translate-x-0'
                                : 'opacity-0 -translate-x-12'
                                }`}
                        >
                            <div>
                                <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#1a2820] leading-tight mb-4">
                                    Contact Us
                                </h2>
                                <div className="w-24 h-1 bg-[#8B6F47]"></div>
                            </div>

                            {/* Address */}
                            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg border-l-4 border-[#8B6F47] hover:shadow-2xl hover:scale-105 hover:bg-white hover:border-l-8 transition-all duration-300 cursor-pointer">
                                <div className="flex items-start gap-4">
                                    <MapPin className="w-7 h-7 text-[#8B6F47] mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-2xl font-serif font-bold text-[#1a2820] mb-3">Address</h3>
                                        <p className="text-lg text-gray-700 leading-relaxed">
                                            The Royal Oak<br />
                                            The Green<br />
                                            Car Colston<br />
                                            Nottinghamshire<br />
                                            NG13 8JE
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg border-l-4 border-[#8B6F47] hover:shadow-2xl hover:scale-105 hover:bg-white hover:border-l-8 transition-all duration-300 cursor-pointer">
                                <div className="flex items-start gap-4">
                                    <Phone className="w-7 h-7 text-[#8B6F47] mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-2xl font-serif font-bold text-[#1a2820] mb-3">Phone</h3>
                                        <a href="tel:01949202247" className="text-lg text-gray-700 hover:text-[#8B6F47] transition-colors duration-300 font-medium">
                                            01949 20247
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg border-l-4 border-[#8B6F47] hover:shadow-2xl hover:scale-105 hover:bg-white hover:border-l-8 transition-all duration-300 cursor-pointer">
                                <div className="flex items-start gap-4">
                                    <Mail className="w-7 h-7 text-[#8B6F47] mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-2xl font-serif font-bold text-[#1a2820] mb-3">Email</h3>
                                        <a href="mailto:theroyaloakcarcolston@gmail.com" className="text-lg text-gray-700 hover:text-[#8B6F47] transition-colors duration-300 break-all font-medium">
                                            theroyaloakcarcolston@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg border-l-4 border-[#8B6F47] hover:shadow-2xl hover:scale-105 hover:bg-white hover:border-l-8 transition-all duration-300 cursor-pointer">
                                <h3 className="text-2xl font-serif font-bold text-[#1a2820] mb-4">Follow Us</h3>
                                <div className="flex flex-col gap-3">
                                    <a href="https://www.instagram.com/theroyaloakcarcolston/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 hover:text-[#8B6F47] transition-all duration-300 group">
                                        <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                        <span className="text-lg font-medium">@theroyaloakcarcolston</span>
                                    </a>
                                    <a href="https://www.facebook.com/theroyaloakcarcolston" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 hover:text-[#8B6F47] transition-all duration-300 group">
                                        <Facebook className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                        <span className="text-lg font-medium">The Royal Oak Car Colston</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Opening Hours & Facilities */}
                        <div
                            id="hours-facilities"
                            data-animate
                            className={`space-y-8 transition-all duration-1000 delay-300 ${visibleSections.has('hours-facilities')
                                ? 'opacity-100 translate-x-0'
                                : 'opacity-0 translate-x-12'
                                }`}
                        >
                            <div>
                                <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#1a2820] leading-tight mb-4">
                                    &nbsp;
                                </h2>
                                <div className="w-24 h-1 bg-transparent"></div>
                            </div>

                            {/* Opening Hours */}
                            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg border-l-4 border-[#8B6F47] hover:shadow-2xl hover:scale-105 hover:bg-white hover:border-l-8 transition-all duration-300 cursor-pointer">
                                <div className="flex items-start gap-4">
                                    <Clock className="w-7 h-7 text-[#8B6F47] mt-1 flex-shrink-0" />
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-serif font-bold text-[#1a2820] mb-4">Opening Hours</h3>
                                        <div className="space-y-4">
                                            <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                                                <span className="font-semibold text-gray-800">Monday - Saturday</span>
                                                <span className="text-gray-700">11:30am - 10:00pm</span>
                                            </div>
                                            <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                                                <span className="font-semibold text-gray-800">Sunday</span>
                                                <span className="text-gray-700">12:00pm - 10:00pm</span>
                                            </div>
                                        </div>

                                        <h4 className="text-xl font-serif font-bold text-[#1a2820] mt-8 mb-4">Food Service Hours</h4>
                                        <div className="space-y-3">
                                            <div className="flex justify-between items-start">
                                                <span className="font-semibold text-gray-800">Monday</span>
                                                <span className="text-gray-700 text-right">12:00pm - 2:15pm</span>
                                            </div>
                                            <div className="flex justify-between items-start">
                                                <span className="font-semibold text-gray-800">Tuesday - Saturday</span>
                                                <span className="text-gray-700 text-right">12:00pm - 2:15pm<br />6:00pm - 8:15pm</span>
                                            </div>
                                            <div className="flex justify-between items-start">
                                                <span className="font-semibold text-gray-800">Sunday</span>
                                                <span className="text-gray-700 text-right">12:00pm - 3:15pm</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Facilities */}
                            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg border-l-4 border-[#8B6F47] hover:shadow-2xl hover:scale-105 hover:bg-white hover:border-l-8 transition-all duration-300 cursor-pointer">
                                <h3 className="text-2xl font-serif font-bold text-[#1a2820] mb-6">Facilities</h3>
                                <div className="text-gray-700 text-center py-4 text-lg leading-relaxed">
                                    Beer Garden  |  WiFi  |  Disabled Access  |  Function Room  |  Car Park  |  Dog Friendly
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section id="map-section" data-animate className="py-20 bg-gradient-to-b from-white to-[#F5F1E8]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div
                        className={`transition-all duration-1000 ${visibleSections.has('map-section')
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-12'
                            }`}
                    >
                        <div className="text-center mb-12">
                            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-[#1a2820]">Find Us</h2>
                            <div className="w-24 h-1 bg-[#8B6F47] mx-auto mb-6"></div>
                            <p className="text-xl text-gray-700">
                                Set on The Green in the picturesque village of Car Colston
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-2xl p-6 overflow-hidden">
                            <div className="w-full h-[600px] rounded-xl overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19219.533213876213!2d-0.931167!3d52.976458!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879c93d99d79bdf%3A0xb792c352bc6a4e32!2sThe%20Royal%20Oak!5e0!3m2!1sen!2sus!4v1764420774949!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="The Royal Oak Location"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-[#6f8876]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 drop-shadow-lg">
                        Ready to Visit?
                    </h2>
                    <p className="text-xl mb-10 leading-relaxed drop-shadow-md">
                        Whether you're planning a meal, a drink, or a special celebration, we're here to welcome you with open arms.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="px-8 py-4 bg-[#8B6F47] text-white font-medium text-lg rounded hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                            View Menus
                        </button>
                        <button
                            onClick={() => window.scrollTo({ top: document.getElementById('contact-info').offsetTop - 100, behavior: 'smooth' })}
                            className="px-8 py-4 border-2 border-white text-white font-medium text-lg rounded hover:bg-white hover:text-[#1a2820] transition-all duration-300 transform hover:scale-105"
                        >
                            Book a Table
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#566e5d] py-12 border-t-4 border-[#8B6F47]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-serif font-bold mb-6 text-[#D4C4A8]">The Royal Oak</h3>
                        <div className="flex flex-wrap justify-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`relative px-4 py-2 transition-all duration-300 text-sm font-medium uppercase tracking-wider group text-[#D4C4A8] hover:text-white}`}
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#8B6F47] transition-all duration-300 group-hover:w-3/4"></span>
                                </Link>
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
            <button
                onClick={scrollToTop}
                className={`fixed bottom-10 right-10 bg-[#8B6F47] text-white p-4 rounded-full shadow-lg transform duration-700 ease-out hover:scale-150 hover:bg-gray-600 z-50 border-2 ${showBackToTop
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-6 pointer-events-none'
                    }`}
                aria-label="Back to top"
            >
                <ChevronUp size={28} />
            </button>
        </div>
    );
};

export default contactUs;