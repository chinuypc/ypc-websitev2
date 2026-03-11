import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";

import { WhySection } from "../components/WhySection";
import { BuiltForSection } from "../components/BuiltForSection";
import { FrameworkSection } from "../components/FrameworkSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { PlatformSection } from "../components/PlatformSection";
import { CtaSection } from "../components/CtaSection";
import { Footer } from "../components/Footer";
import { BackToTop } from "../components/BackToTop";
import { VisualBreather } from "../components/VisualBreather";
import {
  SEOHead,
  organizationSchema,
  localBusinessSchema,
  websiteSchema,
} from "../components/SEOHead";

export default function HomePage() {
  return (
    <>
      <SEOHead
        title="YP Club · Dubai's Private Founder Community"
        description="YP Club is Dubai's private, application-only founder community. Powered by PioneerOS. The operating system for founders who are serious about what comes next."
        canonical="https://ypclub.com/"
        jsonLd={[organizationSchema, localBusinessSchema, websiteSchema]}
      />
      <header>
        <Navbar />
      </header>
      <main id="main-content">
        <HeroSection />
        <WhySection />
        <BuiltForSection />
        <FrameworkSection />
        <TestimonialsSection />
        <VisualBreather />
        <PlatformSection />
        <CtaSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}