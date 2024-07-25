import 'server-only'
import {
    createAI,
    createStreamableUI,
    getMutableAIState,
    getAIState,
    streamUI,
    createStreamableValue
  } from 'ai/rsc';

import { openai } from '@ai-sdk/openai';

import {Message} from "@/lib/types";

import { nanoid } from '@/lib/utils';

import BotMessage from '@/app/_components/botmessage';

  export type AIState = {
    chatId: string
    messages: Message[]
  }

  export type UIState = {
    id: string
    role: 'user' | 'assistant'
    display: React.ReactNode
  }

  async function submitUserMessage(content: string) {
    'use server'
    const aiState = getMutableAIState<typeof AI>()
    aiState.update({
      ...aiState.get(),
      messages: [
        ...aiState.get().messages,
        {
          id: nanoid(),
          role: 'user',
          content
        }
      ]
    })
      
    let textStream: undefined | ReturnType<typeof createStreamableValue<string>>
    let textNode: undefined | React.ReactNode

    const result = await streamUI({
      model: openai('gpt-3.5-turbo'),
      initial: "",
      system: ``,
      messages: [
        ...aiState.get().messages.map((message: any) => ({
          role: message.role,
          content: message.content,
          name: message.name
        }))
      ],
      text: ({ content, done, delta }) => {
        if (!textStream) {
          textStream = createStreamableValue('')
          textNode = <BotMessage content={textStream.value} />
        }
  
        if (done) {
          textStream.done()
          aiState.done({
            ...aiState.get(),
            messages: [
              ...aiState.get().messages,
              {
                id: nanoid(),
                role: 'assistant',
                content
              }
            ]
          })
        } else {
          textStream.update(delta)
        }
        return textNode
      }
  })

  return {
    id: nanoid(),
    role: 'assistant',
    display: result.value
  }
}

  export const AI = createAI<AIState, UIState[]>({
    actions: {
      submitUserMessage
    },
    initialUIState: [],
    initialAIState: { chatId: nanoid(), messages: [] },
  })


