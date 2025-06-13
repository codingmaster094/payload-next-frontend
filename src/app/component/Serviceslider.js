'use client'
import React,{useEffect} from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import commentEqualcontent from "../until/commentEqualcontent";
const Serviceslider = ({ main_title, all_ablauf,show_section }) => {
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
      <div className="w-full max-w-[1470px] px-[15px] mx-auto">
        <div className="flex flex-col gap-6 md:gap-11 lg:gap-16">
          {
            <div className="flex justify-center">
              <h2
                className="sm:text-h3 lg:text-h2"
                dangerouslySetInnerHTML={{ __html: main_title }}
              ></h2>
            </div>
          }

          <div className="slider-wrapper flex gap-3 lg:gap-10 items-center">
            <div className="serviceSwiper-prev cursor-pointer rounded-full border border-Teal p-1 sm:p-2 hidden xl:block">
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
                className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 6l-6 6l6 6" />
              </svg>
            </div>
            <Swiper
              className="serviceSwiper select-none equal-text1"
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={18}
              slidesPerView={1}
              autoplay={{ delay: 6000 }}
              loop={true}
              navigation={{
                nextEl: '.serviceSwiper-next',
                prevEl: '.serviceSwiper-prev',
              }}
              pagination={{ el: '.swiper-pagination', clickable: true }}
              breakpoints={{
                700: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 22,
                },
                1400: {
                  slidesPerView: 4,
                  spaceBetween: 24,
                },
              }}
            >
              {all_ablauf?.map((val, index) => (
                <SwiperSlide key={index} className="text-center border border-Teal">
                  <div className="p-6 xl:p-8 space-y-4">
                    <div className="flex flex-col items-center gap-6">
                      <Image
                        src={val.image.url}
                        width={64}
                        height={64}
                        alt="Service Image"
                        className="!w-14 h-14 object-contain"
                      />
                      <h3
                        className="text-a md:text-h4 lg:text-h3 heading"
                        dangerouslySetInnerHTML={{
                          __html: val.title,
                        }}
                      />
                    </div>
                    <div className="flex text-center paragraph">
                      <p>{val.content?.root?.children?.[0]?.children?.[0]?.text}</p>
                    </div>

                    {/* <div className="flex text-center paragraph">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: val.content?.root?.children[0]?.children[0].text
                            ?.replace(/<p>/g, '')
                            .replace(/<\/p>/g, '')
                            .replace(/&amp;/g, '&'),
                        }}
                      />
                    </div> */}
                  </div>
                </SwiperSlide>
              ))}
              <div className="swiper-pagination xl:hidden block static mt-3 md:mt-6" />
            </Swiper>
            <div className="serviceSwiper-next cursor-pointer rounded-full border border-Teal p-1 sm:p-2 hidden xl:block">
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
                className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
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

export default Serviceslider
