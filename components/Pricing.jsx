'use client'
import React from 'react'

const pricingData = [
  {
    type: '3 BHK',
    subType: '3 BHK residence',
    area: '2,150–2,200 sq.ft',
    rate: '₹16,500/sq.ft',
    price: '₹ 3.5 Cr* onwards',
  },
  {
    type: '3 BHK + Utility',
    subType: '3.5 BHK residence',
    area: '2,450–2,500 sq.ft',
    rate: '₹16,500/sq.ft',
    price: 'Price on Request',
  },
  {
    type: '4 BHK + Utility',
    subType: '4 BHK residence',
    area: '2,950–3,100 sq.ft',
    rate: '₹16,500/sq.ft',
    price: 'Price on Request',
  },
]

const Pricing = ({ setIsOpen }) => {
  return (
    <section id="pricing" className="w-full py-10 md:py-14 font-poppins overflow-hidden" style={{ background: '#fafafa' }}>
      <div className="container mx-auto px-4 sm:px-6" style={{ maxWidth: '1050px' }}>
        
        {/* Section Header */}
        <div className="text-center max-w-5xl mx-auto mb-12" data-aos="fade-up">
          <span className="text-[#4F8519] font-bold text-[13px] sm:text-[14px] tracking-[2px] uppercase mb-2.5 block">
            PRICE LIST
          </span>
          <h2 className="text-[#111111] text-[26px] sm:text-[32px] md:text-[38px] font-extrabold m-0 leading-tight md:whitespace-nowrap">
            Configurations & Pricing
          </h2>
        </div>

        {/* ── MOBILE / SMALL DEVICE CARDS (Visible below md breakpoint) ── */}
        <div className="flex flex-col gap-6 md:hidden">
          {pricingData.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={(index * 100).toString()}
              className="bg-white rounded-[20px] p-6 sm:p-7 border border-[#fbe6e7] shadow-[0_8px_30px_rgba(141, 198, 63,0.06)] relative overflow-hidden flex flex-col justify-between"
              style={{ borderTop: '4px solid #00558A' }}
            >
              <div>
                {/* Top Header: Unit Type & Area Tag */}
                <div className="flex items-center justify-between gap-2 pb-4 border-b border-[#f1f5f9] mb-4">
                  <div>
                    <h3 className="text-[#1a1a1a] font-black text-[20px] sm:text-[22px] m-0">
                      {item.type}
                    </h3>
                    {item.subType && (
                      <span className="text-[#6c757d] text-[12.5px] font-medium block mt-0.5">
                        {item.subType}
                      </span>
                    )}
                  </div>
                  <span className="bg-[#8DC63F]/15 text-[#4F8519] text-[12.5px] sm:text-[13.5px] font-extrabold px-3.5 py-1.5 rounded-full shadow-sm whitespace-nowrap">
                    {item.area}
                  </span>
                </div>

                {/* Rate & Price Info Block */}
                <div className="grid grid-cols-2 gap-3 mb-6 bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                  <div>
                    <span className="text-[11px] text-[#6c757d] font-bold uppercase tracking-wider block mb-0.5">
                      LAUNCH RATE
                    </span>
                    <div className="text-[#1a1a1a] font-bold text-[16px]">
                      {item.rate}
                    </div>
                  </div>
                  <div>
                    <span className="text-[11px] text-[#6c757d] font-bold uppercase tracking-wider block mb-0.5">
                      INDICATIVE PRICE
                    </span>
                    <div className={`font-black text-[16px] tracking-tight ${index === 0 ? 'text-[#4F8519]' : 'text-[#222222]'}`}>
                      {item.price}
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(true)}
                className="w-full py-3.5 rounded-[50px] font-bold text-[15px] transition-all duration-300 shadow-[0_6px_20px_rgba(0,85,138,0.25)] active:scale-[0.98] cursor-pointer"
                style={{
                  background: '#00558A',
                  color: '#ffffff',
                  border: '2px solid #8DC63F',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#4F8519';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.borderColor = '#4F8519';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = '#00558A';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.borderColor = '#8DC63F';
                }}
              >
                Get Price List
              </button>
            </div>
          ))}
        </div>

        {/* ── DESKTOP TABLE (Visible on md and above) ── */}
        <div className="hidden md:block bg-white rounded-[16px] shadow-[0_10px_35px_rgba(0,0,0,0.04)] overflow-hidden border border-[#e5e7eb]" data-aos="fade-up">
          <table className="w-full text-center border-collapse whitespace-nowrap">
            <thead>
              <tr style={{ background: '#00558A', color: '#ffffff' }}>
                <th className="py-5 px-6 font-bold text-[13.5px] tracking-wider uppercase border-b-0">CONFIGURATION</th>
                <th className="py-5 px-6 font-bold text-[13.5px] tracking-wider uppercase border-b-0">SIZE (APPROX.)</th>
                <th className="py-5 px-6 font-bold text-[13.5px] tracking-wider uppercase border-b-0">LAUNCH RATE</th>
                <th className="py-5 px-6 font-bold text-[13.5px] tracking-wider uppercase border-b-0">INDICATIVE PRICE</th>
                <th className="py-5 px-6 font-bold text-[13.5px] tracking-wider uppercase border-b-0">ACTION</th>
              </tr>
            </thead>
            <tbody className="text-[#222222] divide-y divide-[#f0f0f0]">
              {pricingData.map((item, index) => (
                <tr key={index} className="hover:bg-[#fafafa] transition-colors duration-200">
                  <td className="py-6 px-6 font-extrabold text-[17px] text-[#1a1a1a]">
                    <div>{item.type}</div>
                    {item.subType && (
                      <div className="text-[12.5px] text-[#6c757d] font-normal mt-0.5">{item.subType}</div>
                    )}
                  </td>
                  <td className="py-6 px-6 text-[15px] font-semibold text-[#495057]">{item.area}</td>
                  <td className="py-6 px-6 text-[15px] font-bold text-[#1a1a1a]">{item.rate}</td>
                  <td className={`py-6 px-6 font-black text-[17.5px] ${index === 0 ? 'text-[#4F8519]' : 'text-[#222222]'}`}>
                    {item.price}
                  </td>
                  <td className="py-6 px-6">
                    <button 
                      onClick={() => setIsOpen(true)}
                      className="inline-flex items-center justify-center px-8 py-3 rounded-[50px] font-bold text-[14px] transition-all duration-300 shadow-[0_4px_16px_rgba(0,85,138,0.25)] cursor-pointer"
                      style={{
                        background: '#00558A',
                        color: '#ffffff',
                        border: '2px solid #8DC63F',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = '#4F8519';
                        e.currentTarget.style.color = '#ffffff';
                        e.currentTarget.style.borderColor = '#4F8519';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 8px 24px rgba(141, 198, 63,0.35)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = '#00558A';
                        e.currentTarget.style.color = '#ffffff';
                        e.currentTarget.style.borderColor = '#8DC63F';
                        e.currentTarget.style.transform = 'none';
                        e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,85,138,0.25)';
                      }}
                    >
                      Get Price List
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  )
}

export default Pricing
