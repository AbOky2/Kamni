import React from 'react'
import Pulse from 'react-reveal/Pulse';
import Image from 'next/image'

function Accueil() {
  return (
    <div className='bg-gradient-to-r from-cyan-500 to-blue-500 w-full h-full  relative'>
             

       <Pulse>
        <div className='absolute text-white text-center text-[30px] justify-center flex items-center top-1/6 p-4'>
            Bienvenue à ZIOS Aero
        
        </div>
        </Pulse>
         {/* <Image src='/av2.png' width={600} height={800}/> */}

    </div>
  )
}

export default Accueil