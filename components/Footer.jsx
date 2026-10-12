'use client'
import React from 'react'
import Link from 'next/link'

const Footer = () => (
  <footer style={{ background: '#0a0a0a', color: '#ffffff', fontFamily: 'var(--font-poppins), Poppins, sans-serif' }} className="py-16 px-4 sm:px-6 md:px-10 border-t border-white/10">
    <div className="max-w-[1150px] mx-auto flex flex-col items-center text-center">

      {/* ── Heading ── */}
      <h2 
        data-aos="fade-up"
        className="text-white font-bold text-[20px] xs:text-[23px] sm:text-[30px] md:text-[38px] tracking-[1.5px] sm:tracking-[2.5px] uppercase mb-2"
        style={{ letterSpacing: '0.08em' }}
      >
        ABOUT THE DEVELOPER
      </h2>

      {/* ── Subheading / Tagline ── */}
      <p 
        data-aos="fade-up" data-aos-delay="50"
        className="text-[#8DC63F] font-semibold text-[11px] sm:text-[12.5px] md:text-[13.5px] tracking-[1px] sm:tracking-[2px] uppercase m-0 px-2"
      >
        LANDMARK LUXURY RESIDENTIAL DEVELOPMENT — SECTOR 88A, DWARKA EXPRESSWAY, GURGAON
      </p>

      {/* ── Accent Underline ── */}
      <div className="w-12 h-[2.5px] bg-[#8DC63F] my-5 sm:my-6 rounded-full" />

      {/* ── Developer Description ── */}
      <div 
        data-aos="fade-up" data-aos-delay="100"
        className="text-[#a1a1aa] text-[13.5px] sm:text-[15px] md:text-[16px] leading-[1.8] max-w-[920px] mb-8 sm:mb-10 text-justify"
      >
          Experion Gurgaon is a reputed real estate developer known for delivering high-quality residential and commercial projects across India. The company focuses on innovation, sustainability, and customer satisfaction in every development.
          Experion Gurgaon has built a strong reputation for transparency, superior construction standards, and thoughtfully designed communities. Each project reflects the developer&apos;s commitment to excellence and modern urban living.
      </div>

      {/* ── RERA Number Box ── */}
      <div 
        data-aos="fade-up" data-aos-delay="150"
        className="inline-flex flex-wrap items-center justify-center bg-white/[0.05] border border-white/15 rounded-[8px] py-3 px-6 sm:px-8 shadow-inner mb-6 transition-all hover:border-white/30"
      >
        <span className="text-neutral-400 text-[14px] sm:text-[15px] mr-2">
          RERA No :
        </span>
        <span className="text-white font-bold text-[14px] sm:text-[15.5px] tracking-wide">
          Coming Soon
        </span>
      </div>

      {/* ── Full Width Horizontal Divider ── */}
      <div className="w-full border-t border-white/10 my-8" />

      {/* ── Privacy Policy (Right-Aligned) ── */}
      <div className="w-full flex justify-end text-[13.5px] sm:text-[14px] mb-4">
        <Link
          href="/privacy-policy"
          className="text-[#8DC63F] hover:underline font-medium transition-colors duration-200"
        >
          Privacy Policy
        </Link>
      </div>

      {/* ── Detailed Legal Disclaimer ── */}
      <p className="w-full text-left text-neutral-500 text-[12px] leading-[1.75] m-0">
        <strong className="text-[#8DC63F]">Disclaimer:</strong> This is not the official website of the developer. The information depicted herein, including master plans, floor plans, furniture layout, fittings, illustrations, specifications, designs, dimensions, rendered views, colours, amenities and facilities etc., are subject to change without notification as may be required by the relevant authorities or the Developer&apos;s architect. This advertisement is an invitation to offer and shall not be construed as an offer or contract. * Prices subject to change without notice. All taxes extra as applicable.
      </p>

    </div>
  </footer>
)

export default Footer
