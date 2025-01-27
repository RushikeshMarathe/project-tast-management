import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='flex flex-col gap-16 w-full h-screen items-center justify-center border border-double border-red-400 border-t-8 border-l-8 border-b-0 border-r-0'>
    
    {/* Authentication Dashboard */}
    <div className='text-red-400 text-6xl font-bold  '>
    <h1 className='text-center border-double border-b-8 border-r-8 border-t-0 border-l-0 p-7 '>Project Tracking Application</h1>
    </div>

    <div className='flex justify-center gap-12'>
      <button className='px-10 py-3 border border-rose-700 hover:text-xl hover:border-white bg-pink-900 rounded-2xl text-white transition-all'>Sign Up</button>
      <button className='px-10 py-3 border border-rose-700 hover:text-xl hover:border-white bg-pink-900 rounded-2xl text-white transition-all'>Log In</button>

    </div>
    
   </div>
  )
}

export default App
