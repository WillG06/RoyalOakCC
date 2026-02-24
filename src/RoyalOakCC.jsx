{/* This website was produced by Will Giles for the company of Royal Oak in Car Colston  // Uses React.JS and Tailwind.CSS // 25/11/2025 */ }

import { Link, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronUp } from 'lucide-react';

import pub from './img/Pub.png';
import horse from './img/horse.webp';
import diningRoom from './img/diningRoom.avif';
import BeersDraught from './img/BeersDraught.png';
import bsImg from './img/BS.png';
import pImg from './img/P.png';
import wImg from './img/W.png';
import gImg from './img/G.svg';
import thImg from './img/TH.png';
import bmImg from './img/BM.png';
import fImg from './img/F.png';

const RoyalOakWebsite = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollY, setScrollY] = useState(0);
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

    setVisibleSections(new Set());                     // animates for each section loaded in

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -300px 0px' }   // how far away from section for it to transition
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Menus', path: '/menus' },
    { name: 'Contact', path: '/contact' }
  ];

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
              <Link to="/">
                <h2
                  className={`font-serif font-bold tracking-wider transition-all duration-500 ${scrollY > 80
                    ? 'text-white text-base sm:text-xl'
                    : 'text-[#D4C4A8] text-lg sm:text-2xl'
                    }`}
                >
                  THE ROYAL OAK
                </h2>
              </Link>
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
              <Link to="/menus">
                <button
                  className={`px-5 py-2 font-medium text-sm uppercase tracking-wide rounded transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl ${scrollY > 80
                    ? 'bg-[#8B6F47] text-white hover:bg-gray-700'
                    : 'bg-[#8B6F47] text-white hover:bg-gray-700'
                    }`}
                >
                  Menus
                </button>
              </Link>
              <Link to="/contact#contact-info">
                <button
                  className={`px-5 py-2 border-2 font-medium text-sm uppercase tracking-wide rounded transform hover:scale-105 transition-all duration-300 ${scrollY > 80
                    ? 'border-white text-white hover:bg-gray-700 hover:text-white hover:border-gray-700'
                    : 'border-[#8B6F47] text-[#D4C4A8] hover:bg-[#8B6F47] hover:text-white'
                    }`}
                >
                  Book
                </button>
              </Link>
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
                <Link to="/menus"><button className="w-full px-5 py-3 bg-[#8B6F47] text-white font-medium text-sm uppercase tracking-wide rounded hover:bg-gray-700 transition-all duration-300 shadow-md">
                  Menus
                </button></Link>
                <Link to="/contact#contact-info"><button className="w-full px-5 py-3 border-2 border-white text-white font-medium text-sm uppercase tracking-wide rounded hover:bg-white hover:text-[#1a2820] transition-all duration-300">
                  Book
                </button></Link>
              </div>
            </nav>
          </div>
        )}
      </header>
       
      {/* <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundPosition: "center 27%",
            backgroundImage: `url(${pub})`,
            transform: `translateY(${scrollY * 0.2}px)`
          }}
        ></div>


        <div className="absolute inset-0 bg-gradient-to-b from-[#1a2820]/70 via-[#1a2820]/50 to-[#1a2820]/80"></div>


        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 30 }, (_, i) => {
            const size = 1 + Math.random() * 4;
            return {
              id: i,
              left: `${Math.random() * 100}%`,
              startY: `${Math.random() * 100}%`,
              size: size,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 12}s`,
              opacity: 0.5 + Math.random() * 0.4
            };
          }).map((particle) => (
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
            className="mb-6 drop-shadow-2xl"
            style={{
              animation: 'fadeInUp 1s ease-out',
              fontFamily: "'Great Vibes', cursive",
              fontSize: 'clamp(6rem, 10vw, 8rem)',
              color: '#D4C4A8',
              fontWeight: '400'
            }}
          >
            The Royal Oak
          </h1>

          <div className="w-80 h-1 bg-[#8B6F47] mx-auto mb-6" style={{ animation: 'fadeInUp 1.2s ease-out' }}></div>

          <p
            className="text-xl md:text-2xl font-light mb-8 text-gray-100 leading-relaxed max-w-2xl mx-auto"
            style={{ animation: 'fadeInUp 1.4s ease-out' }}
          >
            Richard, Vicky & the team offer you a warm welcome.<br></br><br></br>
            We are proud that we have won Vale of Belvoir and Nottinghamshire CAMRA pub of the year for 2021, 2020 and 2009.
          </p>

          <div
            className="flex flex-col sm:flex-row justify-center gap-4"
            style={{ animation: 'fadeInUp 1.6s ease-out' }}
          >
            <Link to="/menus"><button className="bg-[#8B6F47] hover:bg-gray-700 text-white px-8 py-3 rounded-md font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
              View Menu
            </button></Link>
            <Link to="/contact#contact-info"><button className="border-2 border-white hover:bg-white hover:text-[#1a2820] text-white px-8 py-3 rounded-md font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
              Book a Table
            </button></Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section> */}

      {/* Hero Section*/}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#1a2820]">

        {/* Background pub image - very low opacity */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url(${pub})` }}
        ></div>

        {/* Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 30 }, (_, i) => {
            const size = 1 + Math.random() * 4;
            return {
              id: i,
              left: `${Math.random() * 100}%`,
              startY: `${Math.random() * 100}%`,
              size,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 12}s`,
              opacity: 0.5 + Math.random() * 0.4
            };
          }).map((particle) => (
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

        {/* Top & Bottom gold bars */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#8B6F47] z-20"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#8B6F47] z-20"></div>



        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 flex items-center gap-16">

          {/* Frame */}
          <div className="hidden md:flex flex-shrink-0 items-center justify-center relative" style={{ animation: 'fadeInUp 1s ease-out' }}>
            <div className="border-2 border-[#8B6F47] rounded-lg p-2">
              <img
                src={pub}
                alt="The Royal Oak"
                className="w-[580px] h-[680px] object-cover rounded-md"
                style={{ objectPosition: '10% center' }}
              />
            </div>
            <div className="absolute -bottom-3 -right-3 w-full h-full border border-[#8B6F47]/30 rounded-lg -z-10"></div>
          </div>

          {/* Text - centred within right half */}
          <div className="flex-1 text-white flex flex-col items-center text-center">
            <p
              className="text-xs uppercase tracking-[0.4em] text-[#8B6F47] mb-6 font-semibold"
              style={{ animation: 'fadeInUp 0.8s ease-out' }}
            >
              Car Colston, Nottinghamshire
            </p>

            <h1
              className="mb-6 drop-shadow-2xl"
              style={{
                animation: 'fadeInUp 1s ease-out',
                fontFamily: "'Great Vibes', cursive",
                fontSize: 'clamp(3.5rem, 6vw, 6rem)',
                color: '#D4C4A8',
                fontWeight: '400'
              }}
            >
              The Royal Oak
            </h1>

            <div className="w-48 h-px bg-[#8B6F47] mb-6" style={{ animation: 'fadeInUp 1.2s ease-out' }}></div>

            <p
              className="text-base md:text-lg font-light mb-4 text-gray-300 leading-relaxed max-w-sm"
              style={{ animation: 'fadeInUp 1.4s ease-out' }}
            >
              Richard, Vicky & the team offer you a warm welcome.
            </p>

            <p
              className="text-sm text-[#D4C4A8]/70 mb-10 max-w-sm leading-relaxed"
              style={{ animation: 'fadeInUp 1.5s ease-out' }}
            >
              CAMRA Pub of the Year — Vale of Belvoir & Nottinghamshire 2021, 2020 & 2009
            </p>

            <div
              className="flex flex-col sm:flex-row justify-center gap-4"
              style={{ animation: 'fadeInUp 1.6s ease-out' }}
            >
              <Link to="/menus">
                <button className="bg-[#8B6F47] hover:bg-white hover:text-[#1a2820] text-white px-8 py-3 rounded-md font-semibold transition-all duration-300 hover:scale-105 shadow-lg text-sm uppercase tracking-wider">
                  View Menu
                </button>
              </Link>
              <Link to="/contact#contact-info">
                <button className="border border-white/40 hover:border-white hover:bg-white hover:text-[#1a2820] text-white px-8 py-3 rounded-md font-semibold transition-all duration-300 hover:scale-105 shadow-lg text-sm uppercase tracking-wider">
                  Book a Table
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>

      </section>

      {/* Images below hero */}
      <section id="images-section" data-animate className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-[#F5F1E8]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Bar & Drinks', imgPath: pub },
            { title: 'Events', imgPath: horse },
            { title: 'Dining Room', imgPath: diningRoom },
          ].map((item, i) => (
            <div
              key={i}
              className={`transform transition-all duration-1000 hover:scale-105 bg-white border-4 border-[#8B6F47] hover:border-gray-800 rounded overflow-hidden shadow-lg ${visibleSections.has('images-section')
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-40 scale-90'
                }`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <img src={item.imgPath} alt={item.title} className="w-full h-64 object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features-section" data-animate className="bg-white py-20 border-y-2 border-[#D4C4A8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={`w-full h-96 flex items-center justify-center rounded transition-all duration-700 ${visibleSections.has('features-section')
              ? 'opacity-100 -translate-x-0'
              : 'opacity-0 -translate-x-12'
              }`}>
              <img src={diningRoom} alt="DINING ROOM IMAGE" />
            </div>

            <div className="space-y-8">
              {[
                { title: 'Classic Pub Atmosphere', text: 'Step into a historic countryside pub with a modern touch. Our traditional setting combined with contemporary comforts creates the perfect place to relax.' },
                { title: 'Fine Wines & Local Ales', text: 'Sip on our carefully curated selection of fine wines and local ales. We pride ourselves on supporting local breweries and offering quality drinks.' },
                { title: 'Sunday Roasts', text: 'Enjoy our delicious Sunday roasts with all the trimmings. Made with locally sourced ingredients and traditional recipes passed down through generations.' }
              ].map((feature, i) => (
                <div
                  key={i}
                  className={`border-l-4 border-[#8B6F47] pl-6 transition-all duration-700 hover:border-[#6F5838] ${visibleSections.has('features-section')
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-12'
                    }`}
                  style={{ transitionDelay: `${i * 200}ms` }}
                >
                  <h2 className="text-3xl font-serif font-bold mb-3 text-[#3A3A3A]">
                    {feature.title}
                  </h2>
                  <p className="text-gray-700 text-base leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities  */}
      <section id="opportunities-section" data-animate className="bg-[#F5F1E8] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              {[
                {
                  title: 'Sunday Roasts',
                  text1: 'We serve our traditional Sunday Roasts every week, made with fresh, local ingredients. Our full main menu is still available, alongside a rotating specials board.',
                  text2: 'Perfect for a cozy Sunday meal with something for everyone (VGF Options Available).'
                },
                {
                  title: 'Bar Opportunities',
                  text1: 'We are looking for enthusiastic, bright personalities to be part of front of house team.\nYou would be working behind the bar, taking orders as well as waitressing and giving customers the best service possible.',
                  text2: null
                },
                {
                  title: 'Kitchen Opportunities',
                  text1: 'A rare opportunity has risen at our busy country pub for a kitchen assistant to help the chef prepare, cook & aid in general kitchen duties.',
                  text2: 'Required: lunchtimes and occasional weekends & evenings.'
                }
              ].map((opp, i) => (
                <div
                  key={i}
                  className={`bg-white border-l-4 border-[#8B6F47] p-8 shadow-md hover:shadow-lg transition-all duration-700 ${visibleSections.has('opportunities-section')
                    ? 'opacity-100 -translate-x-0'
                    : 'opacity-0 -translate-x-12'
                    }`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <h2 className="text-3xl font-serif font-bold mb-5 text-[#3A3A3A]">
                    {opp.title}
                  </h2>
                  <p className="text-gray-700 text-base mb-4 leading-relaxed" style={{ whiteSpace: 'pre-line' }}>
                    {opp.text1}
                  </p>
                  {opp.text2 && (
                    <p className="text-gray-700 text-base leading-relaxed">
                      {opp.text2}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className={`w-full h-full min-h-96 rounded flex items-center justify-center transition-all duration-700 ${visibleSections.has('opportunities-section')
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 translate-x-12'
              }`}>
              <div className="text-center">
                <img src={BeersDraught} alt="Bar Shelves Photo" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="beer-section" data-animate className="relative py-16 md:py-24 overflow-hidden bg-[#6f8876]">

        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${BeersDraught})` }}></div>

        <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white transition-all duration-700 ${visibleSections.has('beer-section')
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-12'
          }`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 md:mb-6">
            Pint of Personality
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-4 md:mb-6 font-light italic px-2">
            Rotating taps featuring bold brews, local favourites, and a few surprises along the way
          </p>
          <p className="text-base md:text-lg mb-8 md:mb-12 text-gray-300 px-2">
            Selection of Fine Wines: From Full-Bodied to Fruity, Crafty Reds to Whites and adapting to suit every mood or meal
          </p>

          <div className="mb-8">
            <p className="text-xl md:text-2xl font-serif font-semibold text-[#D4C4A8]">
              A Selection of Our Beers
            </p>
            <div className="w-24 h-0.5 bg-[#8B6F47] mx-auto mt-3"></div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex flex-wrap justify-center items-center gap-16 mt-12">
            {/* Cask Ales */}
            <div className="flex flex-col items-center gap-4">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#D4C4A8] border-b border-[#8B6F47] pb-1">Cask Ales</p>
              <div className="flex gap-8 bg-white/5 rounded-xl px-6 py-4 backdrop-blur-sm">
                {[
                  { name: 'Black Sheep', logo: 'BS', image: bsImg },
                  { name: 'Pedigree', logo: 'P', image: pImg },
                  { name: 'Wainright Gold', logo: 'WR', image: wImg }
                ].map((beer, i) => (
                  <div
                    key={beer.name}
                    className={`flex flex-col items-center transition-all duration-700 ${visibleSections.has('beer-section')
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                      }`}
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <div className="group w-24 h-24 [perspective:1000px]">
                      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                        <div className="absolute w-full h-full bg-[#D4C4A8] border-4 border-[#8B6F47] rounded-lg flex items-center justify-center shadow-xl [backface-visibility:hidden] overflow-hidden">
                          {beer.image ? (
                            <img src={beer.image} alt={beer.name} className="w-full h-full object-cover rounded-md" />
                          ) : (
                            <span className="text-gray-800 font-bold text-4xl">{beer.logo}</span>
                          )}
                        </div>
                        <div className="absolute w-full h-full bg-gray-600 border-4 border-gray-600 rounded-lg flex items-center justify-center shadow-xl [backface-visibility:hidden] [transform:rotateY(180deg)]">
                          <span className="text-white font-bold text-sm text-center px-2">{beer.name}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:flex flex-wrap justify-center items-center gap-16 mt-12">
              <div className="h-32 w-0.5 bg-white/30"></div>
            </div>

            {/* Lagers/Keg Beers */}
            <div className="flex flex-col items-center gap-4">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#D4C4A8] border-b border-[#8B6F47] pb-1">Keg & Lager</p>
              <div className="flex gap-8 bg-white/5 rounded-xl px-6 py-4 backdrop-blur-sm">
                {[
                  { name: 'Guinness', logo: 'G', image: gImg },
                  { name: 'Thatchers', logo: 'TH', image: thImg },
                  { name: 'Birra Morretti', logo: 'BM', image: bmImg },
                  { name: 'Fosters', logo: 'F', image: fImg }
                ].map((beer, i) => (
                  <div
                    key={beer.name}
                    className={`flex flex-col items-center transition-all duration-700 ${visibleSections.has('beer-section')
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                      }`}
                    style={{ transitionDelay: `${(i + 3) * 100}ms` }}
                  >
                    <div className="group w-24 h-24 [perspective:1000px]">
                      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                        <div className="absolute w-full h-full bg-[#D4C4A8] border-4 border-[#8B6F47] rounded-lg flex items-center justify-center shadow-xl [backface-visibility:hidden] overflow-hidden">
                          {beer.image ? (
                            <img src={beer.image} alt={beer.name} className="w-full h-full object-cover rounded-md" />
                          ) : (
                            <span className="text-gray-800 font-bold text-4xl">{beer.logo}</span>
                          )}
                        </div>
                        <div className="absolute w-full h-full bg-gray-600 border-4 border-gray-600 rounded-lg flex items-center justify-center shadow-xl [backface-visibility:hidden] [transform:rotateY(180deg)]">
                          <span className="text-white font-bold text-sm text-center px-2">{beer.name}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden mt-8">
            <div className="flex items-start justify-center gap-8 px-4">
              {/* Cask Ales */}
              <div className="flex-1 max-w-[180px]">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-[#D4C4A8] border-b border-[#8B6F47] pb-1 mb-4 text-center">Cask Ales</h3>
                <div className="space-y-3">
                  {[
                    { name: 'Black Sheep', logo: 'BS', image: bsImg },
                    { name: 'Pedigree', logo: 'P', image: pImg },
                    { name: 'Wainright Gold', logo: 'WR', image: wImg }
                  ].map((beer, i) => (
                    <div
                      key={beer.name}
                      className={`flex flex-col items-center transition-all duration-700 ${visibleSections.has('beer-section')
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                        }`}
                      style={{ transitionDelay: `${i * 100}ms` }}
                    >
                      <div className="group w-20 h-20 [perspective:1000px]">
                        <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                          <div className="absolute w-full h-full bg-[#D4C4A8] border-3 border-[#8B6F47] rounded-lg flex items-center justify-center shadow-xl [backface-visibility:hidden] overflow-hidden">
                            {beer.image ? (
                              <img src={beer.image} alt={beer.name} className="w-full h-full object-cover rounded-md" />
                            ) : (
                              <span className="text-gray-800 font-bold text-3xl">{beer.logo}</span>
                            )}
                          </div>
                          <div className="absolute w-full h-full bg-gray-600 border-3 border-gray-600 rounded-lg flex items-center justify-center shadow-xl [backface-visibility:hidden] [transform:rotateY(180deg)]">
                            <span className="text-white font-bold text-xs text-center px-1">{beer.name}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Divider */}
              <div className="w-px h-64 bg-white/40 self-center"></div>

              {/* Lagers/Keg Beers */}
              <div className="flex-1 max-w-[180px]">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-[#D4C4A8] border-b border-[#8B6F47] pb-1 mb-4 text-center">Keg & Lager</h3>
                <div className="space-y-3">
                  {[
                    { name: 'Guinness', logo: 'G', image: gImg },
                    { name: 'Fosters', logo: 'F', image: fImg },
                    { name: 'Birra Morretti', logo: 'BM', image: bmImg }
                  ].map((beer, i) => (
                    <div
                      key={beer.name}
                      className={`flex flex-col items-center transition-all duration-700 ${visibleSections.has('beer-section')
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                        }`}
                      style={{ transitionDelay: `${i * 100}ms` }}
                    >
                      <div className="group w-20 h-20 [perspective:1000px]">
                        <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                          <div className="absolute w-full h-full bg-[#D4C4A8] border-3 border-[#8B6F47] rounded-lg flex items-center justify-center shadow-xl [backface-visibility:hidden] overflow-hidden">
                            {beer.image ? (
                              <img src={beer.image} alt={beer.name} className="w-full h-full object-cover rounded-md" />
                            ) : (
                              <span className="text-gray-800 font-bold text-3xl">{beer.logo}</span>
                            )}
                          </div>
                          <div className="absolute w-full h-full bg-gray-600 border-3 border-gray-600 rounded-lg flex items-center justify-center shadow-xl [backface-visibility:hidden] [transform:rotateY(180deg)]">
                            <span className="text-white font-bold text-xs text-center px-1">{beer.name}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Awards Section */}
      <section id="quality-section" data-animate className="py-20 bg-white border-t-4 border-b-2 border-[#8B6F47]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column */}
            <div className={`space-y-8 transition-all duration-700 ${visibleSections.has('quality-section')
              ? 'opacity-100 -translate-x-0'
              : 'opacity-0 -translate-x-12'
              }`}>
              <div className="border-l-4 border-[#8B6F47] pl-6">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#3A3A3A] leading-tight mb-4">
                  Quality & Tradition
                </h2>
                <p className="text-gray-700 text-base leading-relaxed">
                  At The Royal Oak, we pride ourselves on serving quality food and drink in a warm, welcoming atmosphere. Our commitment to excellence is recognized by our outstanding hygiene standards.
                </p>
              </div>

              {/* Food Hygiene Rating Badge */}
              <div className="inline-block">
                <div className="bg-white border-4 border-[#8B6F47] text-black font-bold text-center rounded p-6 shadow-lg">
                  <p className="text-sm mb-3 font-bold tracking-wider text-[#3A3A3A]">FOOD HYGIENE RATING</p>
                  <div className="flex justify-center space-x-2 mb-3">
                    {[0, 1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className={`w-9 h-9 rounded-sm border-2 border-gray-600 flex items-center justify-center font-bold text-base ${i === 5 ? 'bg-gray-600 text-white' : 'bg-white text-[#3A3A3A]'}`}>
                        {i}
                      </div>
                    ))}
                  </div>
                  <div className="bg-gray-600 text-white py-2 px-6 rounded font-bold text-base tracking-wide">
                    VERY GOOD
                  </div>
                </div>
              </div>

              <div>
                <Link to="/about"><button className="px-8 py-3 bg-[#8B6F47] text-white font-medium text-base rounded hover:bg-gray-600 transition-all duration-300 border border-[#6F5838]">
                  View Our Awards
                </button></Link>
              </div>
            </div>

            {/* Right Column - Cards */}
            <div className="space-y-5">
              {[
                { num: '01', title: 'Visit The Royal Oak', text: 'Come and experience the charm and history of our historic countryside pub in Car Colston.' },
                { num: '02', title: 'Enjoy Award-Winning Food and Drinks', text: 'Indulge in a selection of delicious dishes and beverages that have earned us prestigious awards.' },
                { num: '03', title: 'Check Our Opening Times', text: 'Plan your visit by viewing our regular opening hours and special event schedules.' }
              ].map((card, i) => (
                <div
                  key={i}
                  className={`bg-[#F5F1E8] border-l-4 border-[#8B6F47] p-8 shadow-md hover:shadow-xl hover:bg-white hover:border-l-8 hover:-translate-y-1 transition-all duration-500 cursor-pointer group ${visibleSections.has('quality-section')
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-12'
                    }`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className="flex items-start gap-6">
                    <div className="text-5xl font-bold text-[#8B6F47] flex-shrink-0 font-serif transition-transform duration-300 group-hover:scale-110">
                      {card.num}
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif font-bold mb-3 text-[#3A3A3A] group-hover:text-[#8B6F47] transition-colors duration-300">
                        {card.title}
                      </h3>
                      <p className="text-gray-700 text-base leading-relaxed">
                        {card.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-20 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[#3A3A3A]">
              Get in Touch
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              We'd love to hear from you. Whether you have a question about our menu, want to book a table, or just want to say hello, we're here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Pub Info Card */}
            <div className="bg-white border border-gray-300 rounded shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="w-full h-64 overflow-hidden">
                <img src={pub} alt="pub" className="w-full h-full object-cover" style={{ objectPosition: '50% 35%' }} />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-serif font-bold mb-3 text-[#3A3A3A]">The Royal Oak</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">A historic countryside pub in Car Colston</p>
                <Link to="/contact"><button className="px-6 py-2 border-2 border-[#8B6F47] text-[#8B6F47] font-medium rounded hover:bg-[#8B6F47] hover:text-white transition-all duration-300">
                  Get In Touch
                </button></Link>
              </div>
            </div>

            {/* Map Card */}
            <div className="bg-white border border-gray-300 rounded shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="w-full h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2402.4439532838383!2d-0.9334637223907684!3d52.97641660233708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879c93d99d79bdf%3A0xb792c352bc6a4e32!2sThe%20Royal%20Oak!5e0!3m2!1sen!2suk!4v1764158228808!5m2!1sen!2suk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="The Royal Oak Location"
                ></iframe>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-xl font-bold mb-3 text-[#3A3A3A]">
                  Car Colston, The Green, Nottinghamshire, NG13 8JE
                </h3>
                <p className="text-gray-700 mb-6">Located in the heart of Car Colston village</p>
                <a
                  href="https://maps.app.goo.gl/uYjCnGe9KvFtxEhw9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 border-2 border-[#8B6F47] text-[#8B6F47] font-medium rounded hover:bg-[#8B6F47] hover:text-white
                             transition-all duration-300"
                >
                  View On Map
                </a>
              </div>
            </div>
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

export default RoyalOakWebsite;