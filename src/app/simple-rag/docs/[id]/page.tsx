import RagChat from "@/components/chat-component/rag-chat";
import { AI } from "@/actions/chat/actions";
import { nanoid } from "@/lib/utils";

export default async function Documents({params} : {params: {id : string}}){
    const id = nanoid();

    return (
        <main className="flex h-screen w-full">
            <AI initialAIState={{ chatId: id, messages: [] }}>
                <RagChat doc_id={params.id}  />
            </AI>
        </main>
    
    )
}