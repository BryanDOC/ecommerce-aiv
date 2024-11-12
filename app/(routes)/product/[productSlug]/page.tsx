"use client"
import useGetProductBySlug from '@/api/useGetProductBySlug';
import React from 'react'
import { ResponseType } from '@/types/response';
import { useParams } from 'next/navigation';
export default function Page() {

  const params = useParams();
  const {productSlug} = params

  const {result, error, loading}: ResponseType = useGetProductBySlug(productSlug)
  console.log(result,error,loading)
  return (
    <div>
      
    </div>
  )
}
