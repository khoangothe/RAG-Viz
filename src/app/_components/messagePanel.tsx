import { UIState } from '@/lib/chat/actions';
import {useUIState } from 'ai/rsc';


export default function MessagePanel({input} :{input: string}){

  const [conversation, setConversation] = useUIState()


    return(    
    <div className="flex-1 pb-40  w-full mt-20">
      {conversation.map((message: UIState) => (
          <div key={message.id}>
            {message.display}
          </div>
        ))
      }
    </div>
    )
}