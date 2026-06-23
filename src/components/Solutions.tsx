import React from 'react';
import { SOLUTION_CATEGORIES } from '../data';
import { 
  Lightbulb, ShieldAlert, Zap, Database, 
  Anchor, Award, Info, Shield, ArrowLeft, ArrowRight, GraduationCap
} from 'lucide-react';
import { ActiveTab } from '../types';

interface SolutionsProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  setActiveTab?: (tab: ActiveTab) => void;
}

export default function Solutions({ selectedCategory, setSelectedCategory, setActiveTab }: SolutionsProps) {

  const getIcon = (itemName: string) => {
    const name = itemName.toLowerCase();
    if (name.includes('lighting')) return <Lightbulb className="h-6 w-6 text-blue-900" />;
    if (name.includes('security') || name.includes('cyber') || name.includes('ciso') || name.includes('dpo') || name.includes('fortinet') || name.includes('firewall') || name.includes('insulation') || name.includes('resistance')) return <Shield className="h-6 w-6 text-blue-900" />;
    if (name.includes('cable') || name.includes('cabling') || name.includes('materials')) return <Database className="h-6 w-6 text-blue-900" />;
    if (name.includes('power') || name.includes('transformer') || name.includes('charger') || name.includes('ups')) return <Zap className="h-6 w-6 text-blue-900" />;
    if (name.includes('surveillance') || name.includes('fire') || name.includes('detection') || name.includes('escape') || name.includes('suppression')) return <ShieldAlert className="h-6 w-6 text-[#190B24]" />;
    if (name.includes('training') || name.includes('simulator') || name.includes('cbt') || name.includes('lab')) return <GraduationCap className="h-6 w-6 text-blue-900" />;
    return <Anchor className="h-6 w-6 text-blue-900" />;
  };

  const allProductsCount = SOLUTION_CATEGORIES.flatMap(c => c.items).length;

  const categoriesPool = [
    { id: 'all', title: 'All Solutions', count: allProductsCount },
    ...SOLUTION_CATEGORIES.map(cat => ({
      id: cat.id,
      title: cat.title,
      fullTitle: cat.title,
      count: cat.items.length
    }))
  ];

  const activeCategoryObject = SOLUTION_CATEGORIES.find(cat => cat.id === selectedCategory);

  // Single Webpage Layout for an active Category
  if (selectedCategory !== 'all' && activeCategoryObject) {
    const category = activeCategoryObject;
    const displayTitle = category.title;

    const otherCategories = SOLUTION_CATEGORIES.filter(c => c.id !== selectedCategory);

    return (
      <div className="animate-fade-in py-12 md:py-20 bg-slate-50 min-h-screen text-slate-900" id="solutions-category-page">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex flex-wrap items-center space-x-2 text-xs text-slate-400 font-medium pb-2 border-b border-slate-200/60 font-mono uppercase tracking-wider">
            <button 
              onClick={() => { if (setActiveTab) setActiveTab('home'); }} 
              className="hover:text-blue-900 transition-colors cursor-pointer font-bold"
            >
              Home
            </button>
            <span>/</span>
            <button 
              onClick={() => setSelectedCategory('all')} 
              className="hover:text-blue-900 transition-colors cursor-pointer font-bold"
            >
              Solutions & Products
            </button>
            <span>/</span>
            <span className="text-slate-700 font-extrabold">{displayTitle}</span>
          </nav>

          {/* Elegant Category Hero Card */}
          <div className="bg-white border border-slate-200/80 rounded-sm p-8 md:p-12 shadow-xs relative overflow-hidden" id="category-hero">
            <div className="absolute right-0 top-0 h-full w-1/3 bg-linear-to-l from-slate-50 hidden md:block opacity-60" />
            
            <div className="relative z-10 space-y-4 max-w-4xl">
              <span className="inline-block px-3 py-1 text-[10px] font-mono text-blue-900 font-bold uppercase tracking-widest bg-blue-50 border border-blue-100 rounded-xs">
                Portfolio Division
              </span>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#190B24] tracking-tight leading-tight">
                {displayTitle}
              </h1>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans mt-2">
                {category.description}
              </p>
              
              <div className="pt-2">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className="inline-flex items-center space-x-2 text-xs font-bold text-blue-900 hover:text-blue-800 transition-colors group cursor-pointer"
                >
                  <ArrowLeft className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform" />
                  <span>View All Categories Directory</span>
                </button>
              </div>
            </div>
          </div>

          {/* Category Items List Title */}
          <div className="pt-4 flex items-center justify-between border-b border-slate-200 pb-3">
            <h2 className="font-display text-xs font-bold uppercase tracking-widest text-[#190B24] font-mono">
              Key Capabilities & Supply Offerings
            </h2>
            <span className="text-xs text-slate-500 font-mono font-bold">
              {category.items.length} {category.items.length === 1 ? 'Solution Suite' : 'Solutions Available'}
            </span>
          </div>

          {/* Grid of items in this single category webpage */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="category-items-grid">
            {category.items.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-200/80 rounded-sm p-6 sm:p-8 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6 group hover:border-slate-300"
                id={`solution-card-${category.id}-${idx}`}
              >
                <div className="space-y-5">
                  {/* Card Header */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-blue-900 font-bold uppercase tracking-widest bg-blue-50/70 px-2.5 py-1 rounded-xs">
                      {displayTitle}
                    </span>
                    <div className="p-2.5 bg-slate-50 rounded-full group-hover:bg-blue-50 transition-colors">
                      {getIcon(item.name)}
                    </div>
                  </div>

                  {/* Title & Market Position */}
                  <div className="space-y-2">
                    <h3 className="font-display text-xl font-bold text-slate-900 leading-snug group-hover:text-blue-950 transition-colors">
                      {item.name}
                    </h3>
                    
                    {item.marketPosition && (
                      <div className="inline-flex items-center space-x-1.5 bg-sky-50 text-blue-900 text-[10px] font-sans px-2.5 py-0.5 rounded-sm font-bold uppercase tracking-wider">
                        <Award className="h-3.5 w-3.5 text-blue-800" />
                        <span>{item.marketPosition}</span>
                      </div>
                    )}
                  </div>

                  {/* Detailed descriptions */}
                  {item.description && (
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                      {item.description}
                    </p>
                  )}

                  {/* Services List if any */}
                  {item.services && item.services.length > 0 && (
                    <div className="space-y-3.5 pt-2">
                      <h4 className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-wider">Key Service Offerings</h4>
                      <div className="grid grid-cols-1 gap-3">
                        {item.services.map((service, sIdx) => (
                          <div key={sIdx} className="bg-slate-50 p-4 rounded-sm border border-slate-200/60 hover:border-slate-300 transition-colors space-y-2">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5">
                              <h5 className="font-sans text-sm font-bold text-slate-800">{service.name}</h5>
                              {service.marketPosition && (
                                <div className="inline-flex max-w-fit items-center space-x-1 bg-blue-50/80 text-blue-900 text-[9px] font-sans px-2 py-0.5 rounded-sm font-bold uppercase tracking-wider">
                                  <Award className="h-3 w-3 text-blue-800" />
                                  <span>{service.marketPosition}</span>
                                </div>
                              )}
                            </div>
                            <p className="text-xs text-slate-600 leading-relaxed font-sans">{service.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Specific Key Technologies if any */}
                  {item.technology && (
                    <div className="bg-slate-50 rounded-sm p-4 border border-slate-200 space-y-2 group-hover:bg-blue-50/20 transition-colors">
                      <h4 className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-wider">Engineered Technology</h4>
                      <p className="text-xs text-slate-800 leading-relaxed font-sans">{item.technology}</p>
                    </div>
                  )}

                  {/* Key Products List */}
                  {item.keyProducts && item.keyProducts.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-wider">Key Systems Supplied</h4>
                      <div className="grid grid-cols-1 gap-2.5">
                        {item.keyProducts.map((prod, pIdx) => (
                          <div key={pIdx} className="bg-slate-50 p-3 rounded-sm border border-slate-200/80 flex items-start space-x-2 text-xs text-slate-700 group-hover:bg-white transition-colors">
                            <span className="text-blue-900 shrink-0 font-bold select-none">✓</span>
                            <span>{prod}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Features List */}
                  {item.keyFeatures && item.keyFeatures.length > 0 && (
                    <div className="space-y-2.5">
                      <h4 className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-wider">Strategic Range & Key Highlights</h4>
                      <ul className="space-y-2">
                        {item.keyFeatures.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start space-x-3 text-xs text-slate-600 leading-relaxed font-sans">
                            <span className="text-blue-905 mt-1 shrink-0 font-bold">•</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Key Applications */}
                  {item.keyApplications && item.keyApplications.length > 0 && (
                    <div className="space-y-1.5">
                      <h4 className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-wider">Applications</h4>
                      <p className="text-xs text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-sm border border-slate-200 font-sans group-hover:bg-white transition-colors">
                        {item.keyApplications.join(', ')}
                      </p>
                    </div>
                  )}

                  {/* General Characteristics for Cables */}
                  {item.keyCharacteristics && item.keyCharacteristics.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-wider">Technical Characteristics / Product Types</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {item.keyCharacteristics.map((char, cIdx) => (
                          <span key={cIdx} className="bg-slate-100 border border-slate-200/80 text-blue-950 font-mono text-[9px] px-2.5 py-1 rounded-sm uppercase tracking-wide font-bold">
                            {char}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Technical Range */}
                  {item.technicalRange && (
                    <div className="space-y-1.5">
                      <h4 className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-wider">Technical / Supply Range</h4>
                      <p className="text-xs text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-sm border border-slate-200/60 font-sans font-medium group-hover:bg-white transition-colors">
                        {item.technicalRange}
                      </p>
                    </div>
                  )}

                  {/* Track Record */}
                  {item.trackRecord && (
                    <div className="bg-emerald-50/50 border border-emerald-200/60 rounded-xs p-3.5 space-y-1">
                      <h4 className="font-mono text-[9px] text-emerald-800 font-bold uppercase tracking-wider">Turnkey Track Record / Deployment</h4>
                      <p className="text-xs text-emerald-950 font-semibold font-sans leading-relaxed whitespace-pre-line">{item.trackRecord}</p>
                    </div>
                  )}

                  {/* Project Footprint */}
                  {item.projectFootprint && item.projectFootprint.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-wider">Active Platform Deployments</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {item.projectFootprint.map((plat, pIdx) => (
                          <span key={pIdx} className="bg-blue-50 text-blue-950 border border-blue-100 font-sans text-[10px] px-2.5 py-1 rounded-sm font-bold">
                            {plat}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Technical Highlights */}
                  {item.technicalHighlights && item.technicalHighlights.length > 0 && (
                    <div className="space-y-2 bg-slate-50 border border-slate-200 rounded-sm p-3.5 group-hover:bg-white transition-colors">
                      <h4 className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-wider">Technical Highlights</h4>
                      <ul className="space-y-1.5">
                        {item.technicalHighlights.map((hl, hlIdx) => (
                          <li key={hlIdx} className="flex items-start space-x-2.5 text-xs text-slate-600 font-sans leading-relaxed">
                            <span className="text-blue-900 mt-1.5 shrink-0 font-bold text-[9px]">•</span>
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Transformer capabilities */}
                  {item.capabilities && item.capabilities.length > 0 && (
                    <div className="p-4 text-white bg-slate-950 rounded-sm space-y-2 border border-slate-800">
                      <h4 className="font-mono text-[9px] text-blue-400 tracking-wider uppercase font-bold">Winding & Safety Transformer Capabilities</h4>
                      <p className="text-xs text-slate-300 leading-relaxed font-sans">{item.capabilities[0]}</p>
                    </div>
                  )}
                </div>

                {/* Footer specs */}
                <div className="pt-6 border-t border-slate-100 space-y-3 mt-auto">
                  {item.name.includes("Surveillance") && (
                    <div className="flex items-start space-x-2 p-3 bg-amber-50 rounded-sm border border-amber-200 text-amber-900 text-[10px] font-sans font-medium">
                      <Info className="h-4 w-4 shrink-0 mt-0.5 text-amber-700" id="info-note-surveillance" />
                      <span>
                        <strong>Note:</strong> Video analytics software acts as an automated early-warning tracking asset in control rooms (not a replacement for the primary Fire Detection System).
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Quick-Hop Navigation Footer Block for the other categories */}
          <div className="mt-16 pt-10 border-t border-slate-200 space-y-6" id="category-page-footer">
            <h3 className="font-display text-lg font-extrabold text-[#190B24] tracking-tight">
              Explore Other Solution Suites
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
              {otherCategories.map((cat) => {
                const subTitle = cat.title;

                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      window.scrollTo({ top: 0, behavior: 'instant' });
                    }}
                    className="bg-white border border-slate-200 hover:border-blue-900/40 p-4 rounded-sm text-left transition-all duration-200 group flex flex-col justify-between h-32 hover:shadow-xs cursor-pointer"
                  >
                    <div>
                      <span className="text-[8px] font-mono font-bold uppercase tracking-widest text-[#190B24]/40 block mb-1">
                        Solution Suite
                      </span>
                      <h4 className="text-xs font-bold text-slate-800 group-hover:text-blue-900 line-clamp-2 leading-tight">
                        {subTitle}
                      </h4>
                    </div>
                    <span className="text-[10px] text-blue-900 font-extrabold flex items-center space-x-1 mt-2.5">
                      <span>View Webpage</span>
                      <ArrowRight className="h-3 w-3 transform group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </button>
                );
              })}
            </div>
            
            <div className="pt-4 flex justify-center">
              <button
                onClick={() => setSelectedCategory('all')}
                className="px-6 py-3 border border-slate-200 hover:border-slate-300 bg-white text-xs font-bold text-slate-700 hover:text-[#190B24] hover:bg-slate-50 rounded-sm shadow-xs transition-colors cursor-pointer block text-center"
              >
                ← Back to Solutions Directory
              </button>
            </div>
          </div>

        </div>
      </div>
    );
  }

  const filteredCategories = selectedCategory === 'all'
    ? SOLUTION_CATEGORIES
    : SOLUTION_CATEGORIES.filter(cat => cat.id === selectedCategory);

  return (
    <div className="animate-fade-in py-16 md:py-24 bg-slate-50 min-h-screen text-slate-900" id="solutions-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-left max-w-3xl space-y-4">
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Solutions & Products
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans mt-2">
            ASEC maintains sole or exclusive Asia/Singapore agency alliances to supply and support mission-critical equipment.
          </p>
        </div>

        {/* Category Interactive Filter Tabs */}
        <div className="space-y-4">
          <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider block">
            Filter Portfolio by Category
          </span>
          <div className="flex flex-wrap gap-2.5 pb-2 border-b border-slate-200">
            {categoriesPool.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 flex items-center space-x-2 border cursor-pointer ${
                    isActive
                      ? 'bg-blue-900 border-blue-900 text-white shadow-sm'
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-800'
                  }`}
                  id={`tab-${cat.id}`}
                >
                  <span className="font-sans">{cat.title}</span>
                  <span className={`text-[9px] px-2 py-0.5 rounded-full font-mono font-bold ${
                    isActive ? 'bg-blue-800 text-blue-105' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Category Sections Block */}
        <div className="space-y-16" id="solutions-list">
          {filteredCategories.map((category) => (
            <div key={category.id} className="space-y-8 animate-fade-in" id={`category-sec-${category.id}`}>
              
              {/* Category Header */}
              <div 
                onClick={() => setSelectedCategory(category.id)}
                className="border-l-4 border-blue-900 pl-4 py-1 space-y-1.5 cursor-pointer hover:border-blue-700 group transition-colors"
                id={`category-header-sec-${category.id}`}
              >
                <h2 className="font-display text-xl sm:text-2xl font-black text-slate-900 group-hover:text-blue-900 transition-colors tracking-tight flex items-center gap-3">
                  <span>{category.title}</span>
                  <span className="text-[10px] font-mono text-blue-850 bg-blue-50/70 border border-blue-150 px-2 py-0.5 rounded-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-x-1 group-hover:translate-x-0">
                    View Dedicated Webpage →
                  </span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 max-w-4xl leading-relaxed font-sans">
                  {category.description}
                </p>
              </div>

              {/* Category Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.items.map((item, idx) => (
                  <div 
                    key={idx}
                    className="bg-white border border-slate-200/80 rounded-sm p-6 sm:p-8 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6 group hover:border-slate-300"
                    id={`solution-card-${category.id}-${idx}`}
                  >
                    <div className="space-y-5">
                      {/* Card Category Tag and Icon */}
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-blue-900 font-bold uppercase tracking-widest bg-blue-50/70 px-2.5 py-1 rounded-xs">
                          {category.title.replace(/^Category [A-Z]:\s*/, "")}
                        </span>
                        <div className="p-2.5 bg-slate-50 rounded-full group-hover:bg-blue-50 transition-colors">
                          {getIcon(item.name)}
                        </div>
                      </div>

                      {/* Main Title & Market Position */}
                      <div className="space-y-2">
                        <h3 className="font-display text-xl font-bold text-slate-900 leading-snug group-hover:text-blue-950 transition-colors">
                          {item.name}
                        </h3>
                        
                        {item.marketPosition && (
                          <div className="inline-flex items-center space-x-1.5 bg-sky-50 text-blue-900 text-[10px] font-sans px-2.5 py-0.5 rounded-sm font-bold uppercase tracking-wider">
                            <Award className="h-3.5 w-3.5 text-blue-800" />
                            <span>{item.marketPosition}</span>
                          </div>
                        )}
                      </div>

                      {/* Detailed descriptions */}
                      {item.description && (
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                          {item.description}
                        </p>
                      )}

                      {/* Services List if any */}
                      {item.services && item.services.length > 0 && (
                        <div className="space-y-3.5 pt-2">
                          <h4 className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-wider">Key Service Offerings</h4>
                          <div className="grid grid-cols-1 gap-3">
                            {item.services.map((service, sIdx) => (
                              <div key={sIdx} className="bg-slate-50 p-4 rounded-sm border border-slate-200/60 hover:border-slate-300 transition-colors space-y-2">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5">
                                  <h5 className="font-sans text-sm font-bold text-slate-800">{service.name}</h5>
                                  {service.marketPosition && (
                                    <div className="inline-flex max-w-fit items-center space-x-1 bg-blue-50/80 text-blue-900 text-[9px] font-sans px-2 py-0.5 rounded-sm font-bold uppercase tracking-wider">
                                      <Award className="h-3 w-3 text-blue-800" />
                                      <span>{service.marketPosition}</span>
                                    </div>
                                  )}
                                </div>
                                <p className="text-xs text-slate-600 leading-relaxed font-sans">{service.description}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Specific Key Technologies if any */}
                      {item.technology && (
                        <div className="bg-slate-50 rounded-sm p-4 border border-slate-200 space-y-2 group-hover:bg-blue-50/20 transition-colors">
                          <h4 className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-wider">Engineered Technology</h4>
                          <p className="text-xs text-slate-800 leading-relaxed font-sans">{item.technology}</p>
                        </div>
                      )}

                      {/* Key Products List */}
                      {item.keyProducts && item.keyProducts.length > 0 && (
                        <div className="space-y-2">
                          <h4 className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-wider">Key Systems Supplied</h4>
                          <div className="grid grid-cols-1 gap-2.5">
                            {item.keyProducts.map((prod, pIdx) => (
                              <div key={pIdx} className="bg-slate-50 p-3 rounded-sm border border-slate-200/80 flex items-start space-x-2 text-xs text-slate-700 group-hover:bg-white transition-colors">
                                <span className="text-blue-900 shrink-0 font-bold select-none">✓</span>
                                <span>{prod}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Features List */}
                      {item.keyFeatures && item.keyFeatures.length > 0 && (
                        <div className="space-y-2.5">
                          <h4 className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-wider">Strategic Range & Key Highlights</h4>
                          <ul className="space-y-2">
                            {item.keyFeatures.map((feat, fIdx) => (
                              <li key={fIdx} className="flex items-start space-x-3 text-xs text-slate-600 leading-relaxed font-sans">
                                <span className="text-blue-900 mt-1 shrink-0 font-bold">•</span>
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Key Applications */}
                      {item.keyApplications && item.keyApplications.length > 0 && (
                        <div className="space-y-1.5">
                          <h4 className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-wider">Applications</h4>
                          <p className="text-xs text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-sm border border-slate-200 font-sans group-hover:bg-white transition-colors">
                            {item.keyApplications.join(', ')}
                          </p>
                        </div>
                      )}

                      {/* General Characteristics for Cables */}
                      {item.keyCharacteristics && item.keyCharacteristics.length > 0 && (
                        <div className="space-y-2">
                          <h4 className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-wider">Technical Characteristics / Product Types</h4>
                          <div className="flex flex-wrap gap-1.5">
                            {item.keyCharacteristics.map((char, cIdx) => (
                              <span key={cIdx} className="bg-slate-100 border border-slate-200/80 text-blue-950 font-mono text-[9px] px-2.5 py-1 rounded-sm uppercase tracking-wide font-bold">
                                {char}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Technical Range / Supply Spec */}
                      {item.technicalRange && (
                        <div className="space-y-1.5">
                          <h4 className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-wider">Technical / Supply Range</h4>
                          <p className="text-xs text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-sm border border-slate-200/60 font-sans font-medium group-hover:bg-white transition-colors">
                            {item.technicalRange}
                          </p>
                        </div>
                      )}

                      {/* Track Record */}
                      {item.trackRecord && (
                        <div className="bg-emerald-50/50 border border-emerald-200/60 rounded-xs p-3.5 space-y-1">
                          <h4 className="font-mono text-[9px] text-emerald-800 font-bold uppercase tracking-wider">Turnkey Track Record / Deployment</h4>
                          <p className="text-xs text-emerald-950 font-semibold font-sans leading-relaxed">{item.trackRecord}</p>
                        </div>
                      )}

                      {/* Project Footprint */}
                      {item.projectFootprint && item.projectFootprint.length > 0 && (
                        <div className="space-y-2">
                          <h4 className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-wider">Active Platform Deployments</h4>
                          <div className="flex flex-wrap gap-1.5">
                            {item.projectFootprint.map((plat, pIdx) => (
                              <span key={pIdx} className="bg-blue-50 text-blue-950 border border-blue-100 font-sans text-[10px] px-2.5 py-1 rounded-sm font-bold">
                                {plat}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Technical Highlights */}
                      {item.technicalHighlights && item.technicalHighlights.length > 0 && (
                        <div className="space-y-2 bg-slate-50 border border-slate-200 rounded-sm p-3.5 group-hover:bg-white transition-colors">
                          <h4 className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-wider">Technical Highlights</h4>
                          <ul className="space-y-1.5">
                            {item.technicalHighlights.map((hl, hlIdx) => (
                              <li key={hlIdx} className="flex items-start space-x-2.5 text-xs text-slate-600 font-sans leading-relaxed">
                                <span className="text-blue-900 mt-1.5 shrink-0 font-bold text-[9px]">•</span>
                                <span>{hl}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Transformer capabilities */}
                      {item.capabilities && item.capabilities.length > 0 && (
                        <div className="p-4 text-white bg-slate-950 rounded-sm space-y-2 border border-slate-800">
                          <h4 className="font-mono text-[9px] text-blue-400 tracking-wider uppercase font-bold">Winding & Safety Transformer Capabilities</h4>
                          <p className="text-xs text-slate-300 leading-relaxed font-sans">{item.capabilities[0]}</p>
                        </div>
                      )}
                    </div>

                    {/* Footer specs / Active Deployment of the product */}
                    <div className="pt-6 border-t border-slate-100 space-y-3 mt-auto">
                      {/* Warning early warning note */}
                      {item.name.includes("Surveillance") && (
                        <div className="flex items-start space-x-2 p-3 bg-amber-50 rounded-sm border border-amber-200 text-amber-900 text-[10px] font-sans font-medium">
                          <Info className="h-4 w-4 shrink-0 mt-0.5 text-amber-700" id="info-note-surveillance" />
                          <span>
                            <strong>Note:</strong> Video analytics software acts as an automated early-warning tracking asset in control rooms (not a replacement for the primary Fire Detection System).
                          </span>
                        </div>
                      )}
                    </div>

                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
