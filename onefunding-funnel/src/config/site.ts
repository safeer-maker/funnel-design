// src/config/site.ts - Centralized Site & Conversion Funnel Configuration
// Captures values from .env (import.meta.env) with robust compile-time fallbacks.

export const SITE_CONFIG = {
  name: import.meta.env.PUBLIC_COMPANY_NAME || "1 Funding Source LLC",
  legalName: "1 Funding Source LLC",
  brandName: "1 Funding Source",
  
  // Primary Call-To-Action (LeadConnector / GoHighLevel Intake Funnel)
  ctaUrl: import.meta.env.PUBLIC_CTA_URL || "https://sites.leadconnectorhq.com/preview/0dIJr5xZgpiy3lsveWs0",
  ctaText: "Get Free Rate Analysis",
  
  // Client Official Website & Booking
  website: "https://1fundingsource.com",
  bookingUrl: "https://api.leadconnectorhq.com/widget/booking/zcy4OoikmhSGR2SXNmgT",
  statementReviewUrl: "https://1fundingsource.com/statement-review",
  
  // Contact Channels
  phone: {
    display: import.meta.env.PUBLIC_PHONE_NUMBER || "(251) 616-1905",
    href: import.meta.env.PUBLIC_PHONE_HREF || "tel:+12516161905",
  },
  email: import.meta.env.PUBLIC_SUPPORT_EMAIL || "info@1fundingsource.com",
  
  // Internal Legal & Compliance Links
  links: {
    home: "/",
    privacy: "/privacy",
    terms: "/terms",
    security: "/security",
  },
  
  // Regulatory Disclaimers
  disclaimer: {
    iso: "1 Funding Source is a merchant services provider. Merchant accounts and payment services are subject to underwriting and approval. Pricing, equipment eligibility, settlement timing and product availability may vary based on merchant type, processing profile and transaction activity. Dual Pricing and similar programs must be configured in accordance with applicable laws, card-brand rules and processor requirements. Third-party product names and trademarks are the property of their respective owners.",
    bank: "1 Funding Source is not a bank, an acquiring bank or the card processor. Third-party product and company names referenced on this site are the trademarks of their respective owners.",
  }
} as const;

export default SITE_CONFIG;
