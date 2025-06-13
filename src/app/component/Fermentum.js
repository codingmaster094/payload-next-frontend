'use client'
import React, { useRef,useEffect } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import commentEqualcontent from "../until/commentEqualcontent";
const Fermentum = ({ main_title, all_vorteile , show_section }) => {
  const carouselRef = useRef()
  useEffect(() => {
    const handleResize = () => {
      commentEqualcontent();
    };

    commentEqualcontent(); // Initial call
    window.addEventListener("resize", handleResize); // Reapply on resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    show_section && (
      <section className="py-[30px] md:py-[40px] lg:py-[50px] bg-white">
      <div className="w-full max-w-[1550px] px-[15px] mx-auto">
        <div className="flex flex-col gap-6 md:gap-11 lg:gap-16">
          <div className="flex justify-center text-center">
            <h2
              className="sm:text-h3 lg:text-h2"
              dangerouslySetInnerHTML={{ __html: main_title }}
            />
          </div>

          <div className="slider-wrapper flex gap-3 lg:gap-10 items-center p-2">
            <div className="prosSwiper-prev border cursor-pointer rounded-full border-Teal p-1 sm:p-2 hidden xl:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icon-tabler-chevron-left"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 6l-6 6l6 6" />
              </svg>
            </div>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              ref={carouselRef}
              className="prosSwiper equal-text2"
              spaceBetween={10}
              slidesPerView={1}
              autoplay={{ delay: 6000 }}
              loop={true}
              navigation={{
                nextEl: '.prosSwiper-next',
                prevEl: '.prosSwiper-prev',
              }}
              pagination={{ el: '.swiper-pagination', clickable: true }}
              breakpoints={{
                700: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
            >
              {all_vorteile?.map((service, i) => (
                <SwiperSlide key={i} className="border border-teal">
                  <div className="p-6 xl:p-12 space-y-4">
                    <div className="flex items-center gap-6">
                      <Image
                        src={service.image.url}
                        width={48}
                        height={48}
                        alt={`Service Icon for ${service.title}`}
                        className="!w-12 h-12"
                      />
                      <h3
                        className="text-black md:text-h4 text-Teal heading"
                        dangerouslySetInnerHTML={{
                          __html: service.title,
                        }}
                      />
                    </div>
                    <div className="flex paragraph">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: service.content?.root?.children[0]?.children[0]?.text
                            ?.replace(/<p>/g, '')
                            .replace(/<\/p>/g, '')
                            .replace(/&amp;/g, '&'),
                        }}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="swiper-pagination static mt-3 md:mt-6" />
            </Swiper>
            <div className="prosSwiper-next border cursor-pointer rounded-full border-Teal p-1 sm:p-2 hidden xl:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icon-tabler-chevron-right"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 6l6 6l-6 6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
  )
}

export default Fermentum
