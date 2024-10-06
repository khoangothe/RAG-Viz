"use client";

import { AI, UIState } from "@/actions/chat/actions";
import { nanoid } from "@/lib/utils";
import { useActions, useUIState } from "ai/rsc";
import Textarea from "react-textarea-autosize";
import { IconButton } from "@radix-ui/themes";
import { GearIcon } from "@radix-ui/react-icons";
import UserMessage from "./usermessage";
import BotMessage from "./botmessage";

import classNames from "classnames";
import React from "react";
import { error } from "console";
import { toast } from "sonner";

export default function MessageForm({
  widthType,
  input,
  setInput,
}: {
  widthType: string;
  input: string;
  setInput: (value: string) => void;
}) {
  const { submitUserMessage } = useActions<typeof AI>();
  const [_, setMessages] = useUIState<typeof AI>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = input.trim();
    setInput("");
    if (!value) return;

    setMessages((currentMessages) => [
      ...currentMessages,
      {
        id: nanoid(),
        role: "user",
        display: <UserMessage content={value} />,
      },
    ]);

    const responseMessage: UIState | null = await submitUserMessage(
      value,
    ).catch((error: Error) => {
      toast("Error Fetching Messages: " + error.message);
      return null;
    });

    if (responseMessage) {
      setMessages((currentMessages) => [...currentMessages, responseMessage]);
    }
  };

  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLTextAreaElement>,
  ) => {
    if (event.key === "Enter" && !event.shiftKey) {
      await handleSubmit(event as unknown as React.FormEvent<HTMLFormElement>); // Trigger form submission
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={classNames("fixed bottom-5 left-0 flex", widthType)}>
        <div className="mx-auto my-auto w-full rounded-3xl bg-[#272626] lg:max-w-[60%]">
          <div className="flex w-full justify-between">
            <div className="w-12"></div>
            <div className="my-auto inline-flex w-full max-w-[80%]">
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Message me"
                className="max-h-60 min-h-[60px] w-full resize-none bg-transparent px-4 py-[1.3rem] text-white focus-within:outline-none sm:text-sm"
                onKeyDown={handleKeyDown}
              />
            </div>
            <div className="my-auto flex w-12 justify-start">
              <IconButton
                variant="outline"
                className="my-auto flex h-8 w-8 justify-start rounded-full bg-slate-500"
              >
                <GearIcon className="m-auto text-white" />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
