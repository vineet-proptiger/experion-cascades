'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { overviewImage } from '../lib/images'

const Overview = ({ setIsOpen }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section id="overview" className="w-full py-10 md:py-14 bg-white font-poppins">
      <div className="container mx-auto px-4" style={{ maxWidth: '1200px' }}>
        <div className="flex flex-col lg:flex-row items-start lg:mx-[-12px]">
          
          {/* Image Column */}
          <div className="w-full lg:w-1/2 lg:px-[12px] mb-10 lg:mb-0 flex justify-center lg:sticky lg:top-24">
            <div className="relative w-full max-w-[480px] lg:max-w-[500px] aspect-square rounded-[20px] overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.08)]">
               <Image 
                 src={overviewImage} 
                 alt="About Experion Emerelle Reserve" 
                 fill 
                 className="object-cover" 
                 sizes="(max-width: 1024px) 100vw, 500px" 
               />
               <div className="absolute" style={{ right: '8px', bottom: '50%', transform: 'translateY(50%) rotate(-90deg)', transformOrigin: 'center right' }}>
                 <span className="text-[#e0e0e0] text-[10px] tracking-widest uppercase" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>Artistic Impression</span>
               </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full lg:w-1/2 lg:px-[12px] lg:pl-16">
            <div className="section-heading">
              <span className="text-[#4F8519] font-bold text-[14px] tracking-widest uppercase mb-3 block">
                Wellness Architecture
              </span>
              <h2 className="text-[#111111] text-[25px] sm:text-[30px] md:text-[38px] font-extrabold leading-[1.2] mb-4">
                Overview
              </h2>
              <div className="mb-5 pr-0 lg:pr-6">
                <div className={`text-[#6c757d] text-[15px] leading-[1.7] text-justify ${!isExpanded ? 'line-clamp-5 overflow-hidden' : ''}`}>
                  <p className="m-0">
                    Experion Emerelle Reserve is the new high-rise residential project by Experion Developers at Sector 88A, Gurgaon. Located on Dwarka Expressway and opposite Global City, it is planned for buyers who want spacious homes, modern architecture and a well-connected New Gurugram address.
                  </p>
                  <p className="m-0">
                    Spread across about 7.8 acres, Experion Sector 88A plans 5 towers rising up to G+40 floors, with a limited community of roughly 800 premium residences. Large-format 3 BHK, 3.5 BHK and 4 BHK homes come with only 4 apartments per core, creating a low-density and private environment. The first phase is expected to have 3 towers.
                  </p>
                  <p className="m-0">
                    The theme is luxury living inspired by Japanese living and wellness concepts. With Global City right opposite, the location gives quick access to Gurugram&apos;s growing residential, commercial and infrastructure ecosystem.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-[#4F8519] font-semibold text-[14.5px] mt-2 hover:underline inline-flex items-center gap-1 cursor-pointer transition-colors duration-200 focus:outline-none"
                >
                  {isExpanded ? 'Read Less' : 'Read More'}
                  <svg 
                    className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mt-6 mb-8">
                {/* Feature 1 */}
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="mt-0.5 flex-shrink-0 text-[#4F8519]">
                    <i className="fa-solid fa-circle-check text-[18px] sm:text-[22px]"></i>
                  </div>
                  <div>
                    <h5 className="text-[#222222] font-bold text-[13.5px] sm:text-[15px] mb-1 leading-snug">Configurations</h5>
                    <p className="text-[#6c757d] text-[12px] sm:text-[13.5px] m-0 leading-normal">3 BHK, 3 BHK+U, 4 BHK+U</p>
                  </div>
                </div>
                {/* Feature 2 */}
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="mt-0.5 flex-shrink-0 text-[#4F8519]">
                    <i className="fa-solid fa-circle-check text-[18px] sm:text-[22px]"></i>
                  </div>
                  <div>
                    <h5 className="text-[#222222] font-bold text-[13.5px] sm:text-[15px] mb-1 leading-snug">Sizes</h5>
                    <p className="text-[#6c757d] text-[12px] sm:text-[13.5px] m-0 leading-normal">2150 to 3100 sq.ft</p>
                  </div>
                </div>
                {/* Feature 3 */}
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="mt-0.5 flex-shrink-0 text-[#4F8519]">
                    <i className="fa-solid fa-circle-check text-[18px] sm:text-[22px]"></i>
                  </div>
                  <div>
                    <h5 className="text-[#222222] font-bold text-[13.5px] sm:text-[15px] mb-1 leading-snug">Land Area</h5>
                    <p className="text-[#6c757d] text-[12px] sm:text-[13.5px] m-0 leading-normal">About 7.8 Acres</p>
                  </div>
                </div>
                {/* Feature 4 */}
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="mt-0.5 flex-shrink-0 text-[#4F8519]">
                    <i className="fa-solid fa-circle-check text-[18px] sm:text-[22px]"></i>
                  </div>
                  <div>
                    <h5 className="text-[#222222] font-bold text-[13.5px] sm:text-[15px] mb-1 leading-snug">Towers</h5>
                    <p className="text-[#6c757d] text-[12px] sm:text-[13.5px] m-0 leading-normal">5 Towers, G+40 Floors</p>
                  </div>
                </div>
                {/* Feature 5 */}
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="mt-0.5 flex-shrink-0 text-[#4F8519]">
                    <i className="fa-solid fa-circle-check text-[18px] sm:text-[22px]"></i>
                  </div>
                  <div>
                    <h5 className="text-[#222222] font-bold text-[13.5px] sm:text-[15px] mb-1 leading-snug">Total Units</h5>
                    <p className="text-[#6c757d] text-[12px] sm:text-[13.5px] m-0 leading-normal">About 800 Residences</p>
                  </div>
                </div>
                {/* Feature 6 */}
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="mt-0.5 flex-shrink-0 text-[#4F8519]">
                    <i className="fa-solid fa-circle-check text-[18px] sm:text-[22px]"></i>
                  </div>
                  <div>
                    <h5 className="text-[#222222] font-bold text-[13.5px] sm:text-[15px] mb-1 leading-snug">Launch Price</h5>
                    <p className="text-[#4F8519] font-bold text-[12px] sm:text-[13.5px] m-0 leading-normal">₹16,500 per sq.ft</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Overview
