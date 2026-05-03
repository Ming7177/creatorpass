# Judge QA Guide

Use this when reviewing or recording CreatorPass.

## 60-Second Flow

1. Open <https://ming7177.github.io/creatorpass/>.
2. Confirm the top status says `Prototype` and the page states that no wallet/API key is in the browser.
3. Select `Membership`.
4. Click `Create link`.
5. Confirm these states update:
   - Builder status becomes `Ready`.
   - A `creatorpass.xyz/pay/studio-nova/...` prototype URL appears.
   - `Checkout session` shows a session ID and holder check.
   - `Submission readiness` marks generated checkout URL as complete.
6. Click `Pay with Bags`.
7. Confirm these states update:
   - Checkout preview shows a prototype payment confirmation.
   - Checkout session shows a receipt.
   - Fulfillment becomes `Delivered`.
   - Recent fan payments receives a new row.

## Expected Boundaries

- This is a static prototype.
- Studio Nova and NOVA are seeded demo values.
- No wallet connection or live Bags API call is performed in the browser.
- The next branch should add a server-side Bags API proxy, wallet connection, holder verification, and Solana payment verification.

## Pass Criteria

- No page-level horizontal overflow on desktop or mobile.
- Mobile payments table may scroll horizontally inside its own table container.
- All primary controls provide visible feedback.
- The demo is honest about prototype limitations.
