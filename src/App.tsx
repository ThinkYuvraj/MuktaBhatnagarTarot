/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageLoader } from './components/PageLoader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { YouTubeSection } from './components/YouTubeSection';
import { TwoServices } from './components/TwoServices';
import { Pricing } from './components/Pricing';
import { Story } from './components/Story';
import { Reviews } from './components/Reviews';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { SpiritualInsights } from './components/SpiritualInsights';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FullStoryModal } from './components/FullStoryModal';
import { PaymentModal } from './components/PaymentModal';
import { CookieConsent } from './components/CookieConsent';
import { ServicePackage } from './data/content';

export default function App() {
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<ServicePackage | undefined>(undefined);

  const handleOpenPayment = (pkg?: ServicePackage) => {
    setSelectedPackage(pkg);
    setIsPaymentModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FBF7F0] text-[#3E2F3A] flex flex-col font-sans selection:bg-[#B9A6D6]/30 selection:text-[#3E2F3A] overflow-x-hidden">
      {/* Website Entrance Celestial Loading Animation */}
      <PageLoader />

      {/* 1. Header & Navigation */}
      <Navbar onOpenPayment={() => handleOpenPayment()} />

      {/* Main Content Sections: Reordered per user flow */}
      <main className="w-full flex-grow flex flex-col items-center">
        {/* 1. Top Hero: photo, "Seek Clarity, Find Answers", WhatsApp + Call buttons */}
        <Hero />

        {/* 2. Reviews: actual testimonial poster cards */}
        <Reviews />

        {/* 3. My Story: 3–4 lines + qualification chips + “Read full story” */}
        <Story onOpenFullStory={() => setIsStoryModalOpen(true)} />

        {/* 4. Services: Tarot Guidance and Health & Wellness */}
        <TwoServices />

        {/* 5. YouTube Video: featured reading and insights */}
        <YouTubeSection />

        {/* 6. Book Your Consultation / Pricing packages */}
        <Pricing onOpenPaymentModal={handleOpenPayment} />

        {/* 7. Gallery: sanctuary, altar & reading setup */}
        <Gallery />

        {/* 8. Book a Session / Contact */}
        <Contact />

        {/* Spiritual Insights & FAQ sections */}
        <SpiritualInsights />
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <FullStoryModal
        isOpen={isStoryModalOpen}
        onClose={() => setIsStoryModalOpen(false)}
      />

      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        selectedPackage={selectedPackage}
      />

      {/* Cookie Consent Banner & Preferences */}
      <CookieConsent />
    </div>
  );
}
