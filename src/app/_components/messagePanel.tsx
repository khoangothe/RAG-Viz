import * as Avatar from '@radix-ui/react-avatar';

export default function MessagePanel(){

  const dummyData = [...Array(40)];

  const chatHistory = dummyData.map((value, index) =>{
    if (index % 2 == 0){
      return {
        sender : "user",
        msg : "How do I solve this math question? x + 1 = 2, x = ?"
      }
    }
    else {
      return {
        sender : "ai",
        msg : "AI MessagesAI MessagesAI MessagesAI MessagesAI MessagesAI MessagesAI MessagesAI MessagesAI MessagesAI MessagesAI MessagesAI MessagesAI MessagesAI MessagesAI MessagesAI MessagesAI MessagesAI MessagesAI MessagesAI MessagesAI MessagesAI MessagesAI MessagesAI MessagesAI MessagesAI MessagesAI MessagesAI MessagesAI MessagesAI MessagesAI MessagesAI MessagesAI MessagesAI MessagesAI MessagesAI MessagesAI MessagesAI MessagesAI MessagesAI Messages" 
      }
    }
  })

    return(    <div className="flex-1 pb-40  w-full mt-20">
    {chatHistory.map((value, index) => (
      value.sender === "user" ? 
      <div key={index} className="w-full flex justify-end  py-4">
        <div className="max-w-[70%] rounded-3xl bg-[#f4f4f4] px-5 py-2.5 ">
          {value.msg}
          </div>
        </div>
        :
        <div key={index} className="w-full flex  py-4">
        <div className="flex text-white  bg-slate-40 ">
          <div className="flex-shrink-0 flex flex-col items-end mr-5">

            <div className="h-8 w-8">
            <Avatar.Root className="bg-blackA1 h-full w-full inline-flex select-none items-center justify-center overflow-hidden rounded-full align-middle">
            <Avatar.Image
              className="h-full w-full rounded-[inherit] object-cover"
              src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
              alt="Colm Tuite"
            />
            <Avatar.Fallback
              className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
              delayMs={600}
            >
              
            </Avatar.Fallback>
          </Avatar.Root>
            </div>
          </div>

          <div className="w-full ">
            {value.msg}
          </div>
        </div>
        </div>
      ))}
    </div>
    )
}