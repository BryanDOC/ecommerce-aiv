
import { useState, useEffect } from 'react'
import { ResultFilterTypes } from '@/types/filters'
export default function useGetProductsCategory(slug: string | string[]) {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?populate=*&filters[category][slug][$eq]=${slug}`

    const [result, setResult] = useState<ResultFilterTypes | null>(null)
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

    return { result, error, loading}
}
