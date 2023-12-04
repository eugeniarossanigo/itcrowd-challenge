import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getOneGuitar } from '../services/apiQueries'

export default function Detail() {
  const { id } = useParams()
  const [ item, setItem ] = useState({})

  useEffect(() => {
    getOneGuitar(id)
      .then(res => setItem(res))
      .catch(err => console.log(err))
  }, []);
  console.log(item)
  return (
    <section className='w-full h-full lg:w-5/6 lg:h-[38rem] 2xl:w-4/6 flex flex-col lg:flex-row shadow-lg rounded-lg py-6'>
      <div className='w-full lg:w-3/5 flex justify-center'>
        <img className='h-full object-cover p-6' src={item?.image1} alt='guitar'/>
      </div>
      <div className='lg:w-2/5 border-l border-light-gray flex flex-col px-6 py-4 gap-3'>
        <div className='flex items-center gap-2'>
          <img className='w-8 h-8' src={item?.brand?.logo} alt='logo' />
          <h2 className='text-sm font-semibold'>{item?.brand?.name} <span className='font-normal'> / {item?.model}</span></h2>
        </div>
        <h2 className='text-xl'>{item?.name}</h2>
        <p className='text-sm'>USD <span className='text-lg font-bold'>{item?.price}</span></p>
        <ul className='text-[0.8rem] flex flex-col gap-1'>
          {/* <p>{item?.description}</p> */}
          {item?.description?.split('|').map((element, i) => (
            <li key={i}>
                <span className='font-semibold'>{element.split(':')[0]}:</span>
                {element.split(':')[1]}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
