import React from 'react';
import {
  CheckCircle,
  Factory,
  Building,
  BadgePercent,
  Calculator,
  UserCheck2,
  Truck,
  Wrench,
  Users2,
  ArrowRight,
  ShieldCheck,
  Clock,
  Sparkles
} from 'lucide-react';

interface ForEmployersProps {
  onOpenHiringModal: (role?: string) => void;
}

export const ForEmployers: React.FC<ForEmployersProps> = ({ onOpenHiringModal }) => {
  const sectors = [
    { name: 'Manufacturing & Production', icon: Factory, note: 'Plant operators, supervisors, QC, technicians' },
    { name: 'Admin & Office Support', icon: Building, note: 'Office assistants, front desk, data entry, back office' },
    { name: 'Sales & Marketing', icon: BadgePercent, note: 'Field sales executives, B2B executives, store leads' },
    { name: 'Accounts & Finance', icon: Calculator, note: 'Tally operators, accountants, billing & audit staff' },
    { name: 'HR & Administration', icon: UserCheck2, note: 'Recruitment coordinators, HR executives, office admins' },
    { name: 'Logistics & Supply Chain', icon: Truck, note: 'Warehouse in-charges, dispatch, inventory assistants' },
    { name: 'Technical Staff', icon: Wrench, note: 'ITI fitters, electricians, diploma engineers, maintenance' },
    { name: 'Skilled & Unskilled Staff', icon: Users2, note: 'Packing staff, machine helpers, security & general workforce' },
  ];

  const benefits = [
    'Candidate sourcing based precisely on your job requirements',
    'Preliminary profile and resume screening before interview referral',
    'Education, ID, and experience document review support',
    'Role-relevant skills and practical aptitude assessments where arranged',
    'Timely interview scheduling, briefing, and coordination',
    'Scalable recruitment and industrial manpower staffing assistance',
    'Customized HR and frontline employee training support',
    'Operational coverage across Raipur, Chhattisgarh & Indian hubs',
  ];

  return (
    <section id="employers" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#F36B12] uppercase tracking-widest mb-2">
            <span>Recruitment Solutions for Industry & Commerce</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1F45] tracking-tight font-cinzel mb-2">
            Find the Right Talent for Your Business
          </h2>
          <p className="text-base font-semibold text-[#D94716] font-cinzel mb-4">
            Your Workforce Requirements. Our Recruitment Support.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            We support businesses in identifying suitable candidates for their open positions. Based on the employer's requirements, candidate profiles can be reviewed for relevant education, experience, skills and available documentation before candidates are referred for interviews.
          </p>
        </div>

        {/* Featured Card: Retired Staff Replacement (From Official Pamphlet) */}
        <div className="bg-gradient-to-r from-[#0B1F45] via-[#122b5c] to-[#0B1F45] rounded-2xl p-6 sm:p-8 text-white mb-12 shadow-lg border border-[#D8AC55]/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#F36B12]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#F36B12] text-white text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                Featured Solution from KSU
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-cinzel text-[#FFF7E9] mb-2">
                RETIRED STAFF? WE PROVIDE THE RIGHT REPLACEMENT!
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-2xl">
                We understand your need. When an experienced employee retires, your business continuity is our priority. We assist in identifying and screening qualified, dependable candidates ready to contribute with minimal transition friction.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                onClick={() => onOpenHiringModal('Retired Staff Replacement')}
                className="w-full py-3 px-5 rounded-xl bg-[#F36B12] hover:bg-[#D94716] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Replacement Staff</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="tel:9039038220"
                className="w-full py-3 px-5 rounded-xl bg-white/10 hover:bg-white/15 text-[#FFF7E9] font-medium text-xs text-center border border-white/20 transition-colors"
              >
                Placement Desk: 9039038220
              </a>
            </div>
          </div>
        </div>

        {/* Sectors We Provide Staff For (Direct from official poster) */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-[#0B1F45] font-cinzel">
                We Provide Sourcing & Placement Support For:
              </h3>
              <p className="text-xs text-slate-500">
                Tailored screening and candidate pools across 8 core industry verticals
              </p>
            </div>
            <span className="text-xs font-semibold text-[#F36B12] hidden sm:block">
              Raipur & Pan-India
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sectors.map((sec) => {
              const Icon = sec.icon;
              return (
                <div
                  key={sec.name}
                  onClick={() => onOpenHiringModal(sec.name)}
                  className="p-5 rounded-xl border border-slate-200 bg-[#FFF7E9]/30 hover:bg-white hover:border-[#F36B12] hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-white border border-[#D8AC55]/40 text-[#F36B12] flex items-center justify-center mb-3 group-hover:bg-[#0B1F45] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-[#0B1F45] group-hover:text-[#F36B12] transition-colors mb-1">
                      {sec.name}
                    </h4>
                    <p className="text-xs text-slate-600 leading-snug">
                      {sec.note}
                    </p>
                  </div>
                  <div className="mt-4 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-[#D94716] font-semibold">
                    <span>Hire for this role</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Benefits Grid & Call to Action */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50 rounded-2xl p-6 sm:p-10 border border-slate-200">
          <div className="lg:col-span-8">
            <h3 className="text-xl font-bold text-[#0B1F45] font-cinzel mb-4">
              Why Partner with KSU Placement Support for Hiring?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
              {benefits.map((b) => (
                <div key={b} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#F36B12] shrink-0 mt-0.5" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 bg-white p-6 rounded-xl border border-[#D8AC55]/50 shadow-sm text-center">
            <h4 className="text-base font-bold text-[#0B1F45] font-cinzel mb-1">
              Need Staff for Your Business?
            </h4>
            <p className="text-xs text-slate-600 mb-5">
              Submit your vacant job designations, expected experience, and joining schedule.
            </p>
            <button
              onClick={() => onOpenHiringModal()}
              className="w-full py-3 px-4 rounded-xl bg-[#0B1F45] hover:bg-[#F36B12] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Share Your Hiring Requirement</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-[10px] text-slate-400 mt-3">
              No public exposure of hiring plans without authorization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
