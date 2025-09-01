import scinovaLogoPath from "@assets/scinova_1754034214392.jpg";

export default function HeroSection() {
  return (
    <section id="home" className="pt-20 pb-12">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="max-w-4xl mx-auto glass-effect rounded-3xl p-8 shadow-2xl animate-fade-in-up">
            <img
              src={scinovaLogoPath}
              alt="Scinova Scientifics Logo"
              className="w-20 h-20 mx-auto mb-4 rounded-2xl object-contain shadow-md"
            />
            <h1 className="text-5xl font-bold text-[hsl(231,63%,31%)] mb-4">SCINOVA SCIENTIFICS</h1>
            <h2 className="text-2xl font-bold text-[hsl(340,82%,52%)] mb-6">SCIENCE AS A SERVICE</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Scinova Scientifics is a young, strong and dynamic team of highly experienced
              professional consultants who are passionate on delivering Science as a Service
              for Healthcare, Pharmaceutical and allied Organizations.
            </p>
          </div>
        </div>

        <div className="text-center space-y-6 animate-slide-right">
          <h3 className="text-2xl font-semibold text-gray-600">
            We're not just riding the science wave — we're steering it.
          </h3>
          <div className="max-w-4xl mx-auto space-y-4 text-lg text-gray-700">
            <p>
              Scinova Scientifics is a bold, future-forward collective of scientists, strategists,
              and technologists delivering Science as a Service for healthcare, pharma, and allied industries.
            </p>
            <p>
              Backed by seasoned professionals (MDs, PhDs, and M.Pharm experts), we bring a powerhouse of
              deep domain expertise with a startup-style hunger to disrupt and deliver.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
