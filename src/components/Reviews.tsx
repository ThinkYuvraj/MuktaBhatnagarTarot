import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { REVIEWS } from '../data/content';
import { Sparkles, MessageSquareHeart, HeartPulse, Compass, Star, ShieldCheck } from 'lucide-react';
import muktaStoryPhoto from '../assets/images/mukta_saree_reading_1790319437505.jpg';
import muktaNutritionPhoto from '../assets/images/mukta_nutrition_photo.jpg';

export const Reviews: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'tarot' | 'health'>('tarot');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  
  const startXRef = useRef<number | null>(null);
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
    setDragOffset(0);
  };

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Auto swipe timer (every 4.5 seconds, pauses when user hovers, touches, or drags)
  useEffect(() => {
    if (isPaused || isDragging || filteredReviews.length <= itemsPerView) {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
      return;
    }

    autoplayTimerRef.current = setInterval(() => {
      handleNext();
    }, 4500);

    return () => {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    };
  }, [isPaused, isDragging, handleNext, filteredReviews.length, itemsPerView]);

  // Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    setIsDragging(true);
    startXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (startXRef.current === null) return;
    const currentX = e.targetTouches[0].clientX;
    const diff = currentX - startXRef.current;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    setIsDragging(false);
    if (startXRef.current === null) return;
    
    if (dragOffset < -40) {
      handleNext();
    } else if (dragOffset > 40) {
      handlePrev();
    }
    
    startXRef.current = null;
    setDragOffset(0);
  };

  // Mouse Drag Swipe Handlers (Desktop swipe)
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsPaused(true);
    setIsDragging(true);
    startXRef.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || startXRef.current === null) return;
    const diff = e.clientX - startXRef.current;
    setDragOffset(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsPaused(false);
    setIsDragging(false);
    
    if (dragOffset < -40) {
      handleNext();
    } else if (dragOffset > 40) {
      handlePrev();
    }
    
    startXRef.current = null;
    setDragOffset(0);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
    setIsPaused(false);
  };

  return (
    <section 
      id="reviews" 
      className="w-full flex justify-center py-8 sm:py-10 md:py-12 lg:py-14 bg-[#F7EDE6]/40 border-y border-[#3E2F3A]/5 scroll-mt-24 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-7xl 2xl:max-w-[1500px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#C9A45C]/30 text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#C9A45C] mb-2.5 shadow-xs">
            <Star className="w-4 h-4 text-[#E8912D] fill-[#E8912D]" />
            <span>Verified Client Feedback</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#3E2F3A] mt-1.5">
            Words of Trust & Healing
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#3E2F3A]/70 mt-1.5">
            Genuine experiences from clients across intuitive tarot readings and cellular wellness guidance.
          </p>

          {/* Category Tabs: Tarot vs Cellular Health */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-5">
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

        {/* SWIPE CAROUSEL CONTAINER (No Caret Buttons) */}
        <div className="relative group/carousel px-1 sm:px-3">
          
          {/* Carousel Viewport with Grab Cursor & Smooth Drag */}
          <div 
            className={`overflow-hidden py-4 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          >
            <div 
              className={`flex ${isDragging ? 'transition-none' : 'transition-transform duration-600 ease-[cubic-bezier(0.25,1,0.5,1)]'}`}
              style={{
                transform: `translateX(calc(-${currentIndex * (100 / itemsPerView)}% + ${dragOffset}px))`,
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
                              src={isHealth ? muktaNutritionPhoto : muktaStoryPhoto}
                              alt="Mukta Bhatnagar"
                              className="w-full h-full object-cover object-top"
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

          {/* CAROUSEL BOTTOM CONTROLS & SWIPE HINT */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 px-2">
            
            {/* Auto-swipe status badge & gesture hint */}
            <div className="flex items-center gap-2 text-xs text-[#3E2F3A]/60 font-medium">
              <span className={`w-2 h-2 rounded-full ${isPaused || isDragging ? 'bg-amber-400' : 'bg-emerald-500 animate-pulse'}`} />
              <span>{isDragging ? 'Dragging...' : isPaused ? 'Paused' : 'Auto-swiping every 4.5s'}</span>
              <span className="text-[#3E2F3A]/40 hidden sm:inline">·</span>
              <span className="text-[#3E2F3A]/50 hidden sm:inline">Swipe or drag left/right to browse</span>
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
        <div className="mt-6 max-w-2xl mx-auto text-center p-3.5 sm:p-4 rounded-2xl bg-white/70 border border-[#3E2F3A]/10 text-xs text-[#3E2F3A]/75 flex flex-col sm:flex-row items-center justify-center gap-2 shadow-xs">
          <MessageSquareHeart className="w-4 h-4 text-[#E8912D] shrink-0" />
          <span>Every testimonial is 100% genuine, received directly from in-person sanctuary sessions and online consultations.</span>
        </div>

      </div>
    </section>
  );
};
