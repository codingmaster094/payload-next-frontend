export default async function AllpageFechData(params) {

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL || 'https://payload-backend-nu.vercel.app/'}${params}`,
        {
          next: { revalidate: 30 },
        },
      )
      if (!response) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error in Alldata:", error);
      throw error; // Rethrow the error to be caught in the calling component
    }
  }
  