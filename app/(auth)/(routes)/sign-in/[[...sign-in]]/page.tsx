import { SignIn } from "@clerk/nextjs";

//* Wrapped in Optional Catch all segments [[...signIn]]
export default function Page() {
  return <SignIn />;
}
