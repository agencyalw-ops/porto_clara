/**
 * Centralized Content Configuration
 * All copy, headings, buttons, and URLs are managed here for easy updates
 */

export const SITE_CONFIG = {
  brand: "clara_alyra",
  tagline: "Crafted in the Cultural Light of Dieng",
  location: "Wonosobo, Indonesia",
  redirectUrl: "https://alwgen.com",
};

export const HERO_SECTION = {
  mainHeading: "clara_alyra",
  subheading: "Crafted in the Cultural Light of Dieng",
  description: "Premium fashion brand celebrating Indonesian heritage and contemporary minimalism",
  cta: {
    text: "Explore Collection",
    url: SITE_CONFIG.redirectUrl,
  },
};

export const PROFILE_SECTION = {
  name: "Clara Alyra",
  title: "Fashion Designer & Creative Entrepreneur",
  bio: "Passionate about blending Indonesian heritage with contemporary fashion design. Based in Wonosobo, I create sustainable, minimalist pieces that celebrate cultural craftsmanship and modern aesthetics.",
  image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663595474301/lLtdJUFbEWkpIzCD.png",
};

export const SOCIAL_MEDIA = [
  { platform: "Instagram", icon: "📷", url: "https://instagram.com/clara_alyra" },
  { platform: "TikTok", icon: "🎵", url: "https://tiktok.com/@clara_alyra" },
  { platform: "Facebook", icon: "f", url: "https://facebook.com/clara_alyra" },
  { platform: "YouTube", icon: "▶", url: "https://youtube.com/@clara_alyra" },
  { platform: "Twitter", icon: "𝕏", url: "https://twitter.com/clara_alyra" },
  { platform: "LinkedIn", icon: "in", url: "https://linkedin.com/in/clara_alyra" },
];

export const PORTFOLIO_SECTION = {
  heading: "Portfolio",
  title: "Fashion Design Showcase",
  description: "A curated collection of my latest fashion designs blending Indonesian heritage with contemporary minimalism.",
  projects: [
    {
      id: 1,
      name: "Minimalist White Collection",
      description: "Clean lines and premium fabrics",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663595474301/jEFoRxz2Kur5HBTnsA3ck3/design_minimalist_white-2x7of3eJhp8suA8G6GfXyb.webp",
    },
    {
      id: 2,
      name: "Earth Tone Heritage",
      description: "Indonesian batik-inspired designs",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663595474301/jEFoRxz2Kur5HBTnsA3ck3/design_earth_tone-4EmTKnffwTfE5fh7xwrumf.webp",
    },
    {
      id: 3,
      name: "Elegant Black Evening",
      description: "Luxury evening gown collection",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663595474301/jEFoRxz2Kur5HBTnsA3ck3/design_black_elegant-LLHkwURrsvSGxJw6NtnQ6C.webp",
    },
    {
      id: 4,
      name: "Cultural Fusion",
      description: "Modern meets traditional heritage",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663595474301/jEFoRxz2Kur5HBTnsA3ck3/design_cultural_fusion-JWcux5fvXCDR7pjVjbiJuR.webp",
    },
    {
      id: 5,
      name: "Statement Geometric",
      description: "Bold patterns with elegance",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663595474301/jEFoRxz2Kur5HBTnsA3ck3/design_statement_piece-GBDBC5ng9KWApkLKVmKdyw.webp",
    },
  ],
};

export const AFFILIATE_SECTION = {
  heading: "Affiliate Program",
  title: "Join Our Affiliate Network",
  description: "Earn commission by promoting clara_alyra fashion designs to your audience.",
  benefits: [
    "20% commission on every sale",
    "Exclusive affiliate dashboard",
    "Marketing materials provided",
    "Monthly performance bonuses",
    "Dedicated affiliate support",
  ],
  cta: {
    text: "Join Affiliate Program",
    url: SITE_CONFIG.redirectUrl,
  },
};

export const ABOUT_SECTION = {
  heading: "About Clara Alyra",
  title: "Where Tradition Meets Innovation",
  description: "Based in Wonosobo, our brand weaves together the rich cultural heritage of the Dieng Plateau with contemporary fashion design. Each piece tells a story of craftsmanship, sustainability, and timeless elegance.",
  highlights: [
    "Handcrafted with precision",
    "Sustainable materials",
    "Limited collections",
    "Indonesian heritage",
  ],
  cta: {
    text: "Learn More",
    url: SITE_CONFIG.redirectUrl,
  },
};

export const COLLECTION_SECTION = {
  heading: "Featured Collection",
  title: "Summer 2024 | Limited Edition",
  description: "Discover our latest collection inspired by the misty mountains and vibrant culture of Dieng.",
  items: [
    {
      id: 1,
      name: "Heritage Series",
      description: "Minimalist designs with traditional motifs",
      price: "Premium",
    },
    {
      id: 2,
      name: "Mountain Collection",
      description: "Inspired by Dieng's natural landscape",
      price: "Premium",
    },
    {
      id: 3,
      name: "Artisan Line",
      description: "Handcrafted pieces with local artisans",
      price: "Premium",
    },
  ],
  cta: {
    text: "Shop Now",
    url: SITE_CONFIG.redirectUrl,
  },
};

export const FOOTER_SECTION = {
  copyright: `© ${new Date().getFullYear()} clara_alyra. All rights reserved.`,
  location: "Wonosobo, Indonesia",
  links: [
    { label: "About", url: SITE_CONFIG.redirectUrl },
    { label: "Shop", url: SITE_CONFIG.redirectUrl },
    { label: "Contact", url: SITE_CONFIG.redirectUrl },
    { label: "Affiliate", url: SITE_CONFIG.redirectUrl },
  ],
};

export const NAVIGATION = {
  items: [
    { label: "Home", url: "/" },
    { label: "Profile", url: "#profile" },
    { label: "Portfolio", url: "#portfolio" },
    { label: "Affiliate", url: "#affiliate" },
    { label: "Contact", url: SITE_CONFIG.redirectUrl },
  ],
};
