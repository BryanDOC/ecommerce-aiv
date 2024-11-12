import React from 'react'
import Image from 'next/image'
import MenuList from './MenuList'
import { Button } from './ui/button'
import MenuListMobile from './MenuListMobile'
import Link from 'next/link'


const Navbarpage = () => {
  return (
    <div className='flex items-center justify-between lg:mx-16 lg:my-6 mx-6 my-4'>
      <Link href="/">
      <Image src="/favicon.png" width={100} height={100}  alt="logo" className='w-[40px] xl:w-[80px]'/>
    </Link>
      
      <div className='lg:flex hidden'>
 <MenuList />
      </div>
      <div className='lg:hidden flex'>
 <MenuListMobile />
      </div>
     
    
        <Button className='rounded-xl bg-[#2E7A7A] font-chewy text-lg  hover:bg-[#71ABA5] hidden lg:flex '>Personaliza tu coco</Button>
     
     
      
    </div>
  )
}

export default Navbarpage
