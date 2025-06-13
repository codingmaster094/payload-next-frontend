import React from 'react'
import BannerCarousel from './../component/Banner'
import CompanyLogo from './../component/CompanyLogo'
import Terminbroncher from './../component/Terminbroncher'
import MultipleAboutdetails from './../component/MultipleAboutdetails'
import Accordian from './../component/Accordian'
import ReviewDataComponent from '../component/ReviewDataComponent'

const page = async () => {
  let NaturheilmedizinPageData
  try {
    const res = await fetch(`https://payload-backend-20uj.onrender.com/my-route?type=global&slug=naturheilmedizin`) // APi
    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`)
    }

    NaturheilmedizinPageData = await res.json()
  } catch (error) {
    console.error('Error loading Naturheilmedizin page data:', error)
    return <div>Error loading data.</div>
  }

  let ReviewsDatas
  try {
    const res = await fetch(`https://payload-backend-20uj.onrender.com/my-route?type=review`)
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
