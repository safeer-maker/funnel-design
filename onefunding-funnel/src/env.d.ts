/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_CTA_URL?: string;
  readonly PUBLIC_PHONE_NUMBER?: string;
  readonly PUBLIC_PHONE_HREF?: string;
  readonly PUBLIC_SUPPORT_EMAIL?: string;
  readonly PUBLIC_COMPANY_NAME?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}