// src/config/site.ts - Centralized Site & Conversion Funnel Configuration
// Captures values from .env (import.meta.env) with robust compile-time fallbacks.

export const SITE_CONFIG = {
  name: import.meta.env.PUBLIC_COMPANY_NAME || "OneFunding LLC / 1 Funding Source",
  legalName: "OneFunding LLC",
  brandName: "1 Funding Source",
  
  // Primary Call-To-Action (LeadConnector / GoHighLevel Intake Funnel)
  ctaUrl: import.meta.env.PUBLIC_CTA_URL || "https://sites.leadconnectorhq.com/preview/0dIJr5xZgpiy3lsveWs0",
  ctaText: "Get Free Rate Analysis",
  
  // Contact Channels
  phone: {
    display: import.meta.env.PUBLIC_PHONE_NUMBER || "(800) 555-0199",
    href: import.meta.env.PUBLIC_PHONE_HREF || "tel:+18005550199",
  },
  email: import.meta.env.PUBLIC_SUPPORT_EMAIL || "rates@onefundingllc.com",
  
  // Internal Legal & Compliance Links
  links: {
    home: "/",
    privacy: "/privacy",
    terms: "/terms",
    security: "/security",
  },
  
  // Regulatory Disclaimers
  disclaimer: {
    iso: "OneFunding LLC is a registered Independent Sales Organization (ISO) and Merchant Service Provider (MSP). 1 Funding Source is a trade name of OneFunding LLC. All trademarks and registered brands belong to their respective owners.",
    bank: "OneFunding is not a bank. Payment processing and card settlement services are provided through our registered financial institution and acquiring banking partner network.",
  }
} as const;

export default SITE_CONFIG;
