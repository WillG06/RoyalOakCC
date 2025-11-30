import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronLeft, ChevronRight, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';


import barArea from './img/barArea.png';
import horse from './img/horse.webp';
import fireplace from './img/fireplace.avif';
import diningRoom from './img/diningRoom.avif';
import pubImage from './img/Pub.png';
import bench from './img/bench.webp';

const AboutUsPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Menus', path: '/menus' },
    { name: 'Contact', path: '/contact' }
  ];

  const galleryImages = [
    barArea,
    horse,
    fireplace,
    diningRoom,
    pubImage,
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




  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

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
            backgroundImage: `url(${fireplace})`,
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
            ABOUT US
          </h1>

          <div className="w-24 h-1 bg-[#8B6F47] mx-auto mb-6" style={{ animation: 'fadeInUp 1.2s ease-out' }}></div>

          <p
            className="text-xl md:text-2xl font-light mb-8 text-gray-100 leading-relaxed max-w-2xl mx-auto"
            style={{ animation: 'fadeInUp 1.4s ease-out' }}
          >
            A cherished pub where tradition meets warmth. Sit down and enjoy our service with a smile.
          </p>

          <button
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            className="bg-[#8B6F47] hover:bg-gray-700 text-white px-8 py-3 rounded-md font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            style={{ animation: 'fadeInUp 1.6s ease-out' }}
          >
            Our Story
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-32 bg-[#F5F1E8] min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            <div
              id="about-text"
              data-animate
              className={`space-y-8 transition-all duration-1000 ${visibleSections.has('about-text')
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-12'
                }`}
            >
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#1a2820] leading-tight">
                Our Story
              </h2>

              <div className="w-24 h-1 bg-[#8B6F47]"></div>

              <p className="text-xl text-gray-700 leading-relaxed">
                For over a century, The Royal Oak has stood as a beloved cornerstone of Car Colston, welcoming locals and travelers alike with genuine Nottinghamshire hospitality and charm.
              </p>

              <p className="text-xl text-gray-700 leading-relaxed">
                What began as a traditional village inn has evolved into one of the area's most cherished establishments, where the warmth of community spirit meets exceptional food, drink, and service in equal measure.
              </p>

              <p className="text-xl text-gray-700 leading-relaxed">
                Our commitment to quality locally-sourced ingredients, traditional pub favorites with a modern twist, and creating a welcoming atmosphere for all has made us a destination that celebrates village life while looking confidently to the future.
              </p>

              <button className="mt-6 bg-[#8B6F47] hover:bg-gray-700 text-white px-10 py-4 rounded-md font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                Learn More
              </button>
            </div>
            <div
              id="about-image"
              data-animate
              className={`relative transition-all duration-1000 delay-300 ${visibleSections.has('about-image')
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-12'
                }`}
            >
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={bench}
                  alt="cows"
                  className="w-full h-[600px] md:h-[700px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2820]/30 to-transparent"></div>
              </div>


              <div className="absolute -bottom-8 -right-8 w-40 h-40 border-4 border-gray-700/40 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Caravan Park Section */}
      <section id="caravan-section" data-animate className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`transition-all duration-1000 ${visibleSections.has('caravan-section')
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
              }`}
          >
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-[#1a2820]">
                Caravan Park
              </h2>
              <div className="w-24 h-1 bg-[#8B6F47] mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay overnight in our peaceful certificated caravan site overlooking the village green
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
              {/* Left Column - Main Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-6 text-[#1a2820]">
                    Site Information
                  </h3>

                  <div className="space-y-4 text-gray-700 text-lg">
                    <p>Certificated site for Camping & Caravanning Club members</p>
                    <p>Maximum 5 caravans accommodated per night</p>
                    <p>Overlooking 29 acres of village green, believed to be the largest rural common in England</p>
                    <p>Peaceful countryside setting with excellent walking and cycling opportunities</p>
                  </div>
                </div>

                <div className="border-t pt-8">
                  <h3 className="text-2xl font-serif font-bold mb-6 text-[#1a2820]">
                    Important Information
                  </h3>

                  <div className="space-y-4 text-gray-700">
                    <div>
                      <p className="font-semibold text-[#1a2820] mb-1">Self-Sustained Units Required</p>
                      <p>Caravans must be fully self-contained with their own facilities</p>
                    </div>

                    <div>
                      <p className="font-semibold text-[#1a2820] mb-1">Toilet Facilities</p>
                      <p>Pub toilets available from 12:00 PM onwards</p>
                    </div>

                    <div>
                      <p className="font-semibold text-[#1a2820] mb-1">Booking Required</p>
                      <p>Please call plenty of time ahead to check availability and reserve your space</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Pricing & Booking */}
              <div className="space-y-8">
                <div className="border-2 border-gray-700 bg-[#6f8876]/80 rounded-lg p-8">
                  <h3 className="text-3xl font-serif font-bold mb-8 text-center text-[#1a2820]">
                    Nightly Rates
                  </h3>

                  <div className="space-y-6">
                    <div className="border-b pb-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-lg font-semibold text-white">With Electric Hook-Up</span>
                        <span className="text-3xl font-bold text-[#1a2820]">£16.50</span>
                      </div>
                      <p className="text-sm text-gray-700 text-right">Per night</p>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-lg font-semibold text-white">Without Electric</span>
                        <span className="text-3xl font-bold text-[#1a2820]">£9.50</span>
                      </div>
                      <p className="text-sm text-gray-700 text-right">Per night</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-serif font-bold mb-4 text-[#1a2820]">
                    Book Your Stay
                  </h3>
                  <p className="text-gray-700 mb-6">
                    To reserve your pitch at our caravan park, please call us directly. Our friendly team will be happy to assist you with availability and answer any questions.
                  </p>

                  <button className="w-full bg-[#8B6F47] hover:bg-gray-700 text-white px-8 py-4 rounded-md font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                    Call to Book: 01949 20247
                  </button>

                  <p className="text-center text-sm text-gray-600 mt-4">
                    Open January to December
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery-section" data-animate className="py-32 bg-gradient-to-b bg-[#6f8876]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${visibleSections.has('gallery-section')
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
              }`}
          >
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-[#1a2820]">
              Gallery
            </h2>
            <div className="w-24 h-1 bg-[#8B6F47] mx-auto mb-6"></div>
            <p className="text-xl text-gray-300">
              Take a visual journey through The Royal Oak
            </p>
          </div>

          {/* Featured Image Carousel */}
          <div className="relative h-[550px] md:h-[650px] mb-16 rounded-2xl overflow-hidden shadow-2xl group">
            <img
              src={galleryImages[currentImageIndex]}
              alt={`Gallery ${currentImageIndex + 1}`}
              className="w-full h-full object-cover transition-all duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

            <button
              onClick={prevImage}
              className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
              aria-label="Previous image"
            >
              <ChevronLeft size={32} />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
              aria-label="Next image"
            >
              <ChevronRight size={32} />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
              {galleryImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImageIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === currentImageIndex
                    ? 'bg-white w-12'
                    : 'bg-white/50 w-2 hover:bg-white/70'
                    }`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                onClick={() => setCurrentImageIndex(i)}
                className={`relative h-40 md:h-48 rounded-xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${i === currentImageIndex
                  ? 'ring-4 ring-gray-700 scale-105'
                  : 'hover:scale-105'
                  }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${i + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 transition-opacity duration-300 ${i === currentImageIndex
                  ? 'bg-[#8B6F47]/30'
                  : 'bg-black/0 hover:bg-black/10'
                  }`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events-section" data-animate className="py-32 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-20 transition-all duration-1000 ${visibleSections.has('events-section')
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-12'
            }`}>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-[#1a2820]">
              Special Events
            </h2>
            <div className="w-24 h-1 bg-[#8B6F47] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us throughout the year for memorable celebrations and special occasions
            </p>
          </div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Christmas - Left Side */}
            <div className="bg-gradient-to-r from-[#1a2820] to-[#2d4234] rounded-2xl overflow-hidden shadow-2xl p-12 md:p-16 text-white flex flex-col h-full">
              <div className="inline-block bg-[#8B6F47] px-5 py-2 rounded-md font-bold text-sm mb-6 shadow-lg self-start">
                BOOKING ESSENTIAL
              </div>

              <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                Christmas Menu 2024
              </h3>

              <p className="text-xl text-white/90 mb-10 leading-relaxed">
                Celebrate the festive season with us! Our special Christmas menu is available from December 2nd through Christmas Eve.
              </p>

              <div className="space-y-6 mb-10 flex-grow">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div>
                      <p className="text-white font-bold text-lg mb-2">When</p>
                      <p className="text-white/90">2nd - 24th December</p>
                      <p className="text-white/80 text-sm">Tuesday - Saturday, Lunch & Evening Service</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div>
                      <p className="text-white font-bold text-lg mb-2">Important</p>
                      <p className="text-white/90">Book early to avoid disappointment - our most popular event of the year!</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-[#8B6F47] hover:bg-gray-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                  Book Now
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-[#1a2820] px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105">
                  View Christmas Menu
                </button>
              </div>
            </div>

            {/* Right Side - Events 2 */}
            <div className="flex flex-col gap-8 h-full">
              {/* St. Patrick's Day */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex-1">
                <div className="p-10 h-full flex flex-col">
                  <h3 className="text-3xl font-serif font-bold text-[#1a2820] mb-4">
                    St. Patrick's Day
                  </h3>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Join us for a proper Irish celebration with live music, special menu, and plenty of Guinness!
                  </p>
                  <div className="bg-[#F5F1E8] rounded-lg p-5 mb-6">
                    <p className="font-semibold text-[#1a2820] mb-1 text-lg">March 17th</p>
                    <p className="text-gray-600">Traditional Irish festivities</p>
                  </div>
                  <div className="space-y-4 flex-grow">
                    <div className="flex items-center gap-4 text-gray-700 text-lg">
                      <span>Guinness & Irish Whiskey</span>
                    </div>
                    <div className="flex items-center gap-4 text-gray-700 text-lg">
                      <span>Special Irish Menu</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Birthday Bookings */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex-1">
                <div className="p-10 h-full flex flex-col">
                  <h3 className="text-3xl font-serif font-bold text-[#1a2820] mb-4">
                    Birthday Bookings
                  </h3>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Make your special day unforgettable at The Royal Oak. We'll help you celebrate in style!
                  </p>
                  <div className="space-y-4 mb-8 flex-grow">
                    <div className="flex items-center gap-4 text-gray-700 text-lg">
                      <span>Private Party Areas</span>
                    </div>
                    <div className="flex items-center gap-4 text-gray-700 text-lg">
                      <span>Special Menu Options</span>
                    </div>
                    <div className="flex items-center gap-4 text-gray-700 text-lg">
                      <span>Tailored Celebrations</span>
                    </div>
                  </div>
                  <button className="w-full bg-[#8B6F47] hover:bg-gray-700 text-white px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-md mt-auto">
                    Book Your Party
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[#3A3A3A]">
            Visit Us Today
          </h2>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed">
            Experience the warmth and charm of The Royal Oak. Whether you're looking for a quiet pint, a delicious meal, or a place to celebrate with friends, we'd love to welcome you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-[#8B6F47] text-white font-medium text-lg rounded hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              View Menus
            </button>
            <button className="px-8 py-4 border-2 border-[#8B6F47] text-[#8B6F47] font-medium text-lg rounded hover:bg-[#8B6F47] hover:text-white transition-all duration-300 transform hover:scale-105">
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

export default AboutUsPage;