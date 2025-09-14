# Aditya Kumar - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, showcasing my skills and projects as a Backend Developer and Full-Stack Engineer.

## 🌟 Live Demo

Visit the live portfolio: [https://adityakumar.live](https://portfolio.adityakumar.live)

## 📸 Screenshots

The portfolio features a clean, professional design with dark/light theme support and smooth animations.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all device sizes
- **Dark/Light Theme**: Toggle between dark and light modes with system preference detection
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **Smooth Animations**: Engaging animations and transitions throughout the site
- **Performance Optimized**: Fast loading with optimized assets and modern build tools
- **SEO Friendly**: Proper meta tags and semantic HTML structure
- **Professional Sections**:
  - Hero section with dynamic introduction
  - About me with personal story
  - Skills showcase with categorized expertise
  - Professional experience timeline
  - Featured projects with live demos
  - Education background
  - Contact information and resume download

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern, accessible UI components
- **Lucide React** - Beautiful icon library

### UI/UX
- **Radix UI** - Unstyled, accessible components
- **Class Variance Authority** - Type-safe component variants
- **Tailwind Merge** - Efficient class merging
- **React Router DOM** - Client-side routing

### Development Tools
- **ESLint** - Code linting and formatting
- **TypeScript ESLint** - TypeScript-specific linting rules
- **PostCSS** - CSS processing
- **Autoprefixer** - Automatic vendor prefixing

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── adi_new_dp_hd.jpeg      # Profile image
│   │   ├── Aditya_Kumar-Resume.pdf  # Resume file
│   │   ├── hero-bg.jpg             # Hero background
│   │   └── not_found_02.jfif       # 404 page image
│   ├── components/
│   │   ├── ui/                     # shadcn/ui components
│   │   ├── About.tsx               # About section
│   │   ├── Contact.tsx             # Contact section
│   │   ├── Education.tsx           # Education section
│   │   ├── Experience.tsx          # Professional experience
│   │   ├── Footer.tsx              # Footer component
│   │   ├── Header.tsx              # Navigation header
│   │   ├── Hero.tsx                # Landing section
│   │   ├── Projects.tsx            # Projects showcase
│   │   ├── Skills.tsx              # Skills & expertise
│   │   └── ThemeProvider.tsx       # Theme management
│   ├── hooks/
│   │   ├── use-mobile.tsx          # Mobile detection hook
│   │   └── use-toast.ts            # Toast notifications
│   ├── lib/
│   │   └── utils.ts                # Utility functions
│   ├── pages/
│   │   ├── Index.tsx               # Main portfolio page
│   │   └── NotFound.tsx            # 404 error page
│   ├── App.tsx                     # Main app component
│   ├── index.css                   # Global styles & theme variables
│   └── main.tsx                    # App entry point
├── components.json                 # shadcn/ui configuration
├── package.json                    # Dependencies and scripts
├── tailwind.config.ts              # Tailwind configuration
├── tsconfig.json                   # TypeScript configuration
└── vite.config.ts                  # Vite configuration
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/aditya-Kumar421/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:8080`

### Build for Production

```bash
# Build the project
npm run build
# or
yarn build

# Preview production build
npm run preview
# or
yarn preview
```

## 🎨 Customization

### Theme Customization
The portfolio uses a custom design system defined in `src/index.css`. You can customize:
- Color palette (primary, secondary, accent colors)
- Typography scale
- Border radius values
- Shadow system
- Gradient backgrounds

### Content Updates
Update personal information in the respective component files:
- `Hero.tsx` - Name, title, contact info
- `About.tsx` - Personal story and bio
- `Skills.tsx` - Technical and soft skills
- `Experience.tsx` - Professional experience
- `Projects.tsx` - Featured projects
- `Education.tsx` - Educational background

### Adding New Components
The project uses shadcn/ui components. Add new components:
```bash
npx shadcn-ui@latest add [component-name]
```

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Deployment

The portfolio is optimized for deployment on various platforms:

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with zero configuration

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Other Platforms
The built files in the `dist` folder can be deployed to any static hosting service.

## 🎯 Key Features Implemented

### Professional Design System
- Custom color palette with dark/light theme support
- Consistent typography and spacing
- Professional gradient backgrounds
- Smooth animations and transitions

### Performance Optimizations
- Code splitting with React Router
- Optimized images and assets
- Minimal bundle size with tree shaking
- Fast development with Vite HMR

### Accessibility
- Semantic HTML structure
- ARIA labels and attributes
- Keyboard navigation support
- Screen reader friendly

### SEO Ready
- Proper meta tags
- Semantic markup
- Fast loading times
- Mobile-friendly design

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

While this is a personal portfolio, feedback and suggestions are welcome! Feel free to:
- Open an issue for bugs or suggestions
- Submit a pull request for improvements
- Use this as a template for your own portfolio

## 📞 Contact

**Aditya Kumar**
- Email: ak.adityakumar421@gmail.com
- Location: Ghaziabad, India
- GitHub: [@aditya-Kumar421](https://github.com/aditya-Kumar421)

---

⭐ If you found this portfolio helpful, please consider giving it a star on GitHub!
