# Vercel Deployment Guide for ruthwik.ideaboard.live

## Step 1: Deploy to Vercel

### Option A: Using Vercel CLI (Recommended for first-time setup)

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy your project**:
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Set up and deploy? **Yes**
   - Which scope? (Select your account)
   - Link to existing project? **No** (for first deployment)
   - Project name? (Press Enter for default or enter a custom name)
   - Directory? (Press Enter for `./`)
   - Override settings? **No**

4. **Deploy to production**:
   ```bash
   vercel --prod
   ```

### Option B: Using GitHub Integration (Recommended for continuous deployment)

1. **Push your code to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Go to Vercel Dashboard**:
   - Visit [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click **"Add New Project"**
   - Import your repository
   - Vercel will auto-detect Vite settings
   - Click **"Deploy"**

## Step 2: Configure Custom Domain (ruthwik.ideaboard.live)

### In Vercel Dashboard:

1. **Go to your project** in Vercel dashboard
2. **Navigate to Settings** → **Domains**
3. **Add Domain**:
   - Enter: `ruthwik.ideaboard.live`
   - Click **"Add"**

4. **Vercel will show you DNS configuration**:
   - You'll see something like:
     ```
     Type: CNAME
     Name: ruthwik
     Value: cname.vercel-dns.com
     ```
   - **OR** you might see:
     ```
     Type: A
     Name: ruthwik
     Value: 76.76.21.21 (example IP)
     ```

### In Your Domain Provider (ideaboard.live DNS settings):

1. **Log in to your domain registrar** (where you manage ideaboard.live)
2. **Go to DNS Management** for ideaboard.live
3. **Add a CNAME record**:
   - **Type**: CNAME
   - **Name/Host**: `ruthwik`
   - **Value/Target**: `cname.vercel-dns.com` (or the value Vercel provides)
   - **TTL**: 3600 (or default)

   **OR if Vercel provides A records**:
   - **Type**: A
   - **Name/Host**: `ruthwik`
   - **Value/Target**: The IP address Vercel provides (e.g., `76.76.21.21`)
   - **TTL**: 3600 (or default)

## Step 3: Verify Domain

1. **Wait for DNS propagation** (can take a few minutes to 48 hours, usually 5-30 minutes)
2. **Check in Vercel Dashboard**:
   - Go to Settings → Domains
   - You should see a green checkmark when the domain is verified
3. **Test your site**:
   - Visit `https://ruthwik.ideaboard.live`
   - Your site should be live!

## Important Notes:

- **Domain Value**: The value you need to set in your DNS is what Vercel provides. It's typically:
  - `cname.vercel-dns.com` for CNAME records, OR
  - An IP address (like `76.76.21.21`) for A records
  
- **Subdomain Name**: In your DNS settings, use `ruthwik` (without the domain) as the Name/Host field

- **SSL Certificate**: Vercel automatically provisions SSL certificates for your custom domain (HTTPS)

- **Automatic Deployments**: If you use GitHub integration, every push to your main branch will automatically deploy

## Troubleshooting:

- **Domain not resolving?** Wait a bit longer for DNS propagation
- **SSL certificate issues?** Vercel handles this automatically, but it may take a few minutes after domain verification
- **Build errors?** Check the Vercel build logs in the dashboard

## Quick Reference:

- **Domain to add in Vercel**: `ruthwik.ideaboard.live`
- **DNS Record Type**: CNAME (preferred) or A record
- **DNS Name/Host**: `ruthwik`
- **DNS Value**: Use what Vercel provides (usually `cname.vercel-dns.com`)

