import React, { useState, useEffect } from 'react';
import { HERO_SLIDES, CAPABILITIES, WHY_CHOOSE_ITEMS, BRAND_PARTNERS } from '../data';
import { ActiveTab } from '../types';
import { Shield, ChevronRight, ChevronLeft, ArrowRight, Award, Building, Cpu, Check, ArrowUpRight } from 'lucide-react';

interface HomeProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Home({ setActiveTab }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto rotate slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <div className="animate-fade-in text-slate-950" id="home-page">
      
      {/* 1. HIGH-IMPACT ROTATING BANNER HERO SECTION */}
      <section className="relative h-[560px] md:h-[620px] bg-slate-950 overflow-hidden border-b border-slate-200" id="hero-carousel">
        
        {/* Carousel slides */}
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
              }`}
            >
              {/* Background gradient layout */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent z-10" />
              <img
                src={slide.bgImage}
                alt={slide.title}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />

              {/* Slide Content */}
              <div className="absolute inset-0 z-20 flex items-center">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full flex flex-col md:flex-row md:items-center">
                  
                  {/* Left Column content */}
                  <div className="w-full md:w-3/5 text-left space-y-6">

                    <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                      Engineering <span className="text-blue-400">Excellence.</span><br />
                      Trusted Distribution.
                    </h1>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl font-sans">
                      A single-source provider of critical engineering solutions, delivering complete lifecycle support and premium material integration for defense and commercial sectors.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4 pt-2">
                      <button
                        onClick={() => setActiveTab('solutions')}
                        className="px-8 py-3.5 bg-blue-900 hover:bg-blue-800 text-white font-bold text-sm rounded-sm shadow-lg shadow-blue-900/20 transition-all group cursor-pointer"
                        id="hero-cta-solutions"
                      >
                        <span className="flex items-center gap-2">
                          Explore Our Solutions
                          <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform animate-pulse" />
                        </span>
                      </button>
                    </div>

                  </div>

                  {/* Right Column Abstract Graphic Element */}
                  <div className="hidden md:block w-2/5 pl-12">
                    <div className="bg-slate-900/40 backdrop-blur-md p-6 rounded-lg border border-white/15 text-white space-y-4 shadow-2xl">
                      <div className="flex items-center space-x-2">
                        <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
                        <div className="text-xs font-bold tracking-widest text-blue-400 uppercase">Defense & Commercial Sectors</div>
                      </div>
                      <p className="text-xs text-slate-200 leading-relaxed font-sans">
                        Executing turnkey implementations and premium material integrations for elite defense organizations & demanding commercial enterprises for over 40 years.
                      </p>
                      
                      {/* Interactive indicator pills */}
                      <div className="flex flex-wrap gap-2 pt-1">
                        <span className="text-[9px] font-bold font-mono px-2 py-0.5 bg-blue-950/80 border border-blue-500/20 text-blue-300 rounded-sm">
                          DEFENSE (MIL-SPEC)
                        </span>
                        <span className="text-[9px] font-bold font-mono px-2 py-0.5 bg-white/10 border border-white/20 text-slate-200 rounded-sm">
                          COMMERCIAL INDUSTRIAL
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          );
        })}

        {/* Playback Controls */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex items-center space-x-4">
          <button
            onClick={prevSlide}
            className="p-2 bg-white/20 hover:bg-white/30 text-white border border-white/10 transition-all cursor-pointer rounded-sm"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          
          <div className="flex items-center space-x-2">
            {HERO_SLIDES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1.5 transition-all duration-300 ${
                  index === currentSlide ? 'w-8 bg-blue-400' : 'w-2 bg-slate-600 hover:bg-slate-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-2 bg-white/20 hover:bg-white/30 text-white border border-white/10 transition-all cursor-pointer rounded-sm"
            aria-label="Next slide"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

      </section>


      {/* 2. CORE CAPABILITIES PILLARS */}
      <section className="py-16 bg-white border-y border-slate-200" id="capabilities-overview">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-xs font-bold text-blue-900 uppercase tracking-widest">Our Capabilities</h2>
            <p className="font-display text-4xl sm:text-5xl font-black text-slate-900 leading-tight">Five Primary Engineering Pillars</p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {CAPABILITIES.map((cap, i) => (
              <div
                key={cap.id}
                id={`capability-card-${cap.id}`}
                className="cursor-default border border-slate-200 p-6 bg-slate-50/50 rounded-sm"
              >
                <h3 className="text-sm sm:text-base md:text-[14px] lg:text-base font-extrabold text-[#130c1e] uppercase tracking-tight mb-2.5 whitespace-pre-line">
                  {cap.title.split(' & ').join(' & \n')}
                </h3>
                <p className="text-xs text-slate-600 leading-snug">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => setActiveTab('services')}
              className="inline-flex items-center space-x-1.5 text-xs font-bold tracking-widest text-blue-900 hover:text-blue-800 transition-colors uppercase cursor-pointer"
            >
              <span>Explore Detailed Engineering Services</span>
              <span>→</span>
            </button>
          </div>

        </div>
      </section>


      {/* 3. WHY CHOOSE ASEC? */}
      <section className="py-20 bg-slate-50" id="why-choose-section">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left intro text */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold text-blue-900 uppercase tracking-widest bg-blue-100 px-3 py-1 rounded-full">
                Heritage of Quality
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Why Elite Defense & Commercial Organizations Choose ASEC
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                As an accredited strategic partner, we operate under meticulous compliance standards to ensure defense hardware readiness. Our deep alliances with key original equipment manufacturers guarantee authentic technical execution.
              </p>
            </div>

            {/* Right pillars list */}
            <div className="lg:col-span-7 space-y-4">
              {WHY_CHOOSE_ITEMS.map((item) => (
                <div
                  key={item.id}
                  id={`why-choose-item-${item.id}`}
                  className="bg-white border border-slate-200 rounded-sm p-6 flex items-start space-x-4"
                >
                  <div className="bg-blue-100 text-blue-900 font-bold text-xs px-3 py-1 rounded-sm uppercase tracking-wider shrink-0 font-sans">
                    {item.badge}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-display text-base font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>


      {/* 4. STRATEGIC BRAND PARTNERS (LOGO RIBBON) */}
      <section className="bg-white py-16 flex flex-col items-center border-b border-slate-200 overflow-hidden" id="brand-ticker-section">
        <p className="text-center text-sm sm:text-base uppercase tracking-widest text-[#000000] font-black mb-8 font-sans">
          Sole Distributor & Strategic Business Partners
        </p>

        {/* Scrolling tape container loop */}
        <div className="relative w-full overflow-visible bg-white py-6 border-y border-slate-200/40">
          <div className="logo-ribbon-track overflow-visible hover:[animation-play-state:paused]">
            {/* Duplicating array 2 times to make seamless looping space (total 24 items for 12 partners) */}
             {[...BRAND_PARTNERS, ...BRAND_PARTNERS].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex items-center justify-center w-[230px] px-3 text-center select-none shrink-0 relative group"
              >
                <div className="bg-white rounded-lg p-3 w-full h-20 flex items-center justify-center transition-all duration-300">
                  {partner.logo ? (
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="max-w-[170px] max-h-[56px] object-contain select-none transition-transform duration-300 hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <span className="font-sans font-bold text-slate-800 text-sm tracking-wide">{partner.name}</span>
                  )}
                </div>

                {/* Styled Tooltip for Better Accessibility */}
                <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-100 group-hover:translate-y-1.5 transition-all duration-300 ease-out z-30 w-56 bg-slate-900 border border-slate-800 text-white rounded-lg p-2.5 shadow-md flex flex-col items-center select-none origin-top">
                  {/* Small tooltip pointing arrow */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[4px] w-2.5 h-2.5 rotate-45 bg-slate-900 border-t border-l border-slate-800"></div>
                  <span className="font-sans font-extrabold text-slate-50 text-[11px] leading-tight text-center">
                    {partner.name}
                  </span>
                  <span className="font-sans text-[10px] text-slate-400 mt-1 leading-normal text-center font-medium">
                    {partner.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
