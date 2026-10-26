import React from 'react';
import { MapPin, Navigation, Building2, Globe2, CheckCircle2 } from 'lucide-react';

export const ReachMap: React.FC = () => {
  const regions = [
    {
      name: 'Raipur & Chhattisgarh Hub (HQ)',
      areas: 'Urla, Bhanpuri, Siltara, Mandir Hasaud, Durg, Bhilai, Bilaspur, Korba',
      status: 'Primary Operations & Direct Coordination Desk',
      isPrimary: true,
    },
    {
      name: 'Central & Western India',
      areas: 'Nagpur, Jabalpur, Indore, Ahmedabad, Pune Industrial Corridors',
      status: 'Remote Sourcing & Interview Coordination on Demand',
      isPrimary: false,
    },
    {
      name: 'North & NCR Region',
      areas: 'Delhi NCR, Gurugram, Faridabad, Kanpur, Lucknow',
      status: 'Candidate Matching & Employer Requirements Coordination',
      isPrimary: false,
    },
    {
      name: 'Pan-India Talent Mobility',
      areas: 'Select manufacturing, engineering, and plant opportunities across Indian states',
      status: 'Subject to employer vacancies and candidate relocation consent',
      isPrimary: false,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#F36B12] uppercase tracking-widest mb-3">
            <span className="w-6 h-0.5 bg-[#F36B12]"></span>
            <span>Geographic Reach & Operational Presence</span>
            <span className="w-6 h-0.5 bg-[#F36B12]"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1F45] tracking-tight font-cinzel text-balance mb-3">
            Raipur to All India
          </h2>
          <p className="text-base font-bold text-[#D94716] font-cinzel mb-2">
            Raipur, Chhattisgarh | Supporting Opportunities Across India
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            KSU Placement Support is focused on connecting suitable candidates and employers across locations, subject to current vacancies, employer requirements and service availability.
          </p>
        </div>

        {/* 2-Column Visual Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Visual Hub Map Representation */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#0B1F45] to-[#122854] text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-[#D8AC55]/30 relative overflow-hidden">
            {/* SVG Illustration of India Network Centered on Raipur */}
            <div className="relative py-4 flex flex-col items-center">
              <div className="w-full max-w-sm aspect-4/3 relative flex items-center justify-center">
                {/* Visual Radar / Connectivity Ring */}
                <div className="absolute w-64 h-64 rounded-full border border-white/10 animate-ping opacity-20 pointer-events-none" />
                <div className="absolute w-48 h-48 rounded-full border border-[#D8AC55]/30 pointer-events-none" />
                <div className="absolute w-32 h-32 rounded-full border border-[#F36B12]/40 pointer-events-none" />

                {/* Central Hub: Raipur */}
                <div className="relative z-10 flex flex-col items-center text-center p-3 rounded-2xl bg-[#F36B12] text-white shadow-lg border-2 border-amber-200">
                  <MapPin className="w-6 h-6 animate-bounce" />
                  <span className="text-xs font-black tracking-wider uppercase font-cinzel">RAIPUR</span>
                  <span className="text-[10px] text-amber-100 font-semibold">Headquarters Hub</span>
                </div>

                {/* Connected Nodes */}
                <div className="absolute top-4 left-10 text-center bg-white/10 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-white/20 text-[10px]">
                  <span className="text-amber-200 font-bold block">NCR / North</span>
                  <span className="text-slate-300">Coordination</span>
                </div>

                <div className="absolute top-10 right-8 text-center bg-white/10 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-white/20 text-[10px]">
                  <span className="text-amber-200 font-bold block">Eastern Belt</span>
                  <span className="text-slate-300">Bilaspur / Korba</span>
                </div>

                <div className="absolute bottom-6 left-8 text-center bg-white/10 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-white/20 text-[10px]">
                  <span className="text-amber-200 font-bold block">Western Corridors</span>
                  <span className="text-slate-300">Manufacturing</span>
                </div>

                <div className="absolute bottom-4 right-10 text-center bg-white/10 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-white/20 text-[10px]">
                  <span className="text-amber-200 font-bold block">Southern Sourcing</span>
                  <span className="text-slate-300">Technical</span>
                </div>
              </div>

              <div className="mt-4 text-center">
                <span className="text-xs font-bold text-amber-200 font-cinzel">
                  Centralized Placement Desk in Raipur, CG
                </span>
                <p className="text-[11px] text-slate-300 mt-1 max-w-xs mx-auto">
                  Coordinating direct telephonic, video, and in-person interviews with nationwide employers.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Transparent Regional Coverage Details */}
          <div className="lg:col-span-6 space-y-4">
            {regions.map((reg) => (
              <div
                key={reg.name}
                className={`p-5 rounded-xl border transition-all ${
                  reg.isPrimary
                    ? 'bg-[#FFF7E9] border-[#F36B12]/60 shadow-xs'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <h4 className="text-sm font-bold text-[#0B1F45] font-cinzel flex items-center gap-1.5">
                    <MapPin className={`w-4 h-4 ${reg.isPrimary ? 'text-[#F36B12]' : 'text-slate-400'}`} />
                    <span>{reg.name}</span>
                  </h4>
                  {reg.isPrimary && (
                    <span className="text-[10px] font-bold text-[#D94716] uppercase tracking-wider bg-orange-100 px-2 py-0.5 rounded">
                      Central Office
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-700 mb-2 font-medium">
                  {reg.areas}
                </p>
                <p className="text-[11px] text-slate-500 italic">
                  {reg.status}
                </p>
              </div>
            ))}

            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-[11px] text-slate-600">
              <strong>Network Transparency Note:</strong> KSU Placement Support operates from its primary office in Raipur, Chhattisgarh. Pan-India placement support is provided through coordinated remote sourcing and client-specific vacancy mandates, not a separate physical branch network.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
