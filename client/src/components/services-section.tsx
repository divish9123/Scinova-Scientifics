import { Dna, Shield, Globe } from "lucide-react";

export default function ServicesSection() {
  return (
    <section id="about-us" className="py-12">
      {/* Removed the max-w-7xl class to make the section full-width */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[hsl(231,63%,31%)] mb-4">What We Offer</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[hsl(181,69%,41%)] to-[hsl(33,100%,50%)] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Nutrigenomics Profiling */}
          <div className="group glass-effect rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover-scale">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[hsl(181,69%,41%)] to-blue-500 rounded-2xl flex items-center justify-center mr-4">
                <Dna className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[hsl(231,63%,31%)]">Nutrigenomics Profiling</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We have partnered with high tech Gene Labs to get the cutting-edge technologies to offer Nutrigenomics services to our clients. This field is striding rapidly and will be popular destination in future for healthcare decision making.
            </p>
          </div>

          {/* Anti-Counterfeit Tech */}
          <div className="group glass-effect rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover-scale">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[hsl(33,100%,50%)] to-yellow-500 rounded-2xl flex items-center justify-center mr-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <a 
                href="https://qrmor.in" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-2xl font-bold text-[hsl(231,63%,31%)] hover:text-[hsl(340,82%,52%)] transition-colors duration-300"
              >
                Anti-Counterfeit Tech
              </a>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We also know the importance of delivering secure products to your esteemed customers, while protecting them from counterfeit products. In a way, we help you protect your valuable assets in the market place and pave a way for them to stand reputed. We offer Anti-counterfeit tech to suit your requirements.
            </p>
          </div>

          {/* Global Sourcing & Product Development */}
          <div className="group glass-effect rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover-scale md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[hsl(340,82%,52%)] to-pink-500 rounded-2xl flex items-center justify-center mr-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[hsl(231,63%,31%)]">Global Sourcing & Product Development</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Innovation is the way to go. We offer innovative services in critical product development, worldwide product sourcing, and enabling technologies — all tailored to keep you ahead of the race. Our global partnerships ensure rapid, reliable, and compliant delivery of APIs, niche ingredients, and custom formulations that meet evolving market demands.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
