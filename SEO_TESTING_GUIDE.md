# SEO Testing Guide for Portfolio

## Quick Testing Checklist

### 1. **Structured Data Testing** ✅
Test your JSON-LD structured data:
- **Google Rich Results Test**: https://search.google.com/test/rich-results
- **Schema.org Validator**: https://validator.schema.org/
- **Structured Data Testing Tool**: https://developers.google.com/search/docs/appearance/structured-data

### 2. **Meta Tags & SEO Validation** ✅
- **SEO Site Checkup**: https://seositecheckup.com/
- **W3C Validator**: https://validator.w3.org/
- **Meta Tags Checker**: https://metatags.io/
- **Open Graph Debugger**: https://www.opengraph.xyz/

### 3. **Mobile & Performance** ✅
- **Google PageSpeed Insights**: https://pagespeed.web.dev/
- **Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly
- **Lighthouse** (Chrome DevTools): Built-in browser tool

### 4. **Sitemap & Robots.txt** ✅
- **Sitemap Validator**: https://www.xml-sitemaps.com/validate-xml-sitemap.html
- Test URLs:
  - `https://xolinxiweni.com/sitemap.xml`
  - `https://xolinxiweni.com/robots.txt`

### 5. **Social Media Preview** ✅
- **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator
- **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/

### 6. **Accessibility** ✅
- **WAVE Web Accessibility Evaluator**: https://wave.webaim.org/
- **axe DevTools**: Browser extension
- **Lighthouse Accessibility Audit**: Built-in Chrome DevTools

## Step-by-Step Testing Process

### Step 1: Local Development Testing
1. Start your dev server: `npm run dev`
2. Open Chrome DevTools (F12)
3. Go to **Lighthouse** tab
4. Run audit for:
   - SEO
   - Performance
   - Accessibility
   - Best Practices

### Step 2: Test Structured Data
1. Copy your HTML content
2. Go to https://validator.schema.org/
3. Paste HTML or enter URL
4. Check for errors/warnings

### Step 3: Test Meta Tags
1. View page source (Ctrl+U)
2. Check all meta tags are present
3. Use https://metatags.io/ to preview

### Step 4: Test Sitemap
1. Navigate to `http://localhost:5173/sitemap.xml` (or your domain)
2. Verify XML is valid
3. Check all URLs are correct

### Step 5: Test Robots.txt
1. Navigate to `http://localhost:5173/robots.txt`
2. Verify content is correct
3. Test with Google Search Console

## Automated Testing Commands

Run these after building your site:

```bash
# Build the project
npm run build

# Preview the build
npm run preview

# Then test the preview URL in all the tools above
```

## Google Search Console Setup

1. Go to https://search.google.com/search-console
2. Add your property (website URL)
3. Verify ownership
4. Submit sitemap: `https://xolinxiweni.com/sitemap.xml`
5. Monitor indexing status

## Bing Webmaster Tools

1. Go to https://www.bing.com/webmasters
2. Add your site
3. Submit sitemap
4. Monitor performance

## Expected Results

✅ **Lighthouse SEO Score**: Should be 90-100
✅ **Structured Data**: No errors, all schemas valid
✅ **Meta Tags**: All present and properly formatted
✅ **Mobile-Friendly**: Pass all tests
✅ **Accessibility**: Score 90+
✅ **Performance**: Score 80+

## Common Issues & Fixes

### Issue: Structured Data Errors
- Check JSON-LD syntax
- Validate on schema.org
- Ensure all required fields present

### Issue: Missing Meta Tags
- Verify index.html has all tags
- Check for typos in property names
- Ensure Open Graph images exist

### Issue: Sitemap Not Found
- Verify sitemap.xml is in /public folder
- Check build process includes it
- Verify URL is accessible

### Issue: Low SEO Score
- Add more descriptive alt text
- Improve heading hierarchy
- Add more semantic HTML
- Optimize images
