import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="my-20 flex justify-center">
      <SignUp />
    </div>
  );
}
