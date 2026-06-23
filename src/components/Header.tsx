import React, { useState, useEffect, useRef } from 'react';
import { ActiveTab } from '../types';
import { Menu, X, ChevronDown, Search, Shield, Cpu, Building, ArrowRight } from 'lucide-react';
import asecLogo from '../assets/images/asec_logo_1781785562511.jpg';
import { SOLUTION_CATEGORIES, BRAND_PARTNERS, CAPABILITIES } from '../data';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export default function Header({ activeTab, setActiveTab, selectedCategory, setSelectedCategory }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hoverCategory, setHoverCategory] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  interface SearchResultItem {
    type: 'solution' | 'brand' | 'capability';
    title: string;
    subtitle?: string;
    categoryId?: string;
    tabId: ActiveTab;
    searchableContent?: string;
  }

  const getSearchItems = (): SearchResultItem[] => {
    const items: SearchResultItem[] = [];
    
    SOLUTION_CATEGORIES.forEach(cat => {
      // Add the category itself
      const catSearchText = [
        cat.title,
        cat.description
      ].filter(Boolean).join(' ').toLowerCase();

      items.push({
        type: 'solution',
        title: cat.title,
        subtitle: cat.description,
        categoryId: cat.id,
        tabId: 'solutions',
        searchableContent: catSearchText
      });

      // Add product items
      cat.items.forEach(prod => {
        let snippet = prod.description || prod.marketPosition || '';
        if (prod.keyCharacteristics && prod.keyCharacteristics.length > 0) {
          snippet += ` (${prod.keyCharacteristics.join(', ')})`;
        }

        // Deep-index all fields in Solutions & Products
        const searchableParts = [
          prod.name,
          prod.marketPosition,
          prod.description,
          prod.trackRecord,
          prod.technology,
          prod.technicalRange,
          ...(prod.keyCharacteristics || []),
          ...(prod.keyFeatures || []),
          ...(prod.keyProducts || []),
          ...(prod.keyApplications || []),
          ...(prod.technicalHighlights || []),
          ...(prod.solutions || []),
          ...(prod.projectFootprint || []),
          ...(prod.capabilities || []),
          ...(prod.activeDeployment || []),
          ...(prod.services?.map(s => `${s.name} ${s.marketPosition || ''} ${s.description}`) || [])
        ].filter(Boolean).map(s => String(s)).join(' ').toLowerCase();

        items.push({
          type: 'solution',
          title: prod.name,
          subtitle: snippet,
          categoryId: cat.id,
          tabId: 'solutions',
          searchableContent: searchableParts
        });
      });
    });

    BRAND_PARTNERS.forEach(brand => {
      const brandSearchText = [
        brand.name,
        brand.description
      ].filter(Boolean).join(' ').toLowerCase();

      items.push({
        type: 'brand',
        title: brand.name,
        subtitle: brand.description,
        tabId: 'home',
        searchableContent: brandSearchText
      });
    });

    CAPABILITIES.forEach(cap => {
      const capSearchText = [
        cap.title,
        cap.description
      ].filter(Boolean).join(' ').toLowerCase();

      items.push({
        type: 'capability',
        title: cap.title,
        subtitle: cap.description,
        tabId: 'services',
        searchableContent: capSearchText
      });
    });

    return items;
  };

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const searchItems = () => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase();
    const items = getSearchItems();
    
    return items.filter(item => {
      if (item.searchableContent) {
        return item.searchableContent.includes(query);
      }
      return item.title.toLowerCase().includes(query) || 
             (item.subtitle && item.subtitle.toLowerCase().includes(query));
    });
  };

  const searchResults = searchItems();

  const handleResultClick = (item: SearchResultItem) => {
    setActiveTab(item.tabId);
    if (item.categoryId) {
      setSelectedCategory(item.categoryId);
    }
    setIsSearchOpen(false);
    setSearchQuery('');
    setIsOpen(false);
    
    // Smooth scroll to helpful positions
    setTimeout(() => {
      if (item.type === 'brand') {
        const brandSection = document.getElementById('why-choose-section');
        if (brandSection) {
          brandSection.scrollIntoView({ behavior: 'smooth' });
        }
      } else if (item.type === 'capability') {
        window.scrollTo({ top: 300, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    }, 100);
  };


  const navItems: { id: ActiveTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Engineering Services' },
    { id: 'solutions', label: 'Solutions & Products' },
    { id: 'contact', label: 'Contact Us' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 text-slate-800 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          
          {/* Logo Brand Title */}
          <div 
            onClick={() => { setActiveTab('home'); setIsOpen(false); }}
            className="flex items-center space-x-3.5 cursor-pointer group"
            id="header-brand-logo"
          >
            <div className="relative shrink-0 flex items-center justify-center">
              <img 
                src={asecLogo} 
                className="w-12 h-12 md:w-16 md:h-16 object-contain rounded-full border border-slate-200 shadow-xs group-hover:scale-105 transition-all" 
                alt="ASEC Logo" 
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="flex items-baseline space-x-1">
                <span className="font-display font-black text-2xl md:text-3xl tracking-tight text-[#190B24]">ASEC</span>
              </div>
              <p className="text-[9px] md:text-[10px] text-slate-500 uppercase tracking-widest font-sans font-semibold">Engineering & Distribution</p>
            </div>
          </div>

          {/* Desktop Navigation & Actions */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <nav className="flex space-x-6 lg:space-x-8" id="desktop-nav">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                
                if (item.id === 'solutions') {
                  return (
                    <div
                      key={item.id}
                      className="relative py-5 md:py-7 flex items-center h-full"
                      onMouseEnter={() => setHoverCategory(true)}
                      onMouseLeave={() => setHoverCategory(false)}
                    >
                      <button
                        id={`nav-${item.id}`}
                        onClick={() => {
                          setActiveTab('solutions');
                          setSelectedCategory('all');
                        }}
                        className={`text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center space-x-1 pb-1 ${
                          isActive
                            ? 'text-[#190B24] font-extrabold border-b-2 border-[#190B24]'
                            : 'text-slate-600 hover:text-[#190B24]'
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${hoverCategory ? 'rotate-180' : ''}`} />
                      </button>

                      {/* Desktop Dropdown Menu */}
                      {hoverCategory && (
                        <div className="absolute left-1/2 -translate-x-1/2 top-[80%] mt-2 w-80 bg-white border border-slate-200 rounded-md shadow-xl py-2 z-50 animate-fade-in">
                          <button
                            onClick={() => {
                              setActiveTab('solutions');
                              setSelectedCategory('all');
                              setHoverCategory(false);
                            }}
                            className={`w-full text-left px-5 py-2.5 hover:bg-slate-50 transition-colors flex flex-col group border-b border-slate-100 ${
                              activeTab === 'solutions' && selectedCategory === 'all' ? 'bg-slate-50' : ''
                            }`}
                          >
                            <span className="text-[10px] font-mono text-slate-400 block uppercase font-bold">Directory</span>
                            <span className={`text-xs font-semibold ${activeTab === 'solutions' && selectedCategory === 'all' ? 'text-blue-900 font-extrabold' : 'text-slate-700'}`}>All Solutions & Products</span>
                          </button>
                          {SOLUTION_CATEGORIES.map((cat) => {
                            const displayTitle = cat.title;
                            const isCatActive = activeTab === 'solutions' && selectedCategory === cat.id;

                            return (
                              <button
                                key={cat.id}
                                onClick={() => {
                                  setActiveTab('solutions');
                                  setSelectedCategory(cat.id);
                                  setHoverCategory(false);
                                }}
                                className={`w-full text-left px-5 py-2.5 hover:bg-slate-50 transition-colors flex flex-col group ${
                                  isCatActive ? 'bg-blue-50/50 border-l-2 border-[#190B24] font-bold' : ''
                                }`}
                              >
                                <span className={`text-xs font-semibold ${isCatActive ? 'text-[#190B24] font-extrabold' : 'text-slate-700 group-hover:text-[#190B24]'}`}>
                                  {displayTitle}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <button
                    key={item.id}
                    id={`nav-${item.id}`}
                    onClick={() => {
                      setActiveTab(item.id);
                    }}
                    className={`py-5 md:py-7 text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'text-[#190B24] border-b-2 border-[#190B24] font-extrabold'
                        : 'text-slate-600 hover:text-[#190B24]'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Desktop Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 border border-transparent hover:border-slate-200 hover:bg-slate-100 text-slate-600 hover:text-[#190B24] rounded-full transition-all cursor-pointer focus:outline-none flex items-center justify-center"
              title="Search Products..."
              id="desktop-search-trigger"
            >
              <Search className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile actions (Search & Menu) */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 rounded-full hover:bg-slate-105 text-slate-600 hover:text-[#190B24] transition-all cursor-pointer focus:outline-none"
              title="Search products..."
              id="mobile-search-trigger"
            >
              <Search className="h-5.5 w-5.5" />
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-[#190B24] hover:bg-slate-105 focus:outline-none animate-scale-up"
              aria-expanded={isOpen}
              id="mobile-menu-btn"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 shadow-lg" id="mobile-nav">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              
              if (item.id === 'solutions') {
                return (
                  <div key={item.id} className="space-y-1">
                    <button
                      onClick={() => {
                        setMobileSolutionsOpen(!mobileSolutionsOpen);
                      }}
                      className={`flex justify-between items-center w-full text-left px-4 py-3 rounded-md text-base font-semibold transition-all ${
                        isActive
                          ? 'bg-[#190B24]/5 text-[#190B24] font-extrabold border-l-4 border-[#190B24]'
                          : 'text-slate-600 hover:text-[#190B24] hover:bg-slate-50'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform duration-200 ${mobileSolutionsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {mobileSolutionsOpen && (
                      <div className="pl-6 pr-4 py-1.5 space-y-1.5 bg-slate-50 border-l-2 border-slate-200 rounded-r-md">
                        <button
                          onClick={() => {
                            setActiveTab('solutions');
                            setSelectedCategory('all');
                            setIsOpen(false);
                          }}
                          className={`block w-full text-left px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
                            activeTab === 'solutions' && selectedCategory === 'all'
                              ? 'text-blue-900 bg-blue-50/70 font-extrabold'
                              : 'text-slate-600 hover:text-[#190B24] hover:bg-slate-100'
                          }`}
                        >
                          All Solutions & Products
                        </button>
                        {SOLUTION_CATEGORIES.map((cat) => {
                          const isCatActive = activeTab === 'solutions' && selectedCategory === cat.id;
                          const cleanTitle = cat.title;
                          return (
                            <button
                              key={cat.id}
                              onClick={() => {
                                setActiveTab('solutions');
                                setSelectedCategory(cat.id);
                                setIsOpen(false);
                              }}
                              className={`block w-full text-left px-3 py-2 rounded-md text-xs font-semibold transition-colors ${
                                isCatActive
                                  ? 'text-[#190B24] bg-[#190B24]/5 font-extrabold'
                                  : 'text-slate-600 hover:text-[#190B24] hover:bg-slate-100'
                              }`}
                            >
                              {cleanTitle}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-md text-base font-semibold transition-all ${
                    isActive
                      ? 'bg-[#190B24]/5 text-[#190B24] font-extrabold border-l-4 border-[#190B24]'
                      : 'text-slate-600 hover:text-[#190B24] hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    {/* Global Search Modal Overlay */}
    {isSearchOpen && (
      <div 
        className="fixed inset-0 z-[9999] bg-slate-900/80 backdrop-blur-md flex items-start justify-center pt-[10vh] px-4 md:px-0"
        id="search-modal-backdrop"
        onClick={() => setIsSearchOpen(false)}
      >
        <div 
          className="bg-white w-full max-w-2xl rounded-lg shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[75vh]"
          id="search-modal-container"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header query input bar */}
          <div className="flex items-center px-4 py-4 border-b border-slate-150 bg-slate-50">
            <Search className="h-5 w-5 text-slate-400 mr-3 shrink-0" />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search by product, brand agency (e.g. Habia, Oxley, Eaton, Fortinet)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-sm text-slate-800 placeholder-slate-400 focus:outline-none font-sans font-medium"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs text-slate-400 hover:text-slate-600 bg-slate-200 hover:bg-slate-300 px-1.5 py-0.5 rounded-sm transition-colors cursor-pointer mr-2"
              >
                Clear
              </button>
            )}
            <button
              onClick={() => setIsSearchOpen(false)}
              className="text-xs font-mono font-bold px-2 py-1 bg-slate-250 text-slate-600 rounded-sm border border-slate-300 hover:bg-slate-300 transition-all cursor-pointer flex items-center space-x-1"
              title="Close Search"
            >
              <span>ESC</span>
            </button>
          </div>

          {/* Results Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {searchQuery.trim() === '' ? (
              <div className="space-y-4 py-2">
                <div className="text-[10px] font-mono uppercase font-black tracking-widest text-[#190B24] border-b border-slate-200 pb-1">
                  Popular Search Directives
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Cabling', 'Cybersecurity', 'Eaton', 'Oxley', 'Marinelec', 'Surveillance', 'Fire Suppression', 'WaterBladder', 'Fortinet'].map((term) => (
                    <button
                      key={term}
                      onClick={() => setSearchQuery(term)}
                      className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-[#190B24] text-xs font-semibold rounded-sm border border-slate-200/70 transition-all cursor-pointer font-sans"
                    >
                      {term}
                    </button>
                  ))}
                </div>
                <div className="pt-4 text-xs text-slate-500 leading-relaxed font-sans">
                  Type a brand partner name, defense component, or security compliance framework to find ASEC's complete engineered project solutioning instantly.
                </div>
              </div>
            ) : searchResults.length > 0 ? (
              <div className="space-y-2">
                <div className="text-[10px] font-mono uppercase font-black tracking-widest text-slate-400 pb-1 border-b border-slate-100 flex justify-between">
                  <span>Match Registry</span>
                  <span>{searchResults.length} Result{searchResults.length > 1 ? 's' : ''}</span>
                </div>
                
                <div className="divide-y divide-slate-100">
                  {searchResults.map((item, idx) => {
                    return (
                      <div
                        key={idx}
                        onClick={() => handleResultClick(item)}
                        className="py-3 px-2.5 hover:bg-slate-50 rounded-md transition-colors cursor-pointer flex items-start space-x-3.5 group"
                      >
                        <div className="mt-0.5 p-1.5 bg-slate-100 text-slate-700 group-hover:bg-blue-50 group-hover:text-[#190B24] rounded-sm transition-colors shrink-0">
                          {item.type === 'solution' ? (
                            <Cpu className="h-4 w-4" />
                          ) : item.type === 'brand' ? (
                            <Building className="h-4 w-4" />
                          ) : (
                            <Shield className="h-4 w-4" />
                          )}
                        </div>
                        
                        <div className="flex-1 space-y-0.5 text-left min-w-0">
                          <div className="flex items-center space-x-2">
                            <span className="text-xs font-bold text-slate-950 truncate font-sans group-hover:text-[#190B24]">
                              {item.title}
                            </span>
                            <span className={`text-[8.5px] font-mono font-bold px-1.5 py-0.5 rounded-xs shrink-0 ${
                              item.type === 'solution' 
                                ? 'bg-blue-55 text-blue-700 border border-blue-100'
                                : item.type === 'brand'
                                  ? 'bg-amber-50 text-amber-700 border border-amber-100'
                                  : 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                            }`}>
                              {item.type.toUpperCase()}
                            </span>
                          </div>
                          {item.subtitle && (
                            <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed font-sans font-medium">
                              {item.subtitle}
                            </p>
                          )}
                        </div>

                        <div className="self-center text-slate-350 group-hover:text-[#190B24] transition-colors shrink-0">
                          <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="text-center py-10 space-y-2">
                <p className="text-sm font-bold text-slate-800">No results found for "{searchQuery}"</p>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">Please refine your keyword input or select from one of our popular quick suggestions above.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )}
    </header>
  );
}
