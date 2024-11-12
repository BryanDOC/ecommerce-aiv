/* eslint-disable @next/next/no-img-element */
import React from 'react'

import { ZoomIn } from 'lucide-react'
import { Button } from './ui/button'
import Link from 'next/link'
const CardProducts = ( {productName, images, price, discount, slug}: {productName: string, slug: string, images: [{
  id:number;
  name:string;
  url:string;
}], price: number, discount: number | null }) => {
  return (
    
    <div className='rounded-xl bg-white md:p-4 p-2 shadow-lg h-full md:w-[250px] w-[180px] border border-zinc-200 flex flex-col items-center hover:scale-105'>
      <div className='relative w-full md:h-[200px] h-[150px] rounded-[8px] overflow-hidden flex '>
       <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${images?.[0]?.url}`}  alt="" className='w-full h-full object-cover ' />
      
        <ZoomIn className='absolute top-2 right-2 bg-white p-1 rounded-full size-6' />
        {discount && (
          <p className='bg-red-600 text-white w-fit px-4 py-1 rounded-xl text-xs absolute top-2 -left-2'>-{discount}%</p>
        )}
        
      </div>

      <div className='mb-3 flex flex-col gap-2 w-full'>
        <Link href={`/product/${slug}`} className='text-center font-bold mt-4 md:h-[50px] h-[35px]  text-sm md:text-base items-center flex justify-center '>{productName}</Link>
        
      <div className='flex md:flex-col flex-row-reverse items-end gap-2 md:gap-0 md:h-[62px]  justify-end md:items-start'>
        {discount && ( 
           <p className='line-through font-extralight text-md '>S/{price}</p >
        )}
  
    
    <p className='font-bold md:text-3xl text-2xl'>S/{price - (price * (discount ?? 0) / 100)}</p>
    
              </div>

      </div>
      
      <Button className='rounded-xl bg-[#2E7A7A]  text-md px-6 w-full  hover:bg-[#71ABA5]  lg:flex uppercase'>Comprar</Button>
    </div>
  )
}

export default CardProducts
