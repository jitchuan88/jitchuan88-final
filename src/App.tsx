/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Solutions from './components/Solutions';
import Contact from './components/Contact';
import { ActiveTab } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Scroll to top on tab change or category change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeTab, selectedCategory]);

  const renderActivePage = () => {
    switch (activeTab) {
      case 'home':
        return <Home setActiveTab={setActiveTab} />;
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'solutions':
        return (
          <Solutions 
            selectedCategory={selectedCategory} 
            setSelectedCategory={setSelectedCategory}
            setActiveTab={setActiveTab}
          />
        );
      case 'contact':
        return <Contact />;
      default:
        return <Home setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-navy-900 selection:bg-blue-600 selection:text-white antialiased">
      {/* Sitewide sticky Header */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Main Content Pane with smooth min-height expansion & layout container */}
      <main className="flex-grow">
        {renderActivePage()}
      </main>

      {/* Sitewide structured Footer */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}

