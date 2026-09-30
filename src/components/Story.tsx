import React, { useState } from 'react';
import { BookOpen, Award, GraduationCap, Building2, Sparkles, Youtube, ExternalLink, Play } from 'lucide-react';
import youtubeThumbnail from '../assets/images/youtube_thumbnail.jpg';

interface StoryProps {
  onOpenFullStory: () => void;
}

export const Story: React.FC<StoryProps> = ({ onOpenFullStory }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoUrl = "https://youtu.be/j2KgHLGKFPM?si=A_Juc-vo797zJjNM";
  const embedUrl = "https://www.youtube.com/embed/j2KgHLGKFPM?autoplay=1&rel=0";

  return (
    <section id="about" className="w-full flex justify-center py-8 sm:py-10 md:py-12 lg:py-14 bg-[#FBF7F0] scroll-mt-24">
      <div className="max-w-7xl 2xl:max-w-[1500px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2-Column Grid: Left is My Story, Right is Featured Video */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column: My Story */}
          <div className="bg-white/85 backdrop-blur-sm border border-[#3E2F3A]/10 rounded-3xl p-6 sm:p-8 lg:p-9 shadow-md shadow-[#3E2F3A]/5 flex flex-col justify-between relative overflow-hidden h-full">
            {/* Subtle Background Glow Accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-32 bg-gradient-to-b from-[#B9A6D6]/20 via-[#F7EDE6]/30 to-transparent blur-2xl pointer-events-none" />

            <div>
              {/* Kicker */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7EDE6] text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#C9A45C] mb-3.5 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#E8912D]" />
                <span>My Story</span>
              </div>

              {/* Headline */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#3E2F3A] mb-3 leading-snug">
                Young at heart, here to help.
              </h2>

              {/* Story Narrative */}
              <p className="text-sm sm:text-base lg:text-lg text-[#3E2F3A]/85 leading-relaxed mb-6 font-normal">
                “A breast cancer survivor (2010), I healed by learning nutrition and health. Today I share what I learnt, through tarot and wellness coaching to help you find balance for your Mind, Body &amp; Soul.”
              </p>

              {/* Qualification Chips */}
              <div className="flex flex-wrap items-center gap-2.5 mb-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#FBF7F0] border border-[#3E2F3A]/15 text-xs sm:text-sm font-medium text-[#3E2F3A] shadow-xs hover:border-[#E8912D] hover:scale-102 transition-all">
                  <Award className="w-4 h-4 text-[#E8912D] shrink-0" />
                  <span>Certified Tarot Reader – Occult Academy</span>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#FBF7F0] border border-[#3E2F3A]/15 text-xs sm:text-sm font-medium text-[#3E2F3A] shadow-xs hover:border-[#8FAF8A] hover:scale-102 transition-all">
                  <GraduationCap className="w-4 h-4 text-[#8FAF8A] shrink-0" />
                  <span>Diploma, Holistic Health – ISMN</span>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#FBF7F0] border border-[#3E2F3A]/15 text-xs sm:text-sm font-medium text-[#3E2F3A] shadow-xs hover:border-[#B9A6D6] hover:scale-102 transition-all">
                  <Building2 className="w-4 h-4 text-[#B9A6D6] shrink-0" />
                  <span>30 yrs at DAV Institute</span>
                </div>
              </div>
            </div>

            {/* Read Full Story Button */}
            <div className="pt-2">
              <button
                onClick={onOpenFullStory}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full border-2 border-[#E8912D] bg-[#E8912D] text-white hover:bg-[#d68023] hover:border-[#d68023] active:scale-95 transition-all text-sm sm:text-base font-semibold cursor-pointer shadow-md shadow-[#E8912D]/20 w-full sm:w-auto"
              >
                <BookOpen className="w-4 h-4" />
                <span>Read full story</span>
              </button>
            </div>
          </div>

          {/* Right Column: Featured Video */}
          <div id="videos" className="bg-white/85 backdrop-blur-sm border border-[#3E2F3A]/10 rounded-3xl p-6 sm:p-8 lg:p-9 shadow-md shadow-[#3E2F3A]/5 flex flex-col justify-between relative overflow-hidden h-full scroll-mt-24">
            {/* Subtle Background Glow Accent */}
            <div className="absolute top-0 right-1/2 translate-x-1/2 w-80 h-32 bg-gradient-to-b from-[#E8912D]/15 via-[#F7EDE6]/30 to-transparent blur-2xl pointer-events-none" />

            <div>
              {/* Kicker */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FBF7F0] border border-[#C9A45C]/30 text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#C9A45C] mb-3.5 shadow-xs">
                <Youtube className="w-4 h-4 text-[#FF0000]" />
                <span>Featured Video</span>
              </div>

              {/* Headline */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#3E2F3A] mb-2 leading-snug">
                Watch Mukta Ji in Action
              </h2>
              <p className="text-xs sm:text-sm text-[#3E2F3A]/75 mb-4 max-w-xl font-normal">
                Explore deep insights, card interpretations, and intuitive spiritual guidance directly through our video session.
              </p>

              {/* Video Player Container */}
              <div className="relative bg-[#3E2F3A] rounded-2xl sm:rounded-3xl p-1.5 sm:p-2.5 shadow-xl shadow-[#3E2F3A]/15 border border-[#3E2F3A]/10 group mb-4">
                {/* Subtle glow background */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#C9A45C]/20 via-[#B9A6D6]/20 to-[#E8912D]/20 rounded-3xl blur-lg opacity-70 group-hover:opacity-100 transition duration-1000 -z-10" />

                {/* 16:9 Aspect Ratio Container */}
                <div className="relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-black shadow-inner">
                  {isPlaying ? (
                    <iframe
                      src={embedUrl}
                      title="Tarot Reading & Spiritual Guidance with Mukta Bhatnagar"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full border-0"
                    />
                  ) : (
                    <div 
                      onClick={() => setIsPlaying(true)}
                      className="relative w-full h-full cursor-pointer group/thumb select-none"
                      title="Click to play video"
                    >
                      <img
                        src={youtubeThumbnail}
                        alt="Mukta Bhatnagar - मन की बात सबके साथ"
                        className="w-full h-full object-cover group-hover/thumb:scale-102 transition-transform duration-500"
                      />
                      
                      {/* Soft overlay scrim */}
                      <div className="absolute inset-0 bg-black/15 group-hover/thumb:bg-black/5 transition-colors duration-300" />
                      
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FF0000] text-white flex items-center justify-center shadow-2xl group-hover/thumb:scale-110 active:scale-95 transition-all duration-300 ring-4 ring-white/30">
                          <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-white translate-x-0.5" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom Action Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-[#3E2F3A]/5 text-center sm:text-left">
              <div className="flex items-center gap-1.5 text-xs text-[#3E2F3A]/75">
                <Sparkles className="w-3.5 h-3.5 text-[#C9A45C] shrink-0" />
                <span>Watch full reading & sacred tarot frequencies.</span>
              </div>

              <a
                href={videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white hover:bg-[#FBF7F0] border border-[#3E2F3A]/15 text-xs font-medium text-[#3E2F3A] hover:text-[#FF0000] shadow-xs hover:shadow transition-all duration-200 shrink-0"
              >
                <Youtube className="w-3.5 h-3.5 text-[#FF0000]" />
                <span>Watch on YouTube</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
