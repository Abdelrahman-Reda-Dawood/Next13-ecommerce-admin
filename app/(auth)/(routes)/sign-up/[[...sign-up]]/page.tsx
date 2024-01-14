import { SignUp } from "@clerk/nextjs";

//* Wrapped in Optional Catch all segments [[...signUp]]
export default function Page() {
  return <SignUp />;
}
