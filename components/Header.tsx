import React from 'react'
import { Chewy } from 'next/font/google'

const chewy = Chewy({
    weight: '400',
    subsets: ['latin'],
  });

const Header = ({title,description}:{title:string | string[],description:string}) => {
  return (
    
      <div className='flex flex-col items-center clip-custom bg-[#D9D9D9] h-[400px]'>
      <h2 className={`${chewy.className} text-7xl mt-[70px] capitalize`}>{title}</h2>
      <p className={`${chewy.className} text-xl`}>{description}</p>
    </div> 
  )
}

export default Header
