import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="mt-10 flex justify-center">
      <SignUp />
    </main>
  );
}
