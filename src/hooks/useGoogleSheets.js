import { useEffect, useState } from "react"

const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY,
      SHEET_ID = import.meta.env.VITE_GOOGLE_SHEET_ID

const TABLE_CONFIG = {
  orders: {
    range: (slug) => `${slug}!A2:M21`,
    errorMessage: "orders data"
  },
  testimonials: {
    range: (slug) => `${slug}!A24:E43`,
    errorMessage: "testimonials"
  }
}

const useGoogleSheets = (slug, table) => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const config = TABLE_CONFIG[table]
      if (!config) {
        console.error("Invalid table type specified. Available options:", Object.keys(TABLE_CONFIG))
        return
      }

      const range = config.range(slug)
      const cacheKey = `google-sheets-${slug}-${table}`
      const cachedData = sessionStorage.getItem(cacheKey)

      if (cachedData) {
        const { timestamp, data } = JSON.parse(cachedData)
        const isFresh = Date.now() - timestamp < 10 * 60 * 1000 // 10 minutes

        if (isFresh) {
          setData(data)
          return
        }
      }

      try {
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${range}?key=${API_KEY}`
        const response = await fetch(url)
        const { values } = await response.json()

        if (values) {
          sessionStorage.setItem(
            cacheKey,
            JSON.stringify({
              timestamp: Date.now(),
              data: values,
            })
          )
          setData(values)
        }
      } catch (error) {
        console.error(`Error fetching ${config.errorMessage}:`, error)
      }
    }

    fetchData()
  }, [slug, table])
  
  return data
}

export default useGoogleSheets