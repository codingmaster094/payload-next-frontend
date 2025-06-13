import React from 'react'
import BannerCarousel from './../component/Banner'
import CompanyLogo from './../component/CompanyLogo'
import Terminbroncher from './../component/Terminbroncher'
import MultipleAboutdetails from './../component/MultipleAboutdetails'
import Accordian from './../component/Accordian'
import ReviewDataComponent from '../component/ReviewDataComponent'
import AllpageFechData from "../until/AllpageFechData";

const page = async () => {
  let AesthetikPageData

  try {
    AesthetikPageData = await AllpageFechData(`/my-route?type=global&slug=asthetik`)
  } catch (error) {
    console.error('Error fetching data:', error)
    return <div>Error loading data.</div>
  }


  let ReviewsDatas
  try {
    ReviewsDatas = await AllpageFechData('/my-route?type=review')
   } catch (error) {
     console.error('Error fetching data:', error)
     return <div>Error loading data.</div>
   }

   if (!AesthetikPageData || !ReviewsDatas) {
     return <div>No data available.</div>
   }

  return (
    <>
      <BannerCarousel
        title={AesthetikPageData?.hero?.title}
        img={AesthetikPageData?.hero?.image}
        content={AesthetikPageData?.hero?.content}
        BTN={AesthetikPageData?.hero?.button}
        show_section={AesthetikPageData?.hero?.show_section}
      />
      <CompanyLogo
        Logos_Image={AesthetikPageData?.companyLogo?.items}
        show_section={AesthetikPageData?.companyLogo?.show_section}
      />
      <Terminbroncher
        title={AesthetikPageData?.Behandlungen?.title}
        BTN={AesthetikPageData?.Behandlungen.button}
        columns={AesthetikPageData?.Behandlungen?.content.root.children}
        show_section={AesthetikPageData?.Behandlungen?.show_section}
      />
      <MultipleAboutdetails MultipleAboutdeta={AesthetikPageData?.pageSections} />

      <ReviewDataComponent
        main_title={ReviewsDatas?.title}
        content={ReviewsDatas?.content?.root?.children[0]?.children[0].text}
        reviewlogos={ReviewsDatas?.Logos_items}
        slider={ReviewsDatas?.Review_items}
        Review_section={AesthetikPageData?.Review_section?.show_section}
      />
      <Accordian
        main_title={AesthetikPageData?.FAQ?.title}
        all_faqs={AesthetikPageData?.FAQ?.items}
        show_section={AesthetikPageData?.FAQ?.show_section}
      />
    </>
  )
}

export default page
