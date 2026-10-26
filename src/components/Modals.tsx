import React, { useState } from 'react';
import { X, CheckCircle, Send, Building2, User, Phone, Mail, MapPin, Briefcase, Calendar, ShieldCheck, FileText, ExternalLink, AlertCircle } from 'lucide-react';
import { HiringRequirementFormData, CandidateRegistrationFormData, TrainingEnquiryFormData } from '../types';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// 1. HIRING REQUIREMENT MODAL (EMPLOYERS)
export const HiringModal: React.FC<ModalProps & { initialRole?: string }> = ({ isOpen, onClose, initialRole = '' }) => {
  const [formData, setFormData] = useState<HiringRequirementFormData>({
    companyName: '',
    contactPerson: '',
    designation: '',
    businessEmail: '',
    mobileNumber: '',
    companyLocation: 'Raipur, Chhattisgarh',
    jobRole: initialRole,
    vacanciesCount: '1-2',
    requiredQualification: '',
    requiredExperience: '',
    expectedSalaryRange: '',
    jobType: 'Full Time',
    jobDescription: '',
    preferredJoiningDate: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.companyName.trim() || !formData.contactPerson.trim() || !formData.mobileNumber.trim() || !formData.jobRole.trim()) {
      setErrorMsg('Please complete all required fields (Company, Contact Person, Mobile, and Job Role).');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setErrorMsg('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-3xl my-8 bg-white rounded-2xl shadow-2xl border border-[#D8AC55]/30 overflow-hidden">
        {/* Header */}
        <div className="bg-[#0B1F45] text-white px-6 py-5 flex items-center justify-between border-b-2 border-[#F36B12]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#F36B12]/20 border border-[#F36B12]/40 flex items-center justify-center text-[#F36B12]">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#FFF7E9] font-cinzel">Share Your Hiring Requirement</h3>
              <p className="text-xs text-amber-200/80">KSU Placement Support · Raipur & Pan-India Talent Sourcing</p>
            </div>
          </div>
          <button
            onClick={resetAndClose}
            className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center bg-[#FFF7E9]/40">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-[#0B1F45] mb-2 font-cinzel">Hiring Requirement Received</h4>
            <p className="text-sm text-slate-700 max-w-md mx-auto mb-6">
              Thank you, <span className="font-semibold text-[#0B1F45]">{formData.contactPerson}</span> from <span className="font-semibold text-[#0B1F45]">{formData.companyName}</span>. Our Placement & Sourcing team has logged your requirement for <strong className="text-[#D94716]">{formData.jobRole}</strong>.
            </p>
            <div className="bg-white p-4 rounded-xl border border-slate-200 text-left text-xs text-slate-600 mb-6 space-y-1">
              <p><strong className="text-slate-800">Direct CRM Desk:</strong> 9039038220 / 9039038221</p>
              <p><strong className="text-slate-800">Director's Office:</strong> 6232506700</p>
              <p><strong className="text-slate-800">Email:</strong> ksuplacementsupport@gmail.com</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={`mailto:ksuplacementsupport@gmail.com?subject=Hiring Requirement - ${encodeURIComponent(formData.companyName)} (${encodeURIComponent(formData.jobRole)})&body=Company: ${encodeURIComponent(formData.companyName)}%0D%0AContact: ${encodeURIComponent(formData.contactPerson)} (${encodeURIComponent(formData.mobileNumber)})%0D%0ARole: ${encodeURIComponent(formData.jobRole)}%0D%0AVacancies: ${encodeURIComponent(formData.vacanciesCount)}%0D%0AExperience: ${encodeURIComponent(formData.requiredExperience)}%0D%0ASalary: ${encodeURIComponent(formData.expectedSalaryRange)}%0D%0ADescription: ${encodeURIComponent(formData.jobDescription)}`}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-[#F36B12] hover:bg-[#D94716] rounded-lg transition-colors inline-flex items-center gap-2"
              >
                <Mail className="w-4 h-4" /> Send Copy via Official Email
              </a>
              <button
                onClick={resetAndClose}
                className="px-5 py-2.5 text-xs font-semibold text-[#0B1F45] bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 max-h-[75vh] overflow-y-auto space-y-5 text-slate-800">
            {errorMsg && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#0B1F45] mb-1">Company / Business Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Mahamaya Steel Works / Shri Ram Logistics"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#F36B12]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0B1F45] mb-1">Contact Person Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rajesh Sharma"
                  value={formData.contactPerson}
                  onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#F36B12]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0B1F45] mb-1">Designation</label>
                <input
                  type="text"
                  placeholder="e.g. HR Manager / Plant Head / Director"
                  value={formData.designation}
                  onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#F36B12]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0B1F45] mb-1">Company Location *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Raipur / Urla / Bhanpuri / Pan-India"
                  value={formData.companyLocation}
                  onChange={(e) => setFormData({ ...formData, companyLocation: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#F36B12]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0B1F45] mb-1">Business Mobile Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="10-digit mobile number"
                  value={formData.mobileNumber}
                  onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#F36B12]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0B1F45] mb-1">Business Email</label>
                <input
                  type="email"
                  placeholder="hr@company.com"
                  value={formData.businessEmail}
                  onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#F36B12]"
                />
              </div>
            </div>

            <div className="border-t border-slate-200 pt-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#D94716] mb-3">Vacant Position Details</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#0B1F45] mb-1">Job Role / Designation *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Accounts Executive / CNC Operator"
                    value={formData.jobRole}
                    onChange={(e) => setFormData({ ...formData, jobRole: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#F36B12]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0B1F45] mb-1">Number of Vacancies</label>
                  <input
                    type="text"
                    placeholder="e.g. 2, 5, or Bulk"
                    value={formData.vacanciesCount}
                    onChange={(e) => setFormData({ ...formData, vacanciesCount: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#F36B12]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0B1F45] mb-1">Job Type</label>
                  <select
                    value={formData.jobType}
                    onChange={(e) => setFormData({ ...formData, jobType: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#F36B12] bg-white"
                  >
                    <option value="Full Time">Full Time (Permanent)</option>
                    <option value="Contractual / Project">Contractual / Project</option>
                    <option value="Replacement for Retired Staff">Replacement for Retired Staff</option>
                    <option value="Shift-Based / Plant Staff">Shift-Based / Plant Staff</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0B1F45] mb-1">Required Qualification</label>
                  <input
                    type="text"
                    placeholder="e.g. B.Com, ITI, B.Tech, 12th Pass"
                    value={formData.requiredQualification}
                    onChange={(e) => setFormData({ ...formData, requiredQualification: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#F36B12]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0B1F45] mb-1">Required Experience</label>
                  <input
                    type="text"
                    placeholder="e.g. Fresher / 2-4 Years"
                    value={formData.requiredExperience}
                    onChange={(e) => setFormData({ ...formData, requiredExperience: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#F36B12]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0B1F45] mb-1">Expected Salary Budget</label>
                  <input
                    type="text"
                    placeholder="e.g. ₹18,000 - ₹28,000 / month"
                    value={formData.expectedSalaryRange}
                    onChange={(e) => setFormData({ ...formData, expectedSalaryRange: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#F36B12]"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-xs font-semibold text-[#0B1F45] mb-1">Preferred Joining Timeline</label>
                <input
                  type="text"
                  placeholder="e.g. Immediate / Within 15 Days"
                  value={formData.preferredJoiningDate}
                  onChange={(e) => setFormData({ ...formData, preferredJoiningDate: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#F36B12]"
                />
              </div>

              <div className="mt-4">
                <label className="block text-xs font-semibold text-[#0B1F45] mb-1">Role Description / Specific Skill Requirements</label>
                <textarea
                  rows={3}
                  placeholder="Describe day-to-day duties, machine operating skills, software (Tally, Excel, SAP), or specific shift requirements..."
                  value={formData.jobDescription}
                  onChange={(e) => setFormData({ ...formData, jobDescription: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#F36B12]"
                />
              </div>
            </div>

            <div className="p-3 bg-[#FFF7E9] border border-[#D8AC55]/40 rounded-lg text-xs text-slate-700 flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-[#F36B12] shrink-0 mt-0.5" />
              <p>
                <strong>Responsible Recruitment Note:</strong> KSU Placement Support coordinates candidate sourcing, preliminary screening, and interview scheduling. Final selection decisions and employment agreements rest exclusively with your company.
              </p>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={resetAndClose}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 text-xs font-bold text-white bg-[#0B1F45] hover:bg-[#F36B12] rounded-lg transition-colors shadow-md flex items-center gap-2"
              >
                <Send className="w-4 h-4" /> Submit Hiring Requirement
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

// 2. CANDIDATE REGISTRATION MODAL
export const CandidateModal: React.FC<ModalProps & { initialDomain?: string }> = ({ isOpen, onClose, initialDomain = '' }) => {
  const [formData, setFormData] = useState<CandidateRegistrationFormData>({
    fullName: '',
    phone: '',
    email: '',
    currentLocation: 'Raipur, Chhattisgarh',
    preferredJobLocation: 'Raipur or Pan-India',
    highestQualification: '',
    totalExperience: 'Fresher',
    primaryDomain: initialDomain || 'Manufacturing & Production',
    currentSalary: '',
    expectedSalary: '',
    noticePeriod: 'Immediate',
    keySkills: '',
    consentAgreed: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.highestQualification.trim()) {
      setErrorMsg('Please fill in your Full Name, Mobile Number, and Highest Qualification.');
      return;
    }
    if (!formData.consentAgreed) {
      setErrorMsg('Please confirm your consent for KSU Placement Support to process your details for job matching.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setErrorMsg('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-2xl my-8 bg-white rounded-2xl shadow-2xl border border-[#D8AC55]/30 overflow-hidden">
        {/* Header */}
        <div className="bg-[#0B1F45] text-white px-6 py-5 flex items-center justify-between border-b-2 border-[#F36B12]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#F36B12]/20 border border-[#F36B12]/40 flex items-center justify-center text-[#F36B12]">
              <User className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#FFF7E9] font-cinzel">Register Candidate Profile</h3>
              <p className="text-xs text-amber-200/80">Your Career, Our Support · Raipur & Pan-India</p>
            </div>
          </div>
          <button
            onClick={resetAndClose}
            className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center bg-[#FFF7E9]/40">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-[#0B1F45] mb-2 font-cinzel">Registration Successfully Recorded</h4>
            <p className="text-sm text-slate-700 max-w-md mx-auto mb-5">
              Thank you, <span className="font-semibold text-[#0B1F45]">{formData.fullName}</span>. Your profile for <strong className="text-[#D94716]">{formData.primaryDomain}</strong> has been received by KSU Placement Support team.
            </p>
            <div className="bg-white p-4 rounded-xl border border-slate-200 text-left text-xs text-slate-600 mb-6 space-y-2">
              <p className="font-semibold text-slate-800">What Happens Next?</p>
              <ul className="list-disc pl-4 space-y-1 text-slate-600">
                <li>Our team reviews your qualifications and experience against active client openings.</li>
                <li>When a relevant match is identified, our placement team will reach out via call/WhatsApp.</li>
                <li>You may also directly share your updated resume via WhatsApp/Email to speed up review.</li>
              </ul>
              <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500">
                <strong>Placement Desk:</strong> 9039038220 / 9039038221 | <strong>Email:</strong> ksuplacementsupport@gmail.com
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={`mailto:ksuplacementsupport@gmail.com?subject=Candidate Profile - ${encodeURIComponent(formData.fullName)} (${encodeURIComponent(formData.primaryDomain)})&body=Full Name: ${encodeURIComponent(formData.fullName)}%0D%0APhone: ${encodeURIComponent(formData.phone)}%0D%0AQualification: ${encodeURIComponent(formData.highestQualification)}%0D%0AExperience: ${encodeURIComponent(formData.totalExperience)}%0D%0ADomain: ${encodeURIComponent(formData.primaryDomain)}%0D%0ASkills: ${encodeURIComponent(formData.keySkills)}%0D%0A(Please attach your resume PDF to this email)`}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-[#F36B12] hover:bg-[#D94716] rounded-lg transition-colors inline-flex items-center gap-2"
              >
                <Mail className="w-4 h-4" /> Email Resume Directly
              </a>
              <button
                onClick={resetAndClose}
                className="px-5 py-2.5 text-xs font-semibold text-[#0B1F45] bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 max-h-[75vh] overflow-y-auto space-y-4 text-slate-800">
            {errorMsg && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#0B1F45] mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Amit Kumar Verma"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#F36B12]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0B1F45] mb-1">Contact Mobile Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="10-digit mobile number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#F36B12]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0B1F45] mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#F36B12]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0B1F45] mb-1">Current City / Location *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Raipur, Bhilai, Bilaspur, etc."
                  value={formData.currentLocation}
                  onChange={(e) => setFormData({ ...formData, currentLocation: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#F36B12]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0B1F45] mb-1">Primary Domain / Interest *</label>
                <select
                  value={formData.primaryDomain}
                  onChange={(e) => setFormData({ ...formData, primaryDomain: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#F36B12] bg-white"
                >
                  <option value="Manufacturing & Production">Manufacturing & Production</option>
                  <option value="Admin & Office">Admin & Office Support</option>
                  <option value="Sales & Marketing">Sales & Marketing</option>
                  <option value="Accounts & Finance">Accounts & Finance</option>
                  <option value="HR & Administration">HR & Administration</option>
                  <option value="Logistics & Supply Chain">Logistics & Supply Chain</option>
                  <option value="Technical Staff">Technical Staff (ITI / Diploma / Engineering)</option>
                  <option value="Skilled & Semi-Skilled Staff">Skilled & Semi-Skilled Workforce</option>
                  <option value="Executive & Management">Executive & Management</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0B1F45] mb-1">Highest Qualification *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. B.Com / ITI Electrician / MBA / 12th"
                  value={formData.highestQualification}
                  onChange={(e) => setFormData({ ...formData, highestQualification: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#F36B12]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0B1F45] mb-1">Total Work Experience</label>
                <select
                  value={formData.totalExperience}
                  onChange={(e) => setFormData({ ...formData, totalExperience: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#F36B12] bg-white"
                >
                  <option value="Fresher">Fresher (0 years)</option>
                  <option value="1 - 2 Years">1 - 2 Years</option>
                  <option value="3 - 5 Years">3 - 5 Years</option>
                  <option value="6 - 10 Years">6 - 10 Years</option>
                  <option value="10+ Years">10+ Years</option>
                  <option value="Retired Professional Seeking Second Career">Retired Professional Seeking Second Career</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0B1F45] mb-1">Expected Monthly Salary</label>
                <input
                  type="text"
                  placeholder="e.g. ₹15,000 - ₹25,000 / month"
                  value={formData.expectedSalary}
                  onChange={(e) => setFormData({ ...formData, expectedSalary: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#F36B12]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#0B1F45] mb-1">Key Skills & Practical Capabilities</label>
              <textarea
                rows={2}
                placeholder="List technical tools (Tally, MS Excel, AutoCAD), machine operations, sales experience, driving license, languages known, etc."
                value={formData.keySkills}
                onChange={(e) => setFormData({ ...formData, keySkills: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#F36B12]"
              />
            </div>

            {/* Honest Disclosure & Privacy Consent */}
            <div className="p-3 bg-amber-50/70 border border-amber-200/80 rounded-lg space-y-2 text-[11px] text-slate-700">
              <p>
                <strong>Transparency & Service Policy:</strong> Registration with KSU Placement Support enables us to consider you for vacancies matching your stated profile. KSU Placement Support does not guarantee employment, fixed salary, or interview calls, as hiring decisions remain at the sole discretion of employers. Applicable service terms or placement charges (if any) are communicated prior to signing any service agreement.
              </p>
              <label className="flex items-start gap-2 pt-1 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.consentAgreed}
                  onChange={(e) => setFormData({ ...formData, consentAgreed: e.target.checked })}
                  className="mt-0.5 rounded text-[#F36B12] focus:ring-[#F36B12]"
                />
                <span>
                  I authorize KSU Placement Support to review my details and share relevant qualifications with verified employers solely for interview coordination purposes. *
                </span>
              </label>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={resetAndClose}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 text-xs font-bold text-white bg-[#0B1F45] hover:bg-[#F36B12] rounded-lg transition-colors shadow-md flex items-center gap-2"
              >
                <Send className="w-4 h-4" /> Register Profile
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

// 3. TRAINING ENQUIRY MODAL
export const TrainingModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<TrainingEnquiryFormData>({
    organizationName: '',
    contactPerson: '',
    email: '',
    phone: '',
    trainingTopics: ['Employee Onboarding & Workplace Communication'],
    participantCount: '10-25',
    preferredTimeline: 'Within next 30 days',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const topicsList = [
    'Employee Onboarding Support',
    'Workplace Communication & Etiquette',
    'Professional Behaviour & Conduct',
    'Interview & Assessment Preparation',
    'Role-Related Skill Development',
    'Teamwork & Workplace Discipline',
    'HR Recruitment Coordination',
    'Frontline Supervisory Skills',
  ];

  const handleTopicToggle = (topic: string) => {
    if (formData.trainingTopics.includes(topic)) {
      setFormData({
        ...formData,
        trainingTopics: formData.trainingTopics.filter((t) => t !== topic),
      });
    } else {
      setFormData({
        ...formData,
        trainingTopics: [...formData.trainingTopics, topic],
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-xl my-8 bg-white rounded-2xl shadow-2xl border border-[#D8AC55]/30 overflow-hidden">
        <div className="bg-[#0B1F45] text-white px-6 py-5 flex items-center justify-between border-b-2 border-[#F36B12]">
          <div>
            <h3 className="text-lg font-bold text-[#FFF7E9] font-cinzel">Request HR & Employee Training</h3>
            <p className="text-xs text-amber-200/80">Develop People · Strengthen Performance</p>
          </div>
          <button onClick={onClose} className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-white/10">
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center bg-[#FFF7E9]/40">
            <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
            <h4 className="text-lg font-bold text-[#0B1F45] font-cinzel mb-2">Training Request Submitted</h4>
            <p className="text-sm text-slate-600 mb-6">
              Thank you, {formData.contactPerson}. Our training coordinator will connect with your organization to review customized modules and schedules.
            </p>
            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="px-6 py-2 text-xs font-semibold text-white bg-[#0B1F45] hover:bg-[#F36B12] rounded-lg"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 max-h-[75vh] overflow-y-auto space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#0B1F45] mb-1">Organization Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Company name"
                  value={formData.organizationName}
                  onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#F36B12]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#0B1F45] mb-1">Contact Person *</label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={formData.contactPerson}
                  onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#F36B12]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#0B1F45] mb-1">Contact Phone *</label>
                <input
                  type="tel"
                  required
                  placeholder="Mobile number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#F36B12]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#0B1F45] mb-1">Official Email</label>
                <input
                  type="email"
                  placeholder="email@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#F36B12]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#0B1F45] mb-2">Select Training Areas</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {topicsList.map((topic) => (
                  <label key={topic} className="flex items-center gap-2 p-2 rounded-lg border border-slate-200 text-xs text-slate-700 hover:bg-[#FFF7E9] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.trainingTopics.includes(topic)}
                      onChange={() => handleTopicToggle(topic)}
                      className="rounded text-[#F36B12]"
                    />
                    <span>{topic}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#0B1F45] mb-1">Additional Needs or Audience Description</label>
              <textarea
                rows={2}
                placeholder="Mention number of trainees, department, or specific challenges..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg"
              />
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button type="button" onClick={onClose} className="px-4 py-2 text-xs font-semibold text-slate-600">
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 text-xs font-bold text-white bg-[#0B1F45] hover:bg-[#F36B12] rounded-lg shadow-sm"
              >
                Send Training Enquiry
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

// 4. OFFICIAL BRAND ASSET LIGHTBOX
export const AssetLightbox: React.FC<ModalProps & { assetType: 'poster' | 'card' | 'logo' }> = ({ isOpen, onClose, assetType }) => {
  if (!isOpen) return null;

  const imageMap = {
    poster: {
      src: '/assets/aistudio/Poster_d4d37d2a.jpeg',
      title: 'Official KSU Placement Support Pamphlet & Recruitment Process',
      desc: 'Our Official Recruitment, Sourcing & Verification Workflow Guide',
    },
    card: {
      src: '/assets/aistudio/Visiting_Card_Front_49aa3355.jpeg',
      title: 'Official KSU Placement Support Visiting Card',
      desc: 'Founder Kripa Shankar Upadhyay & Placement Coordination Contacts',
    },
    logo: {
      src: '/assets/aistudio/Logo_PNG__1__d6730163.png',
      title: 'Official KSU Placement Support Brand Emblem',
      desc: 'Seva · Sanskar · Samarpan · Avsar | Better People, Stronger India',
    },
  };

  const current = imageMap[assetType] || imageMap.poster;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div className="relative max-w-2xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl p-4 text-center" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-3">
          <div className="text-left">
            <h4 className="text-sm font-bold text-[#0B1F45] font-cinzel">{current.title}</h4>
            <p className="text-xs text-slate-500">{current.desc}</p>
          </div>
          <button onClick={onClose} className="p-1 text-slate-500 hover:text-slate-800">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="max-h-[75vh] flex items-center justify-center overflow-auto bg-slate-50 p-2 rounded-xl">
          <img
            src={current.src}
            alt={current.title}
            className="max-h-[70vh] object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

// 5. PRIVACY POLICY & ETHICAL PLACEMENT TERMS MODAL
export const PolicyModal: React.FC<ModalProps & { tab: 'privacy' | 'terms' }> = ({ isOpen, onClose, tab: initialTab }) => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>(initialTab);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-2xl my-8 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        <div className="bg-[#0B1F45] text-white px-6 py-4 flex items-center justify-between border-b-2 border-[#F36B12]">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#F36B12]" />
            <h3 className="text-base font-bold text-[#FFF7E9] font-cinzel">Policies & Disclosures</h3>
          </div>
          <button onClick={onClose} className="p-1.5 text-slate-300 hover:text-white rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex border-b border-slate-200 bg-slate-50 px-6 pt-3 gap-4 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`pb-2.5 transition-colors border-b-2 ${
              activeTab === 'privacy'
                ? 'border-[#F36B12] text-[#F36B12]'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Candidate Privacy Notice
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            className={`pb-2.5 transition-colors border-b-2 ${
              activeTab === 'terms'
                ? 'border-[#F36B12] text-[#F36B12]'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Placement Terms & Disclosure
          </button>
        </div>

        <div className="p-6 max-h-[65vh] overflow-y-auto text-xs text-slate-700 space-y-4 leading-relaxed">
          {activeTab === 'privacy' ? (
            <>
              <h4 className="text-sm font-bold text-[#0B1F45]">1. Data Collection & Purpose</h4>
              <p>
                KSU Placement Support collects candidate data (including full name, contact details, educational qualifications, prior employment records, and skills) solely for the purpose of career counseling, profile evaluation, and matching with prospective employers.
              </p>
              <h4 className="text-sm font-bold text-[#0B1F45]">2. Non-Disclosure & Consent</h4>
              <p>
                We do not publicly expose or publish candidate resumes, phone numbers, or identity documents. Profiles are shared with verified employer partners only after candidate knowledge and for relevant job vacancies.
              </p>
              <h4 className="text-sm font-bold text-[#0B1F45]">3. Document Verification Scope</h4>
              <p>
                Preliminary checks of candidate-provided educational certificates and experience letters are conducted subject to authorization and document availability. External background or statutory verifications requiring third-party agencies are identified explicitly.
              </p>
              <h4 className="text-sm font-bold text-[#0B1F45]">4. Candidate Rights</h4>
              <p>
                Candidates may request updates or removal of their profile from our active matching registry at any time by contacting us at <strong>ksuplacementsupport@gmail.com</strong> or calling our coordination desk.
              </p>
            </>
          ) : (
            <>
              <h4 className="text-sm font-bold text-[#0B1F45]">1. Realistic Expectations & Non-Guarantee</h4>
              <p>
                KSU Placement Support acts as an intermediary connecting job seekers with hiring organizations. We do not claim or guarantee employment, selection, specific salary packages, or interview outcomes. Final hiring decisions rest solely with prospective employers.
              </p>
              <h4 className="text-sm font-bold text-[#0B1F45]">2. Placement Fees & Transparency</h4>
              <p>
                Any applicable candidate placement coordination fee or employer service fee is disclosed in full prior to candidate acceptance of any written service arrangement. No concealed charges are levied.
              </p>
              <h4 className="text-sm font-bold text-[#0B1F45]">3. Authentic Representation</h4>
              <p>
                Candidates are required to provide genuine and verifiable documents. Any misrepresentation or counterfeit certificate will result in immediate termination of placement coordination.
              </p>
              <h4 className="text-sm font-bold text-[#0B1F45]">4. Geographic Coverage</h4>
              <p>
                KSU operates primarily from Raipur, Chhattisgarh, coordinating placements across industrial areas of Chhattisgarh and partnering employers nationwide across India.
              </p>
            </>
          )}
        </div>

        <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-[#0B1F45] hover:bg-[#F36B12] rounded-lg"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
};
