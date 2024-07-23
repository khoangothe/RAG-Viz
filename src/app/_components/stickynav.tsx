import { link } from "fs"
import Link from "next/link"


const links = [
    {
        title : "Khoa Ngo The",
        href : "/" 
    }
]

export default function StickyNav(){
    return (
        <nav className="flex left-0 w-full  h-20 items-center pl-10 fixed top-0">
            <div className="flex w-full justify-items-start gap-3 ">
                {links.map(link => (
                <Link className="text-white" key={link.title} href={link.href}>{link.title}</Link>           
                ))}
            </div>
        </nav>
    )
}