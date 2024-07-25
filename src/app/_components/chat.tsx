'use client'

import MessageForm from "./messageForm";
import MessagePanel from "./messagePanel";
import { useState } from "react";
import { useAIState, useUIState } from "ai/rsc";

export default function Chat(){
  const [input, setInput] = useState('');
  const [aiState] = useAIState()


  
  return (
  

  <div className="flex flex-col max-w-2xl w-full mx-auto mt-20">
        <MessagePanel input={input}/>
        <MessageForm 
        input = {input}
        setInput={setInput}
        />
 </div>
  )

}