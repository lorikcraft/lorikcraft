# LoRiK Craft — Digital Studio Website

A lightweight, multi-page static portfolio built with semantic HTML, responsive CSS and vanilla JavaScript.

## Pages
- `/` — studio overview, services and selected work
- `/services` — capabilities and process
- `/work` — selected projects
- `/contact` — enquiry form that prepares a WhatsApp message

## Run locally
Open `index.html` in a browser, or run any static file server from the repository root.

## Deploy to Vercel
1. Import this repository in Vercel and select `main` as the Production Branch.
2. Set the Root Directory to `./`.
3. Framework Preset: **Other** (static site).
4. Leave the Build Command empty; no build step is needed.
5. Leave Output Directory unset unless the dashboard requires the repository root.
6. Deploy. Once Git integration is connected, pushes to `main` can trigger production deployments.

The included `vercel.json` enables clean URLs and basic security headers. No runtime, framework, or environment variables are required.

## Notes
- The contact form does not store submissions or send email. It prepares a WhatsApp message; the visitor must review and send it.
- The WhatsApp number is configured in `assets/script.js` and `contact.html`. Update both if the contact number changes.
- Replace the placeholder domain in `sitemap.xml` once the production domain is confirmed.
- Google Fonts load remotely; system fonts remain as fallbacks.
- Project descriptions avoid unverified performance claims.
