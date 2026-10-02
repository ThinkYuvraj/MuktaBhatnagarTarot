import React, { useState } from 'react';
import { PROFILE_INFO } from '../data/content';
import { MapPin, Clock, Phone, MessageCircle, ExternalLink, Mail, Instagram, ShieldCheck, AlertCircle, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Tarot Guidance');
  const [query, setQuery] = useState('');
  const [consent, setConsent] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      setErrorMsg("Please grant consent to share your details with Mukta Bhatnagar before proceeding.");
      return;
    }
    setErrorMsg('');

    const formattedMessage = `Hello Mukta ji,\n\nI would like to request a consultation with you.\n\n*Name:* ${name.trim() || 'Not specified'}\n*Mobile:* ${phone.trim() || 'Not specified'}\n*Service Requested:* ${service}\n*Details / Query:* ${query.trim() || 'General guidance'}\n\n[Consent Confirmed: I agree that Mukta Bhatnagar receives my personal details for consultation & appointment purposes.]`;

    window.open(PROFILE_INFO.whatsappUrl(formattedMessage), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="w-full flex justify-center py-8 sm:py-10 md:py-12 lg:py-14 bg-[#F7EDE6]/50 border-t border-[#3E2F3A]/5 scroll-mt-24">
      <div className="max-w-7xl 2xl:max-w-[1500px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Contact & Consultation Card */}
        <div className="bg-[#FBF7F0] border border-[#3E2F3A]/10 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Contact & Location Details */}
            <div className="md:col-span-6 lg:col-span-6 flex flex-col items-start">
              
              <span className="text-xs font-semibold tracking-widest uppercase text-[#C9A45C] mb-1">
                Visit or Connect
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#3E2F3A] mb-5">
                Book a session
              </h2>

              {/* Rows */}
              <div className="w-full space-y-4 mb-6">

                {/* Tarot Timings Row */}
                <div className="flex items-center gap-4 pb-3.5 border-b border-[#3E2F3A]/8 text-xs sm:text-sm">
                  <span className="w-20 text-[#3E2F3A]/60 font-medium shrink-0">Tarot</span>
                  <div className="flex items-center gap-2 text-[#3E2F3A] font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#B9A6D6]" />
                    <span>{PROFILE_INFO.timings.tarot} (Evenings)</span>
                  </div>
                </div>

                {/* Wellness Timings Row */}
                <div className="flex items-center gap-4 pb-3.5 border-b border-[#3E2F3A]/8 text-xs sm:text-sm">
                  <span className="w-20 text-[#3E2F3A]/60 font-medium shrink-0">Wellness</span>
                  <div className="flex items-center gap-2 text-[#3E2F3A] font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#8FAF8A]" />
                    <span>{PROFILE_INFO.timings.wellness} (Daytime)</span>
                  </div>
                </div>

                {/* Phone Row */}
                <div className="flex items-center gap-4 pb-3.5 border-b border-[#3E2F3A]/8 text-xs sm:text-sm">
                  <span className="w-20 text-[#3E2F3A]/60 font-medium shrink-0">Phone</span>
                  <a
                    href={`tel:${PROFILE_INFO.phone}`}
                    className="flex items-center gap-2 text-[#3E2F3A] hover:text-[#E8912D] font-medium transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#E8912D]" />
                    <span>{PROFILE_INFO.phoneFormatted}</span>
                  </a>
                </div>

                {/* Email & Instagram Row */}
                <div className="flex items-center gap-4 text-xs sm:text-sm">
                  <span className="w-20 text-[#3E2F3A]/60 font-medium shrink-0">Online</span>
                  <div className="flex flex-wrap items-center gap-2.5 text-[#3E2F3A]/80">
                    <a
                      href={`mailto:${PROFILE_INFO.email}`}
                      className="inline-flex items-center gap-1 hover:text-[#E8912D] transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Email</span>
                    </a>
                    <span>·</span>
                    <a
                      href={`https://instagram.com/${PROFILE_INFO.instagramTarot}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:text-[#E8912D] transition-colors font-medium"
                    >
                      <Instagram className="w-3.5 h-3.5 text-[#E8912D]" />
                      <span>Tarot: @{PROFILE_INFO.instagramTarot}</span>
                    </a>
                    <span>·</span>
                    <a
                      href={`https://instagram.com/${PROFILE_INFO.instagramNutrition}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:text-[#E8912D] transition-colors font-medium"
                    >
                      <Instagram className="w-3.5 h-3.5 text-[#5B8556]" />
                      <span>Nutrition: @{PROFILE_INFO.instagramNutrition}</span>
                    </a>
                  </div>
                </div>

              </div>

              {/* Chat on WhatsApp Button */}
              <a
                href={PROFILE_INFO.whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#25D366] text-white hover:bg-[#20ba59] active:scale-95 transition-all text-sm font-semibold shadow-md shadow-[#25D366]/20"
              >
                <MessageCircle className="w-4 h-4 fill-white shrink-0" />
                <span>Chat on WhatsApp Directly</span>
              </a>

            </div>

            {/* Right Column: Send Your Consultation Inquiry Form */}
            <div className="md:col-span-6 lg:col-span-6 w-full bg-white border border-[#3E2F3A]/10 rounded-2xl p-5 sm:p-7 shadow-sm">
              
              <div className="mb-4">
                <span className="text-[11px] font-semibold tracking-widest uppercase text-[#C9A45C]">
                  Direct Appointment Request
                </span>
                <h3 className="text-xl sm:text-2xl font-serif text-[#3E2F3A] mt-0.5">
                  Send Your Consultation Inquiry
                </h3>
                <p className="text-xs text-[#3E2F3A]/70 mt-1">
                  Your information is received directly by Mukta Bhatnagar in strict confidentiality.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#3E2F3A] mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Mehra"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full text-xs sm:text-sm px-3 py-2 rounded-xl bg-[#FBF7F0] border border-[#3E2F3A]/15 focus:outline-none focus:ring-1 focus:ring-[#E8912D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#3E2F3A] mb-1">
                      Mobile / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98123 45678"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full text-xs sm:text-sm px-3 py-2 rounded-xl bg-[#FBF7F0] border border-[#3E2F3A]/15 focus:outline-none focus:ring-1 focus:ring-[#E8912D]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#3E2F3A] mb-1">
                    Guidance Service Required
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full text-xs sm:text-sm px-3 py-2 rounded-xl bg-[#FBF7F0] border border-[#3E2F3A]/15 focus:outline-none focus:ring-1 focus:ring-[#E8912D]"
                  >
                    <option value="Tarot Guidance (Evening: 8:30 - 10:30 PM)">Tarot Guidance (Evening 8:30 - 10:30 PM)</option>
                    <option value="Cellular Health Coaching (Daytime: 11:30 AM - 5:30 PM)">Cellular Health Coaching (Daytime 11:30 AM - 5:30 PM)</option>
                    <option value="Both Mind-Body Consultation">Both Tarot & Cellular Health Guidance</option>
                    <option value="Monthly Tarot Guidance Blueprint">Monthly Guidance Blueprint</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#3E2F3A] mb-1">
                    Your Question or Details (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Share any details about career, relationships, health..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full text-xs sm:text-sm px-3 py-2 rounded-xl bg-[#FBF7F0] border border-[#3E2F3A]/15 focus:outline-none focus:ring-1 focus:ring-[#E8912D]"
                  />
                </div>

                {/* MANDATORY USER CONSENT CHECKBOX */}
                <div className="bg-[#FBF7F0] border border-[#E8912D]/30 rounded-xl p-3">
                  <label className="flex items-start gap-2.5 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => {
                        setConsent(e.target.checked);
                        if (e.target.checked) setErrorMsg('');
                      }}
                      className="mt-0.5 w-4 h-4 rounded text-[#E8912D] focus:ring-[#E8912D] border-gray-300 shrink-0 cursor-pointer"
                    />
                    <span className="text-[11px] text-[#3E2F3A]/85 leading-tight">
                      <strong className="text-[#3E2F3A]">User Privacy Consent:</strong> I consent that <strong>Mukta Bhatnagar</strong> receives my details to review and contact me directly via WhatsApp or call. Zero third-party sharing.
                    </span>
                  </label>

                  {errorMsg && (
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-700 mt-2 bg-rose-50 p-2 rounded-lg border border-rose-200">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}
                </div>

                <div className="pt-1">
                  <button
                    type="submit"
                    disabled={!consent}
                    className={`w-full py-3 px-5 rounded-full font-semibold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 ${
                      consent 
                        ? 'bg-[#E8912D] hover:bg-[#d88120] text-white active:scale-98 shadow-[#E8912D]/20 cursor-pointer'
                        : 'bg-neutral-200 text-neutral-500 cursor-not-allowed'
                    }`}
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry to Mukta Bhatnagar</span>
                  </button>
                </div>

                <div className="flex items-center justify-center gap-1 text-[10px] text-[#3E2F3A]/60 pt-0.5">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  <span>Strict confidentiality guaranteed.</span>
                </div>

              </form>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
