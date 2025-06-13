// app/Header/page.js
import Header from '../component/Header'
const Page = async () => {
  let menuData
  let headerDatas
  try {
    const res = await fetch(
      `${process.env.NEXT_BASE_URL}/my-route?type=menus`,
    )
    menuData = await res.json()
  } catch (error) {
    console.error('Error loading menu data:', error)
    return <div>Error loading data.</div>
  }
  try {
    const res = await fetch(`${process.env.NEXT_BASE_URL}/my-route?type=header`)
    headerDatas = await res.json()
  } catch (error) {
    console.error('Error loading menu data:', error)
    return <div>Error loading data.</div>
  }

  return (
    <>
      <Header menuData={menuData} headerDatas={headerDatas.Header} />
    </>
  )
}

export default Page
