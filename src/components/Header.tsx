import React, { useState } from 'react';
import { Menu, X, Phone, UserCheck, Briefcase } from 'lucide-react';

interface HeaderProps {
  onOpenHiringModal: () => void;
  onOpenCandidateModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenHiringModal,
  onOpenCandidateModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'For Employers', href: '#employers' },
    { label: 'For Candidates', href: '#candidates' },
    { label: 'Opportunities', href: '#opportunities' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0B1F45]/95 backdrop-blur-md border-b border-[#D8AC55]/30 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-6">
          {/* Zone 1: Single Brand element */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <img
              src="/assets/aistudio/Logo_PNG__1__d6730163.png"
              alt="KSU Placement Support Logo"
              className="w-12 h-12 object-contain rounded-full bg-white/10 p-1 border border-[#D8AC55]/50 group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold tracking-tight text-[#FFF7E9] font-cinzel leading-tight">
                KSU PLACEMENT SUPPORT
              </span>
              <span className="text-[10px] tracking-widest text-[#D8AC55] font-semibold uppercase">
                Better People, Stronger India
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (single line, subtle hover) */}
          <nav className="hidden lg:flex items-center gap-6 text-xs xl:text-sm font-medium text-slate-200">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#F36B12] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-[#F36B12]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Actions */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <button
              onClick={onOpenCandidateModal}
              className="px-3.5 py-2 text-xs font-semibold text-[#FFF7E9] hover:text-white border border-[#D8AC55]/50 hover:border-[#D8AC55] rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5"
            >
              <UserCheck className="w-3.5 h-3.5 text-[#F36B12]" />
              <span>Apply for Jobs</span>
            </button>
            <button
              onClick={onOpenHiringModal}
              className="px-4 py-2 text-xs font-bold text-white bg-[#F36B12] hover:bg-[#D94716] rounded-lg shadow-sm transition-all whitespace-nowrap flex items-center gap-1.5 hover:shadow-orange-900/30"
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Hire Talent</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenHiringModal}
              className="px-3 py-1.5 text-xs font-bold text-white bg-[#F36B12] rounded-md sm:hidden whitespace-nowrap"
            >
              Hire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-200 hover:text-white rounded-lg focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B1F45] border-t border-[#D8AC55]/30 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="flex flex-col space-y-2 pb-3 border-b border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-[#F36B12] hover:bg-white/5 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCandidateModal();
              }}
              className="w-full py-2.5 text-xs font-semibold text-center text-[#FFF7E9] border border-[#D8AC55]/60 rounded-lg hover:bg-white/5 flex items-center justify-center gap-1.5"
            >
              <UserCheck className="w-3.5 h-3.5 text-[#F36B12]" />
              <span>Apply for Jobs</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenHiringModal();
              }}
              className="w-full py-2.5 text-xs font-bold text-center text-white bg-[#F36B12] rounded-lg hover:bg-[#D94716] flex items-center justify-center gap-1.5 shadow-sm"
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Hire Talent</span>
            </button>
          </div>

          <div className="pt-2 text-center text-xs text-amber-200/80">
            <a href="tel:6232506700" className="inline-flex items-center gap-1 text-[#F36B12] font-semibold">
              <Phone className="w-3.5 h-3.5" /> Call Director: 6232506700
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
