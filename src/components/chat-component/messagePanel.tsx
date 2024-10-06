"use client";

import { AIType, UIState } from "@/actions/chat/actions";
import { useUIState } from "ai/rsc";

export default function MessagePanel({ input }: { input: string }) {
  const [conversation, _] = useUIState<AIType>();

  return (
    <div className="mt-20 w-full flex-1 pb-40">
      {conversation.map((message: UIState) => (
        <div key={message.id}>{message.display}</div>
      ))}
    </div>
  );
}
