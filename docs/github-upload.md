# GitHub Upload Steps

## Option A - GitHub Desktop

1. Open GitHub Desktop.
2. Add existing repository: `D:\项目文件夹\黑客松赚钱专属`.
3. Publish repository.
4. Copy the GitHub URL into `SUBMISSION.md`.

## Option B - Git CLI

After creating an empty GitHub repository, run:

```powershell
git remote add origin https://github.com/<your-user>/creatorpass.git
git branch -M main
git push -u origin main
```

If Git asks for auth, use GitHub browser login or a personal access token.

## Recommended Repository Settings

- Repository name: `creatorpass`
- Visibility: public
- Description: `Token-gated checkout links for Bags creators`
- Website: your deployed static URL
- Topics: `bags`, `solana`, `creator-economy`, `payments`, `hackathon`
