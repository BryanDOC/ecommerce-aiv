/* eslint-disable @next/next/no-img-element */
"use client"
import { useGetCategories } from '@/api/getProducts'
import React from 'react'
import { ResponseType } from '@/types/response'   
import { CategoryType } from '@/types/category'
import Link from 'next/link'
import { Chewy } from 'next/font/google'

const chewy = Chewy({
    weight: '400',
    subsets: ['latin'],
  });
const ChooseCategory = () => {
    const {result, loading}: ResponseType = useGetCategories()
   
  return (
    <div className='xl:max-w-6xl lg:max-w-4xl md:max-w-2xl py-4 mx-auto mb-12 max-w-sm mt-8'>
      <h3 className={`px-6 pb-4 text-3xl sm:pb-8 text-center mb-8 md:text-5xl ${chewy.className}`}>Elige tu categoria favorita</h3>
      <div className='grid sm:grid-cols-3 xl:gap-5 place-items-center gap-5'>
        {!loading && result !== undefined && (
            result.map((category: CategoryType) => (
                <Link key={category.id} href={`/category/${category.slug}`}
                className=''
                >
                    <div className=' xl:w-[300px] xl:h-[200px] lg:w-[250px] lg:h-[150px] md:h-[140px] md:w-[210px]
                    h-[200px] w-[300px]
                    border border-gray-200 overflow-hidden rounded-xl shadow-md bg-[#f7f7f7]'>
                        <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${category.mainImage.url}`} alt={category.categoryName} 
                    className=' transition duration-300 ease-in-out hover:scale-105 object-cover w-full h-full p-4' />
                    </div>
                    
                </Link>
            ))
        )}
      </div>
    </div>
  )
}

export default ChooseCategory
