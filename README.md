# Shadcn UI Component Library

A curated collection of beautiful, accessible Shadcn UI components with a public registry for easy CLI integration and Vercel deployment.

![Component Library Showcase](https://github.com/user-attachments/assets/177edb3b-1685-4f6c-a5c2-8d6dd68f1e84)

## 🚀 Features

- ✨ **Beautiful Components**: Hand-picked Shadcn UI components with modern design
- 🎨 **Fully Customizable**: Built with Tailwind CSS v4 and CSS variables
- 📦 **CLI Integration**: Install components via Shadcn CLI with custom registry
- 🌐 **Live Preview**: Visual showcase deployed on Vercel
- 🔌 **Public API**: RESTful endpoints for component registry
- ♿ **Accessible**: WCAG compliant components

## 📚 Available Components

- **Button**: Versatile button with multiple variants (default, secondary, destructive, outline, ghost, link) and sizes
- **Card**: Flexible card container with header, content, description, and footer sections
- **Input**: Accessible text input with proper styling and placeholder support

## 🛠️ Installation

### Using Shadcn CLI

Add components to your project using the Shadcn CLI with our custom registry:

```bash
# Add a single component
npx shadcn@latest add button --registry https://your-domain.vercel.app/registry

# Add multiple components
npx shadcn@latest add button card input --registry https://your-domain.vercel.app/registry
```

### Manual Installation

1. Clone this repository:
```bash
git clone https://github.com/badbsallyy/Components.git
cd Components
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🌍 Deployment

This project is ready to be deployed on Vercel:

1. Push your changes to GitHub
2. Import the project in Vercel
3. Deploy with default settings
4. Your component library will be live!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/badbsallyy/Components)

## 📡 Registry API

The component registry is accessible through both static files and API endpoints:

### Static Files
- `/registry/index.json` - List of all available components
- `/registry/button.json` - Button component definition
- `/registry/card.json` - Card component definition
- `/registry/input.json` - Input component definition

### API Endpoints
- `GET /api/registry` - Returns the component index
- `GET /api/registry/[component]` - Returns specific component details

## 🏗️ Project Structure

```
.
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── registry/          # API routes for registry
│   │   ├── globals.css            # Global styles with CSS variables
│   │   ├── layout.tsx             # Root layout
│   │   └── page.tsx               # Showcase page
│   ├── components/
│   │   └── ui/                    # UI components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       └── input.tsx
│   └── lib/
│       └── utils.ts               # Utility functions (cn)
├── public/
│   └── registry/                  # Static registry files
│       ├── index.json
│       ├── button.json
│       ├── card.json
│       └── input.json
├── components.json                # Shadcn UI configuration
├── package.json
└── tsconfig.json
```

## 🎨 Customization

Components use CSS variables for theming. Customize colors in `src/app/globals.css`:

```css
:root {
  --color-primary: 222.2 47.4% 11.2%;
  --color-secondary: 210 40% 96.1%;
  /* ... more variables */
}
```

## 🧪 Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 📝 Adding New Components

1. Create the component in `src/components/ui/[component].tsx`
2. Create a registry file in `public/registry/[component].json` with:
   - Component name
   - Dependencies
   - File content
3. Update `public/registry/index.json` to include the new component
4. Add showcase in `src/app/page.tsx`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT

## 🔗 Links

- [Shadcn UI](https://ui.shadcn.com/)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)

