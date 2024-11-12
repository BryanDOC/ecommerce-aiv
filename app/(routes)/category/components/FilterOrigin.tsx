import useGetProductField from '@/api/getProductField'
import React from 'react'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { FilterTypes } from '@/types/filters'
import { Chewy } from 'next/font/google'


const chewy = Chewy({
    weight: '400',
    subsets: ['latin'],
  });
type FiltersOriginProps = {
  setFilterOrigin: (origin: string) => void
}
export default function FilterOrigin(props: FiltersOriginProps) {

  const {result,loading}: FilterTypes = useGetProductField()
  const {setFilterOrigin} = props

  return (
    <div>
      <p className={`${chewy.className} text-3xl mb-6`}>Categorias</p>
      {loading && result ==null && (
        <p>Cargando...</p>
      )}
      <RadioGroup onValueChange={(value => setFilterOrigin(value))}>
        {result != null && result.schema.attributes.origin.enum.map((origin: string) => {
          return(
          <div key={origin} className='flex items-center space-x-2  '>
            <RadioGroupItem value={origin} id={origin} />
            <Label htmlFor={origin} className='capitalize'>{origin.split("-").join(" ")}</Label>
          </div>
        )})}
        </RadioGroup>
    </div>
  )
}
