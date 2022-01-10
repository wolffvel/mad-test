/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react'
import axios from 'axios'

function useFetch<T>(url: string, params: any = {}) {
  const [response, setResponse] = useState<null | T>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get<T>(url, { params })
        setResponse(response.data)
        setIsLoading(false)
      } catch (e) {
        let errorMessage = ''
        if (e instanceof Error) {
          errorMessage = e.message
          setError(errorMessage)
        }
        setIsLoading(false)
      }
    }
    fetch()
  }, [])

  return { isLoading, response, error }
}

export default useFetch
