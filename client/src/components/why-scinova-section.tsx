import { Brain, Globe2, Dna, Shield, PenTool, Phone } from "lucide-react";

export default function WhyScinovaSection() {
  const features = [
    {
      icon: Brain,
      text: "Expert-driven writing & consulting (PhDs, MDs, M.Pharm)",
      gradient: "from-[hsl(181,69%,41%)] to-cyan-500"
    },
    {
      icon: Globe2,
      text: "Global sourcing with local execution",
      gradient: "from-[hsl(33,100%,50%)] to-yellow-500"
    },
    {
      icon: Dna,
      text: "Customized nutrigenomics & wellness profiling",
      gradient: "from-[hsl(340,82%,52%)] to-pink-500"
    },
    {
      icon: Shield,
      text: "Advanced anti-counterfeit strategies",
      gradient: "from-[hsl(231,63%,31%)] to-blue-700"
    },
    {
      icon: PenTool,
      text: "Multilingual scientific content (AI-enhanced)",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Phone,
      text: "On-demand call support, PG & CME connects",
      gradient: "from-purple-500 to-indigo-500"
    }
  ];

  return (
    <section id="services" className="py-12">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[hsl(231,63%,31%)] mb-4">Why Scinova?</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[hsl(33,100%,50%)] to-[hsl(340,82%,52%)] mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Innovation drives us. Precision defines us. We blend domain expertise, tech-enabled
            solutions, and a strong ethical foundation to support your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="glass-effect rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale">
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mr-3`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <span className="font-semibold text-gray-700">{feature.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
