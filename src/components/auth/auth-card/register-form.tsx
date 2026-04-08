import { ArrowRight } from "@/components/svg/arrow-right-green";
import { AuthButton } from "./button";
import { AuthInput } from "./input";

export const RegisterForm = () => {
    return(
       <form className="flex flex-col place-content-around">
            <div className="flex flex-col items-end">
                <AuthInput type="text" placeholder="Name"/>
                <AuthInput type="email" placeholder="Email"/>
                <AuthInput type="password" placeholder="Password"/>
            </div>
            <div className="flex items-center place-content-center gap-5 mt-10 mb-10">
                <AuthButton text="Register"/>
                <ArrowRight className="text-secondary w-6 h-5"/>
            </div>      
        </form>
    )
}