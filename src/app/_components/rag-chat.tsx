import { Suspense } from 'react';
import Document from "@/app/_components/document";
import ChatPanel from './chat-panel';

export default function RagChat({doc_id} : {doc_id : string}){
    
  return (
    <div className="mt-20 w-full flex">
      <ChatPanel/>
      <div className="w-1/2 my-auto">
        <Suspense fallback={<div>Loading...</div>}>
          <Document doc_id={doc_id} />
        </Suspense>    
      </div>
    </div>
  )
}