const state = {
  productType: "Payment",
  title: "Exclusive Track Download",
  description: "High quality WAV download + behind-the-scenes content.",
  currency: "BAGS",
  price: 15,
  tokenGate: true,
  token: "KONGZ",
  minimum: "100,000",
  linkCreated: false,
  generatedUrl: "",
};

const payments = [
  ["2m ago", "HODL_pepe.sol", "Exclusive Track Download", "100,000 KONGZ", "15.00 BAGS", "13.10 BAGS", "5Xy...9a7B"],
  ["1h ago", "solana_legend", "Exclusive Track Download", "150,000 KONGZ", "15.00 BAGS", "13.10 BAGS", "3Gk...8f2D"],
  ["3h ago", "DeFi_Degen", "Exclusive Track Download", "250,000 KONGZ", "15.00 BAGS", "13.10 BAGS", "2mN...c4e9"],
  ["5h ago", "NFTcollector.sol", "Exclusive Track Download", "110,000 KONGZ", "15.00 BAGS", "13.10 BAGS", "7Lp...d1A3"],
  ["1d ago", "ape_holder", "Exclusive Track Download", "100,500 KONGZ", "15.00 BAGS", "13.10 BAGS", "9Qz...b7E1"],
];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const navMessages = {
  dashboard: "Dashboard overview selected. The main judge flow starts in the payment link builder.",
  links: "Payment link section selected. Create a URL, copy it, or prepare a share package.",
  passes: "Fan pass builder selected. Use Membership or Fan Pass to preview creator access products.",
  gates: "Token gate controls selected. This is where the live Bags holder-balance check will connect.",
  analytics: "Analytics selected. The table shows simulated payment events for the static prototype.",
  payouts: "Payouts selected. Net proceeds are estimated in the fee split and payment history.",
};

const fields = {
  title: $("#title-input"),
  description: $("#description-input"),
  currency: $("#currency-input"),
  price: $("#price-input"),
  tokenGate: $("#token-gate-input"),
  token: $("#token-input"),
  minimum: $("#minimum-input"),
};

function numberFromInput(value) {
  const parsed = Number(String(value).replace(/,/g, ""));
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : 0;
}

function formatAmount(amount, currency = state.currency) {
  return `${amount.toFixed(2)} ${currency}`;
}

function usdEstimate(price, currency) {
  const rates = { BAGS: 0.82, USDC: 1, SOL: 141.2 };
  return `~= $${(price * (rates[currency] ?? 1)).toFixed(2)} USD`;
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 40);
}

function renderPayments() {
  const body = $("#payments-body");
  body.innerHTML = payments
    .map(
      ([time, fan, product, requirement, amount, net, signature]) => `
        <tr>
          <td>${time}</td>
          <td>${fan}</td>
          <td>${product}</td>
          <td>${requirement}</td>
          <td>${amount}</td>
          <td>${net}</td>
          <td><span class="tx-link">${signature}</span></td>
        </tr>
      `,
    )
    .join("");
}

function render() {
  const price = numberFromInput(state.price);
  const royalty = Math.round(price * 0.1 * 100) / 100;
  const platform = Math.round(price * 0.025 * 100) / 100;
  const network = state.currency === "BAGS" ? 0.02 : 0.01;
  const net = Math.max(price - royalty - platform - network, 0);

  $("#preview-title").textContent = state.title || "Untitled creator product";
  $("#preview-description").textContent =
    state.description || "Add a short description for the checkout preview.";
  $("#preview-price").textContent = `${price || 0} ${state.currency}`;
  $("#preview-usd").textContent = usdEstimate(price, state.currency);
  $("#preview-minimum").textContent = `${state.minimum || "0"} ${state.token}`;
  $("#preview-requirement").classList.toggle("off", !state.tokenGate);
  $("#gate-box").classList.toggle("disabled", !state.tokenGate);

  $("#split-price").textContent = formatAmount(price);
  $("#split-royalty").textContent = formatAmount(royalty);
  $("#split-platform").textContent = formatAmount(platform);
  $("#split-net").textContent = formatAmount(net);

  const status = $("#builder-status");
  status.textContent = state.linkCreated ? "Ready" : "Draft";
  status.classList.toggle("ready", state.linkCreated);

  const notice = $("#link-notice");
  const link = $("#generated-link");
  const copyButton = $("#copy-link");

  if (state.linkCreated) {
    link.textContent = state.generatedUrl;
    link.title = state.generatedUrl;
    copyButton.disabled = false;
    copyButton.textContent = "Copy";
    notice.textContent = "Prototype checkout URL generated. Ready to share or embed in a creator post.";
    notice.classList.add("ready");
    $("#checkout-status").textContent = "Prototype URL is ready. Pay with Bags will simulate a verified payment event.";
    $("#checkout-status").classList.add("ready");
  } else {
    link.textContent = "Create a link to generate checkout URL.";
    link.removeAttribute("title");
    copyButton.disabled = true;
    copyButton.textContent = "Copy";
    notice.textContent = "Review settings, then click Create link.";
    notice.classList.remove("ready");
    $("#checkout-status").textContent = "Create a link to unlock the prototype payment action.";
    $("#checkout-status").classList.remove("ready");
  }
}

function setDemoFeedback(message, ready = false) {
  const feedback = $("#demo-feedback");
  feedback.textContent = message;
  feedback.classList.toggle("ready", ready);
}

function resetDemoConfirmation() {
  $("#payment-confirmation").textContent =
    "Demo events show how payment links turn creator token holders into buyers.";
  $("#payment-confirmation").classList.remove("ready");
  setDemoFeedback("Settings changed. Create a fresh prototype checkout URL before sharing.", false);
}

function syncFromInputs() {
  state.title = fields.title.value.trim();
  state.description = fields.description.value.trim();
  state.currency = fields.currency.value;
  state.price = numberFromInput(fields.price.value);
  state.tokenGate = fields.tokenGate.checked;
  state.token = fields.token.value;
  state.minimum = fields.minimum.value.trim();
  state.linkCreated = false;
  resetDemoConfirmation();
  render();
}

function createLink(event) {
  event.preventDefault();
  syncFromInputs();
  const slug = slugify(state.title || "creator-product");
  state.generatedUrl = `https://creatorpass.xyz/pay/cyberkongz/${slug}?token=${state.token}&min=${encodeURIComponent(state.minimum)}`;
  state.linkCreated = true;
  payments.unshift([
    "now",
    "demo_judge.sol",
    state.title || "Untitled creator product",
    state.tokenGate ? `${state.minimum} ${state.token}` : "No gate",
    `${numberFromInput(state.price).toFixed(2)} ${state.currency}`,
    $("#split-net").textContent,
    "DEMO...2026",
  ]);
  renderPayments();
  render();
  $("#payment-confirmation").textContent =
    "Demo link created and a sample checkout event was added for judge review.";
  $("#payment-confirmation").classList.add("ready");
  setDemoFeedback("Prototype checkout link is ready. Copy, share, or use Pay with Bags in the preview.", true);
}

function simulatePayment() {
  const fans = ["bags_builder.sol", "music_whale", "creator_fan_42", "solpay_user"];
  const fan = fans[Math.floor(Math.random() * fans.length)];
  payments.unshift([
    "now",
    fan,
    state.title || "Exclusive Track Download",
    state.tokenGate ? `${state.minimum} ${state.token}` : "No gate",
    `${numberFromInput(state.price).toFixed(2)} ${state.currency}`,
    $("#split-net").textContent,
    `${Math.random().toString(36).slice(2, 5).toUpperCase()}...${Math.random().toString(36).slice(2, 6)}`,
  ]);
  renderPayments();
  $("#payment-confirmation").textContent = `Demo payment recorded for ${fan}.`;
  $("#payment-confirmation").classList.add("ready");
  $("#checkout-status").textContent = `Prototype payment confirmed for ${fan}.`;
  $("#checkout-status").classList.add("ready");
  setDemoFeedback(`Payment simulation complete. New buyer ${fan} is visible in Recent fan payments.`, true);
}

function payWithBags() {
  if (!state.linkCreated) {
    $("#checkout-status").textContent = "Create a checkout link first so the prototype payment can attach to a URL.";
    $("#checkout-status").classList.remove("ready");
    setDemoFeedback("Pay with Bags needs a generated prototype URL first. Click Create link, then try again.", false);
    return;
  }

  simulatePayment();
}

async function copyGeneratedLink() {
  if (!state.linkCreated || !state.generatedUrl) {
    return;
  }

  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(state.generatedUrl);
    }
    $("#copy-link").textContent = "Copied";
    $("#link-notice").textContent = "Prototype checkout URL copied for the demo.";
    $("#link-notice").classList.add("ready");
    setDemoFeedback("Prototype checkout URL copied. Share destination buttons now show channel-specific feedback.", true);
  } catch {
    $("#copy-link").textContent = "Copy";
    $("#link-notice").textContent = state.generatedUrl;
    $("#link-notice").classList.add("ready");
    setDemoFeedback("Clipboard permission was unavailable, so the full prototype URL is shown in the link field.", false);
  }
}

$$('input[name="productType"]').forEach((input) => {
  input.addEventListener("change", () => {
    state.productType = input.value;
    if (input.value === "Membership") {
      fields.title.value = "Private Studio Membership";
      fields.description.value = "Monthly access to drops, polls, and holder-only livestreams.";
      fields.price.value = "25";
    }
    if (input.value === "Fan Pass") {
      fields.title.value = "Backstage Fan Pass";
      fields.description.value = "One-time pass for early previews and private creator chat.";
      fields.price.value = "10";
    }
    if (input.value === "Payment") {
      fields.title.value = "Exclusive Track Download";
      fields.description.value = "High quality WAV download + behind-the-scenes content.";
      fields.price.value = "15";
    }
    syncFromInputs();
  });
});

Object.values(fields).forEach((field) => {
  field.addEventListener("input", syncFromInputs);
  field.addEventListener("change", syncFromInputs);
});

$("#link-builder").addEventListener("submit", createLink);
$("#seed-payment").addEventListener("click", simulatePayment);
$("#copy-link").addEventListener("click", copyGeneratedLink);
$("#pay-with-bags").addEventListener("click", payWithBags);

$$(".share-grid button").forEach((button) => {
  button.addEventListener("click", () => {
    $$(".share-grid button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    if (!state.linkCreated) {
      $("#link-notice").textContent = `Create the link before sharing to ${button.dataset.share}.`;
      $("#link-notice").classList.remove("ready");
      setDemoFeedback(`Create the prototype URL before preparing ${button.dataset.share} sharing.`, false);
      return;
    }
    $("#link-notice").textContent =
      `${button.dataset.share} share package prepared for the prototype checkout URL.`;
    $("#link-notice").classList.add("ready");
    setDemoFeedback(`${button.dataset.share} share package is ready for the generated checkout URL.`, true);
  });
});

$$(".nav-item").forEach((button) => {
  button.addEventListener("click", () => {
    $$(".nav-item").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    setDemoFeedback(navMessages[button.dataset.panel] || "Demo section selected.", true);
    const target = document.getElementById(button.dataset.target);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

renderPayments();
render();
