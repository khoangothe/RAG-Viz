export default function UserMessage({ content }: { content: string }) {
  return (
    <div className="flex w-full justify-end py-4">
      <div className="max-w-[70%] rounded-3xl bg-[#f4f4f4] px-5 py-2.5 text-black">
        {content}
      </div>
    </div>
  );
}
