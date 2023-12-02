import CardProduct from './CardProduct'
import { useContext } from 'react';
import { GuitarContext } from '../context/GuitarContext';

export default function Products() {
  const { products } = useContext(GuitarContext)

  return (
      <section className='w-full sm:w-10/12 xl:w-4/5 2xl:w-3/4 flex justify-center flex-wrap pt-10 pb-16 gap-8'>
        { products?.map(product => <CardProduct key={product.id_guitar} product={product} />) }
      </section>
  )
}
