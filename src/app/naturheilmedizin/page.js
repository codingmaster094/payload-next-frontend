import React from 'react'
import BannerCarousel from './../component/Banner'
import CompanyLogo from './../component/CompanyLogo'
import Terminbroncher from './../component/Terminbroncher'
import MultipleAboutdetails from './../component/MultipleAboutdetails'
import Accordian from './../component/Accordian'
import ReviewDataComponent from '../component/ReviewDataComponent'
import AllpageFechData from '../until/AllpageFechData'

const page = async () => {
  let NaturheilmedizinPageData

  
  try {
    NaturheilmedizinPageData = await AllpageFechData(`/my-route?type=global&slug=naturheilmedizin`)
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

  if (!NaturheilmedizinPageData || !ReviewsDatas) {
    return <div>No data available.</div>
  }

  return (
    <>
      <BannerCarousel
        title={NaturheilmedizinPageData?.hero?.title}
        img={NaturheilmedizinPageData?.hero?.image}
        content={NaturheilmedizinPageData?.hero?.content}
        BTN={NaturheilmedizinPageData?.hero?.button}
        show_section={NaturheilmedizinPageData?.hero?.show_section}
      />
      <CompanyLogo
        Logos_Image={NaturheilmedizinPageData?.companyLogo?.items}
        show_section={NaturheilmedizinPageData?.companyLogo?.show_section}
      />
      <Terminbroncher
        title={NaturheilmedizinPageData?.Behandlungen?.title}
        BTN={NaturheilmedizinPageData?.Behandlungen.button}
        columns={NaturheilmedizinPageData?.Behandlungen?.content.root.children}
        show_section={NaturheilmedizinPageData?.Behandlungen?.show_section}
      />
      <MultipleAboutdetails MultipleAboutdeta={NaturheilmedizinPageData?.pageSections} />

      <ReviewDataComponent
        main_title={ReviewsDatas?.title}
        content={ReviewsDatas?.content?.root?.children[0]?.children[0].text}
        reviewlogos={ReviewsDatas?.Logos_items}
        slider={ReviewsDatas?.Review_items}
        Review_section={NaturheilmedizinPageData?.Review_section?.show_section}
      />
      <Accordian
        main_title={NaturheilmedizinPageData?.FAQ?.title}
        all_faqs={NaturheilmedizinPageData?.FAQ?.items}
        show_section={NaturheilmedizinPageData?.FAQ?.show_section}
      />
    </>
  )
}

export default page
