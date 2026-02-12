# GitHub Pages Deployment Guide

## ✅ Once Your Code is Pushed to GitHub:

### Step 1: Enable GitHub Pages
1. Go to your repository: https://github.com/shubham6760/Shubham_portfolio
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
   - This will automatically deploy from the `main` branch

### Step 2: Create GitHub Actions Workflow (Optional but Recommended)
Create a file `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Build
        run: npm run build
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
          cname: OPTIONAL_CUSTOM_DOMAIN
```

### Step 3: Automatic Deployment
- Every time you push to `main` branch, GitHub will:
  1. Install dependencies
  2. Build your portfolio (`npm run build`)
  3. Deploy to GitHub Pages

### Step 4: Access Your Portfolio
Your portfolio will be live at:
**https://shubham6760.github.io/Shubham_portfolio**

## 🔧 Local Testing Before Deployment

Test the production build locally:
```bash
npm run build      # Creates dist/ folder
npm run preview    # Preview the built site
```

## 📝 Make Updates

After pushing to GitHub:
1. Make changes locally
2. Commit: `git add . && git commit -m "Update message"`
3. Push: `git push origin main`
4. GitHub Actions will automatically deploy! ✨
