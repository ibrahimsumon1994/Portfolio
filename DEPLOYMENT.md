# Deployment Guide

This document provides detailed instructions for deploying the Ibrahim Sumon Portfolio website to various platforms.

## Table of Contents

- [GitHub Pages (Recommended)](#github-pages-recommended)
- [Netlify](#netlify)
- [Vercel](#vercel)
- [AWS S3 + CloudFront](#aws-s3--cloudfront)
- [Azure Static Web Apps](#azure-static-web-apps)
- [Custom Server](#custom-server)

## Prerequisites

Before deploying, ensure you have:
- Node.js 20.x or higher installed
- npm 10.x or higher installed
- All dependencies installed (`npm install`)
- Project builds successfully (`npm run build`)

## GitHub Pages (Recommended)

GitHub Pages is the recommended deployment method as it's free and automatically configured.

### Automatic Deployment (GitHub Actions)

The repository includes a GitHub Actions workflow that automatically deploys on every push to the `main` branch.

**Setup Steps:**

1. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to **Settings** > **Pages**
   - Under "Build and deployment", select **Source**: `GitHub Actions`

2. **Push to Main Branch**:
   ```bash
   git add .
   git commit -m "Deploy portfolio website"
   git push origin main
   ```

3. **Monitor Deployment**:
   - Go to the **Actions** tab in your repository
   - Watch the deployment workflow progress
   - Once complete, your site will be live at: `https://ibrahimsumon1994.github.io/Portfolio/`

### Manual GitHub Pages Deployment

If you prefer to deploy manually:

1. **Build the Project**:
   ```bash
   npm run build -- --base-href=/Portfolio/
   ```

2. **Install GitHub Pages Package** (if not already installed):
   ```bash
   npm install -g angular-cli-ghpages
   ```

3. **Deploy**:
   ```bash
   npx angular-cli-ghpages --dir=dist/portfolio-app/browser
   ```

## Netlify

Netlify offers easy deployment with continuous integration.

### Deployment Steps:

1. **Create Netlify Account**:
   - Go to [netlify.com](https://netlify.com)
   - Sign up or log in

2. **Connect Repository**:
   - Click "New site from Git"
   - Choose GitHub and authorize Netlify
   - Select the `Portfolio` repository

3. **Configure Build Settings**:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist/portfolio-app/browser`
   - **Branch**: `main`

4. **Environment Variables** (if needed):
   - Add any environment variables in Netlify's UI

5. **Deploy**:
   - Click "Deploy site"
   - Netlify will build and deploy automatically
   - You'll get a URL like: `https://your-site-name.netlify.app`

### Custom Domain (Optional):

1. Go to **Domain settings** in Netlify
2. Add your custom domain
3. Follow DNS configuration instructions

## Vercel

Vercel provides fast and easy deployment for Angular applications.

### Deployment Steps:

1. **Create Vercel Account**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub

2. **Import Project**:
   - Click "Add New..." > "Project"
   - Select your `Portfolio` repository

3. **Configure Project**:
   - Vercel auto-detects Angular
   - Default settings should work, but verify:
     - **Framework Preset**: Angular
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist/portfolio-app/browser`

4. **Deploy**:
   - Click "Deploy"
   - Your site will be live at: `https://your-project.vercel.app`

### Custom Domain:

1. Go to project settings
2. Add your domain in the "Domains" section
3. Configure DNS records as instructed

## AWS S3 + CloudFront

For hosting on AWS with CDN capabilities.

### Prerequisites:
- AWS Account
- AWS CLI installed and configured

### Deployment Steps:

1. **Build the Application**:
   ```bash
   npm run build
   ```

2. **Create S3 Bucket**:
   ```bash
   aws s3 mb s3://your-portfolio-bucket-name
   ```

3. **Configure Bucket for Static Website**:
   ```bash
   aws s3 website s3://your-portfolio-bucket-name \
     --index-document index.html \
     --error-document index.html
   ```

4. **Set Bucket Policy**:
   Create a file `bucket-policy.json`:
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "PublicReadGetObject",
         "Effect": "Allow",
         "Principal": "*",
         "Action": "s3:GetObject",
         "Resource": "arn:aws:s3:::your-portfolio-bucket-name/*"
       }
     ]
   }
   ```
   
   Apply the policy:
   ```bash
   aws s3api put-bucket-policy --bucket your-portfolio-bucket-name --policy file://bucket-policy.json
   ```

5. **Upload Files**:
   ```bash
   aws s3 sync dist/portfolio-app/browser s3://your-portfolio-bucket-name
   ```

6. **Create CloudFront Distribution** (Optional but recommended):
   - Go to CloudFront console
   - Create new distribution
   - Set origin to your S3 bucket
   - Configure default root object: `index.html`
   - Set error pages to redirect to `index.html`

## Azure Static Web Apps

Deploy to Azure for enterprise-grade hosting.

### Deployment Steps:

1. **Install Azure CLI**:
   ```bash
   curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash
   ```

2. **Login to Azure**:
   ```bash
   az login
   ```

3. **Create Resource Group**:
   ```bash
   az group create --name PortfolioRG --location eastus
   ```

4. **Create Static Web App**:
   ```bash
   az staticwebapp create \
     --name ibrahimsumon-portfolio \
     --resource-group PortfolioRG \
     --source https://github.com/ibrahimsumon1994/Portfolio \
     --branch main \
     --app-location "/" \
     --output-location "dist/portfolio-app/browser" \
     --login-with-github
   ```

5. **Configure Build**:
   Azure will automatically detect Angular and configure the build

## Custom Server

Deploy to your own server (Linux/Ubuntu example).

### Prerequisites:
- Server with SSH access
- Nginx or Apache installed
- Domain name configured

### Deployment Steps:

1. **Build the Application**:
   ```bash
   npm run build -- --base-href=/
   ```

2. **Transfer Files to Server**:
   ```bash
   scp -r dist/portfolio-app/browser/* user@your-server:/var/www/portfolio
   ```

3. **Configure Nginx**:
   Create `/etc/nginx/sites-available/portfolio`:
   ```nginx
   server {
       listen 80;
       server_name your-domain.com www.your-domain.com;
       root /var/www/portfolio;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }

       # Cache static assets
       location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
           expires 1y;
           add_header Cache-Control "public, immutable";
       }
   }
   ```

4. **Enable Site**:
   ```bash
   sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

5. **Configure SSL with Let's Encrypt**:
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d your-domain.com -d www.your-domain.com
   ```

## Post-Deployment Checklist

After deploying to any platform:

- [ ] Verify all pages load correctly
- [ ] Test navigation between sections
- [ ] Check responsive design on mobile devices
- [ ] Verify images and assets load properly
- [ ] Test contact form functionality
- [ ] Check CV download link works
- [ ] Verify all external links open correctly
- [ ] Test on multiple browsers
- [ ] Check for console errors
- [ ] Verify SEO meta tags are present
- [ ] Test page load speed

## Updating the Site

To update the deployed site after making changes:

1. Make your changes locally
2. Test thoroughly: `npm start`
3. Build the project: `npm run build`
4. Commit changes: `git add . && git commit -m "Update content"`
5. Push to main: `git push origin main`
6. Automatic deployment will trigger (if configured)

## Troubleshooting

### Routes Not Working (404 Errors)

If direct navigation to routes returns 404:
- Ensure your hosting platform is configured for SPA routing
- Add a `_redirects` file (Netlify) or configure server redirects
- For Nginx, ensure `try_files $uri $uri/ /index.html;` is set

### Assets Not Loading

- Check that base href is set correctly for your hosting environment
- Verify asset paths are relative or use absolute URLs
- Check CORS settings if assets are on a different domain

### Build Failures

- Clear node_modules: `rm -rf node_modules && npm install`
- Clear Angular cache: `rm -rf .angular`
- Verify Node.js version matches requirements
- Check for TypeScript errors: `npm run build`

## Performance Optimization

- Enable gzip compression on your server
- Configure caching headers for static assets
- Use a CDN (CloudFront, CloudFlare, etc.)
- Optimize images before deployment
- Enable HTTP/2 on your server

## Security Considerations

- Always use HTTPS in production
- Set appropriate CORS headers
- Configure Content Security Policy (CSP)
- Regular dependency updates: `npm audit fix`
- Keep Angular and dependencies up to date

## Support

For deployment issues:
1. Check the GitHub Actions logs
2. Review platform-specific documentation
3. Open an issue in the repository

---

**Last Updated**: November 2025