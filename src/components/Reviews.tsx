import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { REVIEWS } from '../data/content';
import { Sparkles, ChevronLeft, ChevronRight, MessageSquareHeart, HeartPulse, Compass, Star, ShieldCheck, Pause, Play } from 'lucide-react';
import muktaStoryPhoto from '../assets/images/mukta_saree_reading_1790319437505.jpg';

export const Reviews: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'tarot' | 'health'>('tarot');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(3);
  
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const tarotCount = useMemo(() => REVIEWS.filter(r => r.category === 'tarot').length, []);
  const healthCount = useMemo(() => REVIEWS.filter(r => r.category === 'health').length, []);

  const filteredReviews = useMemo(() => {
    return REVIEWS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  // Responsive items per view detection
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = useMemo(() => {
    return Math.max(0, filteredReviews.length - itemsPerView);
  }, [filteredReviews.length, itemsPerView]);

  // Ensure currentIndex stays within bounds when itemsPerView or category changes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(0);
    }
  }, [maxIndex, currentIndex]);

  const handleCategoryChange = (cat: 'tarot' | 'health') => {
    setSelectedCategory(cat);
    setCurrentIndex(0);
  };

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Auto swipe timer (every 4.5 seconds, pauses when user hovers or touches)
  useEffect(() => {
    if (isPaused || filteredReviews.length <= itemsPerView) {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
      return;
    }

    autoplayTimerRef.current = setInterval(() => {
      handleNext();
    }, 4500);

    return () => {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    };
  }, [isPaused, handleNext, filteredReviews.length, itemsPerView]);

  const onTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    setIsPaused(false);
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) handleNext();
    if (diff < -45) handlePrev();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section 
      id="reviews" 
      className="w-full flex justify-center py-16 sm:py-20 md:py-24 bg-[#F7EDE6]/40 border-y border-[#3E2F3A]/5 scroll-mt-24 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
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

        {/* AUTO-SWIPE CAROUSEL CONTAINER */}
        <div className="relative group/carousel px-2 sm:px-6 lg:px-10">
          
          {/* Caret Navigation Button - LEFT */}
          <button
            onClick={handlePrev}
            className="absolute left-0 sm:-left-2 lg:-left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 hover:bg-white text-[#3E2F3A] border border-[#3E2F3A]/15 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#3E2F3A]" />
          </button>

          {/* Caret Navigation Button - RIGHT */}
          <button
            onClick={handleNext}
            className="absolute right-0 sm:-right-2 lg:-right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 hover:bg-white text-[#3E2F3A] border border-[#3E2F3A]/15 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#3E2F3A]" />
          </button>

          {/* Carousel Viewport */}
          <div 
            className="overflow-hidden py-4"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div 
              className="flex transition-transform duration-600 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
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
                    className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-2 sm:px-3"
                  >
                    <div
                      className={`${cardBg} ${borderColor} border-2 rounded-2xl p-5 sm:p-6 text-white shadow-xl shadow-[#3E2F3A]/10 flex flex-col justify-between h-full min-h-[380px] sm:min-h-[400px] relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl`}
                    >
                      <div className="absolute top-2 right-3 text-white/10 pointer-events-none select-none text-base">
                        ✦
                      </div>

                      <div>
                        {/* Poster Header */}
                        <div className="flex items-center justify-between pb-3 border-b border-white/15 mb-4">
                          <span className={`px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wider uppercase ${badgeBg}`}>
                            {isHealth ? 'Cellular Wellness' : 'Tarot Guidance'}
                          </span>
                          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-white/30 shrink-0">
                            <img
                              src={muktaStoryPhoto}
                              alt="Mukta Bhatnagar"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>

                        {/* Message Bubble */}
                        <div className="bg-white text-[#2B2B2B] rounded-xl p-4 shadow-md relative text-xs sm:text-[13px] leading-relaxed mb-4">
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
                      <div className="pt-3 flex items-center justify-between border-t border-white/10 mt-auto">
                        <span className={`font-script text-2xl sm:text-3xl ${scriptColor} tracking-wider`}>
                          {rev.clientName}
                        </span>
                        <span className="text-[10px] sm:text-[11px] text-white/70 font-sans uppercase tracking-widest">
                          {rev.roleOrNote}
                        </span>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CAROUSEL BOTTOM CONTROLS (Pagination Dots & Auto-swipe indicator) */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 px-2">
            
            {/* Auto-swipe status badge */}
            <div className="flex items-center gap-2 text-xs text-[#3E2F3A]/60 font-medium">
              <span className={`w-2 h-2 rounded-full ${isPaused ? 'bg-amber-400' : 'bg-emerald-500 animate-pulse'}`} />
              <span>{isPaused ? 'Auto-swipe paused (hovering)' : 'Auto-swiping every 4.5s'}</span>
            </div>

            {/* Pagination Bullet Dots */}
            <div className="flex items-center justify-center gap-1.5">
              {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setCurrentIndex(dotIdx)}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === dotIdx
                      ? 'w-7 bg-[#E8912D]'
                      : 'w-2.5 bg-[#3E2F3A]/20 hover:bg-[#3E2F3A]/40'
                  }`}
                />
              ))}
            </div>

            {/* Counter */}
            <div className="text-xs text-[#3E2F3A]/70 font-medium">
              Card <span className="text-[#E8912D] font-bold">{currentIndex + 1}</span> of {filteredReviews.length}
            </div>

          </div>

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
