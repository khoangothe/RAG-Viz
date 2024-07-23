
export default function MessageForm() {
   return (
    <div className="fixed left-0 bottom-5  w-full h-20 flex">
      <div className="w-full mx-auto my-auto bg-[#f4f4f4] lg:max-w-[50%]  rounded-3xl">
         <div className="flex w-full justify-between">
               <div className="w-12">
                  
               </div>
               <div className="w-full my-auto inline-flex max-w-[80%] ">
                  <textarea  placeholder="Message me" className="py-4 h-16  bg-transparent w-full resize-none border-0 px-0"/>

               </div>
               <div className="w-12">
                   
               </div>
            </div>
         
      </div>
   </div>
   ) 
}