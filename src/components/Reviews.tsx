import React, { useState, useRef, useMemo } from 'react';
import { REVIEWS, ReviewItem } from '../data/content';
import { Sparkles, ChevronLeft, ChevronRight, MessageSquareHeart, HeartPulse, Compass, Star, ShieldCheck } from 'lucide-react';
import muktaStoryPhoto from '../assets/images/mukta_saree_reading_1790319437505.jpg';

export const Reviews: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'tarot' | 'health'>('tarot');
  const [mobileIndex, setMobileIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const tarotCount = useMemo(() => REVIEWS.filter(r => r.category === 'tarot').length, []);
  const healthCount = useMemo(() => REVIEWS.filter(r => r.category === 'health').length, []);

  const filteredReviews = useMemo(() => {
    return REVIEWS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const handleCategoryChange = (cat: 'tarot' | 'health') => {
    setSelectedCategory(cat);
    setMobileIndex(0);
  };

  const handleNextMobile = () => {
    if (filteredReviews.length === 0) return;
    setMobileIndex((prev) => (prev + 1) % filteredReviews.length);
  };

  const handlePrevMobile = () => {
    if (filteredReviews.length === 0) return;
    setMobileIndex((prev) => (prev - 1 + filteredReviews.length) % filteredReviews.length);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 40) handleNextMobile();
    if (diff < -40) handlePrevMobile();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section id="reviews" className="w-full flex justify-center py-16 sm:py-20 md:py-24 bg-[#F7EDE6]/40 border-y border-[#3E2F3A]/5 scroll-mt-24">
      <div className="max-w-7xl 2xl:max-w-[1500px] w-full mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#C9A45C]/30 text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#C9A45C] mb-3 shadow-xs">
            <Star className="w-4 h-4 text-[#E8912D] fill-[#E8912D]" />
            <span>Verified Client Feedback</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#3E2F3A] mt-2">
            Words of Trust & Healing
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#3E2F3A]/70 mt-2">
            Genuine experiences from clients across intuitive tarot readings and cellular wellness guidance.
          </p>

          {/* Category Tabs: Tarot vs Cellular Health */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-6">
            <button
              onClick={() => handleCategoryChange('tarot')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 shadow-xs cursor-pointer ${
                selectedCategory === 'tarot'
                  ? 'bg-[#3E2F3A] text-[#F5D899] shadow-md scale-102 ring-2 ring-[#C9A45C]/50'
                  : 'bg-white text-[#3E2F3A]/75 hover:bg-white/90 hover:text-[#3E2F3A] border border-[#3E2F3A]/10'
              }`}
            >
              <Compass className={`w-4 h-4 ${selectedCategory === 'tarot' ? 'text-[#F5D899]' : 'text-[#876EB2]'}`} />
              <span>Tarot Client Reviews</span>
              <span className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
                selectedCategory === 'tarot' ? 'bg-[#F5D899]/20 text-[#F5D899]' : 'bg-[#3E2F3A]/10 text-[#3E2F3A]/70'
              }`}>
                {tarotCount}
              </span>
            </button>

            <button
              onClick={() => handleCategoryChange('health')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 shadow-xs cursor-pointer ${
                selectedCategory === 'health'
                  ? 'bg-[#1C3B2B] text-[#A3E3B6] shadow-md scale-102 ring-2 ring-[#5B8556]/50'
                  : 'bg-white text-[#3E2F3A]/75 hover:bg-white/90 hover:text-[#3E2F3A] border border-[#3E2F3A]/10'
              }`}
            >
              <HeartPulse className={`w-4 h-4 ${selectedCategory === 'health' ? 'text-[#A3E3B6]' : 'text-[#5B8556]'}`} />
              <span>Cellular Health Reviews</span>
              <span className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
                selectedCategory === 'health' ? 'bg-[#A3E3B6]/20 text-[#A3E3B6]' : 'bg-[#3E2F3A]/10 text-[#3E2F3A]/70'
              }`}>
                {healthCount}
              </span>
            </button>
          </div>
        </div>

        {/* MOBILE VIEW: 3D Stack Card Carousel */}
        <div className="block md:hidden mb-6">
          <div 
            className="relative h-[430px] w-full max-w-[340px] mx-auto perspective-[1000px]"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {filteredReviews.length === 0 ? (
              <div className="bg-white rounded-2xl p-6 text-center text-[#3E2F3A]/70 border border-[#3E2F3A]/10">
                No reviews found for this filter.
              </div>
            ) : (
              filteredReviews.map((rev, idx) => {
                let stackPos = idx - mobileIndex;
                if (stackPos < 0) stackPos += filteredReviews.length;

                if (stackPos > 2) return null;

                const isTop = stackPos === 0;
                
                // Color themes
                const isHealth = rev.category === 'health';
                let cardBg = 'bg-[#401217]';
                let borderColor = 'border-[#69242E]';
                let scriptColor = 'text-[#F5D899]';
                let badgeBg = 'bg-[#F5D899]/15 text-[#F5D899]';

                if (isHealth) {
                  cardBg = 'bg-[#0E281E]';
                  borderColor = 'border-[#1C4A37]';
                  scriptColor = 'text-[#A3E3B6]';
                  badgeBg = 'bg-[#A3E3B6]/15 text-[#A3E3B6]';
                } else if (rev.themeColor === 'navy') {
                  cardBg = 'bg-[#121B33]';
                  borderColor = 'border-[#2B3960]';
                  scriptColor = 'text-[#E2C382]';
                  badgeBg = 'bg-[#E2C382]/15 text-[#E2C382]';
                }

                const translateY = stackPos * 12;
                const scale = 1 - stackPos * 0.05;
                const zIndex = 10 - stackPos;
                const opacity = 1 - stackPos * 0.2;
                const rotate = stackPos === 1 ? '1.5deg' : stackPos === 2 ? '-1.5deg' : '0deg';

                return (
                  <div
                    key={rev.id}
                    onClick={() => !isTop && handleNextMobile()}
                    style={{
                      transform: `translate3d(0, ${translateY}px, 0) scale(${scale}) rotate(${rotate})`,
                      zIndex,
                      opacity,
                      willChange: 'transform, opacity',
                      transition: 'transform 0.35s cubic-bezier(0.2, 0.9, 0.4, 1.1), opacity 0.35s ease',
                    }}
                    className={`absolute inset-0 ${cardBg} ${borderColor} border-2 rounded-2xl p-5 text-white shadow-2xl flex flex-col justify-between overflow-hidden cursor-pointer ${
                      isTop ? 'ring-2 ring-[#E8912D]/40' : 'pointer-events-auto filter brightness-95'
                    }`}
                  >
                    <div className="absolute top-2 right-3 text-white/10 pointer-events-none select-none">
                      ✦
                    </div>

                    <div>
                      {/* Header */}
                      <div className="flex items-center justify-between pb-2.5 border-b border-white/15 mb-3">
                        <div className="flex items-center gap-2">
                          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase ${badgeBg}`}>
                            {isHealth ? 'Cellular Wellness' : 'Tarot Guidance'}
                          </span>
                        </div>
                        <div className="w-8 h-8 rounded-full overflow-hidden border border-white/30 shrink-0">
                          <img
                            src={muktaStoryPhoto}
                            alt="Mukta Bhatnagar"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Message Bubble */}
                      <div className="bg-white text-[#2B2B2B] rounded-xl p-3.5 shadow-md relative text-xs leading-relaxed max-h-[220px] overflow-y-auto">
                        <p className="whitespace-pre-line font-normal">
                          "{rev.text}"
                        </p>
                        <div className="flex items-center justify-between gap-1 mt-2.5 pt-2 border-t border-gray-100 text-[10px] text-gray-500 font-medium">
                          <span className="flex items-center gap-1 text-emerald-700">
                            <ShieldCheck className="w-3 h-3" />
                            <span>Verified Review</span>
                          </span>
                          <span className="text-red-500">❤️</span>
                        </div>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="pt-2 flex items-center justify-between border-t border-white/10">
                      <span className={`font-script text-2xl ${scriptColor} tracking-wider`}>
                        {rev.clientName}
                      </span>
                      <span className="text-[10px] text-white/70 font-sans uppercase tracking-widest">
                        {rev.roleOrNote}
                      </span>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Mobile 3D Stack Controls */}
          {filteredReviews.length > 0 && (
            <div className="flex items-center justify-between max-w-[320px] mx-auto mt-6 px-2">
              <button
                onClick={handlePrevMobile}
                className="w-10 h-10 rounded-full bg-white border border-[#3E2F3A]/15 text-[#3E2F3A] flex items-center justify-center shadow-xs active:scale-90 transition-transform"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="text-xs text-[#3E2F3A]/70 font-medium">
                <span className="text-[#E8912D] font-bold">{mobileIndex + 1}</span> of {filteredReviews.length}
              </div>

              <button
                onClick={handleNextMobile}
                className="w-10 h-10 rounded-full bg-white border border-[#3E2F3A]/15 text-[#3E2F3A] flex items-center justify-center shadow-xs active:scale-90 transition-transform"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        {/* TABLET & DESKTOP: Multi-Column Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredReviews.map((rev) => {
            const isHealth = rev.category === 'health';
            let cardBg = 'bg-[#401217]';
            let borderColor = 'border-[#69242E]';
            let scriptColor = 'text-[#F5D899]';
            let badgeBg = 'bg-[#F5D899]/15 text-[#F5D899]';

            if (isHealth) {
              cardBg = 'bg-[#0E281E]';
              borderColor = 'border-[#1C4A37]';
              scriptColor = 'text-[#A3E3B6]';
              badgeBg = 'bg-[#A3E3B6]/15 text-[#A3E3B6]';
            } else if (rev.themeColor === 'navy') {
              cardBg = 'bg-[#121B33]';
              borderColor = 'border-[#2B3960]';
              scriptColor = 'text-[#E2C382]';
              badgeBg = 'bg-[#E2C382]/15 text-[#E2C382]';
            }

            return (
              <div
                key={rev.id}
                className={`${cardBg} ${borderColor} border-2 rounded-2xl p-5 sm:p-6 text-white shadow-xl shadow-[#3E2F3A]/15 flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl group`}
              >
                <div className="absolute top-2 right-3 text-white/10 pointer-events-none select-none">
                  ✦
                </div>

                <div>
                  {/* Poster Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/15 mb-4">
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase ${badgeBg}`}>
                      {isHealth ? 'Cellular Wellness' : 'Tarot Guidance'}
                    </span>
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-white/30 shrink-0">
                      <img
                        src={muktaStoryPhoto}
                        alt="Mukta Bhatnagar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Message Bubble */}
                  <div className="bg-white text-[#2B2B2B] rounded-xl p-4 sm:p-4.5 shadow-md relative text-xs sm:text-[13px] leading-relaxed mb-4">
                    <p className="whitespace-pre-line font-normal">
                      "{rev.text}"
                    </p>
                    
                    <div className="flex items-center justify-between gap-1 mt-3 pt-2.5 border-t border-gray-100 text-[10px] text-gray-500 font-medium">
                      <span className="flex items-center gap-1 text-emerald-700">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>Verified Client Feedback</span>
                      </span>
                      <span className="text-red-500 text-xs">❤️</span>
                    </div>
                  </div>
                </div>

                {/* Footer with client name */}
                <div className="pt-2 flex items-center justify-between border-t border-white/10">
                  <span className={`font-script text-2xl sm:text-3xl ${scriptColor} tracking-wider`}>
                    {rev.clientName}
                  </span>
                  <span className="text-[11px] text-white/70 font-sans uppercase tracking-widest">
                    {rev.roleOrNote}
                  </span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Genuine reviews footnote banner */}
        <div className="mt-10 max-w-2xl mx-auto text-center p-4 rounded-2xl bg-white/70 border border-[#3E2F3A]/10 text-xs text-[#3E2F3A]/75 flex flex-col sm:flex-row items-center justify-center gap-2 shadow-xs">
          <MessageSquareHeart className="w-4 h-4 text-[#E8912D] shrink-0" />
          <span>Every testimonial is 100% genuine, received directly from in-person sanctuary sessions and online consultations.</span>
        </div>

      </div>
    </section>
  );
};
