"use client"
import { useGetFeatureProducts } from '@/api/useGetFeatureProducts'
import React from 'react'
import {ResponseType} from '@/types/response'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'
import SkeletonSchema from './SkeletonSchema'
import { ProductType } from '@/types/product'
import CardProducts from './CardProducts'
import Autoplay from 'embla-carousel-autoplay'
import { Chewy } from 'next/font/google'

const chewy = Chewy({
    weight: '400',
    subsets: ['latin'],
  });

const FeaturedProducts = () => {

  const {result, loading}: ResponseType = useGetFeatureProducts()
 
  return (
    <div className='max-w-6xl py-4 mx-auto -mt-[80px] md:-mt-[100px]  sm:py-16 sm:px-24 lg:-mt-[140px]'>
      <h2 className={`px-6 text-3xl md:text-5xl font-bold text-center ${chewy.className}`}>Productos Destacados</h2>
      <Carousel plugins={[
        Autoplay({delay: 2500})
      ]} className=' py-4'>
        <CarouselContent className='py-4 -ml-2 md:-ml-4'>
          {loading &&(
            <SkeletonSchema grid={3}/>
          )}
          {
            result !== null && (
              result.map((product: ProductType) => {
                const {id, productName, images, discount,price, slug} = product
                
                
                return (
                  <CarouselItem key={id} className='xl:basis-1/4 flex lg:basis-1/3 md:basis-1/2 group items-center justify-center'>
                    <CardProducts productName={productName} images={images} price={price} discount={discount} slug={slug}/>
                  </CarouselItem>
                )
            })
            )
          }
          
          </CarouselContent>
        </Carousel>
    </div>
  )
}

export default FeaturedProducts
