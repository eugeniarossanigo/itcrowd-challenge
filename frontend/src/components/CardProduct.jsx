import { Link as LinkRouter } from 'react-router-dom'

export default function CardProduct({ product }) {
  return (
    <LinkRouter to={`/products/${product?.id_guitar}`} className='w-[14rem] flex flex-col shadow-lg rounded-sm hover:shadow-2xl'>
      <img className='pt-4' src={product?.image2} alt='guitar'/>
      <div className='h-[10rem] flex flex-col justify-evenly px-4'>
        <h3 className='text-[.8rem]'>{product?.name}</h3>
        <div className='w-full flex justify-between items-center'>
          <p className='text-[.6rem]'>USD <span className='text-sm font-bold'>{product?.price}</span></p>
          <p className='bg-light-gray text-[.6rem] py-1 px-2 rounded-sm hover:opacity-90'>See more</p>
        </div>
      </div>
    </LinkRouter>
  )
}