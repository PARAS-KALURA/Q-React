

import React from 'react'

const App = () => {
  return (
    <>
     <div className="min-h-screen flex justify-center items-start pt-16 bg-gray-900 text-white">

    <div className=' px-3 py-3 rounded-sm 
    border-2 border-gray-500 w-full max-w-md '>
      <h1 className='text-2xl font-bold text-center ' >Quote Generator</h1>
     
     <div className='border-2 border-gray-500 px-3 py-7 rounded-sm mt-3 ' >
       <p  className="text-lg italic text-gray-200" >
        "Your limitation—it’s only your imagination."
       </p>
     </div>

     <button
     className='w-full mt-3 bg-indigo-600  hover:bg-indigo-500 transition rounded-sm  p-2 cursor font-bold cursor-pointer '
     >Search</button>

    </div>
    </div>
    </>
  )
}

export default App