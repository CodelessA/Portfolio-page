# Portfolio Vite + React + CSS

Modern portfolio website built with Vite, React, TypeScript and custom CSS.

## 🚀 Features

- ⚡ Vite - lightning fast bundler
- ⚛️ React 18 with TypeScript
- 🎨 Custom CSS with dark theme
- 📱 Responsive design
- 🎭 Framer Motion animations
- 🔍 SEO optimized
- 📧 Contact form
- 🎯 TypeScript for better DX
- 🎮 Hobbies section with tabs

## 🛠️ Technologies Used

- **Bundler**: Vite
- **Framework**: React 18 
- **Styling**: Custom CSS (dark theme)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **TypeScript**: Full support
- **Deployment**: Vercel ready

## 📦 Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open in browser**: [http://localhost:5173](http://localhost:5173)

## 🎨 Customization

### Changing personal information

1. **src/App.tsx** - main page
2. **src/components/Hero.tsx** - hero section with name and description
3. **src/components/About.tsx** - about section
4. **src/components/Hobbies.tsx** - hobbies section with tabs
5. **src/components/Projects.tsx** - your projects
6. **src/components/Contact.tsx** - contact information

### Colors and styling

Edit `src/index.css` to change colors and styles:

```css
/* Main colors */
background-color: #111827; /* Dark background */
color: #e5e7eb; /* Light text */

/* Accent colors */
#60a5fa; /* Blue accent */
#fbbf24; /* Yellow highlight */
```

### Adding projects

In `src/components/Projects.tsx` add new projects to the `projects` array:

```javascript
{
  title: 'Project Name',
  description: 'Project description',
  image: 'url-to-image',
  technologies: ['React', 'Vite'],
  github: 'link-to-github',
  demo: 'link-to-demo',
}
```

### Customizing hobbies

In `src/components/Hobbies.tsx` modify the `tabContent` object:

```javascript
const tabContent = {
  gaming: {
    title: 'Gaming',
    content: 'Your gaming description...',
    games: ['Strategy Games', 'RPGs']
  },
  // Add more hobbies...
}
```

## 🚀 Deployment on Vercel

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy project**:
   ```bash
   vercel
   ```

4. **Or connect with GitHub** - Vercel will auto-deploy on every push.

## 📁 Project Structure

```
├── src/
│   ├── components/
│   │   ├── About.tsx            # About section
│   │   ├── Contact.tsx          # Contact form
│   │   ├── Hero.tsx             # Hero section
│   │   ├── Hobbies.tsx          # Hobbies with tabs
│   │   ├── Navigation.tsx       # Navigation
│   │   └── Projects.tsx         # Portfolio projects
│   ├── App.tsx                  # Main component
│   ├── index.css                # Custom CSS styles
│   └── main.tsx                 # Entry point
├── public/                      # Static files
├── vite.config.ts               # Vite configuration
└── tsconfig.json                # TypeScript configuration
```

## ⚡ Vite Commands

```bash
# Development
npm run dev          # Start development server

# Build
npm run build        # Build for production
npm run preview      # Preview production build

# Linting
npm run lint         # Run ESLint
```

## 🎯 Next Steps

- [ ] Add your real data
- [ ] Replace example projects with yours
- [ ] Add real images
- [ ] Configure contact form (e.g., Formspree, EmailJS)
- [ ] Add Google Analytics
- [ ] Optimize images
- [ ] Add blog (optional)

## 📝 License

This project is open source and available under the MIT License.

---

