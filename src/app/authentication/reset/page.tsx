import Card from "@/components/auth/auth-card/card";
import ResetForm from "@/components/auth/auth-card/reset-form";
import { ArrowRight } from "@/components/svg/arrow-right-green";
import Link from "next/link";

export default function Reset(){
    return(
        <div>
            <Card title={"Reset Password"}>
                <ResetForm></ResetForm>
            </Card>
            <div className="flex flex-row items-center place-content-center gap-5 mt-8">
                <ArrowRight className="text-[#535351] w-6 h-5 rotate-180"></ArrowRight>
                <Link href={'/authentication/login'} className="text-[#707070] font-bold italic text-4xl">Back</Link>    
            </div>
        </div>
        
    )
}