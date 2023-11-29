export default function Subscribe() {
  return (
    <section className='w-full h-[10vh] bg-jasmine text-sm flex justify-evenly items-center'>
      <h2>Be the first to know about exclusive offers and more.</h2>
      <form className='flex gap-6 items-center'>
        <label className='text-sm'>Name
          <input type='search' className='input-search w-[150px] text-xs bg-light-gray shadow-lg rounded-md focus:outline-none focus:bg-white p-2 ml-2' placeholder=''/>
        </label>
        <label className='text-sm'>Email
          <input type='search' className='input-search w-[150px] text-xs bg-light-gray shadow-lg rounded-md focus:outline-none focus:bg-white p-2 ml-2' placeholder=''/>
        </label>
        <button type='submit' className='bg-white py-2 px-4 rounded-md'>Subscribe</button>
      </form>
    </section>
  )
}
