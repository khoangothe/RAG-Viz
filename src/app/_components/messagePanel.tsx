export default function MessagePanel(){
    return(    <div className="flex-1 pb-40  w-full mt-20">
    {[...Array(40)].map((_, index) => (
      <div key={index} className="text-white w-full">
          Hello
        </div>
      ))}
    </div>
    )
}