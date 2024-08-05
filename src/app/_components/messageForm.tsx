'use client'

import { AI } from '@/lib/chat/actions'
import { nanoid } from '@/lib/utils'
import { useActions, useUIState } from 'ai/rsc'
import Textarea from 'react-textarea-autosize'
import {Button, IconButton} from '@radix-ui/themes'
import {GearIcon} from "@radix-ui/react-icons"
import UserMessage from './usermessage'

import classNames from 'classnames';


export default function MessageForm({
      widthType,
      input,
      setInput
   }: {
   widthType: string
   input: string
   setInput: (value: string) => void
 }) {

   const { submitUserMessage } = useActions<typeof  AI>()
   const [_, setMessages] = useUIState<typeof AI>()


   return (
   <form
      onSubmit={
         async  (e : React.FormEvent<HTMLFormElement>) =>{
            e.preventDefault()
            const value = input.trim()
            setInput('')
            if (!value) return

            setMessages(currentMessages => [
               ...currentMessages,
               {
                 id: nanoid(),
                 role: 'user',
                 display: <UserMessage  content={value}/>
               }
             ])
         
             const responseMessage = await submitUserMessage(value)
             setMessages(currentMessages => [...currentMessages, responseMessage])
 
         }
      }
   
   >
    <div className={classNames("fixed left-0 bottom-5 flex", widthType)}>
      <div className="w-full mx-auto my-auto bg-[#272626] lg:max-w-[60%]  rounded-3xl">
         <div className="flex w-full justify-between">
               <div className="w-12">
                   
               </div>
               <div className="w-full my-auto inline-flex max-w-[80%]">
                  <Textarea value={input} onChange={e => setInput(e.target.value)}  placeholder="Message me" className="text-white min-h-[60px] bg-transparent w-full resize-none max-h-60 px-4 py-[1.3rem] focus-within:outline-none sm:text-sm"/>
               </div>
               <div className="w-12 my-auto flex justify-start">
                  <IconButton  variant="outline" className='w-8 h-8 bg-slate-500 rounded-full  my-auto flex justify-start'>
                     <GearIcon className='m-auto text-white' />
                  </IconButton>
                  
               </div>
            </div>
         
      </div>
   </div>
   </form>

   ) 
}