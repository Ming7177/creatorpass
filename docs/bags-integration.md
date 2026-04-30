# Bags Integration Notes

This static submission build intentionally does not expose a Bags API key in browser code. The live integration should be implemented through a small backend or serverless proxy before connecting wallet/payment flows.

## Confirmed Bags Surfaces

- API base URL: `https://public-api-v2.bags.fm/api/v1/`
- API auth header: `x-api-key`
- API key source: Bags Developer Portal at `https://dev.bags.fm`
- SDK package: `@bagsfm/bags-sdk`
- SDK requirement: Bags API key plus a Solana RPC connection

References:

- API base URL and versioning: <https://docs.bags.fm/principles/base-url-versioning>
- API key example: <https://docs.bags.fm/faq/how-to-get-api-key>
- SDK package: <https://www.npmjs.com/package/@bagsfm/bags-sdk>

## Integration Shape

### Frontend

- Keep `index.html`, `styles.css`, and `app.js` as the static shell.
- Replace seeded creator stats with data returned by a backend endpoint such as `/api/bags/creator-token`.
- Replace simulated payment rows with verified payment events returned by `/api/payments`.
- Continue showing clear labels for prototype-only values until live data is present.

### Backend / Serverless Proxy

- Store `BAGS_API_KEY` server-side only.
- Call Bags Public API with the `x-api-key` header.
- Validate creator token metadata and holder requirements.
- Create checkout sessions for payment links.
- Record Solana transaction signatures after wallet payment verification.

### SDK Branch

Use the SDK once the project has a backend/runtime environment:

```js
import { BagsSDK } from "@bagsfm/bags-sdk";
import { Connection, PublicKey } from "@solana/web3.js";

const connection = new Connection(process.env.SOLANA_RPC_URL);
const sdk = new BagsSDK(process.env.BAGS_API_KEY, connection, "processed");
const creators = await sdk.state.getTokenCreators(new PublicKey(tokenMint));
```

## Minimum Winning Upgrade

For the next implementation branch, do the smallest live integration that materially improves judging:

1. Create a serverless endpoint that returns real Bags token metadata for one project/token.
2. Show a `Live Bags data` label on the dashboard only when the endpoint succeeds.
3. Keep checkout and payments simulated until wallet verification is implemented.
4. Record failures clearly as `Demo fallback` instead of silently showing fake live data.
