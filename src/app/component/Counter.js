"use client";
import React from "react";

const Counter = ({ main_title, all_leistungen ,show_section}) => {
  return (
    show_section && (
<section className="py-10 md:py-[70px] lg:py-[100px] bg-Teal">
      <div className="container mx-auto px-[15px] sm:px-[30px] lg:px-[61px]">
        <div className="flex text-center items-center justify-center flex-col gap-6 sm:gap-8 flex-wrap text-white">
          <div className="flex text-white relative">
            <h2
              className="text-white"
              dangerouslySetInnerHTML={{ __html: main_title }}
            ></h2>
          </div>
          <div className="flex justify-between flex-col md:flex-row gap-8">
            {all_leistungen &&
              all_leistungen.map((item, index) => (
                <div
                  key={index}
                  className="text-center gap-6 flex flex-col font-primry-font"
                >
                  <span className="text-5xl font-bold counter">
                    {item.count}
                  </span>
                  <p
                    className="mt-2 text-a"
                    dangerouslySetInnerHTML={{
                      __html: item.count_description
                        ?.replace(/<p>/g, "")
                        .replace(/<\/p>/g, "")
                        .replace(/&amp;/g, "&"),
                    }}
                  ></p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
    )
  );
};

export default Counter;

