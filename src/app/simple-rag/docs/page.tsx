'use client'

import { UploadDropzone } from "@/components/upload/uploadthing";
import { nanoid } from "@/lib/utils";
import {usePathname, useRouter } from 'next/navigation';


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
        onClientUploadComplete={(res) => {
          alert("Upload Completed");

          if (res.length > 0){
            const id = res[0]?.key;
            //To do: Change Alert to a pretty message
            alert("Upload Completed");
            replace(`${pathname}/${id?.toString()}`);
            refresh()
          }
        }}
        onUploadError={(error: Error) => {
          // To do: Change Alert to a pretty message
          alert(`ERROR! ${error.message}`);
        }}
      />    
    </div>
     </main>
  );
}
