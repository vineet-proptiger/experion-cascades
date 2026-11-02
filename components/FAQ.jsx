'use client'
import React, { useState } from 'react'

const faqData = [
  {
    question: 'What configurations are available at Experion Emerelle Reserve?',
    answer: (
      <>
        Experion Emerelle Reserve offers spacious <strong className="font-semibold text-[#222222]">3 BHK, 3 BHK+Utility &amp; 4 BHK+Utility luxury residences</strong> ranging from 2,150 to 3,100 sq.ft with Japanese living and wellness concepts. The residences are thoughtfully planned with only 4 apartments per core for privacy and low-density living.
      </>
    ),
  },
  {
    question: 'Is Experion Emerelle Reserve RERA registered?',
    answer: (
      <>
        Experion Emerelle Reserve has applied for RERA registration under HRERA Gurugram with ID: <strong className="font-semibold text-[#222222]">RERA-GRG-2348-2026</strong>. Buyers can verify the latest registration status on the official HRERA portal.
      </>
    ),
  },
  {
    question: 'How tall is Experion Emerelle Reserve and how many towers does it have?',
    answer:
      'Experion Emerelle Reserve is spread across about 7.8 acres, featuring 5 high-rise towers rising up to G+40 floors with approximately 800 premium residences (Phase 1 features 3 towers) and only 4 homes per core.',
  },
  {
    question: 'Where exactly is Experion Emerelle Reserve located?',
    answer: (
      <>
        Experion Emerelle Reserve is strategically located bang on <strong className="font-semibold text-[#222222]">Dwarka Expressway in Sector 88A, Gurugram</strong>, directly opposite the upcoming <strong className="font-semibold text-[#222222]">Global City</strong>, providing seamless access to NH-48, CPR, IGI Airport, and Delhi.
      </>
    ),
  },
  {
    question: 'Is Experion Emerelle Reserve a good investment?',
    answer:
      "Yes, Experion Emerelle Reserve is considered a prime luxury investment opportunity due to its premier address opposite Global City on the Dwarka Expressway corridor, 100% FDI-funded developer credibility, Japanese wellness architecture, and high capital appreciation potential.",
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
