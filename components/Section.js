import React from 'react'
import Image from 'next/image'
import Pulse from 'react-reveal/Pulse';
import  Fade from 'react-reveal/Fade';

function Section() {
  return (
    <div>

        {/* <h1 className='flex items-center justify-center text-center text-blue-900 font-[Open Sans] text-[60px] font-600 mt-16 mb-16'>A propos de nous</h1> */}

        <div className='flex justify-between mb-8 mt-8 sm:grid sm:grid-rows-1 bg-gradient-to-r from-cyan-500 to-blue-500 gap-4 p-4'>
        

           

        </div>






        <h1 className='flex items-center justify-center text-center text-blue-900 font-[Open Sans] text-[60px] font-600 mt-16 mb-16 p-4'>Quels sont nos offres</h1>


    <div className='flex justify-between mb-8 mt-8 iphone3:grid iphone3:grid-rows-1 bg-gradient-to-r from-cyan-500 to-gray-100 gap-4 p-4 '>
        <Fade left>
        <div className='w-ful'>
        <img src="edu.png" width="100%"  alt="placehold images"/>
        </div>
        </Fade>
        <Fade right>
            <div className='  p-4 '>
                <h1 className=' font-bold text-[30px] font-[Open Sans]  text-[#0F756B] flex justify-center items-center mb-4'>Une formation en anglais</h1>
                <p className='font-[Open Sans] leading-9'>
                    Avec zios aeronautics vous avez la possibilité de pouvoir réaliser votre rêve de pilote.
                    Lorem ipsum dolor sit at, consectetur adipielit. Facilisi fermentum, dignissim pharetra. Aliquam Lorem ipsum dolor sit at, consectetur adipielit. Facilisi fermentum, dignissim pharetra. Aliquam Lorem ipsum dolor sit at, consectetur adipielit. Facilisi fermentum, dignissim pharetra. Aliquam 
                </p>
            </div>
        </Fade>
    </div>





    
    
      
      
      
      </div>
  )
}

export default Section