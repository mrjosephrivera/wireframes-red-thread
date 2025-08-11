🚀 v0 → GitHub → Vercel (1-Minute Update)
When you update your project from v0:

0️⃣ Open your project folder in Terminal

cd ~/Documents/Dev\ Projects/red-thread-homepage

(Adjust the path if your folder is somewhere else)

1️⃣ Sync from v0 (replace URL with your v0 link)

npx shadcn@latest add "https://v0.app/chat/b/b_1FNax7pBnWJ"

Answer overwrite prompts as needed.
Let it finish the git commit automatically if it’s configured.

2️⃣ (Optional) Install dependencies locally
Run only if:

You want to run the site locally (npm run dev)

OR v0 added new dependencies and you want them available before pushing

pnpm install     # if using pnpm
# or
npm install      # if using npm

💡 You can skip this if you’re only pushing to Vercel — Vercel will install dependencies automatically.

3️⃣ Push to GitHub

git add .
git commit -m "Describe changes here"
git push


4️⃣ Vercel Deploy

Vercel deploys automatically after a push to main (or your production branch).

Check the deployment logs on vercel.com.

📂 Extras:

Your cheat sheet is stored in docs/update-cheatsheet.md for easy access.
Screenshots are in docs/screenshots/.


Vercel auto-redeploys. Your .vercel.app link updates in ~1–2 min.
