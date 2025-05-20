# Jewellery Website

A modern, minimal, and responsive jewellery website for your business.

## Features
- Clean, modern design
- Responsive layout for all devices
- 4 pages: Homepage, About, Products (with sub-categories), Contact
- Contact form sends submissions to jamahl@roomxvi.com

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Structure
- `src/pages` — Main pages (Home, About, Products, Contact)
- `src/components` — Shared UI components
- `src/styles` — CSS Modules for styling

## Customization
- Update About page content in `src/pages/About.jsx`
- Add products or change categories in `src/pages/Products.jsx`

---

Made with ❤️ by Cascade AI


## How to Update and Publish Your Website

### 1. Make Your Changes
- **Edit Source Code:**  Update files in the `src/` directory (e.g., `src/pages/Home.jsx`, `src/components/Navbar.jsx`, `src/styles/`).
- **Add/Replace Images:**  Put images in your images folder (e.g., `public/images` or `src/assets/images`) and reference them in your code.

You can do this on your local computer (recommended) or via GitHub's web editor (for small edits). If editing on GitHub, you must still build and deploy from your computer for changes to go live.

### 2. Preview Your Changes Locally
1. Open a terminal and navigate to your project directory.
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open the local URL shown in the terminal (usually `http://localhost:5173`) to see your changes live.

### 3. Build the Site for Production
After you’re happy with your changes:
```bash
npm run build
```
This creates a `dist/` folder with the production-ready site.

### 4. Deploy to GitHub Pages
Publish your changes with:
```bash
npm run deploy
```
This updates your live site at `https://jamahl.github.io/jbfinejewellery` (or your custom domain).

### 5. Commit and Push Your Changes (Best Practice)
Keep your GitHub repository up to date:
```bash
git add .
git commit -m "Describe your update"
git push origin main
```

### 6. Check Your Live Site
- Visit your GitHub Pages URL to confirm your changes are live.
- It may take 1–2 minutes for updates to appear.

### 7. (Optional) Automate Deployment
If you want to make changes directly on GitHub and have them go live automatically, set up a GitHub Actions workflow for automatic deploys.

### Troubleshooting
- **Site not updating?**  Make sure you ran `npm run build` and `npm run deploy`.
- **Images not showing?**  Check file paths and that images are included in the deployed `dist/` folder.
- **Errors?**  Copy the error message and ask for help!

**Summary:**  Edit code → preview locally → build → deploy → check live site.
