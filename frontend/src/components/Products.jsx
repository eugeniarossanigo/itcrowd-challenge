import CardProduct from './CardProduct'
import { useState, useEffect } from 'react';
import apiURL from '../../api';

export default function Products() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch(apiURL+ 'guitars')
      .then(res => res.json())
      .then(data => {
        setProducts(data.response)
      })
  }, []);

  return (
    <section className='w-full sm:w-10/12 xl:w-4/5 2xl:w-3/4 flex justify-center flex-wrap pt-10 pb-16 gap-8'>
      { products?.map(product => <CardProduct key={product.id_guitar} product={product} />) }
    </section>
  )
}
