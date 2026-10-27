import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { ForEmployers } from './components/ForEmployers';
import { ForCandidates } from './components/ForCandidates';
import { JobOpenings } from './components/JobOpenings';
import { TalentNetwork } from './components/TalentNetwork';
import { Process } from './components/Process';
import { Training } from './components/Training';
import { WhyKSU } from './components/WhyKSU';
import { ReachMap } from './components/ReachMap';
import { TestimonialsNotice } from './components/TestimonialsNotice';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { GoogleSheetsManager } from './components/GoogleSheetsManager';
import { FileSpreadsheet } from 'lucide-react';
import { getQueuedSubmissions } from './services/googleSheets';
import {
  HiringModal,
  CandidateModal,
  TrainingModal,
  AssetLightbox,
  PolicyModal,
} from './components/Modals';

export default function App() {
  const [isHiringOpen, setIsHiringOpen] = useState(false);
  const [hiringInitialRole, setHiringInitialRole] = useState('');

  const [isCandidateOpen, setIsCandidateOpen] = useState(false);
  const [candidateInitialDomain, setCandidateInitialDomain] = useState('');

  const [isTrainingOpen, setIsTrainingOpen] = useState(false);

  const [lightboxAsset, setLightboxAsset] = useState<'poster' | 'card' | 'logo' | null>(null);

  const [policyModalTab, setPolicyModalTab] = useState<'privacy' | 'terms' | null>(null);

  const [isGoogleSheetsOpen, setIsGoogleSheetsOpen] = useState(false);
  const [queueCount, setQueueCount] = useState(0);

  useEffect(() => {
    const updateQueue = () => {
      setQueueCount(getQueuedSubmissions().length);
    };
    updateQueue();
    const interval = setInterval(updateQueue, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleOpenHiring = (role?: string) => {
    setHiringInitialRole(role || '');
    setIsHiringOpen(true);
  };

  const handleOpenCandidate = (domain?: string) => {
    setCandidateInitialDomain(domain || '');
    setIsCandidateOpen(true);
  };

  const handleOpenTraining = () => {
    setIsTrainingOpen(true);
  };

  const handleOpenAssetViewer = (type: 'poster' | 'card' | 'logo') => {
    setLightboxAsset(type);
  };

  const handleOpenPolicy = (tab: 'privacy' | 'terms') => {
    setPolicyModalTab(tab);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF7E9] text-[#0B1F45] antialiased">
      {/* Top Navigation */}
      <Header
        onOpenHiringModal={() => handleOpenHiring()}
        onOpenCandidateModal={() => handleOpenCandidate()}
        onOpenGoogleSheets={() => setIsGoogleSheetsOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onOpenHiringModal={() => handleOpenHiring()}
          onOpenCandidateModal={() => handleOpenCandidate()}
          onOpenAssetViewer={handleOpenAssetViewer}
        />

        <About onOpenAssetViewer={handleOpenAssetViewer} />

        <Services
          onOpenHiringModal={handleOpenHiring}
          onOpenCandidateModal={handleOpenCandidate}
          onOpenTrainingModal={handleOpenTraining}
        />

        <ForEmployers onOpenHiringModal={handleOpenHiring} />

        <ForCandidates
          onOpenCandidateModal={handleOpenCandidate}
          onOpenPolicyModal={handleOpenPolicy}
        />

        <JobOpenings onOpenCandidateModal={handleOpenCandidate} />

        <TalentNetwork onOpenHiringModal={handleOpenHiring} />

        <Process />

        <Training onOpenTrainingModal={handleOpenTraining} />

        <WhyKSU />

        <ReachMap />

        <TestimonialsNotice />

        <FAQ
          onOpenPolicyModal={handleOpenPolicy}
          onOpenCandidateModal={() => handleOpenCandidate()}
          onOpenHiringModal={() => handleOpenHiring()}
        />

        <Contact
          onOpenHiringModal={() => handleOpenHiring()}
          onOpenCandidateModal={() => handleOpenCandidate()}
          onOpenTrainingModal={handleOpenTraining}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenPolicyModal={handleOpenPolicy}
        onOpenAssetViewer={handleOpenAssetViewer}
        onOpenGoogleSheets={() => setIsGoogleSheetsOpen(true)}
      />

      {/* Floating Google Sheets Quick Sync Badge */}
      <div className="fixed bottom-4 right-4 z-30">
        <button
          onClick={() => setIsGoogleSheetsOpen(true)}
          className="bg-[#0B1F45] text-white hover:bg-[#F36B12] border border-emerald-400/50 shadow-xl px-3.5 py-2 rounded-full flex items-center gap-2 text-xs font-bold transition-all hover:scale-105 cursor-pointer"
          title="Open Google Sheets Integration Panel"
        >
          <div className="relative">
            <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
            {queueCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-rose-500 text-white text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">
                {queueCount}
              </span>
            )}
          </div>
          <span className="hidden sm:inline">Google Sheet Sync</span>
        </button>
      </div>

      {/* Global Modals & Lightboxes */}
      <HiringModal
        isOpen={isHiringOpen}
        onClose={() => setIsHiringOpen(false)}
        initialRole={hiringInitialRole}
        onOpenGoogleSheets={() => setIsGoogleSheetsOpen(true)}
      />

      <CandidateModal
        isOpen={isCandidateOpen}
        onClose={() => setIsCandidateOpen(false)}
        initialDomain={candidateInitialDomain}
        onOpenGoogleSheets={() => setIsGoogleSheetsOpen(true)}
      />

      <TrainingModal
        isOpen={isTrainingOpen}
        onClose={() => setIsTrainingOpen(false)}
      />

      <AssetLightbox
        isOpen={lightboxAsset !== null}
        onClose={() => setLightboxAsset(null)}
        assetType={lightboxAsset || 'poster'}
      />

      <PolicyModal
        isOpen={policyModalTab !== null}
        onClose={() => setPolicyModalTab(null)}
        tab={policyModalTab || 'privacy'}
      />

      {/* Google Sheets Management Modal */}
      <GoogleSheetsManager
        isOpen={isGoogleSheetsOpen}
        onClose={() => setIsGoogleSheetsOpen(false)}
      />
    </div>
  );
}
