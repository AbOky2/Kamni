import React from 'react'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Pulse from 'react-reveal/Pulse';



function Baniere() {
  return (
<>
    <div className='bg-[#B2EBF2] p-4 w-full'>
    
    <div className='flex justify-between  mt-8 sm:grid sm:grid-rows-1 gap-4 p-4  '>
            <div className='w-full order-last sm:order-first'>
            <img src="banner1.png" width="100%"  alt="placehold images"/>

            </div>
            <div className='  p-4  w-full '>
                <h1 className=' font-bold text-[60px] font-[Open Sans]  text-black flex justify-center items-center mb-4 iphone3:text-[40px]'>
                <Pulse>
                <a href='#bienvenue' aria-hidden="true">
                    Bienvenue au CEFPAMS
                </a>
                </Pulse>
                </h1>
                <p className='leading-7 text-black'>
                    
                    CEFPAM est établissement de formation professionnelle, des petits métiers, des langues et d'appui scolaire basé au Tchad.
                    Il est structuré de façons à favoriser l'apprentissage concrets permettant aux apprenants d'acquérir le savoir et le savoir-faire pour exercer un métier.
                </p>

            </div>
        </div>
    </div>




<h1 className='flex items-center justify-center text-center text-blue-900 font-[Open Sans] text-[60px] font-600  p-4' id='objectif'>Nos offres</h1>


<div className='flex justify-between  sm:grid sm:grid-rows-1 bg-gradient-to-r from-blue-600 to-gray-100 gap-4  '>
    <Fade left>
    <div className='w-ful'>
    <img src="form1.jpeg" width="100%"  alt="placehold images"/>
    </div>
    </Fade>
    <Fade left>
        <div className='  p-4 '>
            <h1 className=' font-bold text-[30px] font-[Open Sans]  text-yellow-900 flex justify-center items-center mb-4'>Une formation en anglais</h1>
            <p className='font-[Open Sans] leading-9'>
                Cefpam vous offre la possibilité d'apprendre l'anglais ou de vous perfectionner en mettant à votre disposition une équipe de professeurs <strong>dynamiques et compétents</strong>.
                Lorem ipsum dolor sit at, consectetur adipielit. Facilisi fermentum, dignissim pharetra. Aliquam Lorem ipsum dolor sit at, consectetur adipielit. Facilisi fermentum, dignissim pharetra. Aliquam Lorem ipsum dolor sit at, consectetur adipielit. Facilisi fermentum, dignissim pharetra. Aliquam 
            </p>
        </div>
    </Fade>
</div>


<div className='flex justify-between  sm:grid sm:grid-rows-1 bg-gradient-to-r from-green-600 to-gray-100 gap-4  '>
    <Slide rigth>
    <div className='w-ful'>
    <img src="form2.png" width="100%"  alt="placehold images"/>
    </div>
    </Slide>
    <Slide rigth>
        <div className='  p-4 '>
            <h1 className=' font-bold text-[30px] font-[Open Sans]  text-white flex justify-center items-center mb-4'>Formation en petits métiers</h1>
            <p className='font-[Open Sans] leading-9'>
                CEFPAM forme les jeunes dans les petits metiers allant de la transformation des produits alimentaires.
                L'installation solaire; L'electricité bâtiment; L'infographie; Formation en agriculture (Agro-business); Fabrication de savon liquide et des gel hydroalcooliques. Et bien d'autres...
            </p>
        </div>
    </Slide>
</div>


<div className='flex justify-between  sm:grid sm:grid-rows-1 bg-gradient-to-r from-green-600 to-gray-100 gap-4  '>
    <Fade left>
    <div className='w-ful'>
    <img src="form3.png" width="100%"  alt="placehold images"/>
    </div>
    </Fade>
    <Fade left>
        <div className='  p-4 '>
            <h1 className=' font-bold text-[30px] font-[Open Sans]  text-white flex justify-center items-center mb-4'>Tutorat Scolaire</h1>
            <p className='font-[Open Sans] leading-9'>
                CEFPAM forme les jeunes dans les petits metiers allant de la transformation des produits alimentaires.
                L'installation solaire; L'electricité bâtiment; L'infographie; Formation en agriculture (Agro-business); Fabrication de savon liquide et des gel hydroalcooliques. Et bien d'autres...
            </p>
        </div>
    </Fade>
</div>



<div className='flex justify-between  sm:grid sm:grid-rows-1 bg-gradient-to-r from-cyan-600 to-gray-100 gap-4  '>
    <Fade left>
    <div className='w-ful'>
    <img src="form4.png" width="100%"  alt="placehold images"/>
    </div>
    </Fade>
    <Fade left>
        <div className='  p-4 '>
            <h1 className=' font-bold text-[30px] font-[Open Sans]  text-white flex justify-center items-center mb-4'>Informatique</h1>
            <p className='font-[Open Sans] leading-9'>
                CEFPAM forme les jeunes dans les petits metiers allant de la transformation des produits alimentaires.
                L'installation solaire; L'electricité bâtiment; L'infographie; Formation en agriculture (Agro-business); Fabrication de savon liquide et des gel hydroalcooliques. Et bien d'autres...
            </p>
        </div>
    </Fade>
</div>



<div className='flex justify-between  sm:grid sm:grid-rows-1 bg-gradient-to-r from-cyan-600 to-gray-100 gap-4  '>
    <Fade left>
    <div className='w-full'>
    <img src="form6.png" width="100%"  alt="placehold images"/>
    </div>
    </Fade>
    <Fade left>
        <div className='  p-4 '>
            <h1 className=' font-bold text-[30px] font-[Open Sans]  text-white flex justify-center items-center mb-4'>Formation Pro</h1>
            <p className='font-[Open Sans] leading-9'>
                CEFPAM forme les jeunes dans les petits metiers allant de la transformation des produits alimentaires.
                L'installation solaire; L'electricité bâtiment; L'infographie; Formation en agriculture (Agro-business); Fabrication de savon liquide et des gel hydroalcooliques. Et bien d'autres...
            </p>
        </div>
    </Fade>
</div>


</>
  )
}

export default Baniere