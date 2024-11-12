import React from 'react'
import FilterOrigin from './FilterOrigin'
import NavCategory from '@/components/NavCategory'
import Image from 'next/image'


type FiltersControlCategoryProps = {

  setFilterOrigin: (origin: string) => void
}
export default function FiltersControlCategory(props : FiltersControlCategoryProps) {
  const {setFilterOrigin} = props
  return (
    <div>
       <div className='hidden md:flex flex-col '>
      <FilterOrigin setFilterOrigin={setFilterOrigin}/>
    </div>
    <div className='mt-12 xl:w-[150px] hidden lg:w-[100px]'>
      <Image src="/cocobanner.jpg" width={100} height={100}  alt="logo" className='w-full' />
      </div>
    <div className='flex gap-4 items-center md:hidden'>
      <NavCategory setFilterOrigin={setFilterOrigin}/>
    </div>
    </div>
   
  )
}
