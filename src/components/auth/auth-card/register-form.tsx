import { ArrowRight } from "@/components/svg/arrow-right-green";
import AuthButton from "./button";
import AuthInput from "./input";

export default function RegisterForm(){
    return(
       <form className="flex flex-col place-content-around">
            <div className="flex flex-col items-end">
                <AuthInput type="text" placeholder="Name"></AuthInput>
                <AuthInput type="email" placeholder="Email"></AuthInput>
                <AuthInput type="password" placeholder="Password"></AuthInput>
            </div>
            <div className="flex flex-row items-center place-content-center gap-5 mt-10 mb-10">
                <AuthButton text="Register"></AuthButton>
                <ArrowRight className="text-[#B5C401] w-6 h-5"/>
            </div>      
        </form>
    )
}