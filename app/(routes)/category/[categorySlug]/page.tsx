"use client"

import { ResponseType } from '@/types/response'

import React, { useState } from 'react'
import { useParams} from 'next/navigation'
import Header from '@/components/Header'
import FiltersControlCategory from '../components/FiltersControlCategory'
import SkeletonSchema from '@/components/SkeletonSchema'
import CardProducts from '@/components/CardProducts'
import { ProductType } from '@/types/product'
import useGetProducts from '@/api/useGetProducts'
import useFormattedSlug from '@/app/hooks/useFormattedSlug'


export default function Page() {
  
  const {categorySlug} = useParams()
  //  const {result, error, loading}: ResponseType = useGetProductsCategory(categorySlug)
  const {result, loading} : ResponseType =  useGetProducts()
  const [filterOrigin,setFilterOrigin] = useState(categorySlug)
  
   
  
  //  const formatTitle = (slug: any)=>{
  //   return(
  //      slug.split("-").join(" ")
  //   )
   
  //  }
    
  //  const formattedTtle = formatTitle(categorySlug)

  const formattedCategory = useFormattedSlug(categorySlug)

   const filteredProducts = result != null && !loading && (
    filterOrigin ===""
    ? result
    : result.filter((product: ProductType) => product.origin === filterOrigin)
   )
   console.log(filteredProducts)
  return (
    <div>
      <Header title={formattedCategory} description="productos 100% peruanos" />
      <div className='max-w-7xl py-4 mx-auto sm:py-16 sm:px-8 -mt-[60px] md:-mt-[80px]  lg:-mt-[100px] '>
          <div className='sm:flex sm:justify-between px-4 gap-4 flex flex-col md:flex-row'>
            <FiltersControlCategory setFilterOrigin={setFilterOrigin}/>
            <div className=' grid grid-cols-2 gap-5 md:grid-cols-2 lg:grid-cols-3 md:gap-10 md:mt-14 '>
              {loading &&(<SkeletonSchema grid={3}/>)}
              {
                filteredProducts != null && !loading &&(
                  
                  filteredProducts.map((product : ProductType)=>{
                    const {id, productName, images, discount,price, slug} = product
                    return (
                      <CardProducts key={id} productName={productName} images={images} price={price} discount={discount} productSlug={slug}/>
                    )
                    
})
                  
                )
              }
            </div>
          </div>
          </div>

    </div>
  )
}
