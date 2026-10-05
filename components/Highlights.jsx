'use client'
import React from 'react'

const highlights = [
  {
    title: 'Prime Location',
    description: 'Luxury 3, 3.5 & 4 BHK apartments located in Sector 88A, Dwarka Expressway, Gurgaon.',
    icon: 'fa-solid fa-location-dot'
  },
  {
    title: 'Spacious Layouts',
    description: 'Spacious layouts ranging from 1950 to 3050 SQFT.',
    icon: 'fa-solid fa-ruler-combined'
  },
  {
    title: 'Expansive Area',
    description: 'Spread over a 7.8 acres of land parcel, divided into multiple phases.',
    icon: 'fa-solid fa-tree'
  },
  {
    title: 'Sky-High Living',
    description: 'Four high-rise towers with a G+40 floor structure.',
    icon: 'fa-solid fa-building'
  },
  {
    title: 'Exclusive Inventory',
    description: 'Only 650 units with 4 to a core luxury apartments.',
    icon: 'fa-solid fa-house-chimney'
  },
  {
    title: 'Premium Clubhouse',
    description: '1.75 lakh sq. ft. clubhouse based on a forest theme with luxury amenities.',
    icon: 'fa-solid fa-champagne-glasses'
  },
]

const Highlights = ({ setIsOpen }) => {
  return (
    <section id="highlights" className="w-full py-10 md:py-14 font-poppins" style={{ background: '#fafafa' }}>
      <div className="container mx-auto px-4" style={{ maxWidth: '1280px' }}>

        {/* Header */}
        <div className="text-center max-w-5xl mx-auto mb-12" data-aos="fade-up">
          <span className="text-[#4F8519] font-bold text-[14px] tracking-[2.5px] uppercase mb-2.5 block">
            PROJECT HIGHLIGHTS
          </span>
          <h2 className="text-[#111111] text-[26px] sm:text-[32px] md:text-[38px] font-extrabold m-0 leading-tight md:whitespace-nowrap">
            Highlights of Experion Cascades
          </h2>
        </div>

        {/* 6 Cards: 3 per row on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {highlights.map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={(i * 50).toString()}
              className="group relative bg-white rounded-[20px] p-7 border border-[#fbe6e7] shadow-[0_6px_25px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-[0_16px_36px_rgba(141, 198, 63,0.14)] hover:border-[#4F8519]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Top Row: Icon & Title Side-by-Side */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-[52px] h-[52px] min-w-[52px] min-h-[52px] rounded-[14px] bg-[#8DC63F]/15 text-[#4F8519] group-hover:bg-[#1A1A1A] group-hover:text-white flex items-center justify-center text-[22px] transition-all duration-300 shadow-sm flex-shrink-0 group-hover:scale-105">
                    <i className={item.icon}></i>
                  </div>
                  <h4 className="text-[#222222] font-bold text-[17px] sm:text-[18px] leading-snug group-hover:text-[#4F8519] transition-colors duration-200 m-0">
                    {item.title}
                  </h4>
                </div>

                {/* Description */}
                <p className="text-[#6c757d] text-[14.5px] font-medium leading-[1.65] m-0">
                  {item.description}
                </p>
              </div>

              {/* Subtle bottom accent line that expands on hover */}
              <div className="w-12 h-[3px] bg-[#1A1A1A]/20 group-hover:bg-[#1A1A1A] group-hover:w-full rounded-full mt-6 transition-all duration-300"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Highlights
