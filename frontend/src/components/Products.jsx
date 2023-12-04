import CardProduct from './CardProduct'
import { useContext } from 'react';
import { GuitarContext } from '../context/GuitarContext';

export default function Products() {
  const { products, loading } = useContext(GuitarContext)

  return (
      <section className='w-full sm:w-10/12 xl:w-4/5 2xl:w-3/4 flex justify-center flex-wrap pt-10 pb-16 gap-8'>
        { loading ?
          <p>Loading products...</p>
          :
          <>
            { products && products.length === 0 ?
             <p>No products match with your search...</p>
             :
             <>
             { products?.map(product => <CardProduct key={product.id_guitar} product={product} />) }
             </>
            }
          </>
        }
      </section>
  )
}
