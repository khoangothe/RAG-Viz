"use client";

import Link from "next/link";
import { ChartNetwork } from "lucide-react";

import { cn } from "@/lib/utils";
import { useStore } from "@/hooks/use-store";
import { Button } from "@/components/ui/button";
import { Menu } from "@/components/rag-panel/menu";
import { useSidebarToggle } from "@/hooks/use-sidebar-toggle";
import { SidebarToggle } from "@/components/rag-panel/sidebar-toggle";
import { FileType } from "@/server/queries";

export function Sidebar({ files }: { files: FileType[] }) {
  const sidebar = useStore(useSidebarToggle, (state) => state);

  if (!sidebar) return null;

  return (
    <aside
      className={cn(
        "fixed right-0 top-0 z-20 h-screen translate-x-0 bg-black transition-[width] duration-300 ease-in-out",
        sidebar?.isOpen === false ? "w-[0px] hover:w-[90px]" : "w-72",
      )}
    >
      <SidebarToggle isOpen={sidebar?.isOpen} setIsOpen={sidebar?.setIsOpen} />
      <div className="relative flex h-full flex-col overflow-y-auto px-3 py-4 shadow-md dark:shadow-zinc-800">
        <Button
          className={cn(
            "mb-1 transition-transform duration-300 ease-in-out",
            sidebar?.isOpen === false ? "-translate-x-1" : "translate-x-0",
          )}
          variant="link"
          asChild
        >
          <Link href="/" className="flex items-center gap-2">
            <ChartNetwork className="mr-1 h-6 w-6" />
            <h1
              className={cn(
                "whitespace-nowrap text-lg font-bold transition-[transform,opacity,display] duration-300 ease-in-out",
                sidebar?.isOpen === false
                  ? "hidden translate-x-96 opacity-0"
                  : "translate-x-0 opacity-100",
              )}
            >
              Rag Viz
            </h1>
          </Link>
        </Button>
        <Menu isOpen={sidebar?.isOpen} files={files} />
      </div>
    </aside>
  );
}
