import React from 'react';
import {
  GraduationCap,
  Users,
  MessageSquare,
  ShieldAlert,
  Target,
  Sparkles,
  ClipboardList,
  Award,
  ArrowRight
} from 'lucide-react';

interface TrainingProps {
  onOpenTrainingModal: () => void;
}

export const Training: React.FC<TrainingProps> = ({ onOpenTrainingModal }) => {
  const trainingModules = [
    {
      title: 'Employee Onboarding Support',
      desc: 'Structured induction assistance for new hires covering company policies, reporting hierarchy, safety orientation, and operational norms.',
      icon: Users,
    },
    {
      title: 'Workplace Communication',
      desc: 'Clarity in daily verbal briefing, inter-departmental coordination, shift handover notes, and constructive feedback loops.',
      icon: MessageSquare,
    },
    {
      title: 'Professional Behaviour & Conduct',
      desc: 'Workplace etiquette, respectful peer interaction, attendance punctuality, grievance escalation protocols, and ethical business conduct.',
      icon: Award,
    },
    {
      title: 'Interview & Assessment Preparation',
      desc: 'Mock question rounds, role-clarity prep, document compilation guidance, and confidence building for aspiring candidate batches.',
      icon: Target,
    },
    {
      title: 'Role-Related Skill Development',
      desc: 'Practical modules focusing on trade-specific tasks, computer essentials (Excel, Tally, emails), inventory entries, and machine logging.',
      icon: Sparkles,
    },
    {
      title: 'Teamwork & Workplace Discipline',
      desc: 'Fostering collective accountability, resolving plant/office friction constructively, and adhering strictly to shift timings and safety.',
      icon: ShieldAlert,
    },
    {
      title: 'HR Recruitment Coordination',
      desc: 'Supporting internal HR desks with applicant screening procedures, document organization, candidate tracking, and interview logistics.',
      icon: ClipboardList,
    },
    {
      title: 'Employee Development Support',
      desc: 'Continuous capability evaluation, mentoring for emerging supervisors, and customized refresher sessions matching management goals.',
      icon: GraduationCap,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#F36B12] uppercase tracking-widest mb-3">
            <span className="w-6 h-0.5 bg-[#F36B12]"></span>
            <span>Corporate & Workforce Capability</span>
            <span className="w-6 h-0.5 bg-[#F36B12]"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1F45] tracking-tight font-cinzel text-balance mb-3">
            Develop People. Strengthen Performance.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Supportive training and workforce capability development offered to organizations and candidates to bridge practical skill gaps and enhance workplace productivity.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {trainingModules.map((mod) => {
            const Icon = mod.icon;
            return (
              <div
                key={mod.title}
                className="bg-[#FFF7E9]/30 rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:bg-white hover:border-[#F36B12] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#D8AC55]/40 text-[#F36B12] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-[#0B1F45] font-cinzel mb-2">
                    {mod.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {mod.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Training Call to Action Banner */}
        <div className="bg-gradient-to-r from-[#0B1F45] to-[#152e61] rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md border border-[#D8AC55]/30">
          <div>
            <h4 className="text-lg font-bold font-cinzel text-[#FFF7E9] mb-1">
              Want Custom Training for Your Staff or Plant Workforce?
            </h4>
            <p className="text-xs text-slate-300 max-w-xl">
              We tailor employee onboarding, professional communication, and supervisory workshops to meet your company's operational culture and shift timings.
            </p>
          </div>
          <button
            onClick={onOpenTrainingModal}
            className="shrink-0 px-6 py-3 rounded-xl bg-[#F36B12] hover:bg-[#D94716] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm flex items-center gap-2 cursor-pointer"
          >
            <span>Request Training Support</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
