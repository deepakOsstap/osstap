import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { CapabilityStrip } from "@/components/sections/CapabilityStrip";
import { WhatWeDoSection } from "@/components/sections/WhatWeDoSection";
import { FeaturedServicesSection } from "@/components/sections/FeaturedServicesSection";
import { WhyOsstapSection } from "@/components/sections/WhyOsstapSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { GlobalCapabilitySection } from "@/components/sections/GlobalCapabilitySection";
import { InsightsPreviewSection } from "@/components/sections/InsightsPreviewSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/lib/seo/schema";

export default function HomePage() {
  return (
    <>
      <OrganizationJsonLd />
      <WebSiteJsonLd />

      <div className="flex flex-col w-full">
        {/* 1. Large Editorial Hero */}
        <HeroSection />

        {/* 2. Capability / Trust Strip */}
        <CapabilityStrip />

        {/* 3. What We Do */}
        <WhatWeDoSection />

        {/* 4. Featured Services */}
        <FeaturedServicesSection />

        {/* 5. Why Osstap (Strategic Dark Section) */}
        <WhyOsstapSection />

        {/* 6. Technology Matrix */}
        <TechStackSection />

        {/* 7. Process (How We Work) */}
        <ProcessSection />

        {/* 8. Global Capability */}
        <GlobalCapabilitySection />

        {/* 9. Latest Insights */}
        <InsightsPreviewSection />

        {/* 10. Final CTA (Strategic Dark Section) */}
        <FinalCtaSection />
      </div>
    </>
  );
}
