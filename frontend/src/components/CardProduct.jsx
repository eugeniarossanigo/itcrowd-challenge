import { Link as LinkRouter } from 'react-router-dom'
import { FaTimes, FaHeart, FaRegHeart } from 'react-icons/fa'

export default function CardProduct({ product }) {
  return (
    <LinkRouter to={`/products/${product.id}`} className='w-[14rem] flex flex-col shadow-lg rounded-lg'>
      <div className='flex justify-between p-2'>
        <FaTimes className='text-red hover:scale-105' />
        <FaRegHeart className='text-moss-green hover:scale-105' />
        {/* <FaTimes onClick={() => handleDelete(product.id)}/> */}
      </div>
      <img className='pt-4' src={product.image} alt='guitar'/>
      <div className='h-[10rem] flex flex-col justify-evenly px-4'>
        <h3 className='text-[.8rem]'>{product.name}</h3>
        <div className='w-full flex justify-between items-center'>
          <p className='text-[.6rem]'>USD <span className='text-sm font-bold'>{product.price}</span></p>
          {/* <LinkRouter to={`/products/${product.id}`} className='text-xs'>See more</LinkRouter> */}
          <p className='bg-light-gray text-[.6rem] py-1 px-2 rounded-sm'>See more</p>
        </div>
      </div>
    </LinkRouter>
  )
}