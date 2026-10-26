import React from 'react';
import {
  UserCheck,
  FileText,
  Briefcase,
  GraduationCap,
  Sparkles,
  HelpCircle,
  ShieldAlert,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

interface ForCandidatesProps {
  onOpenCandidateModal: (domain?: string) => void;
  onOpenPolicyModal: (tab: 'privacy' | 'terms') => void;
}

export const ForCandidates: React.FC<ForCandidatesProps> = ({
  onOpenCandidateModal,
  onOpenPolicyModal,
}) => {
  const steps = [
    { title: 'Candidate Registration', desc: 'Share your background, educational certificates, current location, and role interests.', icon: UserCheck },
    { title: 'Profile & Resume Review', desc: 'Our team evaluates your qualifications against current openings across Raipur and India.', icon: FileText },
    { title: 'Opportunity Matching', desc: 'We identify vacancies that correspond with your stated experience and domain capabilities.', icon: Briefcase },
    { title: 'Interview Preparation', desc: 'Receive practical advice on presentation, company profile briefing, and interview expectations.', icon: Sparkles },
    { title: 'Placement Coordination', desc: 'We assist with interview timing, location directions, and feedback from the employer.', icon: CheckCircle2 },
    { title: 'Career Guidance Support', desc: 'Guidance on career pathways, skill additions, and adapting to modern industry expectations.', icon: GraduationCap },
  ];

  return (
    <section id="candidates" className="py-16 sm:py-20 bg-[#FFF7E9]/40 border-b border-[#D8AC55]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#F36B12] uppercase tracking-widest mb-3">
            <span className="w-6 h-0.5 bg-[#F36B12]"></span>
            <span>Candidate Career Support</span>
            <span className="w-6 h-0.5 bg-[#F36B12]"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1F45] tracking-tight font-cinzel text-balance mb-3">
            Your Career. Our Support. Your Better Future.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Your skills, experience and ambitions deserve careful consideration. Register your profile with KSU Placement Support to be considered for suitable opportunities according to your qualifications and career preferences.
          </p>
        </div>

        {/* 6 Pillars of Candidate Support */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div
                key={st.title}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs hover:border-[#F36B12] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FFF7E9] border border-[#D8AC55]/40 text-[#F36B12] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-slate-400">Step 0{idx + 1}</span>
                  </div>
                  <h3 className="text-sm font-bold text-[#0B1F45] font-cinzel mb-2">
                    {st.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ethical Terms & Non-Guarantee Banner */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-amber-300 shadow-xs mb-10">
          <div className="flex flex-col md:flex-row items-start gap-4">
            <div className="p-3 rounded-xl bg-amber-50 text-[#D94716] shrink-0 border border-amber-200">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-[#0B1F45] font-cinzel">
                Important Transparency & Fee Policy for Candidates
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                KSU Placement Support operates on principles of <em>Seva</em> and <em>Sanskar</em>. We do <strong>not</strong> promise guaranteed employment, fixed interview calls, or specific salary brackets. Final hiring and compensation decisions rest solely with employer management. Any applicable service fees or terms are explicitly communicated and documented prior to formal candidate acceptance.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenPolicyModal('terms')}
                  className="text-xs font-semibold text-[#D94716] hover:text-[#0B1F45] underline underline-offset-2 inline-flex items-center gap-1 cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  Read Full Placement Terms & Transparency Notice
                </button>
                <span className="text-slate-300" aria-hidden="true">·</span>
                <button
                  onClick={() => onOpenPolicyModal('privacy')}
                  className="text-xs font-semibold text-slate-600 hover:text-[#0B1F45] underline underline-offset-2 inline-flex items-center gap-1 cursor-pointer"
                >
                  Candidate Data Privacy Rights
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Big Action Box */}
        <div className="text-center bg-gradient-to-r from-[#0B1F45] to-[#142d5f] text-white rounded-2xl p-8 sm:p-10 shadow-lg border border-[#D8AC55]/30">
          <h3 className="text-xl sm:text-2xl font-bold font-cinzel text-[#FFF7E9] mb-2">
            Take the Next Step in Your Career
          </h3>
          <p className="text-xs sm:text-sm text-slate-200 max-w-xl mx-auto mb-6">
            Register your profile with our placement team in Raipur. Our coordinators review qualifications against active opportunities in Chhattisgarh and pan-India.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onOpenCandidateModal()}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#F36B12] hover:bg-[#D94716] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer hover:shadow-orange-950/30"
            >
              <UserCheck className="w-4 h-4" />
              <span>Register Your Profile</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="tel:9039038221"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-xs text-center border border-white/20 transition-colors"
            >
              Candidate Helpline: 9039038221
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
