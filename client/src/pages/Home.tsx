import About from "@/components/About";
import Collection from "@/components/Collection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";

/**
 * Clara Alyra Premium Landing Page
 * 
 * Design Philosophy: Minimalist luxury with signal orange accents
 * Based on X-LAB design system adapted for premium fashion brand
 * 
 * Sections:
 * - Navigation: Fixed header with brand logo and nav links
 * - Hero: Full-screen hero with image and orange block background
 * - About: Brand story with featured image and highlights
 * - Collection: Featured products with grid layout
 * - Footer: Brand info and links
 */
export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white">
      <Navigation />
      <Hero />
      <About />
      <Collection />
      <Footer />
    </div>
  );
}
