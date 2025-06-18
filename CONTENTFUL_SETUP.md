# Contentful Integration Setup Guide

This guide will help you connect your Next.js application to Contentful CMS.

## Prerequisites

1. A Contentful account (sign up at [contentful.com](https://contentful.com))
2. A Contentful space with content types set up

## Step 1: Get Your Contentful Credentials

1. Log in to your Contentful account
2. Go to your space settings
3. Navigate to "API keys" in the sidebar
4. Create a new API key or use the default one
5. Copy the following values:
   - **Space ID**: Found in the API key settings
   - **Content Delivery API - access token**: Also found in the API key settings

## Step 2: Set Up Environment Variables

1. Create a `.env.local` file in your project root
2. Add your Contentful credentials:

```env
CONTENTFUL_SPACE_ID=your_space_id_here
CONTENTFUL_ACCESS_TOKEN=your_access_token_here
```

## Step 3: Create Content Types in Contentful

You'll need to create the following content types in your Contentful space:

### Hero Section Content Type

- **Content Type ID**: `heroSection`
- **Fields**:
  - `title` (Short text)
  - `subtitle` (Long text)
  - `ctaText` (Short text)
  - `backgroundImage` (Media - Image)

### Feature Section Content Type

- **Content Type ID**: `featureSection`
- **Fields**:
  - `title` (Short text)
  - `description` (Long text)
  - `ctaText` (Short text)
  - `image` (Media - Image)

### Work Item Content Type

- **Content Type ID**: `workItem`
- **Fields**:
  - `title` (Short text)
  - `image` (Media - Image)

## Step 4: Add Content

1. In your Contentful space, create entries for each content type
2. Add your content and images
3. Publish the entries

## Step 5: Test the Integration

1. Start your development server:

   ```bash
   npm run dev
   ```

2. Visit your application - it should now display content from Contentful
3. If no content is found, the app will fall back to default content

## File Structure

The integration includes the following files:

- `src/lib/contentful.ts` - Contentful client configuration
- `src/lib/api.ts` - API functions for fetching data
- `src/app/page.tsx` - Updated to use Contentful data
- `env.example` - Environment variables template

## Troubleshooting

### Common Issues

1. **"Cannot read properties of undefined"**: Check that your environment variables are set correctly
2. **No content displayed**: Ensure your Contentful entries are published
3. **Images not loading**: Verify that images are uploaded and published in Contentful

### Debug Mode

To debug Contentful responses, you can add console logs in the API functions:

```typescript
console.log("Contentful response:", response);
```

## Next Steps

- Customize the content types to match your specific needs
- Add more sections and content types as required
- Implement content preview functionality for draft content
- Add error boundaries for better error handling
- Consider implementing ISR (Incremental Static Regeneration) for better performance

## Security Notes

- Never commit your `.env.local` file to version control
- Use different API keys for development and production
- Consider using Content Preview API for draft content in development
