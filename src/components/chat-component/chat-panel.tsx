"use client";

import { useState } from "react";
import MessagePanel from "@/components/chat-component/messagePanel";
import MessageForm from "@/components/chat-component/messageForm";

export default function ChatPanel() {
  const [input, setInput] = useState("");

  return (
    <div className="w-1/2 overflow-y-auto scrollbar-hide">
      <div className="mx-auto flex max-w-2xl flex-col">
        <MessagePanel input={input} />
        <MessageForm widthType="w-1/2" input={input} setInput={setInput} />
      </div>
    </div>
  );
}
