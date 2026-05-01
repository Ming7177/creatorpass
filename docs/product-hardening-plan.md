# CreatorPass Product Hardening Plan

Goal: make CreatorPass feel like a submit-ready Bags Payments prototype before recording the demo video.

## Priority 1 - Judge Clarity

- Keep the first screen focused on creator-token checkout links.
- Show the Payments track, live demo URL, and prototype boundary inside the app.
- Make the judge flow visible without requiring the README.

## Priority 2 - Interaction Trust

- Every primary control must respond: navigation, product modes, token gate, Create link, Copy, Share, Pay with Bags, and Simulate payment.
- Prototype-only actions must say what they simulated instead of pretending to be live chain activity.
- Reset stale success states when the builder settings change.

## Priority 3 - Bags Fit

- Explain why Bags matters: creator-token metadata, holder checks, checkout sessions, and verified Solana payments.
- Keep API keys out of frontend code.
- Label seeded values and prototype checkout URLs honestly.

## Priority 4 - Responsive Quality

- Avoid page-level horizontal overflow on desktop and mobile.
- Allow only the payments table to scroll horizontally on small screens.
- Keep the checkout preview, payment link card, and judge notes readable at 390px width.

## Priority 5 - Submission Readiness

- Keep GitHub Pages as the live deployment target.
- Keep README, SUBMISSION, and DoraHacks copy aligned with the live site.
- Regenerate screenshots only after the product hardening pass is verified.

## Priority 6 - Product Closure

- Show the checkout session that a backend would persist after link creation.
- Show fulfillment status after a simulated Bags payment.
- Show an in-app submission readiness checklist so judges can verify the project quickly.

## Acceptance Criteria

- `node --check app.js` passes.
- Desktop flow works: select Membership, Create link, Copy, Share, Pay with Bags, Simulate payment.
- Checkout session, receipt, fulfillment, and readiness checklist update during the demo.
- Mobile flow works at 390px width without page-level horizontal overflow.
- Updated screenshots are saved in `docs/creatorpass-desktop-render.png` and `docs/creatorpass-mobile-render.png`.
- Latest changes are committed and pushed to GitHub.
