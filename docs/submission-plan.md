# CreatorPass Submission Plan

## DoraHacks Target

Hackathon: The Bags Hackathon  
Track: Payments  
Deadline: 2026-06-02 05:30  
Prize pool: 1,000,000 USD  
Submission requirements: Bags launch, project icon/name/description, website URL, GitHub URL, track selection, token details, 3-5 minute demo video, X profile.

## Product Pitch

CreatorPass turns Bags creator tokens into checkout infrastructure. A creator can publish a payment link, fan pass, or membership checkout, then require fans to hold a chosen creator token balance before purchase. The creator sees the fee split, generated link, and payment history in one dashboard.

## Judge-Facing Demo Flow

1. Open the dashboard and show the Studio Nova demo creator context.
2. Choose product type: Payment, Membership, or Fan Pass.
3. Set title, description, currency, price, and token requirement.
4. Watch the checkout preview update live.
5. Click `Create link`.
6. Show generated link, checkout session, fulfillment state, share state, and simulated payment row.
7. Explain the planned Bags SDK connection and token launch requirement.

## Differentiation

- Focuses on real creator monetization rather than another token analytics dashboard.
- Uses token ownership as a payment and loyalty primitive.
- Helps Bags creators generate transactions, not just view market data.
- Can expand into embeds for X, Discord, Telegram, and creator websites.

## Build Roadmap

### Milestone 1: Static Product Demo

- Completed dashboard UI.
- Completed live preview.
- Completed simulated payment events.

### Milestone 2: Bags SDK/API

- Fetch creator token metadata.
- Fetch holder and token stats.
- Validate holder balance before checkout.
- Persist payment links.

### Milestone 3: Real Checkout

- Connect wallet.
- Verify Solana payment transaction.
- Unlock digital product or fan pass.
- Record tx signature and payout estimate.

### Milestone 4: Submission Polish

- Deploy public URL.
- Record 3-5 minute demo video.
- Launch project/token on Bags.
- Fill DoraHacks BUIDL metadata.
