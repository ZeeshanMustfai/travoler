import { ThemeProvider } from "@/providers/theme-provider";
import { ModalProvider } from "@/providers/modal-provider";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { Modules } from "@/components/sections/modules";
import { Features } from "@/components/sections/features";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Testimonial } from "@/components/sections/testimonial";
import { Pricing } from "@/components/sections/pricing";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";
import { LoginModal } from "@/components/modals/login-modal";
import { DemoModal } from "@/components/modals/demo-modal";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <ModalProvider>
        <div className="min-h-screen bg-background">
          <Navbar />
          <main>
            <Hero />
            <TrustBar />
            <Modules />
            <Features />
            <HowItWorks />
            <Testimonial />
            <Pricing />
            <CTA />
          </main>
          <Footer />
        </div>
        <LoginModal />
        <DemoModal />
      </ModalProvider>
    </ThemeProvider>
  );
}
