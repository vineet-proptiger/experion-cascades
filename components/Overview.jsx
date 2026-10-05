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
            <div className="relative w-full max-w-[480px] h-[320px] sm:h-[380px] md:h-[430px] lg:h-[470px] rounded-[20px] overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.08)]">
               <Image 
                 src={overviewImage} 
                 alt="About Experion Cascades" 
                 fill 
                 className="object-cover" 
                 sizes="(max-width: 1024px) 100vw, 50vw" 
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
                    After the success of Experion The Trillion, they launched Experion Cascades, which is located in Sector 88A, Dwarka Expressway, Gurgaon. It is developed by the Experion Group, known for luxury residential and commercial projects.
                  </p>
                  <p className="m-0">
                    The residential project is spread over a 7.8 acres of land parcel, divided into multiple phases. The first phase covers four high-rise towers with a G+40 floor structure. It also provides 4 to a core luxury apartment with only 650 units.
                  </p>
                  <p className="m-0">
                    Experion Cascades Sector 88A offers 3, 3.5 and 4 BHK spacious apartments with sizes ranging from 1950 to 3050 sq. ft. It is under the HRERA registration project, and the RERA number is coming soon.
                  </p>
                  <p className="m-0">
                    Apart from this, it offers a premium clubhouse spread over 1.75 lakh sq. ft., based on a forest theme. It offers luxury amenities such as a kids' play area, swimming pool, modular kitchen, jogging track, sports complex, multipurpose hall, and more.
                  </p>
                  <p className="m-0">
                    At Experion Sector 88A Gurgaon, you will get excellent connectivity to the Dwarka Expressway, IGI Airport, Diplomatic Enclave II, and Cyber City. It is also close to schools, healthcare facilities, shopping malls, and commercial spaces.
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
              
              <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-6 mb-8">
                {/* Feature 1 */}
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="mt-0.5 flex-shrink-0 text-[#4F8519]">
                    <i className="fa-solid fa-circle-check text-[18px] sm:text-[22px]"></i>
                  </div>
                  <div>
                    <h5 className="text-[#222222] font-bold text-[13.5px] sm:text-[16px] mb-1 leading-snug">Configuration</h5>
                    <p className="text-[#6c757d] text-[12px] sm:text-[14px] m-0 leading-normal">3, 3.5 &amp; 4 BHK</p>
                  </div>
                </div>
                {/* Feature 2 */}
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="mt-0.5 flex-shrink-0 text-[#4F8519]">
                    <i className="fa-solid fa-circle-check text-[18px] sm:text-[22px]"></i>
                  </div>
                  <div>
                    <h5 className="text-[#222222] font-bold text-[13.5px] sm:text-[16px] mb-1 leading-snug">Land Parcel Area</h5>
                    <p className="text-[#6c757d] text-[12px] sm:text-[14px] m-0 leading-normal">7.8 Acres</p>
                  </div>
                </div>
                {/* Feature 3 */}
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="mt-0.5 flex-shrink-0 text-[#4F8519]">
                    <i className="fa-solid fa-circle-check text-[18px] sm:text-[22px]"></i>
                  </div>
                  <div>
                    <h5 className="text-[#222222] font-bold text-[13.5px] sm:text-[16px] mb-1 leading-snug">Tower Structure</h5>
                    <p className="text-[#6c757d] text-[12px] sm:text-[14px] m-0 leading-normal">High-Rise Towers with a G+40</p>
                  </div>
                </div>
                {/* Feature 4 */}
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="mt-0.5 flex-shrink-0 text-[#4F8519]">
                    <i className="fa-solid fa-circle-check text-[18px] sm:text-[22px]"></i>
                  </div>
                  <div>
                    <h5 className="text-[#222222] font-bold text-[13.5px] sm:text-[16px] mb-1 leading-snug">Luxury Clubhouse</h5>
                    <p className="text-[#6c757d] text-[12px] sm:text-[14px] m-0 leading-normal">1.75 Lakh Sq. Ft.</p>
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
