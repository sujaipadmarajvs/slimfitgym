import React, { useEffect, useState } from 'react';
import { MapPin, Phone, MessageCircle, Instagram, Star, ChevronLeft, ChevronRight, Users, Dumbbell, Clock, Award, Zap, Heart, ArrowUp, Menu, X } from 'lucide-react';

const App = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentGalleryImage, setCurrentGalleryImage] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const testimonials = [
    {
      name: "Sandy S",
      rating: 5,
      review: "I've been a member at Slimfit Ladies Fitness Concept for more than two years, and overall, it's been a fantastic experience. The trainers are approachable and highly skilled, always ready to offer tips or assist with workouts. They genuinely make an effort to create a welcoming environment. The gym offers a wide range of modern equipment, from squat racks to rowing machines, all kept in excellent condition. I would definitely recommend Slimfit Ladies Fitness Concept to anyone looking for a clean, supportive, and well-equipped gym — whether you're a beginner or a seasoned gym buff.",
      initial: "S"
    },
    {
      name: "Dr. Aneesa Ameer",
      rating: 5,
      review: "Started going to this gym for the past few days now and what an amazing experience it has been. The trainers are really supportive and friendly which makes the whole workout session super comfortable. Definitely the best place to achieve your fitness goals❤️",
      initial: "A"
    },
    {
      name: "Malu Boban",
      rating: 5,
      review: "A great place for workout! The trainer is extremely supportive and knowledgeable. The gym is spacious, and the overall environment keeps you motivated. Highly recommended for anyone looking to achieve their fitness goals",
      initial: "M"
    },
    {
      name: "Amal Rafeeq",
      rating: 5,
      review: "This is the second time I'm joining a gym and I'm so happy I made the shift from the old one. Super spacious and really friendly trainers that aren't reluctant to help you out without complaining about it 💪 They've trainers for women too. Going here with my wife is an absolute couple goal based ritual for me now.",
      initial: "A"
    },
    {
      name: "Sujith Baby",
      rating: 5,
      review: "Slimfit Ladies Fitness Concept is a great place for a workout. The trainers are highly supportive and knowledgeable, providing wonderful guidance for each workout. The gym is spacious and suitable for everyone.",
      initial: "S"
    },
    {
      name: "ARUNIMA S",
      rating: 5,
      review: "Spacious gym and experienced trainers. Lovely atmosphere to work out. I would recommend Slimfit Ladies Fitness Concept for healthy stress free life",
      initial: "A"
    }
  ];

  const galleryImages = [
    "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1552108/pexels-photo-1552108.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800"
  ];

  const trainers = [
    { name: "John Doe", specialty: "Strength Training", image: "https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop" },
    { name: "Jane Smith", specialty: "Cardio & Weight Loss", image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop" },
    { name: "Mike Johnson", specialty: "Personal Training", image: "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop" },
    { name: "Sarah Wilson", specialty: "Group Training", image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop" }
  ];

  const highlights = [
    {
      title: "First 6000 SqFt Gym",
      description: "Largest gym facility in Alappuzha",
      image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      title: "Dedicated Lady Trainers",
      description: "Specialized training for women",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      title: "5 Expert Trainers",
      description: "Available all the time",
      image: "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      title: "Fully Imported Equipment",
      description: "Latest fitness technology",
      image: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      title: "AC Gym",
      description: "Climate controlled environment",
      image: "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      title: "Comprehensive Programs",
      description: "Weight training, cardio, personal & group training",
      image: "https://images.pexels.com/photos/1552108/pexels-photo-1552108.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    }
  ];

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    const galleryInterval = setInterval(() => {
      setCurrentGalleryImage((prev) => (prev + 1) % galleryImages.length);
    }, 3000);

    return () => {
      clearInterval(testimonialInterval);
      clearInterval(galleryInterval);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      setShowScrollTop(scrolled > windowHeight / 2);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Background Animations */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="floating-dumbbells">
          <Dumbbell className="text-slimfit-teal/10 absolute top-20 left-10 animate-float-1" size={40} />
          <Dumbbell className="text-slimfit-blue/10 absolute top-40 right-20 animate-float-2" size={30} />
          <Dumbbell className="text-slimfit-teal/10 absolute bottom-40 left-20 animate-float-3" size={35} />
          <Heart className="text-slimfit-blue/10 absolute top-60 left-1/3 animate-pulse-slow" size={25} />
          <Zap className="text-slimfit-teal/10 absolute bottom-60 right-1/4 animate-bounce-gentle" size={28} />
          <Award className="text-slimfit-blue/10 absolute top-80 right-10 animate-float-1" size={32} />
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-slimfit-teal/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center">
              <img 
                src="/slimfit-logo.svg" 
                alt="Slim Fit Ladies Fitness Centre Logo" 
                className="h-20 w-20 md:h-24 md:w-24 object-contain hover:animate-spin transition-transform duration-500 filter drop-shadow-lg"
              />
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-white hover:text-slimfit-teal transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-slimfit-teal transition-colors">About</button>
              <button onClick={() => scrollToSection('gallery')} className="text-white hover:text-slimfit-teal transition-colors">Gallery</button>
              <button onClick={() => scrollToSection('trainers')} className="text-white hover:text-slimfit-teal transition-colors">Trainers</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-white hover:text-slimfit-teal transition-colors">Reviews</button>
              <button onClick={() => scrollToSection('contact')} className="text-white hover:text-slimfit-teal transition-colors">Contact</button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden text-white hover:text-slimfit-teal transition-colors p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-slimfit-teal/20">
              <div className="flex flex-col space-y-4 pt-4">
                <button onClick={() => scrollToSection('home')} className="text-white hover:text-slimfit-teal transition-colors text-left">Home</button>
                <button onClick={() => scrollToSection('about')} className="text-white hover:text-slimfit-teal transition-colors text-left">About</button>
                <button onClick={() => scrollToSection('gallery')} className="text-white hover:text-slimfit-teal transition-colors text-left">Gallery</button>
                <button onClick={() => scrollToSection('trainers')} className="text-white hover:text-slimfit-teal transition-colors text-left">Trainers</button>
                <button onClick={() => scrollToSection('testimonials')} className="text-white hover:text-slimfit-teal transition-colors text-left">Reviews</button>
                <button onClick={() => scrollToSection('contact')} className="text-white hover:text-slimfit-teal transition-colors text-left">Contact</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat animate-zoom-in"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-slimfit-teal via-slimfit-blue to-slimfit-teal bg-clip-text text-transparent animate-pulse font-serif tracking-wider">
            SLIMFIT LADIES FITNESS CONCEPT
          </h1>
          <p className="text-2xl md:text-4xl mb-8 text-white font-light animate-slide-up delay-300 font-serif italic">
            Every Step is Progress
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12 animate-slide-up delay-500">
            <div className="flex items-center space-x-2 bg-slimfit-blue/20 backdrop-blur-sm px-6 py-4 rounded-full border border-slimfit-blue/30 w-full md:w-auto">
              <MapPin className="text-slimfit-teal flex-shrink-0" size={20} />
              <span className="text-white text-sm md:text-base">Slimfit Ladies Fitness Concept - Ambanakulangara, Mannanchery, Alappuzha</span>
            </div>
            <div className="flex items-center space-x-2 bg-slimfit-teal/20 backdrop-blur-sm px-6 py-4 rounded-full border border-slimfit-teal/30 w-full md:w-auto">
              <MapPin className="text-slimfit-blue flex-shrink-0" size={20} />
              <span className="text-white text-sm md:text-base">Slimfit Premium - Muhamma, Alappuzha</span>
            </div>
          </div>
          
          <button 
            onClick={scrollToContact}
            className="bg-gradient-to-r from-slimfit-blue to-slimfit-teal hover:from-slimfit-blue/80 hover:to-slimfit-teal/80 text-white px-12 py-4 rounded-full text-xl font-bold transform hover:scale-105 transition-all duration-300 shadow-2xl animate-bounce-slow delay-700"
          >
            JOIN NOW
          </button>
        </div>
      </section>

      {/* Exclusive Launch Offers */}
      <section className="py-20 bg-gradient-to-r from-slimfit-blue/30 to-slimfit-teal/30 animate-on-scroll">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-slimfit-teal">EXCLUSIVE LAUNCH OFFERS</h2>
          <p className="text-xl mb-8 text-gray-300">Limited time offers for new members!</p>
          <a 
            href="https://wa.me/7994229705" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-bold transform hover:scale-105 transition-all duration-300"
          >
            ENQUIRE NOW
          </a>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900 animate-on-scroll">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-slimfit-teal">About Slimfit Ladies Fitness Concept</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg leading-relaxed text-gray-300 mb-8">
                  Step into Slimfit Ladies Fitness Concept, your ultimate fitness haven in Alappuzha, designed to inspire a healthier, stronger, and more vibrant you! With our main location in Alappuzha and additional branches at Ambanakulangara, Mannanchery, Alappuzha, and Muhamma, Alappuzha, we bring top-tier gym facilities and tailored training programs to support your wellness journey.
                </p>
                <p className="text-lg leading-relaxed text-gray-300 mb-8">
                  At Slimfit Ladies Fitness Concept Alappuzha, we're passionate about empowering every individual to embrace a fit lifestyle. Our skilled trainers create an inclusive and encouraging atmosphere, helping you stay motivated and confident as you push your limits. Whether you're an experienced fitness enthusiast or just beginning your transformation in Alappuzha, Slimfit Ladies Fitness Concept offers the tools and guidance you need to thrive.
                </p>
                <p className="text-lg leading-relaxed text-gray-300">
                  Explore our locations at Ambanakulangara, Mannanchery, or Muhamma and start your fitness adventure with us today!
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Gym Equipment" 
                  className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
                />
                <img 
                  src="https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Training Session" 
                  className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gym Highlights */}
      <section className="py-20 bg-gradient-to-r from-slimfit-teal/20 to-slimfit-blue/20 animate-on-scroll">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-slimfit-teal">Why Choose Slimfit Ladies Fitness Concept?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center p-6 bg-black/50 rounded-lg backdrop-blur-sm border border-slimfit-teal/20 transform hover:scale-105 transition-all duration-300">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={highlight.image} 
                    alt={highlight.title}
                    className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{highlight.title}</h3>
                <p className="text-gray-300">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 bg-black animate-on-scroll">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-slimfit-teal">Gallery</h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-lg shadow-2xl">
              <img 
                src={galleryImages[currentGalleryImage]} 
                alt="Gym Gallery" 
                className="w-full h-96 object-cover gallery-image"
                key={currentGalleryImage}
              />
            </div>
            <button 
              onClick={() => setCurrentGalleryImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => setCurrentGalleryImage((prev) => (prev + 1) % galleryImages.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          <div className="flex justify-center mt-8 space-x-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentGalleryImage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentGalleryImage ? 'bg-slimfit-teal' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trainers */}
      <section id="trainers" className="py-20 bg-gradient-to-b from-gray-900 to-black animate-on-scroll">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-slimfit-teal">Our Expert Trainers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainers.map((trainer, index) => (
              <div key={index} className="text-center group">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img 
                    src={trainer.image} 
                    alt={trainer.name} 
                    className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{trainer.name}</h3>
                <p className="text-slimfit-teal">{trainer.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gradient-to-r from-slimfit-blue/20 to-slimfit-teal/20 animate-on-scroll">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-slimfit-teal">What Our Members Say</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-8 border border-slimfit-teal/20 relative">
              <div className="absolute top-4 right-4 flex items-center space-x-2">
                <div className="flex items-center bg-white rounded-lg px-3 py-1">
                  <svg className="w-5 h-5 mr-1" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="text-gray-700 text-sm font-medium">Google</span>
                </div>
              </div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-slimfit-teal to-slimfit-blue flex items-center justify-center text-white font-bold text-xl mr-4">
                  {testimonials[currentTestimonial].initial}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{testimonials[currentTestimonial].name}</h3>
                  <div className="flex space-x-1">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="text-slimfit-teal fill-current" size={16} />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">{testimonials[currentTestimonial].review}</p>
            </div>
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-slimfit-teal' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
            <div className="text-center mt-8">
              <a 
                href="https://www.google.com/search?client=firefox-b-d&sca_esv=ccb8066356fd07b7&sxsrf=AE3TifPL5fqddMtLr_Qx70YLiC-7iNQvow:1750783019556&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E5355nheRo4ixnCFQPjMBMRh7RXth-PBCJHnVdILvJ4IUf9Fw4eEizEFRdeI26R_ARuIbTE9o0-IKnKJ7_jEI4Iy3OgOCPN0cPxI29VufkmSmuqNXw%3D%3D&q=Sky+Gym+Fitness+Center+Reviews&sa=X&ved=2ahUKEwjPn9b_voqOAxXTXmwGHRw1CAcQ0bkNegQIHxAD&biw=1920&bih=919&dpr=1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-slimfit-blue hover:bg-slimfit-blue/80 text-white px-6 py-3 rounded-full font-bold transform hover:scale-105 transition-all duration-300"
              >
                See More Reviews
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900 animate-on-scroll">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-slimfit-teal">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-slimfit-teal mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                    <p className="text-gray-300">Thekkedath Rd, near Ambanakulangara, Ambanakulangara, Ward 7, Mannanchery, Alappuzha, Kerala 688522</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="text-slimfit-blue mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                    <a href="tel:7994229705" className="text-gray-300 hover:text-slimfit-teal transition-colors">7994229705</a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MessageCircle className="text-green-400 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
                    <a href="https://wa.me/7994229705" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-slimfit-teal transition-colors">7994229705</a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <svg className="text-slimfit-blue mt-1" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                    <a href="mailto:trainer@skygym.com" className="text-gray-300 hover:text-slimfit-teal transition-colors">trainer@skygym.com</a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="text-slimfit-teal mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Working Hours</h3>
                    <p className="text-gray-300">Weekdays: 5:30 AM - 11:00 PM</p>
                    <p className="text-gray-300">Sundays: OFF</p>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4 mt-8">
                <a href="tel:7994229705" className="bg-slimfit-blue hover:bg-slimfit-blue/80 text-white p-3 rounded-full transform hover:scale-110 transition-all duration-300">
                  <Phone size={24} />
                </a>
                <a href="https://wa.me/7994229705" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transform hover:scale-110 transition-all duration-300">
                  <MessageCircle size={24} />
                </a>
                <a href="https://www.instagram.com/_sky_gym_?igsh=dmpodm1uYzI4Zmt6" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white p-3 rounded-full transform hover:scale-110 transition-all duration-300">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
            
            <div className="h-96 rounded-lg overflow-hidden shadow-2xl">
              <a 
                href="https://maps.app.goo.gl/cAH48wG57Xn3gCe87" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full h-full transform hover:scale-105 transition-transform duration-300"
              >
                <img 
                  src="/skygym-location.png" 
                  alt="Slimfit Ladies Fitness Concept Location Map" 
                  className="w-full h-full object-cover hover:brightness-110 transition-all duration-300"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-slimfit-teal/20 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <img 
              src="/slimfit-3d-transparent-logo.png" 
              alt="Slimfit Ladies Fitness Concept Logo" 
              className="h-16 w-16 object-contain"
            />
            <div>
              <h3 className="text-xl font-bold text-slimfit-teal">SLIMFIT LADIES FITNESS CONCEPT</h3>
              <p className="text-xs text-gray-400">Every Step is Progress</p>
            </div>
          </div>
          <p className="text-gray-400">&copy; 2024 Slimfit Ladies Fitness Concept. All rights reserved.</p>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a 
        href="https://wa.me/7994229705" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 animate-pulse"
      >
        <MessageCircle size={28} />
      </a>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-slimfit-teal hover:bg-slimfit-teal/80 text-white p-4 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300"
        >
          <ArrowUp size={28} />
        </button>
      )}
    </div>
  );
};

export default App;