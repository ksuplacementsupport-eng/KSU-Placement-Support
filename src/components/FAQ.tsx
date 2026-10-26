import React, { useState } from 'react';
import { ChevronDown, HelpCircle, FileText } from 'lucide-react';

interface FAQProps {
  onOpenPolicyModal: (tab: 'privacy' | 'terms') => void;
  onOpenCandidateModal: () => void;
  onOpenHiringModal: () => void;
}

export const FAQ: React.FC<FAQProps> = ({
  onOpenPolicyModal,
  onOpenCandidateModal,
  onOpenHiringModal,
}) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const faqs = [
    {
      q: '1. What services does KSU Placement Support provide?',
      a: 'KSU Placement Support provides candidate job placement support, employer recruitment & talent sourcing, preliminary profile screening, document verification support, skill & aptitude assessment coordination, interview scheduling, HR & employee training, retired staff replacement sourcing, and career guidance across Raipur, Chhattisgarh, and all over India.',
    },
    {
      q: '2. How can a candidate register?',
      a: 'Candidates can register by clicking "Register Your Profile" on this website, submitting their contact details, educational certificates, work history, and job domain preference. Candidates can also send their resume directly to ksuplacementsupport@gmail.com or contact our placement coordination desk at 9039038220 / 9039038221.',
    },
    {
      q: '3. Does KSU guarantee a job?',
      a: 'No. KSU Placement Support does not guarantee employment, fixed selection, interview invitations, or specific salary levels. We provide placement support, candidate screening, and interview coordination. Final hiring choices and salary packages are determined solely by the hiring employer based on their requirements and the candidate’s performance.',
    },
    {
      q: '4. How can an employer request candidates?',
      a: 'Employers can submit a hiring requisition by clicking "Share Your Hiring Requirement" on this site, specifying designations, qualification criteria, experience, and headcount. Alternatively, employers can directly call the Founder & Director at 6232506700 or email ksuplacementsupport@gmail.com.',
    },
    {
      q: '5. What documents may be required?',
      a: 'Depending on the role, candidates may be asked to provide their updated resume, government photo identity proof (Aadhaar/Voter ID), educational marksheets/degree/ITI certificates, previous employment experience letters, salary slips (if applicable), and passport-size photographs for interview record verification.',
    },
    {
      q: '6. How does candidate screening work?',
      a: 'Our screening process entails reviewing candidate credentials against the stated job description, verifying certificate authenticity to the extent feasible, conducting role-relevant trade or software skill checks when requested, and assessing communication readiness before shortlisting for employer interviews.',
    },
    {
      q: '7. Are candidate details shared with employers?',
      a: 'Candidate profile details and resumes are shared only with verified prospective employers for specific matching vacancies, with the candidate’s knowledge and consent. We do not publish candidate phone numbers, addresses, or identity proofs in public directories.',
    },
    {
      q: '8. Is there a placement service fee?',
      a: 'Any applicable placement coordination terms or service fees are fully governed by clear, upfront written agreements. Details are explicitly disclosed to the candidate or employer prior to engagement or agreement acceptance. No hidden or unauthorized deductions are made.',
    },
    {
      q: '9. Does KSU provide HR and employee training?',
      a: 'Yes. KSU Placement Support coordinates employee onboarding support, workplace communication, professional conduct, teamwork discipline, and role-related functional development tailored to corporate and industrial clients.',
    },
    {
      q: '10. How can I contact KSU Placement Support?',
      a: 'You can reach Founder & Director Kripa Shankar Upadhyay at 6232506700, our CRM & Placement Coordination desks at 9039038220 and 9039038221, or via email at ksuplacementsupport@gmail.com. Our central operations hub is located in Raipur, Chhattisgarh.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#F36B12] uppercase tracking-widest mb-3">
            <span className="w-6 h-0.5 bg-[#F36B12]"></span>
            <span>Frequently Asked Questions</span>
            <span className="w-6 h-0.5 bg-[#F36B12]"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F45] tracking-tight font-cinzel text-balance mb-3">
            Clear Answers & Official Policies
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Everything you need to know about our recruitment coordination, candidate registration, and transparent standards.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 mb-10">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.q}
                className={`rounded-xl border transition-all ${
                  isOpen
                    ? 'border-[#F36B12] bg-[#FFF7E9]/40 shadow-xs'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-bold text-[#0B1F45] font-cinzel">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                      isOpen ? 'bg-[#F36B12] text-white rotate-180' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-[#D8AC55]/20 pt-3">
                    <p>{faq.a}</p>
                    {idx === 7 && (
                      <div className="mt-3 pt-2 border-t border-slate-200">
                        <button
                          onClick={() => onOpenPolicyModal('terms')}
                          className="text-xs font-bold text-[#D94716] hover:underline inline-flex items-center gap-1 cursor-pointer"
                        >
                          <FileText className="w-3.5 h-3.5" /> Read Detailed Placement Terms & Disclosure
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="bg-[#0B1F45] rounded-2xl p-6 text-white text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold font-cinzel text-[#FFF7E9]">Have a question not addressed here?</h4>
            <p className="text-xs text-slate-300">Speak directly with our placement coordination desk in Raipur.</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:9039038220"
              className="px-4 py-2 rounded-lg bg-[#F36B12] hover:bg-[#D94716] text-white text-xs font-bold transition-colors"
            >
              Call 9039038220
            </a>
            <a
              href="mailto:ksuplacementsupport@gmail.com"
              className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
