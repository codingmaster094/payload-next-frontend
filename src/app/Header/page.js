// app/Header/page.js
import Header from '../component/Header'
import AllpageFechData from '../until/AllpageFechData'
const Page = async () => {
  let menuData
  let headerDatas
  try {
    headerDatas = await AllpageFechData(`/my-route?type=header`)
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
  
     if (!headerDatas || !menuData) {
       return <div>No data available.</div>
     }


  return (
    <>
      <Header menuData={menuData} headerDatas={headerDatas} />
    </>
  )
}

export default Page
