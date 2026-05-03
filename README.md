# CreatorPass

CreatorPass is a Bags Hackathon Payments-track prototype that turns creator tokens into checkout infrastructure. Creators can create payment links, fan passes, and token-gated memberships, then show fans a Bags-powered checkout preview with fee splits and payment history.

Live site: <https://ming7177.github.io/creatorpass/>  
Live locally: <http://127.0.0.1:4173/>  
Static entrypoint: `index.html`  
Chosen hackathon: [The Bags Hackathon](https://dorahacks.io/hackathon/the-bags-hackathon/detail)

## Submission Pitch

CreatorPass helps Bags creators monetize without building a custom checkout stack. A creator configures a product, sets a creator-token holding requirement, generates a prototype checkout URL, and sees the estimated creator proceeds before sharing it with fans.

## Hackathon Fit

- Track: Payments
- Deadline: 2026-06-02 05:30
- Prize pool: 1,000,000 USD
- Why this is a strong fit: it focuses on creator monetization, payment links, token-gated access, and the Bags creator-token economy instead of another generic analytics dashboard.

## Current Demo

Implemented:

- Payment link builder
- Payment, membership, and fan-pass modes
- Creator-token gate toggle
- Minimum token balance setting
- Live checkout preview
- In-app judge-ready flow summary
- Fee and royalty split calculator
- Prototype checkout URL generation
- Checkout session state for the generated link
- Fulfillment status after simulated payment
- Copy and share feedback states
- Pay with Bags prototype payment feedback
- Sidebar navigation feedback for all demo sections
- Submission readiness checklist inside the app
- Simulated fan payment events
- Responsive desktop and mobile layout

Judge flow:

1. Open the dashboard.
2. Select `Membership`.
3. Click `Create link`.
4. Show the generated checkout session and fulfillment preview.
5. Click `Copy` or a share destination.
6. Click `Pay with Bags` in the preview or `Simulate payment` in the table.
7. Show the receipt, delivered access state, readiness checklist, and new payment row.

## Prototype Limitations

- Static prototype only: no backend API, database, wallet connection, or real on-chain transaction.
- The checkout URL uses the demo domain `https://creatorpass.xyz/pay/...`.
- Creator/token stats are seeded demo data.
- Bags SDK/API integration is planned but not implemented in this submission-ready polish pass.

## Next Steps

1. Fetch creator token metadata and holder stats from Bags REST API or `@bagsfm/bags-sdk`.
2. Add wallet connection and holder-balance verification.
3. Create a checkout-session endpoint that validates token requirements.
4. Verify Solana payment transactions and record tx signatures.
5. Persist fulfillment records and deliver buyer access after verified payment.
6. Launch the project/token on Bags before DoraHacks submission.

## Static Deployment

This repo has no build step and no package dependencies. Deploy the folder as a static site:

- GitHub Pages: publish the repository root.
- Netlify: drag/drop the folder or set publish directory to `/`.
- Vercel: import as a static project and keep the output directory as `/`.

`404.html` redirects unknown static routes back to the app.
See `docs/deployment.md` for deployment steps.

## Bags Integration Entry Point

The page now includes a `Bags integration status` section that separates live integration seams from prototype-only behavior. Do not put a Bags API key in frontend code. Use `docs/bags-integration.md` for the backend/serverless proxy plan.

## Submission Assets

- App icon: `assets/app-icon.svg`
- Desktop screenshot: `docs/creatorpass-desktop-render.png`
- Mobile screenshot: `docs/creatorpass-mobile-render.png`
- Demo script: `docs/demo-script.md`
- DoraHacks copy: `docs/dorahacks-submission.md`
- Bags integration notes: `docs/bags-integration.md`
- Deployment notes: `docs/deployment.md`
- Product hardening plan: `docs/product-hardening-plan.md`
- Judge QA guide: `docs/judge-qa.md`
