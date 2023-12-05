import { useRef, useState } from 'react'

export default function Subscribe() {
  const inputs = useRef(null)
  const [textSubs, setTextSubs] = useState('Subscribe')

  const handleSubscribe = (e) => {
    e.preventDefault()
    const formData = new FormData(inputs.current)
    const data = Object.fromEntries(formData)
    if (data.name !== '' && data.email !== '') {
      setTextSubs('Thanks!')
      inputs.current.reset()
    }
  }

  return (
    <section className='w-full min-h-[10vh] bg-jasmine text-sm flex justify-evenly items-center flex-col lg:flex-row gap-3 py-3 px-8'>
      <h2>Be the first to know about exclusive offers and more.</h2>
      <form onSubmit={handleSubscribe} className='flex flex-col gap-4 items-center sm:flex-row' ref={inputs}>
        <label className='text-sm'>Name
          <input type='text' name='name' className='input-text w-[150px] text-xs bg-light-gray shadow-lg rounded-md focus:outline-none focus:bg-white p-1 ml-2' placeholder=''/>
        </label>
        <label className='text-sm'>Email
          <input type='text' name='email' className='input-text w-[150px] text-xs bg-light-gray shadow-lg rounded-md focus:outline-none focus:bg-white p-1 ml-2' placeholder=''/>
        </label>
        <button type='submit' className='bg-white py-1 px-4 rounded-md'>{textSubs}</button>
      </form>
    </section>
  )
}
