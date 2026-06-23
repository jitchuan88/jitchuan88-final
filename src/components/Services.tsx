import React from 'react';
import { Settings, RefreshCw, Anchor, ShieldCheck } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: "turnkey",
      title: "Turnkey Engineering",
      icon: Settings,
      scope: "Full-spectrum, tailored engineering interventions stretching from early-stage blueprint design through material integration to exhaustive lifecycle support.",
      mission: "Minimizing technical friction and handling design risk for major defense projects.",
      badge: "Full Spectrum Solution"
    },
    {
      id: "obsolescence",
      title: "Obsolescence Management",
      icon: RefreshCw,
      scope: "Proactive auditing, comprehensive warehouse services, strategic retrofits, and exact-fit replacement components designed to combat hardware wear and aging.",
      mission: "Extending the dependable operational lifespan of capital assets and maintaining baseline platform reliability.",
      badge: "Asset Lifetime Extension"
    },
    {
      id: "defense-cables",
      title: "Defense Cables & Marine Spares",
      icon: Anchor,
      scope: "High-tier sourcing, testing, and continuous deployment of ruggedized military-standard wiring, electrical components, naval auxiliary equipment and deck machineries.",
      mission: "Ensuring critical components remain immediately available to minimize vessel and system downtime.",
      badge: "Mil-Spec Sourcing Authorized"
    }
  ];

  return (
    <div className="animate-fade-in py-16 bg-white text-slate-900" id="services-page">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        
        {/* Header */}
        <div className="text-left max-w-3xl space-y-4">
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Our Engineering Services
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
            Delivering technical confidence and product support lifecycles directly backed by original equipment manufacturers and custom internal engineering.
          </p>
        </div>

        {/* Services Detail List */}
        <div className="space-y-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                id={`service-block-${service.id}`}
                className="bg-slate-50 p-8 lg:p-10 border border-slate-200 rounded-sm hover:border-slate-400 transition-all duration-200"
              >
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                  
                  {/* Service Accent */}
                  <div className="lg:w-1/3 space-y-4">
                    <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-900 border border-blue-200 text-[10px] font-sans uppercase font-bold px-3 py-1 rounded-sm">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      <span>{service.badge}</span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="bg-slate-900 text-white p-3 rounded-sm border border-slate-800">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h2 className="font-display text-2xl font-extrabold text-slate-900">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  {/* Service Specifics (Scope & Mission) */}
                  <div className="lg:w-2/3 space-y-6">
                    
                    {/* Scope Card */}
                    <div className="bg-white p-6 rounded-sm border border-slate-200 hover:border-blue-900 transition-colors shadow-xs">
                      <h3 className="text-[10px] font-mono tracking-widest text-blue-900 uppercase font-bold mb-2">
                        Operational Scope
                      </h3>
                      <p className="text-sm text-slate-700 leading-relaxed font-sans">
                        {service.scope}
                      </p>
                    </div>

                    {/* Mission Card */}
                    <div className="bg-white p-6 rounded-sm border border-slate-200 hover:border-blue-900 transition-colors shadow-xs border-l-4 border-l-blue-900">
                      <h3 className="text-[10px] font-mono tracking-widest text-blue-900 uppercase font-bold mb-2">
                        Strategic Mission Outcome
                      </h3>
                      <p className="text-sm font-display font-medium text-slate-900 leading-relaxed">
                        {service.mission}
                      </p>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>



      </div>
    </div>
  );
}
