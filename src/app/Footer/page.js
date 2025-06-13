import React from 'react'
import Footer from '../component/Footer'

const Page = async () => {
  let FooterData = null
  let menuData = null

  try {
    const res = await fetch(`${process.env.NEXT_BASE_URL}/my-route?type=footer`)
    FooterData = await res.json()
  } catch (error) {
    console.error('Error fetching header data:', error)
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_BASE_URL}/my-route?type=menus`,
    )
    menuData = await res.json()
  } catch (error) {
    console.error('Error fetching menu data:', error)
  }

  return <Footer FooterData={FooterData} menuData={menuData} />
}

export default Page
