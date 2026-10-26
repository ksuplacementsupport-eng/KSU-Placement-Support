import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Building,
  UserCheck,
  GraduationCap,
  Briefcase,
  Send,
  CheckCircle2,
  PhoneCall,
  Clock,
  Sparkles
} from 'lucide-react';

interface ContactProps {
  onOpenHiringModal: () => void;
  onOpenCandidateModal: () => void;
  onOpenTrainingModal: () => void;
}

export const Contact: React.FC<ContactProps> = ({
  onOpenHiringModal,
  onOpenCandidateModal,
  onOpenTrainingModal,
}) => {
  const [quickName, setQuickName] = useState('');
  const [quickPhone, setQuickPhone] = useState('');
  const [quickCategory, setQuickCategory] = useState<'Candidate' | 'Employer' | 'Training'>('Candidate');
  const [quickMessage, setQuickMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickName.trim() || !quickPhone.trim()) return;
    setIsSent(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-[#FFF7E9]/60 border-b border-[#D8AC55]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#F36B12] uppercase tracking-widest mb-3">
            <span className="w-6 h-0.5 bg-[#F36B12]"></span>
            <span>Get in Touch with KSU</span>
            <span className="w-6 h-0.5 bg-[#F36B12]"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1F45] tracking-tight font-cinzel text-balance mb-3">
            Let's Connect the Right Talent with the Right Opportunity
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Our placement team in Raipur is ready to assist employers in hiring skilled staff and guide candidates toward suitable career pathways.
          </p>
        </div>

        {/* 3 Dedicated Contact Cards (Job Seekers, Employers, HR & Training) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1: Job Seekers */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:border-[#F36B12] transition-colors flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#FFF7E9] text-[#F36B12] border border-[#D8AC55]/40 flex items-center justify-center mb-4">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#0B1F45] font-cinzel mb-1">
                For Job Seekers
              </h3>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                Looking for new job openings or want to register your qualifications with our placement team?
              </p>
              <div className="space-y-2 text-xs text-slate-700 bg-slate-50 p-3 rounded-xl mb-4">
                <p>
                  <strong>Helpline:</strong>{' '}
                  <a href="tel:9039038221" className="text-[#0B1F45] font-bold hover:text-[#F36B12]">
                    9039038221
                  </a>
                </p>
                <p>
                  <strong>Alternate:</strong>{' '}
                  <a href="tel:9039038220" className="text-[#0B1F45] font-semibold hover:text-[#F36B12]">
                    9039038220
                  </a>
                </p>
                <p className="text-[11px] text-slate-500">
                  Resume submission: ksuplacementsupport@gmail.com
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <button
                onClick={onOpenCandidateModal}
                className="w-full py-2.5 px-4 rounded-xl bg-[#0B1F45] hover:bg-[#F36B12] text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
              >
                <span>Register as Candidate</span>
              </button>
              <a
                href="tel:9039038221"
                className="w-full py-2 px-4 rounded-xl border border-slate-200 text-[#0B1F45] font-semibold text-xs hover:bg-slate-50 transition-colors flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#F36B12]" /> Call Placement Desk
              </a>
            </div>
          </div>

          {/* Card 2: Employers */}
          <div className="bg-white rounded-2xl p-6 border-2 border-[#D8AC55]/50 shadow-md flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#F36B12] text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
              Priority Desk
            </div>
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#0B1F45] text-white flex items-center justify-center mb-4">
                <Building className="w-6 h-6 text-[#F36B12]" />
              </div>
              <h3 className="text-base font-bold text-[#0B1F45] font-cinzel mb-1">
                For Employers & Business
              </h3>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                Need reliable manpower, urgent plant staff, or replacement for retired executives?
              </p>
              <div className="space-y-2 text-xs text-slate-700 bg-amber-50/50 p-3 rounded-xl mb-4 border border-amber-200/60">
                <p>
                  <strong>Director's Direct:</strong>{' '}
                  <a href="tel:6232506700" className="text-[#D94716] font-bold hover:underline">
                    6232506700
                  </a>
                </p>
                <p>
                  <strong>CRM Desk:</strong>{' '}
                  <a href="tel:9039038220" className="text-[#0B1F45] font-semibold hover:text-[#F36B12]">
                    9039038220
                  </a>
                </p>
                <p className="text-[11px] text-slate-500">
                  Email: ksuplacementsupport@gmail.com
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <button
                onClick={onOpenHiringModal}
                className="w-full py-2.5 px-4 rounded-xl bg-[#F36B12] hover:bg-[#D94716] text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Submit Hiring Requirement</span>
              </button>
              <a
                href="tel:6232506700"
                className="w-full py-2 px-4 rounded-xl border border-[#0B1F45] text-[#0B1F45] font-semibold text-xs hover:bg-[#0B1F45] hover:text-white transition-colors flex items-center justify-center gap-1.5"
              >
                <PhoneCall className="w-3.5 h-3.5" /> Call Director Directly
              </a>
            </div>
          </div>

          {/* Card 3: HR & Training */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:border-[#0B1F45] transition-colors flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#FFF7E9] text-[#0B1F45] border border-[#D8AC55]/40 flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-[#F36B12]" />
              </div>
              <h3 className="text-base font-bold text-[#0B1F45] font-cinzel mb-1">
                HR & Training Enquiries
              </h3>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                Looking to conduct workforce onboarding, supervisory conduct, or communication sessions?
              </p>
              <div className="space-y-2 text-xs text-slate-700 bg-slate-50 p-3 rounded-xl mb-4">
                <p>
                  <strong>Training Desk:</strong>{' '}
                  <span className="text-[#0B1F45] font-bold">9039038220</span>
                </p>
                <p>
                  <strong>Coverage:</strong> On-site in CG & online workshops
                </p>
                <p className="text-[11px] text-slate-500">
                  Custom batch plans on request
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <button
                onClick={onOpenTrainingModal}
                className="w-full py-2.5 px-4 rounded-xl bg-[#0B1F45] hover:bg-[#132c5e] text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
              >
                <span>Request Training Support</span>
              </button>
              <a
                href="mailto:ksuplacementsupport@gmail.com?subject=HR and Training Enquiry"
                className="w-full py-2 px-4 rounded-xl border border-slate-200 text-[#0B1F45] font-semibold text-xs hover:bg-slate-50 transition-colors flex items-center justify-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-[#F36B12]" /> Send Email
              </a>
            </div>
          </div>
        </div>

        {/* Master Details & Quick Message Box */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#D8AC55]/40 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Official Contact Manifest */}
          <div className="lg:col-span-6 space-y-5">
            <div>
              <span className="text-xs font-bold text-[#F36B12] uppercase tracking-wider font-cinzel block mb-1">
                Official Entity Details
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0B1F45] font-cinzel">
                KSU Placement Support
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Seva · Sanskar · Samarpan · Avsar | Better People, Stronger India
              </p>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#F36B12] shrink-0 mt-1" />
                <div>
                  <strong className="text-[#0B1F45] block">Location & Service Hub:</strong>
                  <span>Raipur, Chhattisgarh, India (Service Coverage: All Over India)</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#F36B12] shrink-0 mt-1" />
                <div>
                  <strong className="text-[#0B1F45] block">Founder & Director:</strong>
                  <span>Kripa Shankar Upadhyay · </span>
                  <a href="tel:6232506700" className="text-[#D94716] font-bold hover:underline">
                    6232506700
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <PhoneCall className="w-4 h-4 text-[#F36B12] shrink-0 mt-1" />
                <div>
                  <strong className="text-[#0B1F45] block">CRM / Placement Coordination:</strong>
                  <div className="flex flex-wrap gap-2 pt-0.5">
                    <a href="tel:9039038220" className="text-[#0B1F45] font-semibold hover:text-[#F36B12]">
                      9039038220
                    </a>
                    <span>·</span>
                    <a href="tel:9039038221" className="text-[#0B1F45] font-semibold hover:text-[#F36B12]">
                      9039038221
                    </a>
                    <span>·</span>
                    <a href="tel:9935430389" className="text-[#0B1F45] font-semibold hover:text-[#F36B12]">
                      9935430389
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#F36B12] shrink-0 mt-1" />
                <div>
                  <strong className="text-[#0B1F45] block">Official Email Address:</strong>
                  <a
                    href="mailto:ksuplacementsupport@gmail.com"
                    className="text-[#0B1F45] font-semibold hover:text-[#F36B12] underline underline-offset-2"
                  >
                    ksuplacementsupport@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="p-3 bg-[#FFF7E9] rounded-xl border border-[#D8AC55]/30 text-xs text-slate-600">
              <span className="font-bold text-[#0B1F45]">Working Hours:</span> Monday to Saturday, 10:00 AM – 7:00 PM (IST). Urgent placement requirements handled round the clock.
            </div>
          </div>

          {/* Right Column: Instant Message Box */}
          <div className="lg:col-span-6 bg-[#FFF7E9]/40 p-6 rounded-2xl border border-slate-200">
            <h4 className="text-sm font-bold text-[#0B1F45] font-cinzel mb-1">
              Send an Instant Direct Note
            </h4>
            <p className="text-xs text-slate-500 mb-4">
              Leave your contact and brief requirement. Our team will get back to you shortly.
            </p>

            {isSent ? (
              <div className="p-6 bg-white rounded-xl border border-emerald-300 text-center text-xs text-slate-700">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                <h5 className="font-bold text-[#0B1F45] text-sm font-cinzel">Message Sent to Placement Desk</h5>
                <p className="mt-1">
                  Thank you, <span className="font-semibold">{quickName}</span>. A placement coordinator will connect with you on <span className="font-semibold">{quickPhone}</span>.
                </p>
                <button
                  onClick={() => setIsSent(false)}
                  className="mt-4 px-4 py-1.5 text-xs font-semibold text-[#0B1F45] bg-slate-100 rounded-lg hover:bg-slate-200"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleQuickSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-[#0B1F45] mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Name"
                      value={quickName}
                      onChange={(e) => setQuickName(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:ring-1 focus:ring-[#F36B12]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-[#0B1F45] mb-1">Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit number"
                      value={quickPhone}
                      onChange={(e) => setQuickPhone(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:ring-1 focus:ring-[#F36B12]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#0B1F45] mb-1">Inquiry Type</label>
                  <select
                    value={quickCategory}
                    onChange={(e) => setQuickCategory(e.target.value as any)}
                    className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg"
                  >
                    <option value="Candidate">I am looking for a job / candidate support</option>
                    <option value="Employer">I am an employer looking to hire staff</option>
                    <option value="Training">I am inquiring about HR / corporate training</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#0B1F45] mb-1">Message / Key Details</label>
                  <textarea
                    rows={3}
                    placeholder="Describe role, qualification, or staffing need..."
                    value={quickMessage}
                    onChange={(e) => setQuickMessage(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:ring-1 focus:ring-[#F36B12]"
                  />
                </div>

                <div className="pt-1 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400">100% Confidential</span>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-bold text-white bg-[#0B1F45] hover:bg-[#F36B12] rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" /> Send Inquiry
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
