# Deployment Guide

## Quick Deploy to Vercel

1. **Push to GitHub** (already done)
   
2. **Import to Vercel**
   - Go to [Vercel](https://vercel.com)
   - Click "Import Project"
   - Select this repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Update Registry URLs**
   After deployment, update the showcase page with your actual domain:
   - Replace `https://your-domain.vercel.app` with your Vercel URL
   - Update in `src/app/page.tsx` at lines 84 and 86

## Environment Setup

No environment variables are required for basic deployment.

## Build Configuration

The project uses:
- **Framework**: Next.js 16.1.1
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Node Version**: 20.x

## Registry Endpoints

After deployment, your registry will be available at:

### Static Files
- `https://your-domain.vercel.app/registry/index.json`
- `https://your-domain.vercel.app/registry/button.json`
- `https://your-domain.vercel.app/registry/card.json`
- `https://your-domain.vercel.app/registry/input.json`

### API Routes
- `https://your-domain.vercel.app/api/registry`
- `https://your-domain.vercel.app/api/registry/button`
- `https://your-domain.vercel.app/api/registry/card`
- `https://your-domain.vercel.app/api/registry/input`

## Using the Registry

Once deployed, users can install components using:

```bash
# Install a single component
npx shadcn@latest add button --registry https://your-domain.vercel.app/registry

# Install multiple components
npx shadcn@latest add button card input --registry https://your-domain.vercel.app/registry
```

## Custom Domain (Optional)

To use a custom domain:
1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Update the registry URLs in the showcase page

## Monitoring

Vercel provides:
- Build logs
- Runtime logs
- Analytics
- Performance insights

Access these through your Vercel dashboard.

## Troubleshooting

### Build Fails
- Check Node version (should be 20.x)
- Verify all dependencies are in package.json
- Review build logs in Vercel dashboard

### Registry Not Accessible
- Ensure `/public/registry/` files are committed
- Check API routes are deployed
- Verify URLs are correct

### Components Not Installing
- Test registry endpoints manually
- Verify JSON format is correct
- Check component dependencies are listed

## Local Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Adding New Components

1. Create component in `src/components/ui/[name].tsx`
2. Add to registry using the update script
3. Update `public/registry/index.json`
4. Add showcase in `src/app/page.tsx`
5. Commit and push
6. Vercel will auto-deploy

## Support

For issues:
- Check Vercel deployment logs
- Review Next.js documentation
- Check Shadcn UI docs for registry format
