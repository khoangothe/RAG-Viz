'use client'

import Textarea from 'react-textarea-autosize'
import {Button, IconButton} from '@radix-ui/themes'
import {GearIcon} from "@radix-ui/react-icons"

export default function MessageForm() {
   return (
    <div className="fixed left-0 bottom-5  w-full flex">
      <div className="w-full mx-auto my-auto bg-[#272626] lg:max-w-[50%]  rounded-3xl">
         <div className="flex w-full justify-between">
               <div className="w-12">
                   
               </div>
               <div className="w-full my-auto inline-flex max-w-[80%]">
                  {/* <textarea  placeholder="Message me" className="py-4 max-h-[25dvh] max-h-52  bg-transparent w-full resize-none border-0 px-0 focus:outline-none focus:ring-0"/> */}
                  <Textarea  placeholder="Message me" className="text-white min-h-[60px] bg-transparent w-full resize-none max-h-60 px-4 py-[1.3rem] focus-within:outline-none sm:text-sm"/>

               </div>

               <div className="w-12 my-auto flex justify-start">
                  <IconButton  variant="outline" className='w-8 h-8 bg-slate-500 rounded-full  my-auto flex justify-start'>
                     <GearIcon className='m-auto text-white' />
                  </IconButton>
                  
               </div>
            </div>
         
      </div>
   </div>
   ) 
}