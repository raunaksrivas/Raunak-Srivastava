
import React, { useState } from 'react';

/**
 * GOOGLE SHEETS / EXCEL BACKEND SETUP GUIDE
 * -----------------------------------------
 * To make your data appear in a Google Sheet (Excel format), follow these 5 steps:
 * 
 * STEP 1: Create a new Google Sheet.
 * STEP 2: Open "Extensions" > "Apps Script".
 * STEP 3: Delete all existing code and paste the code below:
 * 
 * function doPost(e) {
 *   try {
 *     var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 *     var data = JSON.parse(e.postData.contents);
 *     sheet.appendRow([
 *       new Date(), 
 *       data.name, 
 *       data.email, 
 *       data.phone, 
 *       data.message, 
 *       data.date, 
 *       data.source || 'Portfolio'
 *     ]);
 *     return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
 *   } catch (error) {
 *     return ContentService.createTextOutput("Error: " + error.message).setMimeType(ContentService.MimeType.TEXT);
 *   }
 * }
 * 
 * STEP 4: Click 'Deploy' (top right) > 'New Deployment'. 
 *         - Select Type: Web App
 *         - Execute as: Me
 *         - Who has access: Anyone (Critical)
 * STEP 5: Copy the "Web App URL" and paste it into the GOOGLE_SHEET_URL constant below.
 */

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

  // --- PASTE YOUR URL FROM STEP 5 HERE ---
  const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbz_placeholder_yours/exec';
  // ---------------------------------------

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

    const payload = {
      ...formData,
      timestamp: new Date().toLocaleString(),
      source: 'Portfolio'
    };

    if (isPreviewMode) {
      console.log('DEBUG: Form Submission (Preview Mode):', payload);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
      }, 1500);
      return;
    }

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', date: '', message: '' });
    } catch (err) {
      console.error('Submission Error:', err);
      setError('Connection failed. Please ensure your Apps Script is deployed as "Anyone" and the URL is correct.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 scroll-mt-32">
      <div className="max-w-4xl mx-auto bg-[#181818] p-8 md:p-16 rounded-2xl border border-[#333] shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all hover:border-netflix-red relative overflow-hidden">
        
        {isPreviewMode && !submitted && (
          <div className="absolute top-0 right-0 bg-yellow-500 text-black text-[10px] font-black px-4 py-1 uppercase tracking-widest transform rotate-45 translate-x-10 translate-y-4 shadow-lg">
            Backend Pending
          </div>
        )}

        <div className="text-center space-y-6 mb-16">
          <p className="text-netflix-red font-black uppercase tracking-[0.4em] text-xs">Original Portfolio</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Ready to Collaborate?</h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Let's build high-impact GTM strategies and technical stories that define your market category.
          </p>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center justify-center py-20 space-y-6 animate-fadeIn">
            <div className={`w-24 h-24 ${isPreviewMode ? 'bg-yellow-500' : 'bg-green-500'} rounded-full flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(0,0,0,0.4)]`}>
              {isPreviewMode ? (
                <svg className="w-12 h-12 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 16h2v2h-2zm0-6h2v4h-2z" />
                </svg>
              ) : (
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
            <h3 className="text-3xl font-black">{isPreviewMode ? 'Setup Required' : 'Transmission Received'}</h3>
            <p className="text-gray-400 text-lg text-center max-w-md">
              {isPreviewMode 
                ? 'Your site is ready! To start saving contact data to Excel, please follow the Backend Setup guide in the source code of ContactForm.tsx.' 
                : 'Thank you. Raunak will reach out to you within 24 hours.'}
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="text-netflix-red font-black uppercase text-sm tracking-widest hover:underline pt-4"
            >
              Back to form
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-xs font-black text-gray-500 uppercase tracking-widest">Full Name</label>
              <input 
                required
                type="text" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-[#252525] border border-transparent focus:border-netflix-red focus:bg-[#2a2a2a] focus:outline-none px-5 py-4 rounded-lg transition-all font-medium text-white"
                placeholder="Enter your name"
              />
            </div>
            <div className="space-y-3">
              <label className="text-xs font-black text-gray-500 uppercase tracking-widest">Email Address</label>
              <input 
                required
                type="email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-[#252525] border border-transparent focus:border-netflix-red focus:bg-[#2a2a2a] focus:outline-none px-5 py-4 rounded-lg transition-all font-medium text-white"
                placeholder="your@company.com"
              />
            </div>
            <div className="space-y-3">
              <label className="text-xs font-black text-gray-500 uppercase tracking-widest">Phone Number</label>
              <input 
                required
                type="tel" 
                value={formData.phone}
                onChange={handlePhoneChange}
                className="w-full bg-[#252525] border border-transparent focus:border-netflix-red focus:bg-[#2a2a2a] focus:outline-none px-5 py-4 rounded-lg transition-all font-medium text-white"
                placeholder="+91 00000 00000"
              />
            </div>
            <div className="space-y-3">
              <label className="text-xs font-black text-gray-500 uppercase tracking-widest">Preferred Schedule</label>
              <input 
                type="datetime-local" 
                required
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                className="w-full bg-[#252525] border border-transparent focus:border-netflix-red focus:bg-[#2a2a2a] focus:outline-none px-5 py-4 rounded-lg transition-all text-gray-300 font-medium"
              />
            </div>
            <div className="md:col-span-2 space-y-3">
              <label className="text-xs font-black text-gray-500 uppercase tracking-widest">Message / Project Details</label>
              <textarea 
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-[#252525] border border-transparent focus:border-netflix-red focus:bg-[#2a2a2a] focus:outline-none px-5 py-4 rounded-lg transition-all resize-none font-medium text-white"
                placeholder="Briefly describe your objectives..."
              />
            </div>
            
            <div className="md:col-span-2 pt-6">
              {error && (
                <div className="mb-6 p-4 bg-red-900/30 border border-red-500 rounded-lg text-red-400 text-sm font-bold animate-pulse">
                  {error}
                </div>
              )}
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-netflix-red py-5 rounded-lg font-black text-xl uppercase tracking-[0.3em] hover:bg-[#f40612] hover:scale-[1.01] transition-all transform active:scale-95 flex items-center justify-center gap-4 shadow-xl ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <svg className="animate-spin h-7 w-7 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : 'INITIATE CONTACT'}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
