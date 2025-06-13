'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Chevronsvg from '../../../public/images/chevron.svg'

const Accordian = ({ main_title, all_faqs , show_section }) => {
  const [selected, setSelected] = useState(0)
  const [height, setHeight] = useState('0px')
  const contentRefs = useRef(new Map())

  useEffect(() => {
    if (selected !== null && contentRefs.current.get(selected)) {
      setHeight(`${contentRefs.current.get(selected).scrollHeight}px`)
    } else {
      setHeight('0px')
    }
  }, [selected])

  useEffect(() => {
    if (all_faqs && all_faqs.length > 0) {
      setHeight(`${contentRefs.current.get(0)?.scrollHeight}px`)
    }
  }, [all_faqs])

  const handleClick = (index) => {
    setSelected(selected === index ? null : index)
  }

  const extractTextFromLexical = (content) => {
    try {
      return content?.root?.children
        ?.map((block) => block?.children?.map((child) => child?.text || '').join(''))
        .join('\n')
    } catch (error) {
      console.error('Error extracting text:', error)
      return ''
    }
  }

  return (
    show_section && (
      <section className="py-[30px] md:py-[40px] lg:py-[50px] bg-white">
      <div className="container mx-auto px-[15px]">
        <div className="flex w-full max-w-[1140px] flex-col gap-6 md:gap-8 lg:gap-12 mx-auto text-center">
          {main_title && (
            <h2
              className="sm:text-h3 lg:text-h2"
              dangerouslySetInnerHTML={{ __html: main_title }}
            ></h2>
          )}

          <div className="flex w-full">
            <div className="accordian-inner flex flex-col w-full text-left gap-0 sm:gap-4">
              {all_faqs?.map((item, index) => (
                <div
                  key={index}
                  className={`accordian flex flex-col p-4 transition-all shadow-[0px_4px_13px_-2px_#1310220f,0px_4.8px_24.4px_-6px_#1310221a] duration-300 ${
                    selected === index ? 'active' : 'border-transparent'
                  }`}
                >
                  <div
                    className="accordian-header flex justify-between gap-2 cursor-pointer"
                    onClick={() => handleClick(index)}
                  >
                    <h3
                      className="text-a sm:text-xl !font-medium"
                      dangerouslySetInnerHTML={{
                        __html: item.title,
                      }}
                    ></h3>
                    <span
                      className={`arrow w-[28px] h-[28px] inline-block flex-shrink-0 transition-transform rounded-full ${
                        selected === index ? 'rotate-180' : ''
                      }`}
                    >
                      <Image src={Chevronsvg} alt="Chevron-svg" />
                    </span>
                  </div>

                  <div
                    className="accordion-content overflow-hidden transition-all duration-300 ease-in-out"
                    ref={(el) => el && contentRefs.current.set(index, el)}
                    style={{
                      maxHeight: selected === index ? height : '0px',
                    }}
                  >
                    <p className="pt-4">{extractTextFromLexical(item.content)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    )
  )
}

export default Accordian
