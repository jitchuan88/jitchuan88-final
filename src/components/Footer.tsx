import React from 'react';
import { ActiveTab } from '../types';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  // setActiveTab is accepted to keep type-signature compatibility with App.tsx
  const _ = setActiveTab; 

  return (
    <footer className="bg-slate-50 text-slate-700 border-t border-slate-200 font-sans" id="site-footer">
      {/* Decorative Ribbon Header */}
      <div className="bg-slate-100 py-6 text-center px-4">
        <h3 className="font-display text-xs tracking-widest text-slate-800 uppercase font-extrabold">
          Partnering for the Future of Engineering                 
        </h3>
        <p className="text-[10px] text-slate-400 mt-1 font-mono uppercase tracking-wider font-bold">ESTD 1981</p>
      </div>
    </footer>
  );
}
