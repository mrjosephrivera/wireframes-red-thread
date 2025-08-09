v0 → GitHub → Vercel (fast update loop)


Project folder

cd ~/Documents/"Dev Projects"/red-thread-homepage

1) Pull changes from v0
In v0: … → Add to Codebase → copy the command (starts with npx shadcn).

In Terminal (here in this folder):
npx shadcn@latest add "https://v0.dev/chat/b/b_I1lB3aZhI1f"


If prompted to overwrite files (e.g., layout.tsx, page.tsx), press y unless you’ve customized them.

Install deps (match your lockfile):

pnpm install   # if you use pnpm
# or
npm install    # if you use npm


2) Commit & push (triggers deploy)

git add .
git commit -m "Sync from v0"
git push


Vercel auto-redeploys. Your .vercel.app link updates in ~1–2 min.
