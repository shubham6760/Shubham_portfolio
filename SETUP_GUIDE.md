# 🚀 Portfolio Setup Guide

Your professional AI Engineer portfolio has been successfully customized! Here's everything you need to know:

## 📁 Project Structure

```
/Users/shubhamraj/Documents/potfolio/
├── src/
│   ├── components/        # React components (Hero, About, Contact, etc.)
│   ├── constants/         # Portfolio data (experiences, projects, skills)
│   ├── assets/           # Images and icons
│   ├── styles/           # CSS styles
│   ├── utils/            # Utility functions
│   └── App.jsx
├── public/               # Static assets
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
├── tailwind.config.cjs   # Tailwind CSS configuration
└── README.md            # Documentation
```

## ⚙️ Installation & Setup

### Step 1: Install Node.js
Visit https://nodejs.org/ and install the LTS version for your system.

### Step 2: Install Dependencies
```bash
cd /Users/shubhamraj/Documents/potfolio
npm install
```

### Step 3: Start Development Server
```bash
npm run dev
```

Your portfolio will run at `http://localhost:5173`

## 📝 Customization Guide

### Update Personal Information

**Hero Section** - `src/components/Hero.jsx`
- Change the greeting name
- Update subtitle/tagline

**About Section** - `src/components/About.jsx`
- Edit professional summary
- Update services (LLM Engineering, ML Operations, etc.)

**Contact Information** - `src/components/Contact.jsx`
- Update GitHub, LinkedIn URLs
- Change email and phone numbers
- Update location

### Update Portfolio Data

**All portfolio content** is in `src/constants/index.js`:

- **experiences**: Work history and education timeline
- **projects**: Project showcases with descriptions
- **projects2**: Additional notable projects
- **technologies, frameworks, languages, cloudcomputing, databases**: Skill categories

Example to add a new project:
```javascript
{
  name: "Project Name",
  description: ["Description point 1", "Description point 2"],
  tags: ["Tag1", "Tag2"],
  image: projectImage,
  source_code_link: "https://github.com/your-repo",
}
```

### Add Project Images

1. Place image files in `src/assets/`
2. Import in `src/constants/index.js`
3. Reference in project object

## 🎨 Styling

The portfolio uses:
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Three.js**: 3D graphics (canvas components)

Main style files:
- `src/index.css` - Global styles
- `tailwind.config.cjs` - Tailwind configuration
- Components use inline Tailwind classes

## 🚀 Build & Deployment

### Build for Production
```bash
npm run build
```

This creates a `dist/` folder with optimized files.

### Deploy to GitHub Pages

1. Update repository in `package.json`
2. Run:
```bash
npm run deploy
```

Or manually:
```bash
npm run build
git add .
git commit -m "Build portfolio"
git push origin main
```

## 📊 Updated Portfolio Content

### ✅ Customized Sections

- **Hero Title**: "Hi, I am Shubham"
- **Subtitle**: "AI Engineering | LLM & NLP | ML Operations | Cloud"
- **About**: Senior AI Engineer with LLMOps expertise
- **Services**: LLM Engineering, ML Operations, Document AI/OCR, Cloud DevOps
- **Work Experience**: 
  - Senior AI Engineer at Trulogik (06/2024 - Current)
  - Data Scientist at Hyster-Yale Group (07/2023 - 06/2024)
  - Data Science Intern at iNeuron.ai (11/2022 - 07/2023)
- **Education**: M.Tech AI (SIT), B.Tech IT (SIT)
- **Projects**: 5 notable AI/ML projects with detailed descriptions
- **Contact**: Pune, MH | +91 9661188989 | sr6760.sr@gmail.com

## 🔗 Important Links

- **Portfolio Live**: Deployed on GitHub Pages
- **GitHub Repo**: Add your GitHub repository link
- **LinkedIn**: Update your LinkedIn profile URL
- **Resume**: Add link to your resume/CV

## 🛠️ Troubleshooting

### Port already in use
```bash
npm run dev -- --port 3000
```

### Clear node_modules and reinstall
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build errors
```bash
npm run build -- --debug
```

## 📱 Responsive Design

The portfolio is fully responsive and works on:
- ✅ Desktop (1920px+)
- ✅ Tablet (768px - 1024px)
- ✅ Mobile (< 768px)

Test responsive design:
- Chrome DevTools: Ctrl+Shift+I (or Cmd+Shift+I on Mac)
- Toggle device toolbar to test different screen sizes

## 🎯 Next Steps

1. **Install Node.js** if not already installed
2. **Run `npm install`** to install dependencies
3. **Run `npm run dev`** to see your portfolio locally
4. **Customize content** in `src/constants/index.js` as needed
5. **Add project images** to `src/assets/`
6. **Test on mobile** to ensure responsive design
7. **Deploy** when ready

## 📞 Your Contact Info

- **Email**: sr6760.sr@gmail.com
- **Phone**: +91 9661 188 989
- **Location**: Pune, MH 411011, India
- **LinkedIn**: [Update with your LinkedIn URL]
- **GitHub**: [Update with your GitHub URL]

---

**Happy coding! Your portfolio is ready to showcase your AI engineering expertise! 🎉**
