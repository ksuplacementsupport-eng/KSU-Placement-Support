import React from 'react';
import { Phone, Mail, Award, Compass, HeartHandshake, Sparkles, Building, Users2 } from 'lucide-react';

interface AboutProps {
  onOpenAssetViewer: (type: 'poster' | 'card' | 'logo') => void;
}

export const About: React.FC<AboutProps> = ({ onOpenAssetViewer }) => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#F36B12] uppercase tracking-widest mb-3">
            <span className="w-6 h-0.5 bg-[#F36B12]"></span>
            <span>About KSU Placement Support</span>
            <span className="w-6 h-0.5 bg-[#F36B12]"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1F45] tracking-tight font-cinzel text-balance mb-4">
            Building Connections. Supporting Careers. Strengthening Businesses.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            KSU Placement Support works to connect suitable candidates with employment opportunities and help businesses identify talent according to their workforce requirements. Our approach focuses on candidate profile review, relevant document checks, skills assessment where required, interview coordination and professional placement support.
          </p>
        </div>

        {/* 2-Column Split: Brand Objective & Values + Founder Leadership Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Objective & 4 Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#FFF7E9] rounded-2xl p-6 sm:p-8 border border-[#D8AC55]/40 shadow-xs">
              <h3 className="text-lg font-bold text-[#0B1F45] font-cinzel mb-2">Our Core Objective</h3>
              <p className="text-sm text-slate-700 leading-relaxed italic border-l-2 border-[#F36B12] pl-3 py-1">
                "To support candidates in moving towards suitable career opportunities while helping employers find talent that aligns with their requirements."
              </p>
              <div className="mt-4 pt-4 border-t border-[#D8AC55]/30 flex flex-wrap items-center gap-4 text-xs text-slate-600">
                <span className="font-semibold text-[#0B1F45]">Focus Sectors:</span>
                <span>Industrial Manufacturing</span>
                <span aria-hidden="true">·</span>
                <span>Commercial & Accounts</span>
                <span aria-hidden="true">·</span>
                <span>Sales & Technical Staff</span>
                <span aria-hidden="true">·</span>
                <span>Retired Personnel Sourcing</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-[#F36B12]/40 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-[#F36B12]/10 text-[#F36B12] flex items-center justify-center font-bold mb-3">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-[#0B1F45] mb-1">Seva — Service with Purpose</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Approaching talent placement as dedicated service to society and youth career development.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-[#F36B12]/40 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-[#0B1F45]/10 text-[#0B1F45] flex items-center justify-center font-bold mb-3">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-[#0B1F45] mb-1">Sanskar — Integrity & Values</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Maintaining high ethical standards, transparent communication, and honest candidate representation.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-[#F36B12]/40 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-[#D94716]/10 text-[#D94716] flex items-center justify-center font-bold mb-3">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-[#0B1F45] mb-1">Samarpan — Commitment & Dedication</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  End-to-end dedication from understanding job requisitions to coordinating interviews and onboarding.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-[#F36B12]/40 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-700 flex items-center justify-center font-bold mb-3">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-[#0B1F45] mb-1">Avsar — Creating Opportunities</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Unlocking rightful opportunities for job seekers while helping organizations build resilient teams.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Founder & Director Section */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-[#0B1F45] to-[#142d5f] text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-[#D8AC55]/40 relative overflow-hidden">
              {/* Traditional background watermark */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#F36B12]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/10 border-2 border-[#D8AC55] p-2 flex items-center justify-center shrink-0">
                  <img
                    src="/assets/aistudio/Logo_PNG__1__d6730163.png"
                    alt="KSU Placement Support Emblem"
                    className="w-full h-full object-contain filter drop-shadow-xs"
                  />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#D8AC55]">
                    Leadership & Direction
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-cinzel text-[#FFF7E9]">
                    Kripa Shankar Upadhyay
                  </h3>
                  <p className="text-xs text-slate-300 font-medium">
                    Founder & Director — KSU Placement Support
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-6 font-normal">
                "Under the leadership of Kripa Shankar Upadhyay, KSU Placement Support aims to build meaningful connections between employers and job seekers through professional recruitment assistance, career support and workforce development services."
              </p>

              {/* Direct Contact Points */}
              <div className="bg-white/10 rounded-xl p-4 border border-white/15 space-y-3 mb-6 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Director's Direct Line:</span>
                  <a
                    href="tel:6232506700"
                    className="font-bold text-[#F36B12] hover:text-white transition-colors"
                  >
                    6232506700
                  </a>
                </div>
                <div className="flex items-center justify-between border-t border-white/10 pt-2">
                  <span className="text-slate-300">Placement Coordination:</span>
                  <span className="font-semibold text-white">9039038220 / 9039038221</span>
                </div>
                <div className="flex items-center justify-between border-t border-white/10 pt-2">
                  <span className="text-slate-300">Headquarters / Hub:</span>
                  <span className="text-white">Raipur, Chhattisgarh</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <a
                  href="tel:6232506700"
                  className="py-2.5 px-3 rounded-lg bg-[#F36B12] hover:bg-[#D94716] text-white font-bold transition-colors flex items-center justify-center gap-1.5 shadow-sm text-center"
                >
                  <Phone className="w-3.5 h-3.5" /> Call Director
                </a>
                <a
                  href="https://wa.me/916232506700?text=Hello%20Sir,%20I%20am%20reaching%20out%20regarding%20KSU%20Placement%20Support."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-colors flex items-center justify-center gap-1.5 shadow-sm text-center"
                >
                  WhatsApp Direct
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
