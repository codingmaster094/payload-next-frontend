'use client'
import Image from 'next/image'
import Link from 'next/link'

const BannerCarousel = ({ title, img, content, BTN, show_section }) => {
  const renderContent = (content) => {
    const list = content?.root?.children?.[0]
    if (!list || list.type !== 'list') return null

    return (
      <ul className="menu list-disc pl-5">
        {list.children.map((item, idx) => (
          <li key={idx} className="mb-2">
            {item.children[0]?.text}
          </li>
        ))}
      </ul>
    )
  }

  return (
    show_section && (
      <section className="relative w-screen md:h-[60vh] lg:h-[75vh] h-full">
        <div className="Banner relative w-full h-full">
          <div className="Banner-sliders relative overflow-hidden w-full h-full">
            <div className="item relative w-full h-full">
              <div className="bg-banner bg-banner-img bg-cover w-full relative">
                <Image
                  src={img?.url || '/fallback.jpg'}
                  alt={img?.alt || 'hero banner image'}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="50% 10%"
                  quality={75}
                  priority
                  unoptimized
                  className="absolute top-0 left-0 w-full h-full z-0"
                />
                <div className="flex flex-col bg-Bgwhite my-[15px] p-6 lg:p-10 gap-4 lg:gap-8 w-full md:w-[845px] relative z-10">
                  <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
                  {renderContent(content)}
                  {BTN?.text != '' && (
                    <Link
                      href={BTN?.url}
                      target={BTN?.target || '_self'}
                      className="flex self-start text-center bg-Teal text-white hover:bg-teal-600 font-normal px-5 py-3 sm:px-9 sm:py-4 transition-all duration-700 ease-in"
                      aria-label={BTN?.text || 'button link'}
                    >
                      {BTN?.text}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  )
}

export default BannerCarousel
