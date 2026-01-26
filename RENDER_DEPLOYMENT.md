# 🚀 Deploying to Render - Quick Guide

## Step-by-Step Deployment

### 1. Prepare Your Code
Make sure your code is pushed to GitHub:
```bash
git add .
git commit -m "SEO optimized portfolio"
git push
```

### 2. Deploy on Render

1. **Go to Render**: https://render.com
2. **Sign up** (use GitHub to sign in - easiest)
3. **Click "New +"** → **"Static Site"**
4. **Connect Repository**:
   - Select your GitHub account
   - Choose your portfolio repository
5. **Configure Build Settings**:
   - **Name**: `xoli-portfolio` (or whatever you want)
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
   - **Node Version**: `18` or `20` (auto-detected)
6. **Click "Create Static Site"**
7. **Wait for deployment** (2-5 minutes)
8. **Get your URL**: `your-app.onrender.com`

### 3. Update URLs in index.html

After deployment, you need to update URLs in `index.html`:

**Find and Replace:**
- `https://xolinxiweni.com` → `https://your-app.onrender.com`

**Or if you have a custom domain:**
- `https://xolinxiweni.com` → `https://your-custom-domain.com`

**Files to update:**
- `index.html` (all URLs in meta tags)
- `public/sitemap.xml` (all URLs)

### 4. Redeploy

After updating URLs:
```bash
git add .
git commit -m "Update URLs for deployment"
git push
```

Render will auto-deploy the changes.

---

## Render-Specific Notes

### Free Tier:
- ✅ Free SSL (HTTPS)
- ✅ Custom domain support
- ✅ Auto-deploy on git push
- ⚠️ Spins down after 15 min inactivity (but wakes up quickly)

### Custom Domain (Optional):
1. In Render dashboard → Settings → Custom Domains
2. Add your domain
3. Follow DNS instructions
4. Render handles SSL automatically

---

## After Deployment Checklist

- [ ] Site is live and accessible
- [ ] HTTPS is working (green lock)
- [ ] Sitemap accessible: `https://your-app.onrender.com/sitemap.xml`
- [ ] Robots.txt accessible: `https://your-app.onrender.com/robots.txt`
- [ ] All URLs updated in index.html
- [ ] Test site with Lighthouse
- [ ] Submit to Google Search Console

---

## Quick Test Commands

After deployment, test these URLs:
```bash
# Homepage
https://your-app.onrender.com

# Sitemap
https://your-app.onrender.com/sitemap.xml

# Robots.txt
https://your-app.onrender.com/robots.txt
```

All should load correctly! ✅

---

## Need Help?

If you get stuck:
- Check Render logs (in dashboard)
- Verify build command is correct
- Make sure `dist` folder is being created
- Check Node version compatibility

Good luck with deployment! 🚀
