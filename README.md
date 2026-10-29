# Sonwoh — Company Website

Next.js (App Router) implementation of the SONWOH Figma design.

Figma: https://www.figma.com/design/lXZJIXVkPMKZEa9FKkq4ZG/SONWOH

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Layout

```
src/
  app/
    layout.tsx          root layout — Red Hat Display, header + footer
    page.tsx            home
    crypto/             Crypto
    gift-cards/         Giftcards
    refill/             Refill (bill payments)
    about/              About Us
    blog/               Blog (coming soon placeholder)
    careers/            Careers (no open roles)
    legal/
      terms/            Terms of Service
      privacy/          Privacy Policy
      risk-disclosure/  Risk Disclosure
      file/             File a Complaint
  components/
    SiteHeader.tsx      sticky pill nav + mobile sheet
    SiteFooter.tsx
    Hero.tsx            home hero with the floating activity cards
    PageHero.tsx        shared hero for the inner pages
    StepsSection.tsx    the numbered four-across strip
    Faqs.tsx            accordion
    LegalPage.tsx       shared shell for the four legal pages
    ComplaintForm.tsx   the form on /legal/file
    AppCta.tsx, StoreBadges.tsx, Testimonials.tsx, ContactForm.tsx
    Icon.tsx            inline SVG icon set
    Logo.tsx
    sections/           the home page's product sections
  lib/
    content.ts          all copy, lifted from the Figma frames
public/
  images/               illustrations exported from the design
  icons/
```

## Design tokens

Defined as Tailwind v4 `@theme` variables in `src/app/globals.css`:

| Token | Value | Used for |
| --- | --- | --- |
| `ink` | `#0f172a` | body copy, dark sections |
| `ink-deep` | `#141c2e` | the hexagon-pattern panels |
| `brand` | `#00b86b` | Sonwoh green |
| `lilac` | `#e8ecfc` | hero / footer tint |
| `accent` | `#2f6bff` | step numerals |

Type is Red Hat Display throughout, loaded via `next/font`.

## Notes

- Copy comes from the Figma frames verbatim, with two exceptions: the FAQ
  answers were placeholder (the same question repeated seven times), so real
  answers were written against the product; and the footer's "Zypto" references
  were corrected to "Sonwoh".
- Giftcards and Refill have no dedicated Figma frames. They reuse the designed
  home-page sections so every nav item resolves.
- The four pages under `/legal` back the footer's Legal column. Their effective
  date is set once, in `LEGAL_EFFECTIVE_DATE` in `src/components/LegalPage.tsx`.
  **The copy is a first draft and has not been reviewed by a lawyer.**
- The design labels the fourth legal link simply "File"; it is implemented as
  the complaints route the Terms point at.
