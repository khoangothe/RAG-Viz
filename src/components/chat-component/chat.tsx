'use client'

import MessageForm from "./messageForm";
import MessagePanel from "./messagePanel";
import { useState } from "react";

export default function Chat(){
  const [input, setInput] = useState('');
  
  return (
    <div className="mt-20 w-full flex">
      <div className="w-full flex flex-col max-w-2xl   mx-auto  overflow-y-auto scrollbar-hide ">
          <MessagePanel input={input}/>
          <MessageForm 
            widthType="w-full"
            input = {input}
            setInput={setInput}
            />
      </div>
   </div>

  )

}