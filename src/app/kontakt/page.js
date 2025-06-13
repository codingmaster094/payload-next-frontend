import React from 'react'
import BannerCarousel from './../component/Banner'
import ContactAboutDetails from './../component/ContactAboutDetails'
import Maps from './../component/Maps'
import Contactform from './../component/Contactform'
import ReviewDataComponent from '../component/ReviewDataComponent'

const page = async () => {
  let KontaktPageData
  let FooterData = null
  try {
    const res = await fetch(`${process.env.NEXT_BASE_URL}/my-route?type=global&slug=kontakt`)
    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`)
    }

    KontaktPageData = await res.json()
  } catch (error) {
    console.error('Error loading Kontakt page data:', error)
    return <div>Error loading data.</div>
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_BASE_URL}/my-route?type=footer`,
    )
    FooterData = await res.json()
  } catch (error) {
    console.error('Error fetching header data:', error)
  }

  let ReviewsDatas
  try {
    const res = await fetch(
      `${process.env.NEXT_BASE_URL}/my-route?type=review`,
    )
    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`)
    }

    ReviewsDatas = await res.json()
  } catch (error) {
    console.error('Error loading review ReviewComponent data:', error)
    return <div>Error loading data.</div>
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
