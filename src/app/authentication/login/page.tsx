import AuthCard from "@/components/auth/auth-card/card";
import LoginForm from "@/components/auth/auth-card/login-form";
import { ArrowRight } from "@/components/svg/arrow-right-green";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div>
       <AuthCard title="Authentication">
        <LoginForm />
      </AuthCard>
      <div className="flex flex-row items-center place-content-center gap-5 mt-8">
        <Link href={'/authentication/register'} className="text-[#707070] font-bold italic text-4xl">Sign Up</Link>
        <ArrowRight className="text-[#535351] w-6 h-5"></ArrowRight>
      </div>
    </div>
  );
}