import { FileType } from "@/server/queries";
import { sum } from "drizzle-orm";
import {
    Tag,
    Users,
    Settings,
    Bookmark,
    SquarePen,
    LayoutGrid,
    LucideIcon
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
            href: "/simple-rag",
            label: "Simple RAG",
            active: pathname.includes("/simple-rag"),
            icon: LayoutGrid,
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
            icon: SquarePen,
            submenus: submenus
          }
        ]
      },
      {
        groupLabel: "Settings",
        menus: [
          {
            href: "/users",
            label: "Users",
            active: pathname.includes("/users"),
            icon: Users,
            submenus: []
          },
          {
            href: "/account",
            label: "Account",
            active: pathname.includes("/account"),
            icon: Settings,
            submenus: []
          }
        ]
      }
    ];
  }