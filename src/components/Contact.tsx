import React from 'react';
import { Mail, Phone, Clock, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="animate-fade-in py-16 bg-white min-h-screen text-slate-900" id="contact-page">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        
        {/* Header */}
        <div className="text-left max-w-3xl">
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Connect With Our Sales/Technical
          </h1>
        </div>

        <div className="max-w-2xl">
          
          {/* Contacts & Email Coordinates Card */}
          <div className="bg-slate-50 p-8 border border-slate-200 rounded-sm space-y-6 min-h-[300px]">
            <div>
              <div className="space-y-5">
                {/* Email */}
                <div className="flex items-start space-x-3.5">
                  <div className="bg-red-50 text-[#E52421] p-2.5 rounded-sm border border-red-100 shrink-0">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-mono text-[9px] uppercase text-slate-400 font-bold tracking-wider">Dedicated Response Team</h4>
                    <p className="text-sm font-semibold text-slate-900 font-mono">customerservice@asec.com.sg</p>
                  </div>
                </div>

                {/* Direct Lines */}
                <div className="flex items-start space-x-3.5">
                  <div className="bg-red-50 text-[#E52421] p-2.5 rounded-sm border border-red-100 shrink-0">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-mono text-[9px] uppercase text-slate-400 font-bold tracking-wider">Direct Phone Lines</h4>
                    <p className="text-sm font-semibold font-mono text-slate-900 mt-0.5">(65) 6383 4368</p>
                    <p className="text-xs font-mono text-slate-500">(65) 8133 4320</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-3.5">
                  <div className="bg-red-50 text-[#E52421] p-2.5 rounded-sm border border-red-100 shrink-0">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-mono text-[9px] uppercase text-slate-400 font-bold tracking-wider">Operational Availability</h4>
                    <p className="text-xs text-slate-700 font-semibold mt-1 font-sans">Monday through Thursday: 9:00 AM – 6:00 PM</p>
                    <p className="text-xs text-slate-700 font-semibold mt-0.5 font-sans">Friday: 9:00 AM – 5:00 PM</p>
                    <p className="text-[10px] text-red-650 font-bold font-mono uppercase mt-1">Saturdays, Sundays, & Holidays: Closed</p>
                  </div>
                </div>

                {/* Office Address */}
                <div className="flex items-start space-x-3.5">
                  <div className="bg-red-50 text-[#E52421] p-2.5 rounded-sm border border-red-100 shrink-0">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-mono text-[9px] uppercase text-slate-400 font-bold tracking-wider">Headquarters Address</h4>
                    <p className="text-xs text-slate-700 font-semibold mt-1 font-sans">
                      35 Tannery Road #09-06, Ruby Industrial Complex
                    </p>
                    <p className="text-xs font-bold text-slate-900 font-sans mt-0.5">Singapore 347740</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
