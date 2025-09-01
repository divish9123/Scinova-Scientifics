import React from 'react';

// Correcting the import paths to be relative to the component file itself
import zydusLogo from './logos/zydus.png';
import unisonLogo from './logos/UNISON.png';
import britishBioLogo from './logos/british-biologicals.png';
import cadilaLogo from './logos/cadila.png';
import keplerLogo from './logos/kepler.png';
import emamiLogo from './logos/emami.png';
import acmedixLogo from './logos/Acmedix.png';

export default function ClientsSection() {
  const clientLogos = [
    { name: "Zydus", src: zydusLogo },
    { name: "UNISON", src: unisonLogo },
    { name: "British Bio", src: britishBioLogo },
    { name: "Cadila", src: cadilaLogo },
    { name: "Kepler", src: keplerLogo },
    { name: "Emami", src: emamiLogo },
    { name: "Acmedix", src: acmedixLogo }
  ];

  return (
    <section id="clients" className="py-12">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[hsl(231,63%,31%)] mb-4">Our Esteemed Clients</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[hsl(181,69%,41%)] to-[hsl(33,100%,50%)] mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            We value your business and would like to associate with you as a service provider.
          </p>
        </div>

        <div className="overflow-hidden relative glass-effect rounded-2xl py-8">
          <div className="flex animate-scroll-x">
            {/* First set of logos */}
            <div className="flex items-center space-x-16 mr-16">
              {clientLogos.map((client, index) => (
                <div key={`first-${index}`} className="flex-shrink-0">
                  <div className="h-12 w-24 rounded-lg flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300 p-2">
                    <img src={client.src} alt={`${client.name} Logo`} className="max-h-full max-w-full object-contain" />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Second set (duplicate for seamless scrolling) */}
            <div className="flex items-center space-x-16">
              {clientLogos.map((client, index) => (
                <div key={`second-${index}`} className="flex-shrink-0">
                  <div className="h-12 w-24 bg-white rounded-lg flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300 p-2">
                    <img src={client.src} alt={`${client.name} Logo`} className="max-h-full max-w-full object-contain" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-500 text-center mt-6">
          *Gurukrupa Enterprise & Scinova Scientifics
        </p>
      </div>
    </section>
  );
}
