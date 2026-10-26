import React from 'react';
import { ShieldCheck, UserCheck, Lock, Briefcase, FileText, CheckCircle2, ArrowRight } from 'lucide-react';

interface TalentNetworkProps {
  onOpenHiringModal: (role?: string) => void;
}

export const TalentNetwork: React.FC<TalentNetworkProps> = ({ onOpenHiringModal }) => {
  // Anonymized talent pool highlights demonstrating capability categories WITHOUT exposing private info
  const anonymizedPools = [
    {
      category: 'Senior Mechanical & Plant Supervisors',
      experienceRange: '3 - 8 Years',
      education: 'Diploma / B.E. Mechanical / ITI',
      skills: 'Rolling Mill Operations, Furnace Maintenance, Shift Staff Supervision, Industrial Safety',
      locationPool: 'Raipur, Bhilai, Durg',
    },
    {
      category: 'Commercial Accountants & GST Executives',
      experienceRange: '2 - 6 Years',
      education: 'B.Com / M.Com / Inter CA',
      skills: 'Tally Prime, Busy, GST Returns, E-Way Bills, Bank Reconciliation, Vendor Ledger',
      locationPool: 'Raipur City & Industrial Belts',
    },
    {
      category: 'Industrial Sales & Technical Marketers',
      experienceRange: '1 - 5 Years',
      education: 'Any Graduate / Technical Diploma',
      skills: 'Industrial B2B Sales, Fabrication Products, Dealer Sourcing, CRM, Client Relations',
      locationPool: 'Chhattisgarh & Central India',
    },
    {
      category: 'Retired Senior Executives & Mentors',
      experienceRange: '15+ Years (Industry Veterans)',
      education: 'Senior Engineering / Commerce Veterans',
      skills: 'Factory Administration, Quality Auditing, Senior Workforce Mentoring, Cost Controls',
      locationPool: 'Raipur & Pan-India Mobility',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#F36B12] uppercase tracking-widest mb-3">
            <span className="w-6 h-0.5 bg-[#F36B12]"></span>
            <span>Talent Network for Employers</span>
            <span className="w-6 h-0.5 bg-[#F36B12]"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1F45] tracking-tight font-cinzel text-balance mb-3">
            Connecting Businesses with Suitable Candidates
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            KSU Placement Support helps employers identify and evaluate candidate profiles matching their specific organizational requisitions across Raipur, Chhattisgarh, and nationwide.
          </p>
        </div>

        {/* Responsible Privacy Assurance Banner */}
        <div className="mb-10 bg-white rounded-2xl p-5 sm:p-6 border border-[#D8AC55]/50 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0B1F45]/10 text-[#0B1F45] flex items-center justify-center shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-[#0B1F45]">Responsible Candidate Privacy & Confidentiality</h4>
              <p className="text-xs text-slate-600">
                In strict adherence to ethical recruitment standards, candidate personal data, phone numbers, and identity records are never exposed publicly. Profiles are shared with verified employers only upon authorization.
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenHiringModal()}
            className="shrink-0 px-5 py-2.5 rounded-xl bg-[#F36B12] hover:bg-[#D94716] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-2xs flex items-center gap-2 cursor-pointer"
          >
            <span>Request Candidate Profiles</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Anonymized Sourcing Pool Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {anonymizedPools.map((pool, idx) => (
            <div
              key={pool.category}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs hover:border-[#0B1F45] transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono text-[#D94716] font-semibold">
                    Pool Ref #{idx + 101}
                  </span>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    Active Registrations
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#0B1F45] font-cinzel mb-2">
                  {pool.category}
                </h3>

                <div className="space-y-1.5 text-xs text-slate-600 mb-4 bg-[#FFF7E9]/40 p-3 rounded-xl border border-[#D8AC55]/30">
                  <p><strong>Experience Level:</strong> {pool.experienceRange}</p>
                  <p><strong>Education:</strong> {pool.education}</p>
                  <p><strong>Core Strengths:</strong> {pool.skills}</p>
                  <p><strong>Primary Mobility:</strong> {pool.locationPool}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">
                  Pre-screened & verified by KSU
                </span>
                <button
                  onClick={() => onOpenHiringModal(pool.category)}
                  className="text-xs font-bold text-[#0B1F45] hover:text-[#F36B12] inline-flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Request Matching Profiles</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Employer Action Trigger */}
        <div className="text-center">
          <p className="text-xs text-slate-500 mb-4">
            Need candidates for specialized plant roles, urgent replacements, or executive openings?
          </p>
          <button
            onClick={() => onOpenHiringModal()}
            className="px-8 py-3 rounded-xl bg-[#0B1F45] hover:bg-[#152e61] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
          >
            <Briefcase className="w-4 h-4 text-[#F36B12]" />
            <span>Submit Full Hiring Requisition to KSU</span>
          </button>
        </div>
      </div>
    </section>
  );
};
