'use client'

import { UploadDropzone } from "@/components/upload/uploadthing";
import { nanoid } from "@/lib/utils";
import {usePathname, useRouter } from 'next/navigation';
import { toast } from "sonner"


export default function HomePage() {
  const id = nanoid()
  const { replace, refresh} = useRouter();
  const pathname = usePathname();

  return (
    <main className="flex h-screen w-full">
    <div className="w-full my-auto">
      <UploadDropzone
        appearance={{
            button: "ut-ready:bg-red-500 ut-uploading:cursor-not-allowed rounded-r-none bg-red-500 bg-none after:bg-orange-400",
            label: "text-red-500"
          }
        }
        endpoint="pdfUploader"
        onUploadAborted={() =>{
          toast("Upload Aborted")
        }}
        onBeforeUploadBegin={(files) =>{
          toast("Uploading...")
          return files;
        }}
        onClientUploadComplete={(res) => {
          if (res.length > 0){
            const id = res[0]?.key;
            replace(`${pathname}/${id?.toString()}`);
            refresh()
            toast("Upload Completed")
          }
        }}
        onUploadError={(error: Error) => {
          toast(`ERROR! ${error.message}`);
        }}
      />    
    </div>
     </main>
  );
}
