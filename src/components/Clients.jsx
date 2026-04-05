import React from 'react'

const Clients = () => {
  const clients = [
    { name: 'SafeShields', logo: './images/safeshields_2.png' },
    { name: 'Arizona Paver Pros', logo: './images/arizona_paver_pros.png' },
    { name: 'JB Paltarumi', logo: './images/LOGO_JB_PALTARUMI.png' },
    { name: 'Zeus Safety', logo: './images/zeus.png' },
    // Replicamos para el efecto de scroll en mobile
    { name: 'SafeShields', logo: './images/safeshields_2.png' },
    { name: 'Arizona Paver Pros', logo: './images/arizona_paver_pros.png' },
    { name: 'JB Paltarumi', logo: './images/LOGO_JB_PALTARUMI.png' },
    { name: 'Zeus Safety', logo: './images/zeus.png' },
  ]

  return (
    <section className="py-20 bg-data-dark overflow-hidden border-y border-white/5">
      <div className="container-custom">
        <h3 className="text-center text-gray-500 text-sm md:text-sm uppercase tracking-[0.4em] mb-16 font-bold">
          Empresas que confíaron en mis servicios
        </h3>
        
        {/* Carousel Desktop */}
        <div className="hidden md:flex justify-center items-center gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
          {clients.slice(0, 4).map((client, index) => (
            <div key={index} className="flex items-center justify-center group px-4">
              <img 
                src={client.logo} 
                alt={client.name} 
                className="h-28 md:h-32 w-auto max-w-[280px] object-contain filter drop-shadow-[0_0_10px_rgba(255,255,255,0.05)] transition-all duration-500 transform group-hover:scale-110 group-hover:drop-shadow-[0_0_25px_rgba(0,255,136,0.25)]"
              />
            </div>
          ))}
        </div>

        {/* Carousel Mobile - Auto Scroll */}
        <div className="md:hidden relative flex overflow-hidden">
          <div className="flex animate-scroll whitespace-nowrap gap-16 py-4 opacity-70">
            {clients.map((client, index) => (
              <div key={index} className="flex-shrink-0 px-4">
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 15s linear infinite;
        }
      `}</style>
    </section>
  )
}

export default Clients
