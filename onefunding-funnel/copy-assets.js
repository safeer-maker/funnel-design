import fs from 'fs';
import path from 'path';

const publicDir = 'c:/Users/Safeer/dev/funnel-design/onefunding-funnel/public/images';
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const copyList = [
  {
    src: 'C:/Users/Safeer/.gemini/antigravity-ide/brain/fb7d804c-022e-440f-a5cf-3fe9d8e9ff93/hero_fintech_dashboard_1786726758386.jpg',
    dest: path.join(publicDir, 'hero_dashboard.jpg')
  },
  {
    src: 'C:/Users/Safeer/.gemini/antigravity-ide/brain/fb7d804c-022e-440f-a5cf-3fe9d8e9ff93/merchant_warehouse_success_1786726777785.jpg',
    dest: path.join(publicDir, 'merchant_success.jpg')
  },
  {
    src: 'C:/Users/Safeer/.gemini/antigravity-ide/brain/fb7d804c-022e-440f-a5cf-3fe9d8e9ff93/gateway_orchestration_flow_1786726820446.jpg',
    dest: path.join(publicDir, 'gateway_routing.jpg')
  },
  {
    src: 'C:/Users/Safeer/.gemini/antigravity-ide/brain/fb7d804c-022e-440f-a5cf-3fe9d8e9ff93/interchange_savings_comparison_1786726843708.jpg',
    dest: path.join(publicDir, 'pricing_comparison.jpg')
  },
  {
    src: 'c:/Users/Safeer/dev/funnel-design/hero_card_checkout.jpg',
    dest: path.join(publicDir, 'card_checkout.jpg')
  },
  {
    src: 'c:/Users/Safeer/dev/funnel-design/hero_pos_terminal.jpg',
    dest: path.join(publicDir, 'pos_terminal.jpg')
  }
];

for (const item of copyList) {
  if (fs.existsSync(item.src)) {
    fs.copyFileSync(item.src, item.dest);
    console.log(`Copied ${item.src} -> ${item.dest}`);
  } else {
    console.log(`Not found: ${item.src}`);
  }
}
