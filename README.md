# Deploying Memoria Production AI App

This project is a React application built with [Vite](https://vitejs.dev/) and [Tailwind CSS](https://tailwindcss.com/). Follow these steps to host it on GitHub and deploy it via Vercel.

## 1. Prepare for GitHub

Since you want to upload via the GitHub interface:

1.  **Zip your project folder**: Compress the `nano banna image gen` folder (excluding `node_modules` if possible, but the GitHub interface has file limits, so it's better to use Git).
2.  **Create a new repository** on GitHub.
3.  **Upload files**: Drag and drop all files and folders (except `node_modules`) into the GitHub upload area.

### Better Alternative: Using Git (Recommended)
If you have Git installed, run these commands in your project folder:
```bash
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

## 2. Deploy to Vercel

1.  Go to [Vercel](https://vercel.com/) and log in with your GitHub account.
2.  Click **"Add New"** > **"Project"**.
3.  Import the repository you just created.
4.  **Important**: In the configuration:
    - **Framework Preset**: Vite
    - **Build Command**: `npm run build`
    - **Output Directory**: `dist`
5.  Click **"Deploy"**.

## 3. Important Note on API Keys
The code has an `apiKey` variable set to an empty string. To make the AI features work:
1.  Search for `const apiKey = "";` in `src/App.jsx`.
2.  Insert your Google Gemini API key between the quotes.
    - *Security Tip*: For a production app, use Vercel Environment Variables (`VITE_GEMINI_API_KEY`) and access it via `import.meta.env.VITE_GEMINI_API_KEY`.

## Development
To run locally:
```bash
npm install
npm run dev
```
