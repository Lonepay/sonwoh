/** Sonwoh is @sonwohafrica on every social platform. */
export const SOCIAL_HANDLE = "sonwohafrica";

export const SOCIAL = [
  { label: "Twitter", href: `https://twitter.com/${SOCIAL_HANDLE}` },
  {
    label: "Linkedin",
    href: `https://www.linkedin.com/company/${SOCIAL_HANDLE}`,
  },
  { label: "Instagram", href: `https://instagram.com/${SOCIAL_HANDLE}` },
  { label: "TikTok", href: `https://www.tiktok.com/@${SOCIAL_HANDLE}` },
  { label: "Telegram", href: `https://t.me/${SOCIAL_HANDLE}` },
] as const;

export const CONTACT = {
  support: "help@sonwoh.com",
  careers: "careers@sonwoh.com",
  phone: "+234 813 2209 554",
  phoneHref: "tel:+2348132209554",
} as const;

export const FAQS = [
  {
    q: "What is Sonwoh?",
    a: "Sonwoh is a digital finance platform that lets you buy and sell cryptocurrencies, trade gift cards, pay bills, and access innovative financial solutions — all from one secure and easy-to-use app.",
  },
  {
    q: "How do I create a Sonwoh account?",
    a: "Download the app from the App Store or Google Play, sign up with your email or phone number, and complete a short identity check. Most accounts are verified within minutes.",
  },
  {
    q: "Which cryptocurrencies can I trade?",
    a: "You can buy, sell and swap BTC, ETH, USDT, SOL, ADA and a growing list of other assets at live market rates, with settlement straight to your Sonwoh balance.",
  },
  {
    q: "Which gift cards does Sonwoh accept?",
    a: "We trade the cards people actually hold — Apple, Amazon, eBay, Google Play, Walmart, Target and more. Rates are shown up front before you confirm a trade.",
  },
  {
    q: "How fast are payouts?",
    a: "Crypto trades and gift card payouts settle to your balance as soon as they are confirmed, so there is no waiting around for a manual review in the usual case.",
  },
  {
    q: "What bills can I pay with Sonwoh?",
    a: "Electricity, airtime, data bundles, cable TV (DSTV, GOtv, Startimes), internet subscriptions, water bills, education payments and government levies.",
  },
  {
    q: "Is my money safe on Sonwoh?",
    a: "Your funds and personal information are protected with advanced security systems, encryption in transit and at rest, and continuous monitoring across the platform.",
  },
] as const;

export const WHY_SONWOH = [
  {
    title: "Fast & Instant Payments",
    tile: "blue",
    body: "Get paid instantly on every transaction. No waiting, no unnecessary delays—just quick and seamless payouts.",
    icon: "tdesign:money",
  },
  {
    title: "Safe & Secure Platform",
    tile: "green",
    body: "Your funds and personal information are protected with advanced security systems, giving you complete peace of mind.",
    icon: "mdi:secure-outline",
  },
  {
    title: "Best Market Rates",
    tile: "navy",
    body: "We offer fair, transparent, and highly competitive exchange rates so you can trade with confidence and keep more of your money.",
    icon: "swap",
  },
  {
    title: "Trusted Customer Support",
    body: "Our dedicated support team is available to assist you whenever you need help, ensuring a smooth and hassle-free trading experience.",
    icon: "support",
  },
] as const;

export const CAPABILITIES = [
  {
    title: "Buy & sell crypto",
    body: "Trade BTC, ETH, USDT, and more at live rates, with instant settlement to your balance.",
    icon: "exchange",
  },
  {
    title: "Send & receive Crypto",
    body: "Move crypto to any wallet in seconds, or receive funds from anywhere in the world.",
    icon: "transfer",
  },
  {
    title: "Gift card exchange",
    body: "Buy gift cards for less, or trade in the ones you're not using for cash or crypto.",
    icon: "giftcard",
  },
  {
    title: "Electricity & bills",
    body: "Pay electricity and other household bills straight from your Sonwoh balance — no queues.",
    icon: "power",
  },
  {
    title: "Airtime & data",
    body: "Top up your line or grab a data bundle on any network, in a couple of taps.",
    icon: "phone",
  },
  {
    title: "More, always on the way",
    body: "New billers, new assets, and new ways to pay get added regularly based on what people ask for.",
    icon: "more",
  },
  {
    title: "Sonwoh Virtual card",
    body: "A virtual card that spends straight from your balance, for checkout anywhere online.",
    icon: "card",
    soon: true,
  },
  {
    title: "Sonwoh Credit card",
    body: "Crypto-backed credit for when you need to spend before you sell.",
    icon: "creditcard",
    soon: true,
  },
] as const;

export const STEPS = [
  {
    n: "01",
    title: "Download",
    body: "Get Sonwoh free from the App Store or Google Play.",
  },
  {
    n: "02",
    title: "Verify",
    body: "A quick identity check keeps your account secure and compliant.",
  },
  {
    n: "03",
    title: "Fund",
    body: "Add crypto, or fund your balance with a local payment method.",
  },
  {
    n: "04",
    title: "Transact",
    body: "Trade, top up, pay bills, or send money - all from one balance.",
  },
] as const;

export const CRYPTO_SERVICES = [
  {
    n: "01",
    title: "Crypto Wallet",
    body: "Hold BTC, ETH, USDT and more in a wallet that lives alongside your naira balance.",
  },
  {
    n: "02",
    title: "Instant Buy & Sell",
    body: "Trade at live market rates with settlement to your balance the moment it confirms.",
  },
  {
    n: "03",
    title: "Crypto Swaps",
    body: "Swap between assets directly, without routing through an external exchange.",
  },
  {
    n: "04",
    title: "Market Analytics",
    body: "Track rates, movements and your portfolio so you can time a trade properly.",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "David A.",
    quote:
      "Sonwoh has completely changed the way I manage my crypto. Transactions are fast, the rates are competitive, and I can always rely on the platform whenever I need to buy or sell.",
  },
  {
    name: "Sarah M.",
    quote:
      "I love how easy it is to pay my bills and trade gift cards in one place. Everything is smooth, secure, and processed almost instantly. Highly recommended!",
  },
  {
    name: "Michael O.",
    quote:
      "The Sonwoh Credit Card is a game changer. Being able to spend first and trade my crypto later gives me the flexibility I need. The platform is simple, reliable, and easy to use.",
  },
] as const;

export const BILL_TYPES = [
  "Electricity Bills",
  "Airtime Recharge",
  "Data Bundles",
  "Cable TV (DSTV, GOtv, Startimes)",
  "Internet Subscription",
  "Water Bills",
  "Education Payments",
  "Government Levies",
] as const;
