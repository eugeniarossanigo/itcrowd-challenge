import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import apiURL from '../../api'

export default function Detail() {
  const { id } = useParams()
  const [ item, setItem ] = useState({})

  useEffect(() => {
    fetch(apiURL+ 'guitars/' + id)
      .then(res => res.json())
      .then(data => setItem(data.response))
  }, []);
  
  return (
    <section className='w-full h-full lg:w-5/6 lg:h-[38rem] 2xl:w-4/6 flex flex-col lg:flex-row shadow-lg rounded-lg py-6'>
      <div className='w-full lg:w-3/5 flex justify-center'>
        <img className='h-full object-cover p-6' src={item?.image} alt='guitar'/>
      </div>
      <div className='lg:w-2/5 border-l border-light-gray flex flex-col px-6 py-4 gap-3'>
        <h2 className='text-sm font-semibold'>{item?.brand ? item?.brand : 'BRAND'} <span className='font-normal'> / {item?.model}</span></h2>
        <h2 className='text-xl'>{item?.name}</h2>
        <p className='text-sm'>USD <span className='text-lg font-bold'>{item?.price}</span></p>
        <div className='text-[0.8rem]'>
          <p>{item?.description}</p>
        </div>
      </div>
    </section>
  )
}
