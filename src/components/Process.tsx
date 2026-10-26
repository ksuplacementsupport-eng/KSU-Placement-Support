import React, { useState } from 'react';
import {
  FileQuestion,
  Users,
  CheckCircle,
  FileCheck2,
  CalendarCheck,
  ShieldCheck,
  UserCheck,
  ArrowRight,
  Briefcase
} from 'lucide-react';

export const Process: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'employer' | 'candidate'>('employer');

  const employerSteps = [
    {
      num: '01',
      title: 'Understand the Requirement',
      desc: "Detailed briefing on the employer's exact job role, required technical qualifications, skills, experience bracket, and plant/office location conditions.",
      icon: FileQuestion,
    },
    {
      num: '02',
      title: 'Source Suitable Profiles',
      desc: 'Identify and filter prospective candidates through KSU talent registry, local industry networks, and targeted talent outreach in Raipur and across India.',
      icon: Users,
    },
    {
      num: '03',
      title: 'Review & Assess',
      desc: 'Conduct systematic candidate profile review, verify stated education and work certificates, and coordinate role-specific skill or aptitude checks where requested.',
      icon: FileCheck2,
    },
    {
      num: '04',
      title: 'Interview Coordination',
      desc: "Share relevant, candidate-consented profiles with the employer's HR or management desk, and handle end-to-end interview briefing and scheduling.",
      icon: CalendarCheck,
    },
    {
      num: '05',
      title: 'Hiring Support',
      desc: 'Support ongoing communication, document submission, and onboarding coordination while the employer independently takes the final hiring selection decision.',
      icon: CheckCircle,
    },
  ];

  const candidateSteps = [
    {
      num: '01',
      title: 'Register Profile',
      desc: 'Submit your contact details, education, previous work experience, location preferences, and functional skills into our placement registry.',
      icon: UserCheck,
    },
    {
      num: '02',
      title: 'Profile Review',
      desc: 'Our placement team examines your resume, validates stated credentials, and checks compatibility with ongoing industry openings in Chhattisgarh and beyond.',
      icon: FileCheck2,
    },
    {
      num: '03',
      title: 'Opportunity Matching',
      desc: 'When an employer vacancy aligns with your profile and career preferences, we connect with you to review the role and confirm your interest.',
      icon: Briefcase,
    },
    {
      num: '04',
      title: 'Interview Support',
      desc: 'Receive interview schedule details, company briefing, and guidance on how to present your practical experience effectively.',
      icon: CalendarCheck,
    },
    {
      num: '05',
      title: 'Employer Selection',
      desc: 'The employer conducts the final evaluation and decides on appointment, offer letter issuance, and joining formalities.',
      icon: CheckCircle,
    },
  ];

  const currentSteps = activeTab === 'employer' ? employerSteps : candidateSteps;

  return (
    <section id="process" className="py-16 sm:py-20 bg-[#FFF7E9]/50 border-b border-[#D8AC55]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#F36B12] uppercase tracking-widest mb-3">
            <span className="w-6 h-0.5 bg-[#F36B12]"></span>
            <span>Structured Recruitment & Placement</span>
            <span className="w-6 h-0.5 bg-[#F36B12]"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1F45] tracking-tight font-cinzel text-balance mb-3">
            How Our Process Works
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            A transparent, five-step workflow designed to save time, ensure document clarity, and foster long-term workplace stability.
          </p>
        </div>

        {/* Journey Switcher Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-xl bg-white border border-[#D8AC55]/40 shadow-xs">
            <button
              onClick={() => setActiveTab('employer')}
              className={`px-5 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
                activeTab === 'employer'
                  ? 'bg-[#0B1F45] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#0B1F45]'
              }`}
            >
              Employer Recruitment Process (5 Steps)
            </button>
            <button
              onClick={() => setActiveTab('candidate')}
              className={`px-5 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
                activeTab === 'candidate'
                  ? 'bg-[#F36B12] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#F36B12]'
              }`}
            >
              Candidate Journey (Register to Selection)
            </button>
          </div>
        </div>

        {/* Step Flow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative mb-12">
          {currentSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-2xs hover:border-[#F36B12] transition-colors relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-full bg-[#0B1F45] text-white font-bold text-xs flex items-center justify-center font-cinzel">
                      {step.num}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#FFF7E9] text-[#F36B12] flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-[#0B1F45] font-cinzel mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {idx < currentSteps.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-300">
                    <ArrowRight className="w-5 h-5 text-[#D8AC55]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Authority & Final Decision Disclosure */}
        <div className="p-4 rounded-xl bg-white border border-[#D8AC55]/50 flex items-center gap-3 text-xs text-slate-700 max-w-4xl mx-auto">
          <ShieldCheck className="w-5 h-5 text-[#F36B12] shrink-0" />
          <p>
            <strong>Clear Authority Statement:</strong> KSU Placement Support acts solely as a professional placement coordinator and sourcing facilitator. All final shortlisting, interview evaluations, wage determinations, and hiring decisions belong exclusively to the client employer.
          </p>
        </div>
      </div>
    </section>
  );
};
