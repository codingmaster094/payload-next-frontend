import React from 'react'
import Footer from '../component/Footer'
import AllpageFechData from "../until/AllpageFechData";
const Page = async () => {
  let FooterData = null
  let menuData = null

  try {
    FooterData = await AllpageFechData(`/my-route?type=footer`)
    } catch (error) {
      console.error('Error fetching data:', error)
      return <div>Error loading data.</div>
    }
  
    try {
      menuData = await AllpageFechData('/my-route?type=menus')
     } catch (error) {
       console.error('Error fetching data:', error)
       return <div>Error loading data.</div>
     }
  
     if (!FooterData || !menuData) {
       return <div>No data available.</div>
     }

  return <Footer FooterData={FooterData} menuData={menuData} />
}

export default Page
