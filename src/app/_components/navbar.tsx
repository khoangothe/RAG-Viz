import { link } from "fs"
import Link from "next/link"


const links = [
    {
        title : "Home",
        href : "/" 
    },
    {
        title : "Login" ,
        href : "/login"
    }
]

export default function Navbar(){
    return (
        <nav className="flex w-full bg-slate-700 h-20 items-center pl-10">
            <div className="flex w-full justify-items-start gap-3 ">
                {links.map(link => (
                <Link className="text-white" key={link.title} href={link.href}>{link.title}</Link>           
                ))}
            </div>
        </nav>
    )
}