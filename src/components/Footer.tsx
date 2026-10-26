import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenPolicyModal: (tab: 'privacy' | 'terms') => void;
  onOpenAssetViewer: (type: 'poster' | 'card' | 'logo') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPolicyModal, onOpenAssetViewer }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B1F45] text-slate-300 border-t-4 border-[#F36B12] pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/aistudio/Logo_PNG__1__d6730163.png"
                alt="KSU Placement Support Emblem"
                className="w-14 h-14 object-contain rounded-full bg-white/10 p-1 border border-[#D8AC55]/50"
              />
              <div>
                <h3 className="text-xl font-bold font-cinzel text-[#FFF7E9] tracking-tight">
                  KSU PLACEMENT SUPPORT
                </h3>
                <p className="text-xs font-semibold text-[#F36B12] tracking-wider uppercase">
                  Better People, Stronger India
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              We connect the right talent with the right opportunities. Dedicated to professional recruitment assistance, candidate profile screening, and workforce training support across Raipur, Chhattisgarh, and pan-India.
            </p>

            <div className="text-xs text-[#D8AC55] font-semibold tracking-wide">
              Seva • Sanskar • Samarpan • Avsar
            </div>

            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <button
                onClick={() => onOpenAssetViewer('card')}
                className="text-xs text-amber-200/80 hover:text-white underline underline-offset-2"
              >
                Official Visiting Card
              </button>
              <span className="text-white/20">·</span>
              <button
                onClick={() => onOpenAssetViewer('poster')}
                className="text-xs text-amber-200/80 hover:text-white underline underline-offset-2"
              >
                Recruitment Pamphlet
              </button>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D8AC55] font-cinzel">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#" className="hover:text-[#F36B12] transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#F36B12] transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F36B12] transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#employers" className="hover:text-[#F36B12] transition-colors">For Employers</a>
              </li>
              <li>
                <a href="#candidates" className="hover:text-[#F36B12] transition-colors">For Candidates</a>
              </li>
              <li>
                <a href="#opportunities" className="hover:text-[#F36B12] transition-colors">Career Opportunities</a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#F36B12] transition-colors">Our Process</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F36B12] transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Contact Directory (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D8AC55] font-cinzel">
              Official Contact Directory
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <p>
                <strong className="text-white">Founder & Director:</strong>{' '}
                <span>Kripa Shankar Upadhyay</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#F36B12]" />
                <span>Director: </span>
                <a href="tel:6232506700" className="text-[#FFF7E9] font-bold hover:text-[#F36B12]">
                  6232506700
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#F36B12]" />
                <span>Placement Team: </span>
                <a href="tel:9039038220" className="text-white hover:text-[#F36B12]">9039038220</a>
                <span>/</span>
                <a href="tel:9039038221" className="text-white hover:text-[#F36B12]">9039038221</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#F36B12]" />
                <a href="mailto:ksuplacementsupport@gmail.com" className="hover:text-[#F36B12] break-all">
                  ksuplacementsupport@gmail.com
                </a>
              </p>
              <p className="flex items-start gap-2 pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#F36B12] shrink-0 mt-0.5" />
                <span>Raipur, Chhattisgarh | Service Coverage: All Over India</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {currentYear} <strong>KSU Placement Support</strong>. All rights reserved.
          </div>

          <div className="flex items-center gap-4 text-xs">
            <button
              onClick={() => onOpenPolicyModal('privacy')}
              className="hover:text-[#FFF7E9] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => onOpenPolicyModal('terms')}
              className="hover:text-[#FFF7E9] transition-colors cursor-pointer"
            >
              Placement Terms & Conditions
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={scrollToTop}
              className="hover:text-[#F36B12] transition-colors inline-flex items-center gap-1 cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
