import React from 'react'
import BannerCarousel from '../component/Banner'
import MultipleAboutdetails from '../component/MultipleAboutdetails'
import ReviewDataComponent from '../component/ReviewDataComponent'
export default async function LandingPage({ params }) {
  const { slug } = await params
  let landingData

  try {
    const res = await fetch(`${process.env.NEXT_BASE_URL}/my-route?type=landing&slug=${slug}`) // APi
    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`)
    }

    landingData = await res.json()
  } catch (error) {
    console.error('Error loading landingData page data:', error)
    return <div>Error loading data.</div>
  }

  let ReviewsDatas
  try {
    const res = await fetch(`${process.env.NEXT_BASE_URL}/my-route?type=review`)
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
