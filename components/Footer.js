import React from 'react'
import Image from 'next/image'
import { FaBeer } from 'react-icons/fa';
import { IconName } from "react-icons/im";
import {ImFacebook} from "react-icons/im"
import {ImGoogle} from "react-icons/im"
import {ImLinkedin2} from "react-icons/im"


function Footer() {
  return (
    <footer className=' bg-gray-900 dark:bg-gray-900 p-4'>
        <div className='flex justify-center gap-12 text-gray-500 p-4'>
            <div>
                <a href='https://www.facebook.com/kamnilerevolutionnaire.lerevolutionnaire'>
                <ImFacebook/>
                </a>
            </div>
            <div>
            <a href='https://www.facebook.com/kamnilerevolutionnaire.lerevolutionnaire'>
                <ImLinkedin2/>
            </a>
            </div>
            <div>
            <a href='https://www.facebook.com/kamnilerevolutionnaire.lerevolutionnaire'>
                <ImGoogle/>
            </a>
            </div>
        </div>
        <div className=' text-gray-500 border-t-2 border-gray-500 flex justify-center mt-8 p-4'> 
        © 2023 Copyright CEFPAM</div>
        
    </footer>
  )
}

export default Footer