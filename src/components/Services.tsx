import React from 'react';
import {
  Briefcase,
  Users,
  Search,
  FileCheck,
  CheckCircle,
  CalendarClock,
  GraduationCap,
  TrendingUp,
  Boxes,
  Compass,
  Layers,
  ArrowRight
} from 'lucide-react';

interface ServicesProps {
  onOpenHiringModal: (role?: string) => void;
  onOpenCandidateModal: (domain?: string) => void;
  onOpenTrainingModal: () => void;
}

export const Services: React.FC<ServicesProps> = ({
  onOpenHiringModal,
  onOpenCandidateModal,
  onOpenTrainingModal,
}) => {
  const serviceList = [
    {
      code: 'A',
      title: 'Job Placement Support',
      desc: 'Support candidates in exploring suitable job opportunities based on their qualifications, skills, experience and career preferences.',
      icon: Briefcase,
      status: 'Active Service',
      audience: 'For Job Seekers',
      action: () => onOpenCandidateModal('General Placement'),
      actionLabel: 'Register Profile',
    },
    {
      code: 'B',
      title: 'Recruitment & Talent Sourcing',
      desc: 'Help employers identify and shortlist candidates for their stated vacancies, immediate workforce requirements, and specialized roles.',
      icon: Users,
      status: 'Active Service',
      audience: 'For Employers',
      action: () => onOpenHiringModal('Talent Sourcing Requirement'),
      actionLabel: 'Submit Requirement',
    },
    {
      code: 'C',
      title: 'Candidate Profile Screening',
      desc: 'Systematic preliminary review of candidate credentials, education records, prior work history, and relevant documents as appropriate to the role.',
      icon: Search,
      status: 'Active Service',
      audience: 'For Employers',
      action: () => onOpenHiringModal('Profile Screening Requirement'),
      actionLabel: 'Request Screening',
    },
    {
      code: 'D',
      title: 'Document Verification Support',
      desc: 'Conduct preliminary checks of candidate-provided documents (certificates, experience letters, ID proof) with clear distinction between in-house checks and external verifications.',
      icon: FileCheck,
      status: 'Active Service',
      audience: 'For Employers',
      action: () => onOpenHiringModal('Document Verification Requirement'),
      actionLabel: 'Enquire Checks',
    },
    {
      code: 'E',
      title: 'Skills & Aptitude Assessment',
      desc: 'Arrange role-relevant technical evaluations, trade tests (e.g. ITI skills, accounts software, Excel), or aptitude assessments arranged to match client standards.',
      icon: CheckCircle,
      status: 'Active Service',
      audience: 'Employers & Candidates',
      action: () => onOpenHiringModal('Skill Testing Requirement'),
      actionLabel: 'Explore Assessments',
    },
    {
      code: 'F',
      title: 'Interview Coordination',
      desc: 'Seamlessly schedule and coordinate interviews between employers and shortlisted candidates, ensuring timely briefing and follow-up.',
      icon: CalendarClock,
      status: 'Active Service',
      audience: 'Employers & Candidates',
      action: () => onOpenHiringModal('Interview Scheduling Support'),
      actionLabel: 'Coordinate Interviews',
    },
    {
      code: 'G',
      title: 'HR & Employee Training',
      desc: 'Support organizations with employee onboarding, workplace communication, professional conduct, teamwork, and role-related functional training.',
      icon: GraduationCap,
      status: 'Active Service',
      audience: 'For Organizations',
      action: () => onOpenTrainingModal(),
      actionLabel: 'Request Training',
    },
    {
      code: 'H',
      title: 'Skill Development Support',
      desc: 'Help candidates identify skill gaps and prepare practically for evolving industry and factory demands in Raipur and nationwide.',
      icon: TrendingUp,
      status: 'Available on Request',
      audience: 'For Job Seekers',
      action: () => onOpenCandidateModal('Skill Development'),
      actionLabel: 'Get Guidance',
    },
    {
      code: 'I',
      title: 'Manpower & Workforce Support',
      desc: 'Assist industrial, manufacturing, logistics, and commercial firms with sourcing skilled, semi-skilled, and general staffing requirements.',
      icon: Boxes,
      status: 'Active Service',
      audience: 'For Employers',
      action: () => onOpenHiringModal('Manpower Staffing'),
      actionLabel: 'Staffing Enquiry',
    },
    {
      code: 'J',
      title: 'Career Guidance',
      desc: 'Offer professional guidance on resumes, interview preparation, career choice alignment, and workplace adaptability.',
      icon: Compass,
      status: 'Active Service',
      audience: 'For Job Seekers',
      action: () => onOpenCandidateModal('Career Guidance'),
      actionLabel: 'Seek Guidance',
    },
    {
      code: 'K',
      title: 'HR Process Support',
      desc: 'Offer recruitment coordination, candidate data management, and related administrative support tailored to client operational needs.',
      icon: Layers,
      status: 'Available on Request',
      audience: 'For Organizations',
      action: () => onOpenHiringModal('HR Process Outsourcing / Support'),
      actionLabel: 'Discuss Needs',
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 bg-[#FFF7E9]/60 border-b border-[#D8AC55]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#F36B12] uppercase tracking-widest mb-3">
            <span className="w-6 h-0.5 bg-[#F36B12]"></span>
            <span>Comprehensive Workforce Solutions</span>
            <span className="w-6 h-0.5 bg-[#F36B12]"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1F45] tracking-tight font-cinzel text-balance mb-4">
            Professional Recruitment, Sourcing & Training Services
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Delivering structured, people-focused placement assistance for job seekers and precise, requirement-based talent sourcing for organizations across Raipur, Chhattisgarh and pan-India.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceList.map((svc) => {
            const Icon = svc.icon;
            const isRequestOnly = svc.status === 'Available on Request';
            return (
              <div
                key={svc.title}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#F36B12]/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#FFF7E9] border border-[#D8AC55]/40 flex items-center justify-center text-[#F36B12] group-hover:scale-105 group-hover:bg-[#F36B12] group-hover:text-white transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] font-semibold text-slate-500 block">
                        {svc.audience}
                      </span>
                      <span
                        className={`text-[10px] font-medium tracking-wide ${
                          isRequestOnly ? 'text-amber-700 font-semibold' : 'text-emerald-700'
                        }`}
                      >
                        {svc.status}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-[#0B1F45] font-cinzel mb-2 group-hover:text-[#F36B12] transition-colors">
                    {svc.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {svc.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400">
                    Service {svc.code}
                  </span>
                  <button
                    onClick={svc.action}
                    className="text-xs font-bold text-[#0B1F45] group-hover:text-[#F36B12] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>{svc.actionLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Guarantee Disclosure */}
        <div className="mt-12 p-4 rounded-xl bg-white border border-[#D8AC55]/40 text-xs text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <strong className="text-[#0B1F45]">Operational Commitment:</strong> Services are delivered according to verified employer requirements and transparent mutual consent. Final employment decisions remain with employers.
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => onOpenHiringModal('Custom Requirement')}
              className="px-4 py-2 text-xs font-bold text-white bg-[#0B1F45] hover:bg-[#F36B12] rounded-lg transition-colors"
            >
              Discuss Custom Requirement
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
