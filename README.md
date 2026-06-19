# Boujar Coaching

Personal coaching website for Boujar — Norwegian CrossFit Games athlete and coach.

**Live site:** https://boujar-coaching.vercel.app/

---

## Tech stack

- React 18 (Create React App)
- styled-components
- react-scroll (smooth navigation)
- EmailJS (contact form)

---

## Getting started locally

```bash
# Install dependencies
npm install

# Copy the env template and fill in your EmailJS credentials
cp .env.example .env.local

# Start the dev server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment variables

The contact form uses [EmailJS](https://www.emailjs.com/).  
You must set the following environment variables — **both locally and in Vercel**.

| Variable | Where to find it |
|---|---|
| `REACT_APP_EMAILJS_SERVICE_ID` | EmailJS dashboard → Email Services → your service ID |
| `REACT_APP_EMAILJS_TEMPLATE_ID` | EmailJS dashboard → Email Templates → your template ID |
| `REACT_APP_EMAILJS_PUBLIC_KEY` | EmailJS dashboard → Account → Public Key |

### Setting variables in Vercel

1. Go to your project in [vercel.com](https://vercel.com)
2. **Settings → Environment Variables**
3. Add each variable above for **Production**, **Preview**, and **Development**
4. Redeploy (or push a new commit) to apply the changes

### Setting variables locally

Create a `.env.local` file in the project root (already git-ignored):

```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## Testing that EmailJS works

1. Start the dev server (`npm start`)
2. Scroll to the **Contact Me** section
3. Fill in name, a real email, and a message — click **Send Message**
4. You should see the green success message: *"Thank you! I'll be in touch soon 🙌"*
5. Check the inbox of the email address configured in your EmailJS template

**If it fails:**
- Check the browser console for any network errors
- Verify all three env vars are set and the dev server was restarted after adding them
- Confirm the EmailJS service, template, and public key are all active in your EmailJS dashboard

---

## Available scripts

| Script | Description |
|---|---|
| `npm start` | Start dev server on http://localhost:3000 |
| `npm run build` | Production build to `/build` |
| `npm test` | Run tests |

---

## Project structure

```
src/
  components/
    About.js         – About Me section
    ContactForm.js   – Contact form with EmailJS
    Expect.js        – How Coaching Works section
    Feedback.js      – Customer testimonials
    Footer.js        – Site footer
    GlobalStyle.js   – Global CSS reset & base styles
    Header.js        – Hero/banner section
    Price.js         – (unused) Pricing section
    Testimonials.js  – (unused) older testimonials component
  App.js             – Root layout & navigation
  index.js           – React entry point
public/
  index.html         – HTML template
  pic/               – Coaching photos
```

---

## ⚠️ Security note

The EmailJS public key, service ID, and template ID were previously hardcoded in the source code.  
**These values should be treated as compromised.** It is strongly recommended to:

1. Regenerate your EmailJS public key (Account → API Keys)
2. Update the new values in `.env.local` and Vercel environment variables
3. Do **not** commit `.env.local` — it is already in `.gitignore`
