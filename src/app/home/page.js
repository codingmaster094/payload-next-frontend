import BannerCarousel from './../component/Banner'
import CompanyLogo from './../component/CompanyLogo'
import Aboutdetails from './../component/Aboutdetails'
import CTA_component from './../component/CTA_component'
import AboutLambsheim from './../component/AboutLambsheim'
import Fermentum from './../component/Fermentum'
import Serviceslider from './../component/Serviceslider'
import ReviewDataComponent from '../component/ReviewDataComponent'

const HomePage = async () => {
  let ReviewsDatas
  let HomePageData

  try {
    const res = await fetch(`${process.env.NEXT_BASE_URL}/my-route?type=global&slug=home`)
    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`)
    }

    HomePageData = await res.json()
  } catch (error) {
    console.error('Error loading home page data:', error)
    return <div>Error loading data.</div>
  }

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
        title={HomePageData?.hero?.title}
        img={HomePageData?.hero?.image}
        content={HomePageData?.hero?.content}
        BTN={HomePageData?.hero?.button}
        show_section={HomePageData?.hero?.show_section}
      />
      <CompanyLogo
        Logos_Image={HomePageData?.companyLogo?.items}
        show_section={HomePageData?.companyLogo?.show_section}
      />

      <Aboutdetails
        main_title={HomePageData?.GesundheitSection?.title}
        section_content={HomePageData?.GesundheitSection?.description}
        section_image={HomePageData?.GesundheitSection?.image}
        section_sub_content={HomePageData?.GesundheitSection?.items}
        Small_image_show={true}
        show_section={HomePageData?.GesundheitSection?.show_section}
      />

      <CTA_component
        title={HomePageData?.CTASection?.title}
        description={HomePageData?.CTASection?.content?.root?.children[0]?.children[0]?.text}
        BTN={HomePageData?.CTASection?.button}
        bg_img={HomePageData?.CTASection?.image && HomePageData?.CTASection?.image.url}
        show_section={HomePageData?.CTASection?.show_section}
      />

      <AboutLambsheim
        main_title={HomePageData?.MeinePraxis?.title}
        standorte_content={HomePageData?.MeinePraxis?.content?.root?.children
          ?.map((child) => child.children?.[0]?.text)
          .join('')}
        BTN={HomePageData?.MeinePraxis?.button}
        standorte_image={HomePageData?.MeinePraxis?.image.url}
        Small_image_show={true}
        show_section={HomePageData?.MeinePraxis?.show_section}
      />

      <Fermentum
        main_title={HomePageData?.Vorteilen_profitieren.title}
        all_vorteile={HomePageData?.Vorteilen_profitieren?.items}
        show_section={HomePageData?.Vorteilen_profitieren?.show_section}
      />

      <CTA_component
        title={HomePageData?.CTASection2?.title}
        description={HomePageData?.CTASection2?.content?.root?.children[0]?.children[0]?.text}
        BTN={HomePageData?.CTASection2?.button}
        bg_img={HomePageData?.CTASection2?.image && HomePageData?.CTASection2?.image.url}
        show_section={HomePageData?.CTASection2?.show_section}
      />

      <Serviceslider
        main_title={HomePageData?.Gesundheit_und_Schönheit.title}
        all_ablauf={HomePageData?.Gesundheit_und_Schönheit?.items}
        show_section={HomePageData?.Gesundheit_und_Schönheit?.show_section}
      />

      <ReviewDataComponent
        main_title={ReviewsDatas?.title}
        content={ReviewsDatas?.content?.root?.children[0]?.children[0].text}
        reviewlogos={ReviewsDatas?.Logos_items}
        slider={ReviewsDatas?.Review_items}
        Review_section={HomePageData.Review_section.show_section}
      />
    </>
  )
}

export default HomePage
