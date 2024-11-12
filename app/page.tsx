
import ChooseCategory from '@/components/ChooseCategory';
import FeaturedProducts from '@/components/FeaturedProducts';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div className=''>
      <Header title="Inicio" description="productos 100% peruanos" />
      <FeaturedProducts />
      <ChooseCategory />
    </div>
    
  );
}
