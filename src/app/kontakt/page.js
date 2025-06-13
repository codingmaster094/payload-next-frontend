import React from 'react'
import BannerCarousel from './../component/Banner'
import ContactAboutDetails from './../component/ContactAboutDetails'
import Maps from './../component/Maps'
import Contactform from './../component/Contactform'
import ReviewDataComponent from '../component/ReviewDataComponent'
import AllpageFechData from '../until/AllpageFechData'

const page = async () => {
  let KontaktPageData
  let FooterData = null

  
  try {
    KontaktPageData = await AllpageFechData('/my-route?type=global&slug=kontakt')
  } catch (error) {
    console.error('Error fetching data:', error)
    return <div>Error loading data.</div>
  }

  try {
    FooterData = await AllpageFechData(`/my-route?type=footer`)
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

   if (!FooterData || !KontaktPageData || !ReviewsDatas) {
     return <div>No data available.</div>
   }

 
  return (
    <>
      <BannerCarousel
        title={KontaktPageData?.hero?.title}
        img={KontaktPageData?.hero?.image}
        content={KontaktPageData?.hero?.content}
        BTN={KontaktPageData?.hero?.button}
        show_section={KontaktPageData?.hero?.show_section}
      />

      <ContactAboutDetails
        main_title={KontaktPageData?.Contact_about?.title}
        Boxes={KontaktPageData?.Contact_about?.items}
        show_section={KontaktPageData?.Contact_about?.show_section}
      />

      <Maps
        main_title={KontaktPageData?.Map?.title}
        map_image={KontaktPageData?.Map?.image?.url}
        map_url={KontaktPageData?.Map?.url}
        show_section={KontaktPageData?.Map?.show_section}
      />

      <Contactform
        main_title={KontaktPageData?.Contact_form?.title}
        content={KontaktPageData?.Contact_form?.content}
        Kontact_phone={FooterData?.contact?.phone}
        Kontact_Email={FooterData?.contact?.email}
        live_chat_with_us={KontaktPageData?.Contact_form?.live_chat}
        form_address={KontaktPageData?.Contact_form?.address}
        Social_icon={KontaktPageData?.Contact_form?.social}
        show_section={KontaktPageData?.Contact_form?.show_section}
      />

      <ReviewDataComponent
        main_title={ReviewsDatas?.title}
        content={ReviewsDatas?.content?.root?.children[0]?.children[0].text}
        reviewlogos={ReviewsDatas?.Logos_items}
        slider={ReviewsDatas?.Review_items}
        Review_section={KontaktPageData?.Review_section?.show_section}
      />
    </>
  )
}

export default page
