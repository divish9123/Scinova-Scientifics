import { MapPin, Mail, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact-us" className="py-12 bg-gradient-to-br from-[hsl(231,63%,31%)] via-blue-900 to-[hsl(340,82%,52%)] text-white">
      {/* Removed the max-w-7xl class to make the section full-width */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Let's Build Something Meaningful</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[hsl(33,100%,50%)] to-white mx-auto mb-6"></div>
          <div className="max-w-3xl mx-auto space-y-4 text-lg">
            <p>
              Whether you're in Pharma, Healthcare, Wellness, or Research — we're ready to partner with you.
            </p>
            <p>
              Reach out to explore how Scinova Scientifics can collaborate with your organization.
            </p>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[hsl(33,100%,50%)] rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Scinova Scientifics</h4>
                  <p className="text-gray-200">
                    A unit of Gurukrupa Enterprise<br />
                    609, Athens, Opp. Zanshi Rani Statue,<br />
                    Shiv Ranjani Cross Roads, Satellite,<br />
                    Ahmedabad, India – 380015 <span className="emoji">🇮🇳</span>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[hsl(181,69%,41%)] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Email Us</h4>
                  <p className="text-gray-200">
                    <a href="mailto:padmarajg@scinovas.com" className="hover:text-[hsl(33,100%,50%)] transition-colors duration-300">padmarajg@scinovas.com</a><br />
                    <a href="mailto:chaitanya@scinovas.com" className="hover:text-[hsl(33,100%,50%)] transition-colors duration-300">chaitanya@scinovas.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[hsl(340,82%,52%)] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Call Us</h4>
                  <p className="text-gray-200">
                    +91 99740 51262<br />
                    +91 98250 97907
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
