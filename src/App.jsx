import { motion } from 'framer-motion'
import React ,{useState} from 'react'

const App = () => {
  const [moving, setmoving] = useState(false)
  return (
  
    <div className='overflow-hidden relative w-full h-screen bg-zinc-900 text-white font-["Verdana, Geneva, Tahoma, sans-serif"]'>
      <nav className='w-full py-5 px-20 flex items-center justify-between'>
        <motion.h3 
        initial={{opacity:0 , x: 10}}
        animate={{opacity :1, x: 0}} 
        transition={{ease :[0.76, 0, 0.24, 1] ,duration:2}} 
        className='font-semibold'>
          Some Brand
        </motion.h3>
        <div className='links flex gap-10 text-sm items-center'>
          {["Home" , "About" , "Contact" ,"Pricing"].map((item , index) => (
          <motion.a
          initial={{opacity :0}}
          animate={{opacity : 1}}
          transition={{ease : [0.76, 0, 0.24, 1] ,duration :2}}
          key={index} 
          href="#"
          >
            {item}
          </motion.a>
          ))}
          <motion.button 
          initial={{opacity :0}}
          animate={{opacity : 1}}
          transition={{ease : [0.76, 0, 0.24, 1] ,duration :2}}
          onClick={()=>setmoving(!moving)}
          className='px-5 py-2 rounded-lg capitalize text-xs  bg-zinc-700'
           > open nav
           </motion.button>
        </div>
      </nav>
      <motion.aside 
      initial ={{x:"100%"}}
      animate ={moving?{x:0} : {x:"100%"}}
      className=' w-96 h-screen bg-zinc-800 absolute right-0 top-0 px-10 py-32'>
        <button>close</button>
        {["Home" , "About" , "Contact" , "Pricing"].map((item,index) =>(
        <motion.a key={index} className='block text-5xl mt-8 font-semibold'>{item}</motion.a>))}
      </motion.aside>
    </div>
    
  )
}

export default App
