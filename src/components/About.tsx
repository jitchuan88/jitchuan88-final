import React from 'react';
import { ShieldAlert, Cpu, HeartHandshake, Award, Activity, Boxes, BadgeCheck } from 'lucide-react';

export default function About() {
  return (
    <div className="animate-fade-in py-16 bg-white text-slate-900" id="about-page">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        
        {/* Page Title Header */}
        <div className="text-left max-w-3xl space-y-4">
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Our Foundation & Mission
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
            Founded in 1981, ASEC bridges the gap between world-class international military-grade engineering and complex domestic requirements.
          </p>
        </div>

        {/* Foundation & Value Proposition Dual Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Foundation */}
          <div className="bg-slate-50 border border-slate-200 p-8 rounded-sm relative overflow-hidden group hover:border-slate-400 transition-all">
            <div className="absolute top-0 left-0 right-0 h-1 bg-blue-900" />
            <div className="space-y-4">
              <div className="h-10 w-10 bg-blue-100 flex items-center justify-center text-blue-900 shrink-0 rounded-sm">
                <Award className="h-5 w-5" />
              </div>
              <h2 className="font-display text-xl font-bold text-slate-900">
                Our Foundation
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                Founded in 1981, ASEC operating through <strong>ASEC Asia Pte Ltd</strong> and <strong>ASEC Industries Pte Ltd</strong>—has grown into a premier technical engineering, distribution, and custom manufacturing firm in Asia.
              </p>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="bg-slate-50 border border-slate-200 p-8 rounded-sm relative overflow-hidden group hover:border-slate-400 transition-all">
            <div className="absolute top-0 left-0 right-0 h-1 bg-slate-950" />
            <div className="space-y-4">
              <div className="h-10 w-10 bg-slate-200 flex items-center justify-center text-slate-900 shrink-0 rounded-sm">
                <HeartHandshake className="h-5 w-5" />
              </div>
              <h2 className="font-display text-xl font-bold text-slate-900">
                Value Proposition
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                We bridge the gap between world-class original equipment manufacturers and rigorous domestic demands, functioning as an indispensable partner for system upgrade programs, complex system integration, and obsolescence management workflows.
              </p>
            </div>
          </div>

        </div>

        {/* Corporate Strategic Capabilities Headline */}
        <div className="border-t border-slate-200 pt-12">
          <div className="text-left mb-10 space-y-2">
            <h2 className="font-display text-2xl font-bold text-slate-900 tracking-tight animate-fade-in">
              Strategic Technical Capabilities & Security Compliance
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-sans">
              Operating internal manufacturing facilities alongside exclusive distribution agreements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Capability 1 */}
            <div className="bg-white border border-slate-200 p-6 rounded-sm flex flex-col justify-between hover:border-blue-900 transition-all">
              <div className="space-y-3">
                <div className="h-10 w-10 bg-blue-100 text-blue-900 rounded-sm flex items-center justify-center">
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <h3 className="font-display text-base font-bold text-slate-900">
                  OEM & Sole Distributor
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  Authorized regional representative maintaining technical expertise and product support lifecycles directly backed by original equipment manufacturers.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-200 text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider">
                Verifiable Factory Auth
              </div>
            </div>

            {/* Capability 2 */}
            <div className="bg-white border border-slate-200 p-6 rounded-sm flex flex-col justify-between hover:border-blue-900 transition-all">
              <div className="space-y-3">
                <div className="h-10 w-10 bg-blue-100 text-blue-900 rounded-sm flex items-center justify-center">
                  <Cpu className="h-5 w-5" />
                </div>
                <h3 className="font-display text-base font-bold text-slate-900">
                  Design & Manufacturer
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  Internal facilities and engineering team geared toward customizing specialized mechanical, electrical, and structural systems for demanding deployment.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-200 text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider">
                In-house production facility
              </div>
            </div>

            {/* Capability 3 */}
            <div className="bg-white border border-slate-200 p-6 rounded-sm flex flex-col justify-between hover:border-blue-900 transition-all">
              <div className="space-y-3">
                <div className="h-10 w-10 bg-blue-100 text-blue-900 rounded-sm flex items-center justify-center">
                  <Boxes className="h-5 w-5" />
                </div>
                <h3 className="font-display text-base font-bold text-slate-900">
                  Spare Management & Warehousing Capability
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  Comprehensive spare parts planning, cataloging, inventory provisioning, and obsolescence management programs to maintain long-term asset readiness.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-200 text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider">
                Strategic Stock & Sourcing
              </div>
            </div>

            {/* Capability 4 */}
            <div className="bg-white border border-slate-200 p-6 rounded-sm flex flex-col justify-between hover:border-blue-900 transition-all">
              <div className="space-y-3">
                <div className="h-10 w-10 bg-blue-100 text-blue-900 rounded-sm flex items-center justify-center">
                  <ShieldAlert className="h-5 w-5" />
                </div>
                <h3 className="font-display text-base font-bold text-slate-900">
                  Enterprise IT & Platform Security
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  A technical team deploying comprehensive infrastructure protection strategies, modern hardware technologies, and operational practices to secure sensitive digital ecosystems.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-200 text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider">
                Infotech Protection Compliance
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
