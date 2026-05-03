# DoraHacks Submission Copy

## Project Name

CreatorPass

## Hackathon

The Bags Hackathon

## Deadline

2026-06-02 05:30

## Track

Payments

## Short Description

CreatorPass lets Bags creators create token-gated checkout links, fan passes, and memberships powered by creator-token ownership.

## Long Description

CreatorPass is a payment-link dashboard for the Bags creator-token economy. A creator configures a product, chooses payment or membership mode, sets a creator-token holding requirement, previews the fan checkout, and generates a prototype checkout URL for sharing.

The current demo is a polished static prototype for judge review. It demonstrates the key product workflow: product setup, token-gated access, live checkout preview, fee and royalty split calculation, checkout session state, fulfillment after payment, share states, Pay with Bags prototype feedback, and simulated fan payment history. The planned Bags integration will replace seeded demo data with Bags API or `@bagsfm/bags-sdk` responses, add wallet connection, verify token-holder requirements, and record real Solana payment transactions.

The demo uses a fictional Studio Nova creator and NOVA token so reviewers do not confuse seeded data with a claimed live Bags project.

## Problem

Creator-token ownership is powerful, but creators still need a simple way to convert token holders into paying fans. Without checkout infrastructure, each creator has to assemble holder checks, payment links, digital product delivery, and payment records from scratch.

## Solution

CreatorPass packages that workflow into a simple dashboard:

- Create payment links, fan passes, and memberships.
- Require fans to hold a minimum creator-token balance.
- Preview the fan checkout before sharing.
- Estimate creator proceeds after royalties, platform fees, and network fees.
- Show checkout-session state and post-payment fulfillment.
- Track fan payment events in one place.

## Demo Flow

1. Open the CreatorPass dashboard.
2. Select `Membership`.
3. Review the live checkout preview and fee split.
4. Click `Create link`.
5. Show the generated checkout session and fulfillment preview.
6. Copy or share the prototype checkout URL.
7. Click `Pay with Bags` in the preview or `Simulate payment` in the table.
8. Show the simulated receipt, delivered access state, and new payment event in the table.

## Technical Notes

- Static frontend: `index.html`, `styles.css`, `app.js`
- No backend API or package dependencies in the polished demo
- In-app judge flow summary and explicit prototype boundary
- Checkout-session, fulfillment, and submission-readiness states
- App icon: `assets/app-icon.svg`
- Prototype checkout URL domain: `https://creatorpass.xyz/pay/...`
- Ready for static deployment on GitHub Pages, Netlify, or Vercel

## Limitations

- This build does not perform real wallet connection or on-chain transaction verification.
- Creator/token data is seeded demo data for Studio Nova / NOVA.
- Bags SDK/API integration is planned but not included in this static polish pass.

## Next Steps

1. Fetch creator token metadata and holder stats from Bags REST API or `@bagsfm/bags-sdk`.
2. Verify token-holder requirements during checkout.
3. Add wallet connection and Solana payment verification.
4. Persist checkout links and payment events.
5. Launch the project/token on Bags before the final submission deadline.
