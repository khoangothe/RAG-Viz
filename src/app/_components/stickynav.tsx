'use client';

import Link from "next/link"
import { UploadButton } from "./uploadthing";


const links = [
    {
        title : "Learn RAG",
        href : "/" 
    }
]

export default function StickyNav(){
    return (
        <nav className="flex left-0 w-full  h-20 items-center pl-10 fixed top-0">
            <div className="flex w-full  gap-3 justify-between">
                <div className="flex justify-items-start gap-3">
                    {links.map(link => (
                    <Link className="text-white  my-auto" key={link.title} href={link.href}>{link.title}</Link>           
                    ))}
                </div>
                <UploadButton
                    endpoint="pdfUploader"
                    onClientUploadComplete={(res) => {
                    console.log("Files: ", res);
                    alert("Upload Completed");
                    }}
                    onUploadError={(error: Error) => {
                    alert(`ERROR! ${error.message}`);
                    }}
                />
            </div>
        </nav>
    )
}