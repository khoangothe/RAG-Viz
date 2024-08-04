'use client'

import MessageForm from "./messageForm";
import MessagePanel from "./messagePanel";
import { useState } from "react";
import { useAIState, useUIState } from "ai/rsc";

export default function RagChat(){
  const [input, setInput] = useState('');
  
  return (
  
  <div className="mt-20 w-full flex">
    <div className=" w-1/2  overflow-y-auto scrollbar-hide ">
      <div className="flex flex-col max-w-2xl   mx-auto">
        <MessagePanel input={input}/>
          <MessageForm 
          widthType="w-1/2"
          input = {input}
          setInput={setInput}
          />
      </div>
    </div>
    <div className="w-1/2">

    </div>
  </div>

  )

}