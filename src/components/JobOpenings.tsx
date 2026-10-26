import React, { useState } from 'react';
import {
  Search,
  MapPin,
  Briefcase,
  GraduationCap,
  Clock,
  Filter,
  CheckCircle2,
  ArrowRight,
  Info,
  Calendar
} from 'lucide-react';
import { JobCategory } from '../types';

interface JobOpeningsProps {
  onOpenCandidateModal: (role?: string) => void;
}

export const JobOpenings: React.FC<JobOpeningsProps> = ({ onOpenCandidateModal }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');

  // Realistically grounded opening streams aligned with official poster verticals & Raipur industrial hubs
  const vacancies: JobCategory[] = [
    {
      id: 'ksu-01',
      title: 'Plant Operations & Machine Supervisor',
      sector: 'Manufacturing & Production',
      location: 'Raipur (Urla / Bhanpuri Industrial Area)',
      experience: '2 - 5 Years',
      type: 'Full Time',
      qualifications: 'Diploma / ITI / Degree in Technical Discipline',
      openingsEstimate: 'Multiple Vacancies',
      status: 'Immediate Requirement',
      description: 'Supervision of shift floor operations, raw material tracking, machine operating standards, and worker safety protocols in rolling mills and manufacturing units.',
    },
    {
      id: 'ksu-02',
      title: 'Accounts Executive / Tally Operator',
      sector: 'Accounts & Finance',
      location: 'Raipur (City Commercial Office)',
      experience: '1 - 4 Years',
      type: 'Full Time',
      qualifications: 'B.Com / M.Com with hands-on Tally Prime & GST billing',
      openingsEstimate: 'Active Requirement',
      status: 'Accepting Applications',
      description: 'Handling day-to-day daybook entries, vendor reconciliation, GST return assistance, bank payments, and monthly commercial statements.',
    },
    {
      id: 'ksu-03',
      title: 'Industrial Sales & Field Marketing Representative',
      sector: 'Sales & Marketing',
      location: 'Raipur & Chhattisgarh Belt',
      experience: '1 - 3 Years',
      type: 'Full Time (Field)',
      qualifications: 'Graduate / Any Stream with good communication',
      openingsEstimate: 'Multiple Vacancies',
      status: 'Immediate Requirement',
      description: 'B2B client visits, customer relationship development, industrial product inquiries, quotation follow-ups, and market lead generation.',
    },
    {
      id: 'ksu-04',
      title: 'Front Office & Administrative Assistant',
      sector: 'Admin & Office',
      location: 'Raipur, Chhattisgarh',
      experience: '0 - 3 Years (Freshers Considered)',
      type: 'Full Time',
      qualifications: '12th Pass / Graduate with basic computer & MS Office skills',
      openingsEstimate: 'Active Requirement',
      status: 'Screening Profiles',
      description: 'Managing office reception, inward/outward registers, telephonic coordination, email correspondence, and front-desk visitor management.',
    },
    {
      id: 'ksu-05',
      title: 'Warehouse & Logistics Coordinator',
      sector: 'Logistics & Supply Chain',
      location: 'Raipur / Tatibandh / Mandir Hasaud',
      experience: '1 - 4 Years',
      type: 'Full Time',
      qualifications: 'Graduate / 12th Pass with stock management background',
      openingsEstimate: 'Active Requirement',
      status: 'Accepting Applications',
      description: 'Inventory documentation, dispatch gate pass generation, vehicle loading coordination, and warehouse stock audits.',
    },
    {
      id: 'ksu-06',
      title: 'Technical Staff (ITI Electricians & Mechanical Fitters)',
      sector: 'Technical Staff',
      location: 'Raipur / Durg-Bhilai Industrial Zone',
      experience: '1 - 6 Years',
      type: 'Shift-Based / Full Time',
      qualifications: 'ITI Electrician / Fitter / Welder Certificate',
      openingsEstimate: 'Multiple Openings',
      status: 'Immediate Requirement',
      description: 'Preventive maintenance, motor repairs, wiring, industrial plant electrical troubleshooting, and machine assembly assistance.',
    },
    {
      id: 'ksu-07',
      title: 'HR & Personnel Operations Coordinator',
      sector: 'HR & Administration',
      location: 'Raipur Head Office / Client Sites',
      experience: '1 - 3 Years',
      type: 'Full Time',
      qualifications: 'MBA / BBA / Graduate with HR exposure',
      openingsEstimate: 'Active Requirement',
      status: 'Screening Profiles',
      description: 'Attendance tracking, shift scheduling, preliminary candidate documentation review, and contractor workforce administrative record-keeping.',
    },
    {
      id: 'ksu-08',
      title: 'Retired Staff Advisory & Operations Mentor',
      sector: 'Manufacturing & Production',
      location: 'Raipur & Pan-India',
      experience: 'Retired Industry Veterans / 15+ Years',
      type: 'Full Time / Advisory Retainer',
      qualifications: 'Senior Plant / Engineering / Commercial experience',
      openingsEstimate: 'Exclusive Sourcing',
      status: 'Immediate Requirement',
      description: 'Senior replacement opportunities for retired executives in manufacturing, plant operations, and logistics looking for dignified second careers.',
    },
  ];

  const sectors = ['All', 'Manufacturing & Production', 'Accounts & Finance', 'Sales & Marketing', 'Admin & Office', 'Logistics & Supply Chain', 'Technical Staff', 'HR & Administration'];
  const locations = ['All', 'Raipur (Urla / Bhanpuri Industrial Area)', 'Raipur (City Commercial Office)', 'Raipur & Chhattisgarh Belt', 'Raipur / Durg-Bhilai Industrial Zone', 'Raipur & Pan-India'];

  const filtered = vacancies.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.qualifications.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSector = selectedSector === 'All' || job.sector === selectedSector;
    const matchesLocation = selectedLocation === 'All' || job.location.includes(selectedLocation.replace('All', ''));
    return matchesSearch && matchesSector && matchesLocation;
  });

  return (
    <section id="opportunities" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#F36B12] uppercase tracking-widest mb-3">
            <span className="w-6 h-0.5 bg-[#F36B12]"></span>
            <span>Current Vacancy Streams</span>
            <span className="w-6 h-0.5 bg-[#F36B12]"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1F45] tracking-tight font-cinzel text-balance mb-3">
            Explore Career Opportunities
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Discover current job openings and explore opportunities that align with your skills, experience and career goals.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-[#FFF7E9] rounded-2xl p-4 sm:p-6 border border-[#D8AC55]/40 mb-10 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
              <input
                type="text"
                placeholder="Search job title, skills, or qualification..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-white border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#F36B12]"
              />
            </div>

            <div className="md:col-span-3">
              <select
                value={selectedSector}
                onChange={(e) => setSelectedSector(e.target.value)}
                className="w-full py-2.5 px-3 text-xs sm:text-sm bg-white border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#F36B12]"
              >
                {sectors.map((s) => (
                  <option key={s} value={s}>
                    {s === 'All' ? 'All Industry Sectors' : s}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-3">
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full py-2.5 px-3 text-xs sm:text-sm bg-white border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#F36B12]"
              >
                <option value="All">All Locations (Raipur & Pan-India)</option>
                <option value="Urla">Raipur (Urla Industrial Area)</option>
                <option value="Bhanpuri">Raipur (Bhanpuri Area)</option>
                <option value="Durg">Durg - Bhilai Belt</option>
                <option value="Pan-India">Pan-India Support</option>
              </select>
            </div>
          </div>
        </div>

        {/* Job Cards Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
            {filtered.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#F36B12]/60 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <span className="text-[11px] font-semibold text-[#D94716] uppercase tracking-wider block">
                        {job.sector}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-[#0B1F45] font-cinzel leading-snug">
                        {job.title}
                      </h3>
                    </div>
                    <span
                      className={`text-[10px] font-bold px-2.5 py-1 rounded-md shrink-0 ${
                        job.status === 'Immediate Requirement'
                          ? 'bg-rose-50 text-rose-700 border border-rose-200'
                          : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      }`}
                    >
                      {job.status}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {job.description}
                  </p>

                  <div className="space-y-2 text-xs text-slate-700 bg-slate-50 p-3 rounded-xl mb-4 border border-slate-100">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#F36B12] shrink-0" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-3.5 h-3.5 text-[#0B1F45] shrink-0" />
                      <span><strong>Qualification:</strong> {job.qualifications}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                      <span><strong>Experience:</strong> {job.experience} · <strong>Type:</strong> {job.type}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">
                    Employer: Authorized Partner Client
                  </span>
                  <button
                    onClick={() => onOpenCandidateModal(job.title)}
                    className="px-4 py-2 text-xs font-bold text-white bg-[#0B1F45] hover:bg-[#F36B12] rounded-lg transition-colors flex items-center gap-1.5 shadow-2xs cursor-pointer"
                  >
                    <span>Apply / Inquire Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 px-4 bg-slate-50 rounded-2xl border border-dashed border-slate-300 mb-10">
            <Info className="w-8 h-8 text-[#F36B12] mx-auto mb-2" />
            <p className="text-sm font-semibold text-[#0B1F45]">No direct openings matching your specific query.</p>
            <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
              New opportunities are added as they become available. Contact KSU Placement Support for current openings.
            </p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedSector('All'); setSelectedLocation('All'); }}
              className="mt-4 px-4 py-1.5 text-xs font-semibold text-[#F36B12] border border-[#F36B12]/40 rounded-lg hover:bg-[#F36B12]/5"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Clean Message as required by prompt */}
        <div className="bg-[#FFF7E9] rounded-xl p-5 border border-[#D8AC55]/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-[#F36B12] shrink-0" />
            <p className="text-slate-700">
              <strong>Notice on Vacancies:</strong> New opportunities are added as they become available from client employers. Contact KSU Placement Support directly to check instant openings or register your profile.
            </p>
          </div>
          <button
            onClick={() => onOpenCandidateModal()}
            className="shrink-0 px-4 py-2 rounded-lg bg-[#F36B12] hover:bg-[#D94716] text-white font-bold transition-colors shadow-2xs"
          >
            Register Profile for All Openings
          </button>
        </div>
      </div>
    </section>
  );
};
