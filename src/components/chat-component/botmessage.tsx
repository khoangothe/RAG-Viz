'use client'


import * as Avatar from '@radix-ui/react-avatar';
import { StreamableValue, useStreamableValue } from 'ai/rsc'
import { useStreamableText } from '@/lib/hooks/use-streamable-text'


export default function BotMessage({content} : {content: string | StreamableValue<string> }){
    
    const text = useStreamableText(content)

    return <div  className="w-full flex  py-4">
    <div className="flex text-white  bg-slate-40 ">
      <div className="flex-shrink-0 flex flex-col items-end mr-5">

        <div className="h-8 w-8">
        <Avatar.Root className="bg-blackA1 h-full w-full inline-flex select-none items-center justify-center overflow-hidden rounded-full align-middle">
        <Avatar.Image
          className="h-full w-full rounded-[inherit] object-cover"
          src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
          alt="Colm Tuite"
        />
        <Avatar.Fallback
          className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
          delayMs={600}
        >
          
        </Avatar.Fallback>
      </Avatar.Root>
        </div>
      </div>

      <div className="w-full ">
        {text}
      </div>
    </div>
    </div>
}