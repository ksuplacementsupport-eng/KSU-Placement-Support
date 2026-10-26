import React, { useState } from 'react';
import { MessageSquarePlus, CheckCircle, Send, Star, ShieldCheck } from 'lucide-react';

export const TestimonialsNotice: React.FC = () => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [name, setName] = useState('');
  const [roleType, setRoleType] = useState<'Candidate' | 'Employer'>('Candidate');
  const [feedback, setFeedback] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !feedback.trim()) return;
    setIsSubmitted(true);
  };

  return (
    <section className="py-16 sm:py-20 bg-[#FFF7E9]/40 border-b border-[#D8AC55]/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#F36B12] uppercase tracking-widest mb-3">
            <span className="w-6 h-0.5 bg-[#F36B12]"></span>
            <span>Voices of Trust & Collaboration</span>
            <span className="w-6 h-0.5 bg-[#F36B12]"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F45] tracking-tight font-cinzel text-balance mb-3">
            Career Journeys & Employer Experiences
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            At KSU Placement Support, we believe in authentic relationships built on integrity. We never fabricate reviews, logos, or placement counts. Genuine experiences are published solely with mutual consent.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#D8AC55]/40 shadow-xs text-center">
          <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[#FFF7E9] text-[#F36B12] flex items-center justify-center border border-[#D8AC55]/50">
            <MessageSquarePlus className="w-7 h-7" />
          </div>

          <h3 className="text-lg font-bold text-[#0B1F45] font-cinzel mb-2">
            Have You Worked With KSU Placement Support?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto mb-6">
            Whether you are an employer who sourced reliable team members or a candidate who found career support with us in Raipur, we welcome your honest reflections.
          </p>

          {!showFeedbackForm ? (
            <button
              onClick={() => setShowFeedbackForm(true)}
              className="px-6 py-2.5 rounded-xl bg-[#0B1F45] hover:bg-[#F36B12] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-2xs inline-flex items-center gap-2 cursor-pointer"
            >
              <Star className="w-4 h-4 text-[#D8AC55]" />
              <span>Share Your Experience</span>
            </button>
          ) : isSubmitted ? (
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl max-w-md mx-auto text-emerald-800 text-xs text-center">
              <CheckCircle className="w-6 h-6 text-emerald-600 mx-auto mb-1" />
              <p className="font-bold">Thank You for Sharing Your Experience!</p>
              <p className="text-slate-600 mt-1">Our coordination team appreciates your feedback. Published testimonials are reviewed with your explicit permission.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto text-left space-y-3 pt-2">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-[#F36B12]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">You Are A *</label>
                  <select
                    value={roleType}
                    onChange={(e) => setRoleType(e.target.value as 'Candidate' | 'Employer')}
                    className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg bg-white"
                  >
                    <option value="Candidate">Job Seeker / Candidate</option>
                    <option value="Employer">Business Employer / HR</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">Your Experience / Remarks *</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Share how KSU supported your hiring or interview coordination..."
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-[#F36B12]"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setShowFeedbackForm(false)}
                  className="px-3 py-1.5 text-xs text-slate-500 hover:text-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-1.5 text-xs font-bold text-white bg-[#F36B12] hover:bg-[#D94716] rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" /> Submit Experience
                </button>
              </div>
            </form>
          )}

          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-2 text-[11px] text-slate-500">
            <ShieldCheck className="w-4 h-4 text-[#F36B12]" />
            <span>KSU Ethical Commitment: 100% Genuine testimonials only · No fabricated endorsements.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
