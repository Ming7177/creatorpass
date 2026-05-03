# CreatorPass Demo Script

Target length: 3-5 minutes

## 0:00-0:30 - Problem

Creators on Bags can launch creator tokens, but turning that token ownership into real payment flows still requires custom checkout logic, holder checks, and sharing workflows. CreatorPass packages those steps into a payment-link dashboard for creator-token products.

## 0:30-1:20 - Product Setup

Open CreatorPass and show the Studio Nova demo creator context. Explain that the left side is the creator workspace, the center panel creates a product checkout, and the right side previews what a fan sees before paying. Mention that Studio Nova and NOVA are seeded demo data, not a claimed live Bags project.

Select `Membership`. The title, description, and price update immediately. Point out that the checkout preview and fee split stay synchronized with creator inputs.

## 1:20-2:10 - Token-Gated Checkout

Show the token requirement section. Keep the creator token as `NOVA` and the minimum balance as `100,000`. Explain that this is the future Bags SDK/API integration point: the checkout should verify holder balance before allowing the payment.

Click `Create link`. Show that the builder moves from `Draft` to `Ready`, a prototype checkout URL appears, and the checkout session panel receives a session ID plus holder-check state.

## 2:10-3:00 - Sharing and Payment Feedback

Click `Copy`, then click `Discord` or `Telegram`. Explain that CreatorPass is designed for creator distribution channels where fans already gather.

Click `Pay with Bags` in the preview or `Simulate payment` above the table. Show the new payment row, receipt, fulfillment state, and submission readiness checklist. Explain that the real version will replace this simulation with wallet connection, Solana transaction verification, and Bags token-holder checks.

## 3:00-4:00 - Why It Matters

CreatorPass is not just analytics. It gives Bags creators a direct monetization primitive: payment links, fan passes, memberships, holder-gated drops, checkout sessions, and post-payment fulfillment. The product can increase transaction volume for the Bags ecosystem while helping creators sell to their strongest token-holding fans.

## 4:00-5:00 - Roadmap

The next build steps are:

1. Connect Bags REST API or `@bagsfm/bags-sdk` for real creator token metadata.
2. Add wallet connection and holder-balance checks.
3. Create checkout sessions for digital products and memberships.
4. Verify Solana payments and record tx signatures.
5. Launch the project/token on Bags for final DoraHacks submission.
