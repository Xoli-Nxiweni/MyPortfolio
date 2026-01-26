# Git Push Instructions

## Issue: Git Lock File

There's a git lock file preventing commits. This is common with OneDrive folders.

## Quick Fix:

### Option 1: Manual Fix (Recommended)

1. **Close all programs** that might be using git (VS Code, Cursor, etc.)

2. **Delete the lock file manually:**
   - Navigate to: `Portfolio\.git\`
   - Delete the file: `index.lock`
   - If you can't delete it, restart your computer

3. **Then run these commands in terminal:**

```bash
cd "c:\Users\xolin\OneDrive - Malloya\Desktop\2 Weeks Portfolio\Portfolio"

# Add all files
git add .

# Commit
git commit -m "SEO optimization and professional content updates - Complete SEO implementation with structured data, sitemap, robots.txt - Professional language improvements - Updated URLs for Render deployment"

# Push
git push origin main
```

### Option 2: Use Git GUI

1. Open **Git GUI** or **GitHub Desktop**
2. Stage all changes
3. Commit with message: "SEO optimization and professional content updates"
4. Push to origin

### Option 3: Force Remove Lock (PowerShell as Admin)

```powershell
cd "c:\Users\xolin\OneDrive - Malloya\Desktop\2 Weeks Portfolio\Portfolio"
Remove-Item -Path ".git\index.lock" -Force
git add .
git commit -m "SEO optimization and professional content updates"
git push origin main
```

---

## Files to Commit:

### Modified Files:
- index.html (SEO updates, URL changes)
- src/App.jsx (semantic HTML)
- src/components/about/About.jsx (professional language)
- src/components/contact/Contact.jsx (professional language)
- src/components/footer/Footer.jsx (updated description)
- src/components/home/Home.jsx (professional language)
- src/components/profile/Profile.jsx (education updates)
- src/components/projects/Projects.jsx (SEO improvements)
- vite.config.js (build config)

### New Files:
- public/sitemap.xml
- public/robots.txt
- public/_redirects
- All SEO guide files (.md)
- test-seo.html

---

## After Pushing:

1. ✅ Changes will be on GitHub
2. ✅ Render will auto-deploy (if connected)
3. ✅ Your live site will update
4. ✅ SEO improvements will be live

---

**Note:** If OneDrive keeps causing issues, consider moving the repo outside OneDrive or pausing OneDrive sync temporarily.
