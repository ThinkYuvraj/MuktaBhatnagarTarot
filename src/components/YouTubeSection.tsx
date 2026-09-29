import React from 'react';
import { Youtube, ExternalLink, Sparkles, Play } from 'lucide-react';

export const YouTubeSection: React.FC = () => {
  const videoUrl = "https://youtu.be/j2KgHLGKFPM?si=A_Juc-vo797zJjNM";
  const embedUrl = "https://www.youtube.com/embed/j2KgHLGKFPM";

  return (
    <section id="videos" className="w-full flex justify-center py-8 sm:py-10 md:py-12 lg:py-14 bg-[#F7EDE6]/40 border-y border-[#3E2F3A]/5 scroll-mt-24">
      <div className="max-w-7xl 2xl:max-w-[1500px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FBF7F0] border border-[#C9A45C]/30 text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#C9A45C] mb-2.5 shadow-xs">
            <Youtube className="w-4 h-4 text-[#FF0000]" />
            <span>Featured Video</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#3E2F3A] mt-1.5">
            Watch Mukta Ji in Action
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#3E2F3A]/75 mt-1.5 max-w-xl mx-auto">
            Explore deep insights, card interpretations, and intuitive spiritual guidance directly through our video session.
          </p>
        </div>

        {/* Video Player Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-[#3E2F3A] rounded-2xl sm:rounded-3xl p-2 sm:p-4 shadow-2xl shadow-[#3E2F3A]/15 border border-[#3E2F3A]/10 group">
            
            {/* Subtle glow background */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#C9A45C]/20 via-[#B9A6D6]/20 to-[#E8912D]/20 rounded-3xl blur-lg opacity-70 group-hover:opacity-100 transition duration-1000 -z-10" />
            
            {/* 16:9 Aspect Ratio Container */}
            <div className="relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-black shadow-inner">
              <iframe
                src={embedUrl}
                title="Tarot Reading & Spiritual Guidance with Mukta Bhatnagar"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
          </div>

          {/* Bottom Action Bar */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 px-2 text-center sm:text-left">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#3E2F3A]/75">
              <Sparkles className="w-4 h-4 text-[#C9A45C] shrink-0" />
              <span>Watch full reading & connect with sacred tarot frequencies.</span>
            </div>

            <a
              href={videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-[#FBF7F0] border border-[#3E2F3A]/15 text-xs sm:text-sm font-medium text-[#3E2F3A] hover:text-[#FF0000] shadow-xs hover:shadow transition-all duration-200"
            >
              <Youtube className="w-4 h-4 text-[#FF0000]" />
              <span>Watch on YouTube</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
