import React from 'react'
import BannerCarousel from '../component/Banner'
import MultipleAboutdetails from '../component/MultipleAboutdetails'
import ReviewDataComponent from '../component/ReviewDataComponent'
import AllpageFechData from '../until/AllpageFechData'
export default async function LandingPage({ params }) {
  const { slug } = await params
  let landingData

  try {
    landingData = await AllpageFechData(`/my-route?type=landing&slug=${slug}`)
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
  
     if (!landingData || !ReviewsDatas) {
       return <div>No data available.</div>
     }

  return (
    <>
      <BannerCarousel
        title={landingData?.hero?.title}
        img={landingData?.hero?.image}
        content={landingData?.hero?.content}
        BTN={landingData?.hero?.button}
        show_section={landingData?.hero?.show_section}
      />
      <MultipleAboutdetails MultipleAboutdeta={landingData?.pageSections} />
      <ReviewDataComponent
        main_title={ReviewsDatas?.title}
        content={ReviewsDatas?.content?.root?.children[0]?.children[0].text}
        reviewlogos={ReviewsDatas?.Logos_items}
        slider={ReviewsDatas?.Review_items}
        Review_section={landingData?.Review_section?.show_section}
      />
    </>
  )
}
