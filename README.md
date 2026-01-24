
# Raunak Srivastava Portfolio - Netflix Edition

A premium, high-impact personal portfolio website built with a cinematic Netflix-inspired aesthetic. Designed specifically for Product Marketing and Strategy professionals to showcase case studies with visual gravity.

## 🚀 Live Demo
[raunak-srivastava.vercel.app](https://raunak-srivastava.vercel.app/)

## ✨ Key Features
- **Netflix-Style UI**: Horizontal scrolling rows, cinematic hero section, and "Top Hit" badges.
- **Deep-Dive Case Studies**: High-fidelity modals for project breakdowns (e.g., Swiggy Instamart AOV Optimization, Lenskart Retail Strategy).
- **Interactive Experience Row**: Smooth transitions and detailed role descriptions.
- **Intro Video Section**: Integrated YouTube player for personal storytelling.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing.
- **Contact Form Backend**: Pre-configured to work with a Google Sheets/Excel backend using Google Apps Script.

## 🛠 Tech Stack
- **React**: Modern component-based architecture.
- **Tailwind CSS**: Rapid, customized styling for the "Dark Mode" premium look.
- **TypeScript**: Robust type-checking for enterprise-grade code.
- **Lucide/Custom SVG Icons**: Clean, professional iconography.

## 📊 Google Sheets Backend Setup
The contact form is designed to send data directly to a Google Sheet. Follow these steps to activate it:

1. Create a new **Google Sheet**.
2. Go to **Extensions > Apps Script**.
3. Paste the following code:
   ```javascript
   function doPost(e) {
     try {
       var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
       var data = JSON.parse(e.postData.contents);
       sheet.appendRow([
         new Date(), 
         data.name, 
         data.email, 
         data.phone, 
         data.message, 
         data.date, 
         data.source || 'Portfolio'
       ]);
       return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
     } catch (error) {
       return ContentService.createTextOutput("Error: " + error.message).setMimeType(ContentService.MimeType.TEXT);
     }
   }
   ```
4. Click **Deploy > New Deployment**.
   - Type: **Web App**
   - Execute as: **Me**
   - Who has access: **Anyone** (Required for the form to submit).
5. Copy the **Web App URL** and paste it into `GOOGLE_SHEET_URL` in `components/ContactForm.tsx`.

## 📂 Project Structure
- `data.ts`: Central source of truth for all career and project content.
- `App.tsx`: Core application shell and state management.
- `components/`: Modular UI elements (Hero, Navbar, Modal, Row, etc.).
- `types.ts`: TypeScript interfaces for consistent data handling.

## 👤 Contact
- **LinkedIn**: [theraunaksri](https://linkedin.com/in/theraunaksri)
- **Email**: srivastava.raunak7@gmail.com
- **Phone**: +91 9628198901
