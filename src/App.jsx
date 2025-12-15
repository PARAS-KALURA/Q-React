

import React, { useState } from 'react'

const App = () => {

  const [quote, setQuote] = useState("");

  const quotes = [
     "Your limitation—it’s only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Success doesn’t just find you. You have to go out and get it.",
    "Dream it. Wish it. Do it.",
    "Great things never come from comfort zones."
  ]

  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }

  return (
    <>
      <div className="min-h-screen flex justify-center items-start pt-16 bg-gray-900 text-white">

        <div className=' px-3 py-3 rounded-sm 
    border-2 border-gray-500 w-full max-w-md '>
          <h1 className='text-2xl font-bold text-center ' >Quote Generator</h1>

          <div className='border-2 border-gray-500 px-3 py-7 rounded-sm mt-3 bg-gray-800 ' >
            <p className="text-lg italic text-gray-200 text-center">
              {quote || "Click the button to generate a quote"}
            </p>

          </div>

          <button
            onClick={generateQuote}
            className='w-full mt-3 bg-indigo-600  hover:bg-indigo-500 transition rounded-sm  p-2  font-bold cursor-pointer '
          >Search</button>

        </div>
      </div>
    </>
  )
}

export default App