import CardProduct from './CardProduct'
import { useContext } from 'react';
import { GuitarContext } from '../context/GuitarContext';

export default function Products() {
  const { products, loading, page, updatePage } = useContext(GuitarContext)

  const goBack = () => {
    if (page == 1) {
      updatePage(1)
    } else {
      updatePage(page-1)
    }
  }

  const goForward = () => {
    if (products.length) {
      updatePage(page+1)
    } else {
      updatePage(1)
    }
  }

  return (
    <>
      <section className='w-full sm:w-10/12 xl:w-4/5 2xl:w-3/4 flex justify-center flex-wrap pt-10 pb-10 gap-8'>
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
      <section className='flex justify-between items-center w-[100px] pb-10'>
        <button className='bg-light-green rounded-md px-3 py-1' onClick={goBack}>{'<'}</button>
        <p className='text-sm font-semibold'>{page}</p>
        <button className='bg-light-green rounded-md px-3 py-1' onClick={goForward}>{'>'}</button>
      </section>
    </>
  )
}
