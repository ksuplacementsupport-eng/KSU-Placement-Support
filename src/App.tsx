import React, { useState } from 'react';
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
      />

      {/* Global Modals & Lightboxes */}
      <HiringModal
        isOpen={isHiringOpen}
        onClose={() => setIsHiringOpen(false)}
        initialRole={hiringInitialRole}
      />

      <CandidateModal
        isOpen={isCandidateOpen}
        onClose={() => setIsCandidateOpen(false)}
        initialDomain={candidateInitialDomain}
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
    </div>
  );
}
