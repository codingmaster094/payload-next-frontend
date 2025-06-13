'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Aboutdetails = ({
  main_title,
  section_content,
  section_image,
  section_sub_content,
  Small_image_show,
  show_section
}) => {
  // section_content contains HTML string
  const sanitizedContent = section_content

  return (
    show_section && (
      <section className="py-[20px] group bg-white">
      <div className="px-4 sm:px-[50px] 3xl:px-0 py-0 3xl:py-[100px] my-[10px] md:my-[30px] 3xl:mr-[100px] relative z-10 group-[.reverse]:3xl:mr-[0] group-[.reverse]:3xl:ml-[100px]">
        <div className="container max-w-3xl lg:max-w-full 3xl:p-0 relative z-10 3xl:static p-4 sm:p-10 mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-10 3xl:gap-[100px] group-[.reverse]:lg:flex-row-reverse">
            {/* Image Section */}
            <div className={Small_image_show ? 'lg:w-1/3' : 'lg:w-1/2'}>
              <div className="sticky top-40">
                <div className="aspect-square bg-white relative w-full">
                  {section_image?.url && (
                    <Image
                      src={section_image?.url}
                      width={600}
                      height={492}
                      alt={section_image?.alt || 'Section Image'}
                      className="w-full object-cover h-full bg-white"
                      priority
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className={section_image ? 'lg:w-2/3' : 'lg:w-1/2'}>
              <div className="space-y-6 3xl:pr-[100px] group-[.reverse]:3xl:pr-[0] group-[.reverse]:3xl:pl-[100px] 3xl:py-20">
                {/* Main Title */}
                {main_title && (
                  <h2
                    className="text-xl lg:text-2xl xl:text-[33px] xl:leading-snug"
                    dangerouslySetInnerHTML={{ __html: main_title }}
                  />
                )}

                {/* Description/content */}
                {section_content && (
                  <div
                    className="space-y-2"
                    dangerouslySetInnerHTML={{ __html: sanitizedContent }}
                  />
                )}

                <div className="flex gap-2 flex-wrap">
                  {section_sub_content?.map((item, i) => (
                    <div
                      key={i}
                      className="bg-[#FDF6EE] p-4 sm:p-8 space-y-4 2xl:w-[calc(50%-4px)] grow"
                    >
                      {item.title && <h3 className="text-5 lg:text-[24px]">{item.title}</h3>}
                      {item.decription && <p>{item.decription}</p>}

                      {item.content?.root?.children.map((child, j) => (
                        <div className="link-blocks space-y-2" key={j}>
                          {/* Render list items if any */}
                          {child.children && (
                            <ul className="list-disc list-inside mb-2">
                              {child.children.map((li, k) => (
                                <li key={k} dangerouslySetInnerHTML={{ __html: li.text }} />
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}

                      {/* Button inside item */}
                      {item.button && (
                        <Link
                          href={item.button.url}
                          target={item.button.target}
                          className="bg-[#1A8281] py-2 px-4 text-white inline-block rounded"
                        >
                          {item.button.text}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${
              section_image
                ? 'lg:left-1/4 group-[.reverse]:lg:right-1/4'
                : 'lg:left-1/3 group-[.reverse]:lg:right-1/3'
            } absolute border border-[#1A8281] inset-0 -z-10 group-[.reverse]:lg:left-0`}
          ></div>
        </div>
      </div>
    </section>
    )
  )
}

export default Aboutdetails
