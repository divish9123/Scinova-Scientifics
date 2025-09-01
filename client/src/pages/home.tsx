import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import WhyScinovaSection from "@/components/why-scinova-section";
import ClientsSection from "@/components/clients-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <WhyScinovaSection />
      <ClientsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-[hsl(231,63%,31%)]/90 backdrop-blur-sm text-white py-8 border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-white/80">© 2025 Scinova Scientifics — All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
