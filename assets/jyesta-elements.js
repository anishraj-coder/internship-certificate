/**
 * Jyesta Corporate Entity - High-Fidelity SVG Graphic Assets
 * Includes: Jyesta Logo, ISO 9001:2015 Seal, MSME Badge, Signature, Corner Accents, Watermark, and Golden Ribbon
 */

const JyestaSVGs = {
  // Jyesta Logo (Shield with 3 Rising Growth Bars)
  logo: `
    <svg viewBox="0 0 100 100" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shieldGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stop-color="#38bdf8"/>
          <stop offset="1" stop-color="#0284c7"/>
        </linearGradient>
        <linearGradient id="barGrad" x1="0" y1="100" x2="0" y2="0" gradientUnits="userSpaceOnUse">
          <stop stop-color="#0f172a"/>
          <stop offset="1" stop-color="#1e293b"/>
        </linearGradient>
      </defs>
      <!-- Shield / Hexagon Frame -->
      <path d="M50 4 L88 24 L88 68 L50 96 L12 68 L12 24 Z" stroke="url(#shieldGrad)" stroke-width="6.5" stroke-linejoin="round" fill="none"/>
      <!-- Bar 1 (Shortest) -->
      <rect x="28" y="52" width="10" height="24" rx="2" fill="url(#barGrad)"/>
      <!-- Bar 2 (Medium) -->
      <rect x="45" y="38" width="10" height="38" rx="2" fill="url(#barGrad)"/>
      <!-- Bar 3 (Tallest) -->
      <rect x="62" y="24" width="10" height="52" rx="2" fill="url(#barGrad)"/>
    </svg>
  `,

  // Golden Flourish Ribbon Divider
  goldenRibbon: `
    <svg viewBox="0 0 500 40" width="340" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="goldRibbonGrad" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stop-color="#9b6c16" stop-opacity="0.1"/>
          <stop offset="20%" stop-color="#c9972c"/>
          <stop offset="50%" stop-color="#fdf0cd"/>
          <stop offset="80%" stop-color="#c9972c"/>
          <stop offset="100%" stop-color="#9b6c16" stop-opacity="0.1"/>
        </linearGradient>
      </defs>
      <!-- Symmetrical Calligraphic Swashes -->
      <path d="M40 20 C100 12, 170 34, 250 20 C330 6, 400 28, 460 20" stroke="url(#goldRibbonGrad)" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M120 20 C180 8, 220 32, 250 20 C280 8, 320 32, 380 20" stroke="url(#goldRibbonGrad)" stroke-width="1.8" stroke-linecap="round"/>
      <!-- Center Diamond Finial -->
      <path d="M250 14 L255 20 L250 26 L245 20 Z" fill="#c9972c"/>
      <circle cx="215" cy="20" r="2.5" fill="#c9972c"/>
      <circle cx="285" cy="20" r="2.5" fill="#c9972c"/>
    </svg>
  `,

  // Top-Right Modern Geometric Corner Accent
  cornerTR: `
    <svg viewBox="0 0 240 180" width="240" height="180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Dark Blue Main Wedge -->
      <polygon points="40,0 240,0 240,180" fill="#0284c7" />
      <!-- Sky Blue Overlapping Triangle -->
      <polygon points="120,0 240,0 240,110" fill="#38bdf8" opacity="0.9" />
      <!-- Deep Blue Base Shadow Triangle -->
      <polygon points="0,0 160,0 70,80" fill="#0369a1" opacity="0.35" />
      <!-- Accent Slant Line -->
      <polygon points="200,0 240,0 240,50" fill="#bae6fd" />
    </svg>
  `,

  // Bottom-Left Modern Geometric Corner Accent
  cornerBL: `
    <svg viewBox="0 0 240 180" width="240" height="180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Deep Blue Large Polygon -->
      <polygon points="0,0 0,180 180,180" fill="#0369a1" />
      <!-- Primary Blue Overlapping Polygon -->
      <polygon points="0,60 0,180 240,180" fill="#0284c7" />
      <!-- Light Cyan Highlight Polygon -->
      <polygon points="0,110 0,180 140,180" fill="#38bdf8" />
    </svg>
  `,

  // Top-Left Subtle Corner Accent
  cornerTL: `
    <svg viewBox="0 0 100 80" width="100" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="0,0 90,0 0,55" fill="#0284c7" opacity="0.12" />
    </svg>
  `,

  // Center Background Subtle Watermark
  watermark: `
    <svg viewBox="0 0 400 400" width="380" height="380" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="200" cy="200" r="180" stroke="#0f172a" stroke-width="4" stroke-dasharray="10 8"/>
      <circle cx="200" cy="200" r="150" stroke="#0f172a" stroke-width="2"/>
      <circle cx="200" cy="200" r="110" stroke="#0f172a" stroke-width="1.5"/>
      <!-- Star Rosette -->
      <g stroke="#0f172a" stroke-width="1.5" opacity="0.8">
        <polygon points="200,60 215,160 270,110 230,175 330,170 240,205 320,260 230,235 270,320 205,250 170,335 175,245 100,280 160,220 70,195 165,185 105,120 180,165 140,80 195,155" fill="none"/>
      </g>
    </svg>
  `,

  // ISO 9001:2015 COMPANY Seal Badge
  isoBadge: `
    <svg viewBox="0 0 120 120" width="56" height="56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Outer Double Rings -->
      <circle cx="60" cy="60" r="56" stroke="#0284c7" stroke-width="3" fill="#ffffff"/>
      <circle cx="60" cy="60" r="48" stroke="#0284c7" stroke-width="1.5" fill="#f0f9ff"/>
      <circle cx="60" cy="60" r="38" stroke="#0369a1" stroke-width="1" fill="#ffffff"/>
      <!-- Circular Text Arc Representation -->
      <path id="isoTextArcTop" d="M 22 60 A 38 38 0 0 1 98 60" fill="none"/>
      <path id="isoTextArcBottom" d="M 98 60 A 38 38 0 0 1 22 60" fill="none"/>
      <text font-family="'Montserrat', sans-serif" font-size="8" font-weight="800" fill="#0284c7" letter-spacing="1">
        <textPath href="#isoTextArcTop" startOffset="50%" text-anchor="middle">CERTIFIED</textPath>
      </text>
      <text font-family="'Montserrat', sans-serif" font-size="7.5" font-weight="800" fill="#0284c7" letter-spacing="0.5">
        <textPath href="#isoTextArcBottom" startOffset="50%" text-anchor="middle">COMPANY</textPath>
      </text>
      <!-- Center ISO Core -->
      <text x="60" y="55" font-family="'Montserrat', sans-serif" font-size="14" font-weight="900" fill="#0369a1" text-anchor="middle">ISO</text>
      <text x="60" y="68" font-family="'Montserrat', sans-serif" font-size="7.5" font-weight="800" fill="#0f172a" text-anchor="middle">9001:2015</text>
      <!-- Small Star Icons on sides -->
      <circle cx="20" cy="60" r="2.5" fill="#0284c7"/>
      <circle cx="100" cy="60" r="2.5" fill="#0284c7"/>
    </svg>
  `,

  // MSME Emblem Badge (Govt of India Micro, Small & Medium Enterprises)
  msmeBadge: `
    <svg viewBox="0 0 120 120" width="56" height="56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- National Emblem Stylized Lions Profile -->
      <g stroke="#92400e" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <!-- Ashoka Pillar Capital stylized silhouette -->
        <path d="M48 20 C48 15, 72 15, 72 20 L74 38 L46 38 Z" fill="#fef3c7" stroke="#b45309"/>
        <path d="M42 38 L78 38 L80 46 L40 46 Z" fill="#b45309"/>
        <circle cx="60" cy="42" r="3" fill="#ffffff"/>
        <!-- Pillar Base -->
        <path d="M46 46 L74 46 L76 56 L44 56 Z" fill="#d97706"/>
      </g>
      <!-- MSME Lettering Banner -->
      <rect x="18" y="60" width="84" height="22" rx="3" fill="#78350f"/>
      <text x="60" y="76" font-family="'Montserrat', sans-serif" font-size="15" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="2">MSME</text>
      <!-- Subtitle -->
      <text x="60" y="93" font-family="'Montserrat', sans-serif" font-size="5.5" font-weight="700" fill="#78350f" text-anchor="middle" letter-spacing="0.4">MICRO, SMALL & MEDIUM ENTERPRISES</text>
      <text x="60" y="102" font-family="'Montserrat', sans-serif" font-size="5" font-weight="600" fill="#92400e" text-anchor="middle">GOVERNMENT OF INDIA</text>
    </svg>
  `,

  // Mourya N Manohar Fluid Signature (Exact fluid cursive replica)
  signature: `
    <svg viewBox="0 0 280 80" width="180" height="50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 48 C22 28, 30 14, 38 12 C44 11, 46 22, 48 35 C50 48, 54 58, 60 58 C66 58, 70 42, 74 32 C78 22, 84 20, 88 26 C92 34, 95 50, 98 52 C102 54, 110 38, 118 36 C124 34, 128 42, 134 46 C140 50, 146 42, 150 36 C155 30, 162 10, 168 8 C174 6, 175 22, 174 42 C173 54, 180 50, 188 38 C196 26, 204 22, 212 28 C220 34, 218 50, 224 50 C230 50, 240 32, 248 30 C256 28, 264 42, 270 46" stroke="#0f172a" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
      <!-- Expressive Paraph / Under-loop Swash -->
      <path d="M165 44 C150 68, 180 72, 220 66 C250 60, 275 48, 278 40" stroke="#0f172a" stroke-width="1.8" stroke-linecap="round"/>
    </svg>
  `
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = JyestaSVGs;
}
