import Link from 'next/link'
import React from 'react'

const Terminbroncher = (props) => {
  const { title, BTN, columns , show_section } = props

  return (
    show_section && (
      <section className="py-[30px] md:py-[40px] lg:py-[50px] w-full bg-white">
      <div className="w-full container mx-auto px-[15px]">
        <div className="flex flex-col border border-Teal gap-6 sm:gap-8 mx-auto text-center p-6 lg:p-[50px]">
          <h2
            className="relative w-full max-w-[500px] mx-auto"
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          ></h2>

          <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row text-left *:w-full *:lg:w-1/2">
            {columns?.map((val, index) => (
              <p
                key={index}
                dangerouslySetInnerHTML={{
                  __html: val.children[0].text?.replace(/<p>/g, '').replace(/<\/p>/g, ''),
                }}
              ></p>
            ))}
          </div>

          {BTN && (
            <Link
              href={BTN?.url}
              target={''}
              className="flex self-center text-center bg-Teal text-white hover:bg-teal-600 font-normal px-5 py-3 sm:px-9 sm:py-4 transition-all duration-700 ease-in"
              aria-label="link-button"
              role="link"
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

export default Terminbroncher
