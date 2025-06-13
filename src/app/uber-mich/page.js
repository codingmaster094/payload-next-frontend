import BannerCarousel from './../component/Banner'
import CompanyLogo from './../component/CompanyLogo'
import UberAboutDeatils from './../component/UberAboutDeatils'
import Counter from './../component/Counter'
import UberAboutDeatilsleft from './../component/UberAboutDeatilsleft'
import CTA_component from './../component/CTA_component'
import ReviewDataComponent from '../component/ReviewDataComponent'
import AllpageFechData from '../until/AllpageFechData'
const page = async () => {
  let UbermichData
  
  try {
    UbermichData = await AllpageFechData(`/my-route?type=global&slug=uber-mich`)
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

  if (!UbermichData || !ReviewsDatas) {
    return <div>No data available.</div>
  }

  return (
    <>
      <BannerCarousel
        title={UbermichData?.hero?.title}
        img={UbermichData?.hero?.image}
        content={UbermichData?.hero?.content}
        BTN={UbermichData?.hero?.button}
        show_section={UbermichData?.hero?.show_section}
      />
      <CompanyLogo
        Logos_Image={UbermichData?.companyLogo?.items}
        show_section={UbermichData?.companyLogo?.show_section}
      />
      <UberAboutDeatils
        main_title={UbermichData?.Erfahrung_und_Kompetenz?.title}
        content={UbermichData?.Erfahrung_und_Kompetenz?.content?.root?.children}
        image={UbermichData?.Erfahrung_und_Kompetenz?.image?.url}
        show_section={UbermichData?.Erfahrung_und_Kompetenz?.show_section}
        Small_image_show={UbermichData?.Erfahrung_und_Kompetenz?.Small_image}
      />
      <Counter
        main_title={UbermichData?.Counter?.title}
        all_leistungen={UbermichData?.Counter?.items}
        show_section={UbermichData?.Counter?.show_section}
      />
      <UberAboutDeatilsleft
        main_title={UbermichData?.Fort_und_Weiterbildungen?.title}
        sub_content={UbermichData?.Fort_und_Weiterbildungen?.content?.root?.children[0]?.children}
        image={UbermichData?.Fort_und_Weiterbildungen?.image?.url}
        show_section={UbermichData?.Fort_und_Weiterbildungen?.show_section}
        Small_image_show={UbermichData?.Fort_und_Weiterbildungen?.Small_image}
      />
      <CTA_component
        // title={UbermichData?.CTASection?.title}
        // description={UbermichData?.CTASection?.content?.root?.children[0]?.children[0]?.text}
        // BTN={UbermichData?.CTASection?.button}
        bg_img={UbermichData?.CTASection.image && UbermichData?.CTASection.image.url}
        show_section={UbermichData?.CTASection?.show_section}
      />
      <ReviewDataComponent
        main_title={ReviewsDatas?.title}
        content={ReviewsDatas?.content?.root?.children[0]?.children[0].text}
        reviewlogos={ReviewsDatas?.Logos_items}
        slider={ReviewsDatas?.Review_items}
        Review_section={UbermichData?.Review_section?.show_section}
      />
    </>
  )
}

export default page
