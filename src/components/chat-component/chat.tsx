"use client";

import MessageForm from "./messageForm";
import MessagePanel from "./messagePanel";
import { useState } from "react";

export default function Chat() {
  const [input, setInput] = useState("");

  return (
    <div className="mt-20 flex w-full">
      <div className="mx-auto flex w-full max-w-2xl flex-col overflow-y-auto scrollbar-hide">
        <MessagePanel input={input} />
        <MessageForm widthType="w-full" input={input} setInput={setInput} />
      </div>
    </div>
  );
}
