"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Chewy } from 'next/font/google'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


const chewy = Chewy({
    weight: '400',
    subsets: ['latin'],
  });

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Coco Rey",
    href: "/CocoRey",
    description:
      "lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, ex.",
  },
  {
    title: "Fruterin",
    href: "/Fruterin",
    description:
      "lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, ex.",
  },
  {
    title: "Pipa Rica",
    href: "/PipaRica",
    description:
      "lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, ex.",
  },
  
]

/******  a3bbe16e-fff6-42f7-94a9-d0de8e736f7e  *******/
const MenuList =()=> {
  return (
    <NavigationMenu>
        <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={`${chewy.className} text-2xl`}>Sobre Nosotros</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    
                    <div className="mb-2 mt-4 text-lg font-medium">
                    Agroindustria Independiente del valle E.I.R.L
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                    dedica a la producción y comercialización de productos agrícolas de calidad, combinando prácticas sostenibles con innovación para ofrecer alimentos frescos y apoyar el desarrollo local.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/nosotros" title="Vision">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/nosotros" title="Mision">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/contacto" title="Contacto">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        {/* ----- ESTO DE PRODUCTOS------ */}

        <NavigationMenuItem>
          <NavigationMenuTrigger className={`${chewy.className} text-2xl`}>Productos</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px]  lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
         
         {/* ----- ESTO DE Venta x mayor------ */}
         <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref >
            <NavigationMenuLink className={navigationMenuTriggerStyle()} >
             <p className={`${chewy.className} text-2xl`}>Venta x Mayor</p>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
export default MenuList