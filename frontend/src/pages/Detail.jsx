import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Detail() {
  const { id } = useParams()
  console.log(id)
  const [ item, setItem ] = useState({})

  useEffect(() => {
    fetch('../src/mocks/data.json')
      .then(res => res.json())
      .then(data => setItem(data.products.find(p => p.id == id)))
  }, []);
  
  return (
    <section className='w-full h-full lg:w-4/5 2xl:w-3/5 lg:h-[40rem] flex flex-col lg:flex-row shadow-lg rounded-lg'>
      <div className='w-full xl:w-3/5 flex justify-center'>
        <img className='h-full object-cover p-6' src={item?.image} alt='guitar'/>
      </div>
      <div className='xl:w-2/5 border-l border-light-gray flex flex-col px-6 py-4 gap-3'>
        <h2 className='text-sm font-semibold'>{item?.brand} <span className='font-normal'> / {item?.model}</span></h2>
        <h2 className='text-xl'>{item?.name}</h2>
        <p className='text-sm'>USD <span className='text-lg font-bold'>{item?.price}</span></p>
        <div className='text-xs flex flex-col gap-2'>
          {item?.description?.map((element, i) => (
            <>
              <h3 key={i} className='font-semibold'>{element.title}</h3>
              <ul>
                {element.lists.map((text, idx) => (
                  <li key={idx}>{text}</li>
                ))}
              </ul>
            </>
          ))}
        </div>
      </div>
    </section>
  )
}
