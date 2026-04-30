# Recording Shot List

Use this alongside `docs/demo-script.md`.

## Scene 1 - Dashboard Open

Show the deployed CreatorPass URL. Point at:

- `Demo ready`
- Creator-token checkout headline
- Payment link builder
- Live checkout preview
- Bags integration status section lower on the page

## Scene 2 - Build A Membership Link

Actions:

1. Click `Membership`.
2. Keep token requirement enabled.
3. Show `100,000 KONGZ` as the holder gate.
4. Explain that this is where Bags holder verification plugs in.

## Scene 3 - Generate And Share

Actions:

1. Click `Create link`.
2. Show `Ready`.
3. Click `Copy`.
4. Click `Discord`.

Narration:

The prototype URL is generated instantly. In production, this route becomes a checkout session that verifies wallet ownership and payment.

## Scene 4 - Simulate Payment

Actions:

1. Click `Simulate payment`.
2. Show the new payment row.
3. Show fee split.

Narration:

The table is simulated in this static build, but it represents the final event stream after Solana payment verification.

## Scene 5 - Bags Integration Status

Scroll to `Bags integration status`.

Narration:

The next branch uses the Bags Public API via a backend proxy with `x-api-key`, plus `@bagsfm/bags-sdk` once the app has a backend runtime and Solana RPC connection. API keys are intentionally not stored in browser code.

## Scene 6 - Closing

Closing line:

CreatorPass gives Bags creators a direct monetization primitive: holder-gated payment links, memberships, and fan passes that create more transactions for the Bags ecosystem.
