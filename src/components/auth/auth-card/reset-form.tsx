import { ArrowRight } from "@/components/svg/arrow-right-green";
import { AuthButton } from "./button";
import { AuthInput } from "./input";

export const ResetForm = () => {
    return(
       <form className="flex flex-col place-content-around">
            <div className="flex flex-col items-end">
                <AuthInput type="email" placeholder="Email"/>
            </div>
            <div className="flex items-center place-content-center gap-5 mt-7">
                <AuthButton text="Send link"/>
                <ArrowRight className="text-secondary w-6 h-5"/>
            </div>
        </form>
    )
}