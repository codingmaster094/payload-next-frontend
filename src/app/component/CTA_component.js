import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CTA_component = ({ title, description, BTN, bg_img , show_section }) => {
  return (
    show_section && (
      <section
      className={`py-10 md:py-[70px] lg:py-[100px] bg-cover bg-center bg-no-repeat relative ${
        bg_img ? 'min-h-[450px]' : 'bg-Teal h-auto'
      }`}
    >
      {/* Background Image */}
      {bg_img && (
        <Image
          src={bg_img}
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          alt="category image"
          role="img"
          width={1920}
          height={420}
          priority
        />
      )}

      {/* Overlay for darkening background */}
      {bg_img && (
        <div className="overlay-1 absolute w-full h-full top-0 left-0 z-0 bg-[rgba(0,0,0,0.3)]"></div>
      )}

      {/* Content Container */}
      <div className="w-full container mx-auto px-[15px]">
        <div className="flex w-full max-w-[922px] flex-col text-white gap-8 mx-auto text-center relative">
          <div className="flex flex-col gap-6">
          {
            title && 
            <h2 className="text-white" dangerouslySetInnerHTML={{ __html: title }}></h2>
          }

           {description && 
            <p
              className=""
              dangerouslySetInnerHTML={{
                __html: description?.replace(/<p>/g, '').replace(/<\/p>/g, '').replace(/&/g, '&'),
              }}
            ></p>
           }
          </div>

          {/* Call-to-Action Button */}
          {BTN && (
            <Link
              href={BTN?.url}
              target=""
              className="flex self-center text-center border-[1.5px] border-solid border-transparent bg-white text-Teal hover:bg-teal-600 hover:text-white font-normal px-5 py-3 sm:px-9 sm:py-4 transition-all duration-700 ease-in hover:bg-transparent hover:border-white"
              aria-label="link-button"
            >
              {BTN?.text}
            </Link>
          )}
        </div>
      </div>
    </section>
    )
  )
}

export default CTA_component
