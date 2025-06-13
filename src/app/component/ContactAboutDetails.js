import React from 'react'
import Link from 'next/link'
const ContactAboutDetails = ({ main_title, Boxes , show_section }) => {
  return (
    show_section && (
      <section className="pt-[30px] md:pt-[40px] pb-0 lg:pt-[50px]">
        <div className=" flex flex-col gap-8 px-[15px]">
          <div className="flex relative w-full max-w-[1578px]  gap-4 sm:gap-8 flex-col mx-auto text-center justify-center ">
            <h2
              dangerouslySetInnerHTML={{
                __html: main_title,
              }}
            ></h2>
            {/* {content && (
              <p
                dangerouslySetInnerHTML={{
                  __html: content
                    ?.replace(/<p>/g, "")
                    .replace(/<\/p>/g, "")
                    .replace(/&amp;/g, "&"),
                }}
              ></p>
            )} */}
          </div>
          <div className="w-full max-w-[1200px] mx-auto   flex flex-col lg:flex-row  gap-6  justify-center ">
            <div className="flex w-full flex-col sm:flex-row flex-wrap  gap-4">
              {Boxes?.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="flex flex-col w-full lg:w-[calc(25%-12px)] md:w-[calc(50%-12px)] border border-Teal gap-4 4xl:gap-6 p-4 transition-all duration-500 ease-in-out"
                  >
                    <h3 className="text-h4">{item.title}</h3>
                    <div className="block text-sm break-words">
                      <p>{item.content.root.children[0].children[0].text || item.content.root.children[0].children[0].children[0].text }</p>
                    </div>
                    {item.button && (
                      <Link href={item.button.url} target={'_blank'} className="mt-auto">
                        <button className="mt-auto flex self-start text-center text-base group-hover:bg-white group-hover:text-Teal bg-Teal text-white font-normal p-3 2xl:px-9 sm:py-4 transition-all duration-700 ease-in">
                          {item.button.text}
                        </button>
                      </Link>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    )
  )
}

export default ContactAboutDetails
