import { useState, useEffect } from 'react'

export function useGetCategories() {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories?populate=*`

    const [result, setResult] = useState(null)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(url)
                const data = await response.json()
                setResult(data.data)
                setLoading(false)
            } catch (error: any) {
                setError(error)
                setLoading(false)
            } 
        })()
    }, [url])

    return { result, error, loading }
}