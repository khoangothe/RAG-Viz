'use client'

import { useStore } from "@/hooks/use-store";
import { useSidebarToggle } from "@/hooks/use-sidebar-toggle";

export default function HomePage() {
  const sidebar = useStore(useSidebarToggle, (state) => state);
  return (
    <main className="flex h-screen w-1/2">
     </main>
  );
}
