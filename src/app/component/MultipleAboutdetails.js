'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import CTA_component from './CTA_component'

const AsehetikAboutpage = ({ MultipleAboutdeta }) => {
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash) {
        const targetElement = document.querySelector(hash)
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
    window.addEventListener('hashchange', handleHashChange)
    handleHashChange()
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [MultipleAboutdeta])
  return (
    <>
      {MultipleAboutdeta &&
        MultipleAboutdeta?.map((val, index) => {
          return (
            <React.Fragment key={index}>
              {val?.blockType === 'cta-section' && (
                <CTA_component
                  title={val?.title}
                  description={val?.content.root.children[0].children[0].text}
                  BTN={val?.button}
                  bg_img={val?.image && val?.image.url}
                  show_section={val?.show_section}
                />
              )}

              {val?.blockType === 'multiple-section' && val.show_section && (
                <section
                  className={`py-[20px] group ${val?.Reverse_image ? 'bg-white reverse' : 'bg-white '}`}
                  id={val.sectionID}
                >
                  <div
                    className={`px-4 sm:px-[50px] 3xl:px-0 py-0 3xl:py-[100px] my-[10px] md:my-[30px] 3xl:mr-[100px] relative z-10 group-[.reverse]:3xl:mr-[0] group-[.reverse]:3xl:ml-[100px] ${
                      val?.Reverse_image ? '3xl:ml-[100px]' : '3xl:mr-[100px]'
                    }  relative z-10`}
                  >
                    <div className="container max-w-3xl lg:max-w-full 3xl:p-0 relative z-10 3xl:static p-4 sm:p-10 mx-auto">
                      <div className="flex flex-col lg:flex-row gap-6 sm:gap-10 3xl:gap-[100px] group-[.reverse]:lg:flex-row-reverse">
                        <div className={val.Small_image ? 'lg:w-1/3' : 'lg:w-1/2'}>
                          <div className="sticky top-40">
                            <div className="aspect-square bg-white">
                              {val.image && (
                                <Image
                                  src={val.image.url}
                                  alt="about-right.png"
                                  className={`w-auto object-contain lg:object-cover h-full py-0 lg:py-[30px] ${
                                    val?.Reverse_image ? 'bg-white' : 'bg-white'
                                  }`}
                                  layout="fill"
                                  objectFit="cover"
                                />
                              )}
                            </div>
                          </div>
                        </div>
                        <div
                          className={`${
                            val.Small_image ? 'lg:w-2/3' : 'lg:w-1/2'
                          } flex justify-center items-center`}
                        >
                          <div className="space-y-6 3xl:pr-[100px] group-[.reverse]:3xl:pr-[0] group-[.reverse]:3xl:pl-[100px] 3xl:py-20 w-full">
                            {val.title && (
                              <h2
                                className="text-xl lg:text-2xl xl:text-[33px]  xl:leading-snug"
                                dangerouslySetInnerHTML={{
                                  __html: val.title,
                                }}
                              />
                            )}
                            <div>
                              {val?.content?.root?.children?.map((item, i) => (
                                <p
                                  key={i}
                                  dangerouslySetInnerHTML={{ __html: item.children[0].text }}
                                ></p>
                              ))}
                            </div>
                            <div className="flex gap-2 flex-wrap">
                              {val.items?.map((item, i) => (
                                <div
                                  key={i}
                                  className="bg-[#FDF6EE] p-4 sm:p-8 space-y-4 2xl:w-[calc(50%-4px)] grow"
                                >
                                  <div className="link-blocks space-y-2">
                                    {item.title && (
                                      <h3 className="text-5 lg:text-[24px]">{item.title}</h3>
                                    )}

                                    <ul className="menu menu1 list-g-disc text-[16px]">
                                      {item?.content.root.children[0].children.map((items, i) => (
                                        <li
                                          key={i}
                                          dangerouslySetInnerHTML={{
                                            __html: items.children[0].text,
                                          }}
                                        ></li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`
                                ${
                                  val.Small_image
                                    ? 'lg:left-1/4 group-[.reverse]:lg:right-1/4'
                                    : 'lg:left-1/3 group-[.reverse]:lg:right-1/3'
                                } absolute border border-[#1A8281] inset-0 -z-10 group-[.reverse]:lg:left-0`}
                      ></div>
                    </div>
                  </div>
                </section>
              )}
            </React.Fragment>
          )
        })}
    </>
  )
}

export default AsehetikAboutpage
