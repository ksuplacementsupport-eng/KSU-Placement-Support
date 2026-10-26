import React from 'react';
import {
  Target,
  MessageCircle,
  FileCheck,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Lock,
  Building2
} from 'lucide-react';

export const WhyKSU: React.FC = () => {
  const principles = [
    {
      title: 'Requirement-Based Candidate Sourcing',
      desc: 'We match candidates to real, documented employer specifications rather than pushing indiscriminate resumes.',
      icon: Target,
    },
    {
      title: 'Clear, Transparent Communication',
      desc: 'No false assurances or hidden terms. Both employers and candidates receive prompt, unambiguous updates.',
      icon: MessageCircle,
    },
    {
      title: 'Relevant Profile Review',
      desc: 'Systematic examination of education, experience validity, and technical competencies prior to referral.',
      icon: FileCheck,
    },
    {
      title: 'Appropriate Document Checks',
      desc: 'Verification of candidate-submitted certificates and work proofs, maintaining clear distinction between in-house and external checks.',
      icon: ShieldCheck,
    },
    {
      title: 'Role-Specific Assessment',
      desc: 'Conducting trade, practical, or software tests where required by the hiring client.',
      icon: CheckCircle2,
    },
    {
      title: 'Professional Interview Coordination',
      desc: 'Handling candidate briefing, scheduling conflicts, directions, and post-interview follow-ups respectfully.',
      icon: Calendar,
    },
    {
      title: 'Candidate Privacy & Data Care',
      desc: 'Strict non-disclosure of personal contact numbers or documents in public domains without candidate consent.',
      icon: Lock,
    },
    {
      title: 'Employer-Focused Recruitment Support',
      desc: 'Saving management time and reducing hiring risk by supplying dependable, interview-ready candidates.',
      icon: Building2,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#FFF7E9]/50 border-b border-[#D8AC55]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#F36B12] uppercase tracking-widest mb-3">
            <span className="w-6 h-0.5 bg-[#F36B12]"></span>
            <span>Why Choose KSU Placement Support</span>
            <span className="w-6 h-0.5 bg-[#F36B12]"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1F45] tracking-tight font-cinzel text-balance mb-3">
            A Structured, People-Focused Approach
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Founded on cultural values and professional rigor, we prioritize genuine fit and mutual respect over inflated promises.
          </p>
        </div>

        {/* 8 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((pr, idx) => {
            const Icon = pr.icon;
            return (
              <div
                key={pr.title}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs hover:border-[#0B1F45] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FFF7E9] text-[#F36B12] border border-[#D8AC55]/30 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-slate-400">0{idx + 1}</span>
                  </div>

                  <h3 className="text-sm font-bold text-[#0B1F45] font-cinzel mb-2">
                    {pr.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pr.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
