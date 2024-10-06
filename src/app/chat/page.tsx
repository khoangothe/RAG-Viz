import Chat from "../../components/chat-component/chat";
import { AI } from "@/actions/chat/actions";
import { nanoid } from "@/lib/utils";

export default function HomePage() {
  const id = nanoid();

  return (
    <main className="flex h-screen w-full">
      <AI initialAIState={{ chatId: id, messages: [] }}>
        <Chat />
      </AI>
    </main>
  );
}
