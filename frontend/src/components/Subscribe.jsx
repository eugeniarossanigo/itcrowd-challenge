export default function Subscribe() {
  return (
    <section className='w-full min-h-[10vh] bg-jasmine text-sm flex justify-evenly items-center flex-col lg:flex-row gap-3 py-3 px-8'>
      <h2>Be the first to know about exclusive offers and more.</h2>
      <form className='flex flex-col gap-4 items-center sm:flex-row'>
        <label className='text-sm'>Name
          <input type='search' className='input-search w-[150px] text-xs bg-light-gray shadow-lg rounded-md focus:outline-none focus:bg-white p-1 ml-2' placeholder=''/>
        </label>
        <label className='text-sm'>Email
          <input type='search' className='input-search w-[150px] text-xs bg-light-gray shadow-lg rounded-md focus:outline-none focus:bg-white p-1 ml-2' placeholder=''/>
        </label>
        <button type='submit' className='bg-white py-1 px-4 rounded-md'>Subscribe</button>
      </form>
    </section>
  )
}
