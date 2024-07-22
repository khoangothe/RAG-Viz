import Link from "next/link";
import Chat from "./_components/chat";
import StickyNav from "./_components/stickynav";

export default function HomePage() {
  return (
    <main className="flex top-0 h-screen absolute w-full">
      <StickyNav/>
      <Chat/>
     </main>
  );
}
