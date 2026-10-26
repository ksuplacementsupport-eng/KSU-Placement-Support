import React from 'react';
import { Briefcase, UserCheck, MapPin, Award, CheckCircle2, ArrowRight, Eye, PhoneCall } from 'lucide-react';

interface HeroProps {
  onOpenHiringModal: () => void;
  onOpenCandidateModal: () => void;
  onOpenAssetViewer: (type: 'poster' | 'card' | 'logo') => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenHiringModal,
  onOpenCandidateModal,
  onOpenAssetViewer,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF7E9] via-[#FFFDF9] to-[#FFF7E9] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#D8AC55]/30">
      {/* Subtle traditional motif background elements */}
      <div className="absolute inset-0 bg-mandala-subtle opacity-25 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-[#F36B12]/15 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-tr from-[#0B1F45]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Trust Ribbon */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-6 text-xs text-slate-700">
          <span className="font-marcellus font-bold tracking-widest text-[#D94716] uppercase">
            सेवा ही साधना
          </span>
          <span className="text-slate-400" aria-hidden="true">·</span>
          <span className="font-semibold text-[#0B1F45] tracking-wide">
            Seva · Sanskar · Samarpan · Avsar
          </span>
          <span className="text-slate-400" aria-hidden="true">·</span>
          <span className="inline-flex items-center gap-1 font-medium text-slate-700">
            <MapPin className="w-3.5 h-3.5 text-[#F36B12]" />
            Raipur, Chhattisgarh | All Over India
          </span>
        </div>

        {/* Main Grid Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Core Messaging */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F36B12]/10 border border-[#F36B12]/30 text-[#D94716] text-xs font-semibold uppercase tracking-wider mb-4">
              <Award className="w-3.5 h-3.5 text-[#F36B12]" />
              Official Talent Sourcing & Recruitment Support
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-[#0B1F45] tracking-tight leading-[1.15] font-cinzel text-balance mb-5">
              WE CONNECT THE <span className="text-[#F36B12]">RIGHT TALENT</span> WITH THE <span className="text-[#0B1F45]">RIGHT OPPORTUNITIES</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal mb-6 max-w-2xl mx-auto lg:mx-0">
              KSU Placement Support helps businesses connect with suitable candidates and supports job seekers in exploring career opportunities according to their qualifications, skills and experience.
            </p>

            {/* Tagline callout */}
            <div className="p-4 rounded-xl bg-white/80 border border-[#D8AC55]/40 shadow-xs mb-8 max-w-xl mx-auto lg:mx-0">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <p className="text-sm font-bold text-[#0B1F45] font-cinzel">
                    Better People, Stronger India
                  </p>
                  <p className="text-xs text-slate-600 font-medium">
                    Your Career, Our Support · Built on Integrity and Service
                  </p>
                </div>
                <div className="text-xs text-slate-500 whitespace-nowrap">
                  Founder: <strong className="text-[#0B1F45]">Kripa Shankar Upadhyay</strong>
                </div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <button
                onClick={onOpenCandidateModal}
                className="w-full sm:w-auto px-7 py-3.5 text-sm font-bold text-white bg-[#0B1F45] hover:bg-[#142d5f] rounded-xl shadow-md transition-all flex items-center justify-center gap-2 group hover:shadow-lg hover:shadow-slate-900/20"
              >
                <UserCheck className="w-4 h-4 text-[#F36B12] group-hover:scale-110 transition-transform" />
                <span>Explore Job Opportunities</span>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={onOpenHiringModal}
                className="w-full sm:w-auto px-7 py-3.5 text-sm font-bold text-white bg-[#F36B12] hover:bg-[#D94716] rounded-xl shadow-md transition-all flex items-center justify-center gap-2 group hover:shadow-lg hover:shadow-orange-900/20"
              >
                <Briefcase className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Hire Suitable Talent</span>
                <ArrowRight className="w-4 h-4 text-amber-200 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Direct Connect Quick Action Bar */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-600 border-t border-slate-200/80 pt-4">
              <a
                href="tel:6232506700"
                className="hover:text-[#F36B12] font-semibold text-[#0B1F45] inline-flex items-center gap-1.5 transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#F36B12]" />
                Director: 6232506700
              </a>
              <span className="text-slate-300" aria-hidden="true">|</span>
              <a
                href="tel:9039038220"
                className="hover:text-[#F36B12] text-slate-700 font-medium inline-flex items-center gap-1.5 transition-colors"
              >
                CRM: 9039038220 / 9039038221
              </a>
              <span className="text-slate-300" aria-hidden="true">|</span>
              <button
                onClick={() => onOpenAssetViewer('card')}
                className="hover:text-[#0B1F45] text-[#D94716] font-semibold inline-flex items-center gap-1 hover:underline underline-offset-2"
              >
                <Eye className="w-3 h-3" /> View Official Card
              </button>
            </div>
          </div>

          {/* Right Column: Official Visual Emblem & Feature Card Lockup */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md bg-white rounded-2xl shadow-xl border border-[#D8AC55]/50 p-6 sm:p-8 overflow-hidden text-center">
              {/* Subtle gold decorative header bar */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#F36B12] via-[#D8AC55] to-[#0B1F45]" />

              {/* Official Brand Logo */}
              <div className="relative mx-auto w-36 h-36 sm:w-44 sm:h-44 mb-4 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-100 to-orange-50 animate-pulse opacity-50" />
                <img
                  src="/assets/aistudio/Logo_PNG__1__d6730163.png"
                  alt="KSU Placement Support Emblem with Temple and Lotus"
                  className="relative w-full h-full object-contain filter drop-shadow-md"
                />
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F45] font-cinzel leading-snug mb-1">
                KSU PLACEMENT SUPPORT
              </h2>
              <p className="text-xs font-semibold text-[#F36B12] tracking-wider uppercase mb-4">
                Seva · Sanskar · Samarpan · Avsar
              </p>

              {/* Verified Workflow Highlights (from official pamphlet) */}
              <div className="bg-[#FFF7E9]/70 rounded-xl p-3.5 border border-[#D8AC55]/30 text-left space-y-2 mb-4 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F36B12] shrink-0" />
                  <span><strong>Requirement-Based Sourcing:</strong> Tailored to roles & skills</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F36B12] shrink-0" />
                  <span><strong>Candidate Screening:</strong> Education & experience check</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F36B12] shrink-0" />
                  <span><strong>Interview Coordination:</strong> Direct employer connection</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F36B12] shrink-0" />
                  <span><strong>Retired Staff Replacement:</strong> Reliable & experienced staff</span>
                </div>
              </div>

              {/* Quick Asset Previews */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  onClick={() => onOpenAssetViewer('poster')}
                  className="py-2 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-[#0B1F45] font-medium transition-colors flex items-center justify-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5 text-[#F36B12]" />
                  <span>View Pamphlet</span>
                </button>
                <button
                  onClick={() => onOpenAssetViewer('card')}
                  className="py-2 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-[#0B1F45] font-medium transition-colors flex items-center justify-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5 text-[#F36B12]" />
                  <span>Visiting Card</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Core Pillars Strip */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white/90 p-4 rounded-xl border border-slate-200/80 shadow-xs">
            <div className="text-xs font-bold text-[#F36B12] uppercase tracking-wider mb-1">01 · Seva</div>
            <h3 className="text-sm font-bold text-[#0B1F45]">Service with Purpose</h3>
            <p className="text-xs text-slate-600 mt-1">Dedicated to uplifting youth and supporting workforce continuity across industries.</p>
          </div>

          <div className="bg-white/90 p-4 rounded-xl border border-slate-200/80 shadow-xs">
            <div className="text-xs font-bold text-[#F36B12] uppercase tracking-wider mb-1">02 · Sanskar</div>
            <h3 className="text-sm font-bold text-[#0B1F45]">Integrity & Values</h3>
            <p className="text-xs text-slate-600 mt-1">Transparent communication, authentic credentials, and respectful professional conduct.</p>
          </div>

          <div className="bg-white/90 p-4 rounded-xl border border-slate-200/80 shadow-xs">
            <div className="text-xs font-bold text-[#F36B12] uppercase tracking-wider mb-1">03 · Samarpan</div>
            <h3 className="text-sm font-bold text-[#0B1F45]">Commitment & Dedication</h3>
            <p className="text-xs text-slate-600 mt-1">Persistent follow-up, thorough profile screening, and reliable placement support.</p>
          </div>

          <div className="bg-white/90 p-4 rounded-xl border border-slate-200/80 shadow-xs">
            <div className="text-xs font-bold text-[#F36B12] uppercase tracking-wider mb-1">04 · Avsar</div>
            <h3 className="text-sm font-bold text-[#0B1F45]">Creating Opportunities</h3>
            <p className="text-xs text-slate-600 mt-1">Connecting suitable talent with employers in Raipur, Chhattisgarh and pan-India.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
