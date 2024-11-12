import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
   
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import Link from 'next/link'
  
const MenuListMobile = () => {
  return (
    <Sheet>
  <SheetTrigger><Menu className="h-6 w-6" /></SheetTrigger>
  <SheetContent>
    
      <SheetDescription className='flex flex-col gap-4 text-sm'>
       <Link href="/nosotros">Nosotros</Link>
       <Link href="/contacto">Contacto</Link>
       <Link href="/productos">Productos</Link>
       <Link href="/sucursales">Personaliza tu coco</Link>
      </SheetDescription>
    
  </SheetContent>
</Sheet>

  )
}

export default MenuListMobile
