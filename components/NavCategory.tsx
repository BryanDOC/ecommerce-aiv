import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
 
  SheetTrigger,
} from "@/components/ui/sheet"


import { Menu } from 'lucide-react'
import { Chewy } from 'next/font/google'

import FilterOrigin from '@/app/(routes)/category/components/FilterOrigin'

const chewy = Chewy({
    weight: '400',
    subsets: ['latin'],
  });

  type FiltersOriginProps = {
    setFilterOrigin: (origin: string) => void
  }

export default function NavCategory(props: FiltersOriginProps) {

  const {setFilterOrigin} = props
  return (
    <Sheet>
  <SheetTrigger className={`${chewy.className} text-xl flex gap-4 items-center` }><Menu className="h-6 w-6" /> Categorias</SheetTrigger>
  <SheetContent side={"left"}>
    
      <SheetDescription className='flex flex-col gap-4 text-sm py-12'>
        <hr />
        <FilterOrigin setFilterOrigin={setFilterOrigin}/>
        
      </SheetDescription>
    
  </SheetContent>
</Sheet>
  )
}
