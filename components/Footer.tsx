import React from 'react'
import Image from 'next/image'
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

import { Chewy } from 'next/font/google'

const chewy = Chewy({
  weight: '400',
  subsets: ['latin'],
});


const Footer = () => {
  return (
    <footer className='bg-[#2E7A7A] text-white'>
      <div className='flex flex-col items-center gap-5 2xl:flex-row px-2 py-6 lg:px-8'>
    
      {/* ----- LOGO------ */}
      <div className='xs:flex xs:flex-col gap-10 xl:grid xl:grid-cols-2 place-items-center '>
      <div className='flex justify-center flex-col items-center gap-4 '>
        <Image src="/icon.png" width={100} height={100} alt="logo" />
        <h2 className='text-2xl text-center'>Agroindustria Independiente del valle E.I.R.L</h2>
        </div>
        <div>

        <p className='text-sm text-center mt-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur provident harum fuga ab repellendus ut commodi blanditiis omnis! Accusamus fuga dignissimos laborum quasi facilis nesciunt, accusantium exercitationem. Maiores, qui accusamus?</p>
      </div>
      
      </div>
      
       {/* ----- CONTACTO------ */}
      <div className='grid grid-cols-1 md:grid-cols-2 w-full place-items-center gap-8 py-4'>
        <div className=''>
         <h2 className={`${chewy.className} text-3xl text-center mb-4`}>Contacto</h2>
        <div className='flex flex-col gap-4'>

        
          <div className='flex items-center gap-2'>
            <div className='p-2 bg-white rounded-full'>
            <FaWhatsapp className='text-[#2E7A7A] text-xl '/>
            </div>
                  <p>+51 943-206-284</p>
          </div>
          
      
        <div className='flex items-center gap-2'>
          <div className='p-2 bg-white rounded-full'>
          <MdOutlineMailOutline className='text-[#2E7A7A] text-xl '/>
          </div>
          <p>infor@agroindevalle.com</p>
        </div> 
        </div>
        </div>
        
        <div className=''>
        <h2 className={`${chewy.className} text-3xl text-center mb-4`}>Siguenos</h2>
        <div className='flex gap-4 items-center justify-center'>

        
        <FaFacebookF  className='text-[#2E7A7A] bg-white text-5xl p-2 rounded-full'/>
        <FaInstagram  className='text-[#2E7A7A] bg-white text-5xl p-2 rounded-full'/>
        <FaTiktok   className='text-[#2E7A7A] bg-white text-5xl p-2 rounded-full'/>
        </div>
      </div>
      </div>
     
    </div>
    <div className='bg-[#71ABA5] text-white flex xl:px-16 py-2 items-center justify-between lg:px-8 md:px-4 xl:text-base lg:text-sm md:text-[10px]  flex-col md:flex-row gap-2 mt-4'>
<p>© agroindustria Independiente del Valle | 2024</p>
<p>Políticas de cookies</p>
<p>Términos y condiciones</p>
<p>Proceso de compra</p>
<p>Libro de reclamaciones</p>
    </div>
   </footer>
  )
}

export default Footer
