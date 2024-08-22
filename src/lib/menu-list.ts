import { FileType } from "@/server/queries";
import { sum } from "drizzle-orm";
import {
    FileArchive,
    Hexagon,
    LucideIcon,
    Bot,
    Home
  } from "lucide-react";
  
  type Submenu = {
    href: string;
    label: string;
    active: boolean;
  };
  
  type Menu = {
    href: string;
    label: string;
    active: boolean;
    icon: LucideIcon
    submenus: Submenu[];
  };
  
  type Group = {
    groupLabel: string;
    menus: Menu[];
  };
  
  export function getMenuList(pathname: string, files: FileType[]): Group[] {
    const submenus = files.map((file : FileType) : Submenu =>{
        return {
          "href" : "/simple-rag/docs/" + file?.id,
          "label": file?.file_name + "",
          "active": pathname === "/simple-rag/docs/" + file?.id
        }
      }
    );
    return [
      {
        groupLabel: "",
        menus: [
          {
            href: "/",
            label: "Home",
            active: pathname ==="/",
            icon: Home,
            submenus: []
          },
          {
            href: "/chat",
            label: "Chat",
            active: pathname.includes("/chat"),
            icon: Bot,
            submenus: []
          },
          {
            href: "/simple-rag",
            label: "Simple RAG",
            active: pathname.includes("/simple-rag"),
            icon: Hexagon,
            submenus: []
          }
        ]
      },
      {
        groupLabel: "Contents",
        menus: [
          {
            href: "",
            label: "Files Uploaded",
            active: pathname.includes("/posts"),
            icon: FileArchive,
            submenus: submenus
          }
        ]
      }
    ];
  }