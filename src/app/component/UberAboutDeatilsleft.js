import React from "react";
import Image from "next/image";

const UberAboutDeatilsleft = ({ main_title, sub_content, image , show_section , Small_image_show }) => {
  const renderListItems = () => {
    if (!sub_content || !Array.isArray(sub_content)) return null;

    return sub_content.map((item, index) => {
      const listItemChildren = item?.children || [];
      return (
        <li key={index} className="mb-2">
          {listItemChildren.map((child, i) => {
            if (child.type === "linebreak") {
              return <br key={i} />; 
            }
            return <span key={i}>{child.text}</span>;
          })}
        </li>
      );
    });
  };

  return (
    show_section && (
<section className="py-[20px] group bg-whitereverse">
      <div className="px-4 sm:px-[50px] 3xl:px-0 py-0 3xl:py-[100px] my-[10px] md:my-[30px] 3xl:mr-[100px] relative z-10 group-[.reverse]:3xl:mr-[0] group-[.reverse]:3xl:ml-[100px]">
        <div className="container max-w-3xl lg:max-w-full 3xl:p-0 relative z-10 3xl:static p-4 sm:p-10 mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-10 3xl:gap-[100px] group-[.reverse]:lg:flex-row-reverse">
            {/* Left Image */}
            <div className={Small_image_show ? "lg:w-1/3" : "lg:w-1/2"}>
              <div className="sticky top-40">
                <div className="aspect-square bg-white">
                  {image && (
                    <Image
                      src={image}
                      width={908}
                      height={804}
                      alt="about-left.png"
                      className="w-full object-cover h-full relative z-[1] py-0 lg:py-[30px] bg-white"
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div
              className={`${
                Small_image_show ? "lg:w-2/3" : "lg:w-1/2"
              } sm:flex block items-center`}
            >
              <div className="space-y-6 3xl:pr-[100px] group-[.reverse]:3xl:pr-[0] group-[.reverse]:3xl:pl-[100px] 3xl:py-20">
                {main_title && (
                  <h2
                    className="text-xl lg:text-2xl xl:text-[33px] xl:leading-snug"
                    dangerouslySetInnerHTML={{
                      __html: main_title,
                    }}
                  />
                )}

                <div className="sm:flex block gap-2 flex-wrap">
                  <div className="bg-[#FDF6EE] p-4 sm:p-8 space-y-4 2xl:w-[calc(50%-4px)] grow">
                    <div className="link-blocks space-y-2">
                      <ul className="menu menu1 list-disc text-[16px] pl-5">
                        {renderListItems()}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Border */}
          <div
            className={`${
              Small_image_show
                ? "lg:left-1/4 group-[.reverse]:lg:right-1/4"
                : "lg:left-1/3 group-[.reverse]:lg:right-1/3"
            } absolute border border-[#1A8281] inset-0 -z-10 group-[.reverse]:lg:left-0`}
          ></div>
        </div>
      </div>
    </section>
    )
    
  );
};

export default UberAboutDeatilsleft;
