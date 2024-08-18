'use client'

import { useState } from "react";
import MessagePanel from "@/app/_components/messagePanel"
import MessageForm from "@/app/_components/messageForm"


export default function ChatPanel(){
    const [input, setInput] = useState("");

    return  (<div className=" w-1/2 overflow-y-auto scrollbar-hide ">
    <div className="flex flex-col  max-w-2xl mx-auto">
        <MessagePanel input={input}/>
        <MessageForm 
          widthType="w-1/2"
          input = {input}
          setInput={setInput}
        />
    </div>
  </div>)
}