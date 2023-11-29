import CardProduct from './CardProduct'
import { useState, useEffect } from 'react';

export default function Products() {
  const [products, setProducts] = useState()

  useEffect(() => {
    fetch('./src/mocks/data.json')
      .then(res => res.json())
      .then(data => setProducts(data.products))
  }, []);

  return (
    <section className='w-full sm:w-10/12 xl:w-4/5 2xl:w-3/4 flex justify-center flex-wrap py-20 gap-8'>
      { products?.map(product => <CardProduct key={product.id} product={product} />) }
    </section>
  )
}
