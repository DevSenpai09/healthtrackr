import Footer from "@/components/website/_shared/footer";
import Header from "@/components/website/_shared/header";
import Faq from "@/components/website/landing-page/faq";
import Features from "@/components/website/landing-page/features";
import ForModernProfessionals from "@/components/website/landing-page/for-modern-professionals";
import HeroSection from "@/components/website/landing-page/hero-section";
import HowItWorks from "@/components/website/landing-page/how-it-works";
import Ready from "@/components/website/landing-page/ready";
import Testimonials from "@/components/website/landing-page/testimonials";

export default function Page() {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <HowItWorks />
        <Features />
        <ForModernProfessionals />
        <Testimonials />
        <Faq />
        <Ready />
      </main>
      <Footer />
    </div>
  );
}
