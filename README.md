# BRN Repair Slideshow

A configurable slideshow application for Basingstoke Repair Network, built with Astro and Decap CMS.

## Features

- **Configurable Colors**: Brand colors can be customized through Decap CMS
- **Slide Management**: Add, edit, and reorder slides through the CMS interface
- **Auto-play Settings**: Configure slide duration and auto-play behavior
- **Responsive Design**: Optimized for display screens and kiosks
- **Keyboard Navigation**: Arrow keys, spacebar, and escape key support

## Configuration via Decap CMS

### Accessing the CMS

1. Visit `/admin` on your deployed site (e.g., `https://your-site.netlify.app/admin`)
2. Log in with your Netlify Identity credentials
3. Navigate to "Site Configuration" → "Slideshow Configuration"

### Configurable Options

#### Brand Colors
- **Primary Color**: Main brand color (default: #3A3875)
- **Secondary Color**: Accent color (default: #FF6B47) 
- **Text Color**: Color for slide text (default: #ffffff)

#### Slideshow Settings
- **Slide Duration**: How long each slide displays (3-30 seconds)
- **Enable Auto-play**: Whether slideshow automatically advances

#### Slides
- **Content Slides**: Title, subtitle, and gradient direction
- **Iframe Slides**: External content with URL and title

### Gradient Directions
- **Primary to Secondary**: Gradient from primary to secondary color
- **Secondary to Primary**: Gradient from secondary to primary color

## Development

### Prerequisites
- Node.js 18+
- npm

### Setup
```bash
npm install
npm run dev
```

### Building
```bash
npm run build
```

## Deployment

### Netlify (Recommended)
1. Connect your repository to Netlify
2. Enable Netlify Identity in your site settings
3. Configure Git Gateway in Netlify Identity
4. Invite users to access the CMS

### Manual Deployment
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting provider
3. Set up authentication for the `/admin` route

## File Structure

```
src/
├── components/
│   └── Slideshow.astro      # Main slideshow component
├── data/
│   └── slideshow-config.json # CMS-managed configuration
├── layouts/
│   └── Layout.astro         # Base layout with Identity widget
└── pages/
    └── index.astro          # Homepage

public/
└── admin/
    ├── index.html           # CMS interface
    └── config.yml           # CMS configuration
```

## Customization

The slideshow automatically applies your brand colors to:
- Slide backgrounds (gradients)
- Navigation buttons
- Progress indicators
- Progress bar
- Text colors

Colors are managed entirely through the CMS interface - no code changes required.

## Keyboard Controls

- **Arrow Left/Right**: Navigate slides
- **Spacebar/Enter**: Toggle play/pause
- **Escape**: Exit fullscreen (if applicable)

## Browser Support

- Modern browsers with ES6+ support
- Touch-enabled devices
- Fullscreen API support (optional)