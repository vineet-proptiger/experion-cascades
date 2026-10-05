'use client'
import React, { useState } from 'react'

const faqData = [
  {
    question: 'What configurations are available at Experion Cascades?',
    answer: (
      <>
        Experion Cascades offers spacious <strong className="font-semibold text-[#222222]">3, 3.5 &amp; 4 BHK luxury apartments</strong> with modern layouts, premium interiors, and large balconies. The residences are thoughtfully designed to maximize natural light, ventilation, and comfortable living for modern families.
      </>
    ),
  },
  {
    question: 'Is Experion Cascades RERA registered?',
    answer: (
      <>
        Experion Cascades is an upcoming luxury residential project under HRERA registration. Buyers are advised to verify the latest RERA registration status and project details on the official Haryana RERA (HARERA) portal or with the authorized sales desk.
      </>
    ),
  },
  {
    question: 'How tall is Experion Cascades and how many towers does it have?',
    answer:
      'Experion Cascades is a premium high-rise development spread across 7.8 acres featuring 4 high-rise towers with a G+40 floor structure and exclusive 4 to a core luxury apartments (approx. 650 units).',
  },
  {
    question: 'Where exactly is Experion Cascades located?',
    answer: (
      <>
        Experion Cascades is strategically located in <strong className="font-semibold text-[#222222]">Sector 88A, Dwarka Expressway, Gurgaon</strong>, offering seamless connectivity to <strong className="font-semibold text-[#222222]">Dwarka Expressway, NH-48, CPR, IGI Airport, Cyber City, and Delhi</strong>. The location is surrounded by top schools, hospitals, shopping malls, and corporate hubs.
      </>
    ),
  },
  {
    question: 'Is Experion Cascades a good investment?',
    answer:
      "Yes, Experion Cascades is considered a prime investment opportunity due to its strategic location in Sector 88A on the Dwarka Expressway corridor, expansive 1.75 lakh sq. ft. forest-themed clubhouse, luxury specifications, and high capital appreciation potential in New Gurgaon.",
  },
]

const FAQ = () => {
  // First item open by default, set to index 0
  const [openIdx, setOpenIdx] = useState(0)

  const toggleAccordion = (index) => {
    setOpenIdx(prev => (prev === index ? null : index))
  }

  return (
    <section id="faq" className="w-full py-10 md:py-14 bg-white font-poppins overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-[1280px]">
        
        {/* Section Title */}
        <div className="text-center max-w-[800px] mx-auto mb-12 sm:mb-14" data-aos="fade-up">
          <span className="text-[#4F8519] font-bold text-[13px] sm:text-[14px] tracking-[2.5px] uppercase mb-3 block">
            FAQ
          </span>
          <h2 className="text-[#111111] text-[26px] sm:text-[32px] md:text-[38px] font-extrabold m-0 leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion Container */}
        <div 
          className="max-w-[960px] mx-auto border border-[#dee2e6] rounded-[12px] sm:rounded-[14px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] divide-y divide-[#dee2e6]"
          data-aos="fade-up"
        >
          {faqData.map((item, index) => {
            const isOpen = openIdx === index

            return (
              <div key={index} className="bg-white">
                {/* Accordion Button */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className={`w-full py-4 px-5 sm:py-5 sm:px-7 flex items-center justify-between gap-4 text-left text-[15.5px] sm:text-[17px] transition-all duration-200 ${
                    isOpen
                      ? 'bg-[#e5f0ff] text-[#0052cc] font-semibold shadow-inner'
                      : 'bg-white text-[#212529] font-medium hover:bg-[#fafafa]'
                  }`}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  
                  {/* Chevron Icon */}
                  <span className={`text-current transition-transform duration-300 transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg 
                      width="18" 
                      height="18" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </button>

                {/* Accordion Body */}
                {isOpen && (
                  <div className="bg-white px-5 py-5 sm:px-7 sm:py-6 text-[#343a40] text-[15px] sm:text-[15.5px] leading-[1.75] border-t border-[#dee2e6]/80 animate-fadeIn">
                    {item.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default FAQ
