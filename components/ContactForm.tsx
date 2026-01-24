
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbz_placeholder_yours/exec';
  const isPreviewMode = GOOGLE_SHEET_URL.includes('placeholder');

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    const cleaned = val.replace(/(?!^\+)[^\d]/g, '');
    const digitsOnly = cleaned.replace('+', '');
    if (digitsOnly.length <= 15) {
      setFormData({ ...formData, phone: cleaned });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const payload = { ...formData, timestamp: new Date().toLocaleString(), source: 'Consulting Portfolio' };

    if (isPreviewMode) {
      setTimeout(() => { setIsSubmitting(false); setSubmitted(true); }, 1500);
      return;
    }

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', date: '', message: '' });
    } catch (err) {
      setError('Connection failed. Please check backend setup.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 scroll-mt-32">
      <div className="max-w-4xl mx-auto bg-[#181818] p-8 md:p-16 rounded-2xl border border-[#333] shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all hover:border-netflix-red relative overflow-hidden">
        
        <div className="text-center space-y-6 mb-16">
          <p className="text-netflix-red font-black uppercase tracking-[0.4em] text-xs">Strategic Dialogue</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">Consultation Inquiry</h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Ready to define your next growth stage? Reach out to discuss GTM strategy, market expansion, or strategic brand advisory.
          </p>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center justify-center py-20 space-y-6 animate-fadeIn">
            <div className={`w-24 h-24 ${isPreviewMode ? 'bg-yellow-500' : 'bg-green-500'} rounded-full flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(0,0,0,0.4)]`}>
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-3xl font-black">Brief Received</h3>
            <p className="text-gray-400 text-lg text-center max-w-md">I will reach out to you within 24 hours to schedule an initial discovery session.</p>
            <button onClick={() => setSubmitted(false)} className="text-netflix-red font-black uppercase text-sm tracking-widest hover:underline pt-4">Return to form</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-xs font-black text-gray-500 uppercase tracking-widest">Full Name</label>
              <input required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-[#252525] border border-transparent focus:border-netflix-red focus:bg-[#2a2a2a] focus:outline-none px-5 py-4 rounded-lg transition-all font-medium text-white" placeholder="Consultant Name" />
            </div>
            <div className="space-y-3">
              <label className="text-xs font-black text-gray-500 uppercase tracking-widest">Client / Company Email</label>
              <input required type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-[#252525] border border-transparent focus:border-netflix-red focus:bg-[#2a2a2a] focus:outline-none px-5 py-4 rounded-lg transition-all font-medium text-white" placeholder="your@company.com" />
            </div>
            <div className="space-y-3">
              <label className="text-xs font-black text-gray-500 uppercase tracking-widest">Direct Phone</label>
              <input required type="tel" value={formData.phone} onChange={handlePhoneChange} className="w-full bg-[#252525] border border-transparent focus:border-netflix-red focus:bg-[#2a2a2a] focus:outline-none px-5 py-4 rounded-lg transition-all font-medium text-white" placeholder="+91 00000 00000" />
            </div>
            <div className="space-y-3">
              <label className="text-xs font-black text-gray-500 uppercase tracking-widest">Discovery Call Availability</label>
              <input type="datetime-local" required value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} className="w-full bg-[#252525] border border-transparent focus:border-netflix-red focus:bg-[#2a2a2a] focus:outline-none px-5 py-4 rounded-lg transition-all text-gray-300 font-medium" />
            </div>
            <div className="md:col-span-2 space-y-3">
              <label className="text-xs font-black text-gray-500 uppercase tracking-widest">Consulting Objective / Challenge</label>
              <textarea required rows={4} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full bg-[#252525] border border-transparent focus:border-netflix-red focus:bg-[#2a2a2a] focus:outline-none px-5 py-4 rounded-lg transition-all resize-none font-medium text-white" placeholder="Outline your project scope or commercial objective..." />
            </div>
            
            <div className="md:col-span-2 pt-6">
              <button type="submit" disabled={isSubmitting} className={`w-full bg-netflix-red py-5 rounded-lg font-black text-xl uppercase tracking-[0.3em] hover:bg-[#f40612] hover:scale-[1.01] transition-all shadow-xl ${isSubmitting ? 'opacity-70' : ''}`}>
                {isSubmitting ? 'Submitting...' : 'Initiate Engagement'}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
