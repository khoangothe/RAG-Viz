'use client'

import { SidebarToggle } from "@/components/rag-panel/sidebar-toggle";
import { useStore } from "@/hooks/use-store";
import { useSidebarToggle } from "@/hooks/use-sidebar-toggle";

export default function HomePage() {
  const sidebar = useStore(useSidebarToggle, (state) => state);
  return (
    <main className="flex h-screen w-1/2">
      <SidebarToggle isOpen={sidebar?.isOpen} setIsOpen={sidebar?.setIsOpen} />
     </main>
  );
}
