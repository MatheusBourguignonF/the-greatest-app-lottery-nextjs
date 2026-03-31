import AuthInput from "./input";
import AuthButton from "./button";
import { ArrowRight } from "@/components/svg/arrow-right-green";
import Link from "next/link";

export default function LoginForm(){
    return (
        <form className="flex flex-col place-content-around">
            <div className="flex flex-col items-end">
                <AuthInput type="email" placeholder="Email"></AuthInput>
                <AuthInput type="password" placeholder="Password"></AuthInput>
                <Link href={'/authentication/reset'} className="text-[17px] text-[#C1C1C1] mr-7 mt-6 italic">I forgot my password</Link>
            </div>
            <div className="flex flex-row items-center place-content-center gap-5 mt-11 mb-10">
                <AuthButton text="Log in"></AuthButton>
                <ArrowRight className="text-[#B5C401] w-6 h-5"/>
            </div>
        </form>
    )
}