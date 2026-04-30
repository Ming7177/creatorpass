# Static Deployment

CreatorPass currently has no build step and no package dependencies. Deploy the repository root as a static site.

## GitHub Pages

1. Push the repository.
2. Open repository settings.
3. Enable Pages from the default branch root.
4. Keep `.nojekyll` so GitHub serves files directly.

## Netlify

1. Import the repository or drag/drop the project folder.
2. Use the repository root as the publish directory.
3. `netlify.toml` already sets `publish = "."` and redirects app routes to `index.html`.

## Vercel

1. Import the repository as a static project.
2. Leave build command empty.
3. Leave output directory empty or set it to the project root.

## Required Submission URLs

- Website URL: deployed static app URL
- GitHub URL: repository URL
- Demo video URL: 3-5 minute walkthrough
