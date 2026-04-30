# CreatorPass Upload Packet

Use this file as the copy/paste source for DoraHacks.

## Hackathon

The Bags Hackathon

## Track

Payments

## Project Name

CreatorPass

## Tagline

Token-gated checkout links for Bags creators.

## Short Description

CreatorPass lets Bags creators create token-gated payment links, fan passes, and memberships powered by creator-token ownership.

## Long Description

CreatorPass is checkout infrastructure for the Bags creator-token economy. A creator configures a product, chooses payment or membership mode, sets a creator-token holding requirement, previews the fan checkout, and generates a shareable prototype checkout URL.

The current build is a polished static demo for judge review. It demonstrates the full product flow: product setup, token-gated access, live checkout preview, fee and royalty split calculation, copy/share states, Bags integration status, and simulated fan payment history.

The next live integration branch will connect Bags Public API or `@bagsfm/bags-sdk`, keep the API key server-side, verify creator-token holder requirements, and record real Solana payment transactions.

## Problem

Creator-token ownership is powerful, but creators still need a simple way to turn holders into paying fans. Without checkout infrastructure, every creator has to assemble holder checks, payment links, digital product fulfillment, and payment records from scratch.

## Solution

CreatorPass packages that workflow into a dashboard:

- Create payment links, fan passes, and memberships.
- Require fans to hold a minimum creator-token balance.
- Preview the fan checkout before sharing.
- Estimate creator proceeds after royalties, platform fees, and network fees.
- Track fan payment events in one place.

## Demo Flow

1. Open the CreatorPass dashboard.
2. Select `Membership`.
3. Review the live checkout preview and fee split.
4. Click `Create link`.
5. Copy or share the prototype checkout URL.
6. Click `Simulate payment`.
7. Show the new payment event and the Bags integration status section.

## Technical Stack

- Static frontend: HTML, CSS, JavaScript
- No build step
- No package dependencies
- Static deployment ready for GitHub Pages, Netlify, or Vercel
- Bags live integration plan documented in `docs/bags-integration.md`

## Links To Fill Before Final Upload

- Website URL: TODO
- GitHub URL: TODO
- Demo Video URL: TODO
- X/Twitter Contact: TODO
- Bags Project/Token URL: TODO

## Honest Limitations

- This submission build does not connect a wallet or verify on-chain payments.
- Current creator/token stats are seeded demo data.
- Prototype checkout URLs use `https://creatorpass.xyz/pay/...`.
- Bags API key must be kept server-side in the next branch.
