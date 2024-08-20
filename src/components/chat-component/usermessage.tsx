export default function UserMessage({content} : {content: string}){
    return <div className="w-full flex justify-end  py-4">
    <div className="text-black max-w-[70%] rounded-3xl bg-[#f4f4f4] px-5 py-2.5 ">
      {content}
      </div>
    </div>
}