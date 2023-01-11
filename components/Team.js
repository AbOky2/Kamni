import React from 'react'
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';
import { InlineWidget } from "react-calendly";
import { PopupWidget } from "react-calendly";


function Team() {
  return (
    <>
    <section class="bg-white dark:bg-gray-900">
    
  <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
        {/* <Slide left opposite> */}
          <h2 class="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white" id='membres'>
          <a href='#membres' aria-hidden="true"> 
          
          Nous contacter 
          
        </a>
        </h2>
          <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
          <InlineWidget url="https://calendly.com/issaokiabderamane" />               
          </p>
          {/* </Slide> */}
      </div> 
     
  </div>
</section>
    
    </>
  )
}

export default Team