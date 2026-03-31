import { ArrowRight } from "@/components/svg/arrow-right-green";
import AuthButton from "./button";
import AuthInput from "./input";

export default function RegisterForm(){
    return(
       <form className="flex flex-col place-content-around">
            <div className="flex flex-col items-end">
                <AuthInput type="email" placeholder="Email"></AuthInput>
            </div>
            <div className="flex flex-row items-center place-content-center gap-5 mt-7">
                <AuthButton text="Send link"></AuthButton>
                <ArrowRight className="text-[#B5C401] w-6 h-5"/>
            </div>
        </form>
    )
}