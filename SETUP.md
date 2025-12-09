# Portfolio Setup Guide

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory with your GitHub Personal Access Token:


GITHUB_USERNAME=MUHRIS-AJ
```

**Important:** 
- Never commit your `.env.local` file to Git (it's already in `.gitignore`)
- The GitHub token allows the portfolio to automatically fetch your repositories
- If you need to create a new token, go to GitHub Settings → Developer settings → Personal access tokens

### 3. Add Your Profile Picture

1. Place your profile picture in the `public` folder
2. Name it `profile.jpg` or `profile.png`
3. Update the image reference in `components/Header/index.jsx` if needed

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio!

## 🎨 Features

### ✨ Galaxy Theme
- Beautiful purple/lavender color scheme
- Neumorphic design elements
- Animated starfield background
- Smooth fade-in and floating animations

### 🔄 Auto-Updating Projects
- Automatically fetches your GitHub repositories
- Updates every 5 minutes
- Shows all your public repositories
- Sorted by most recently updated

### 📚 Sections Included
- **Hero Section** - Introduction with animated effects
- **Education** - Your academic journey
- **Certifications** - Professional certifications
- **Experience** - Work experience (if any)
- **GitHub Projects** - Auto-fetched from your GitHub
- **Skills** - Technical skills organized by category
- **Contact** - Contact form and information

## 🛠️ Customization

### Update Personal Information

Edit `config.js` to update:
- Name
- Social media links
- Education details
- Skills
- Certifications
- Contact information

### Change Colors

The galaxy theme uses purple/pink colors. To customize:
1. Edit `app/globals.css` - Update CSS variables
2. Edit `tailwind.config.js` - Update Tailwind color scheme

### Add More Sections

1. Create a new component in `app/(home)/components/`
2. Import and add it to `app/(home)/page.jsx`

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🌐 Deploy

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard:
   - `GITHUB_TOKEN`
   - `GITHUB_USERNAME`
4. Deploy!

### Other Platforms

Make sure to set the environment variables:
- `GITHUB_TOKEN`
- `GITHUB_USERNAME`

## 📝 Notes

- The portfolio automatically fetches repositories from GitHub using the API
- Projects are sorted by most recently updated
- The design is fully responsive and works on all devices
- All animations use Framer Motion for smooth performance

## 🐛 Troubleshooting

### GitHub API Not Working
- Check that `GITHUB_TOKEN` is set correctly
- Verify the token has `repo` scope
- Check browser console for errors

### Projects Not Showing
- Ensure you have public repositories on GitHub
- Check the API route at `/api/github/repos`
- Verify the GitHub username is correct

### Styling Issues
- Clear browser cache
- Run `npm run build` to rebuild
- Check that Tailwind CSS is compiling correctly

## 📧 Support

If you encounter any issues, check:
1. Browser console for errors
2. Terminal for build errors
3. Environment variables are set correctly

---

**Created with ❤️ for Abool Jaya Muhris**

