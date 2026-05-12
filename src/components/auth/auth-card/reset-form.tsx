"use client"

import { ArrowRight } from "@/components/svg/arrow-right-green";
import { AuthButton } from "./button";
import { AuthInput } from "./input";
import { resetSchema, ResetSchema } from "@/schemas/reset-schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const ResetForm = () => {
    const {register, handleSubmit, formState: { errors }} = useForm<ResetSchema>({
        resolver: zodResolver(resetSchema)
    })

    function onSubmit(data: ResetSchema){
        console.log("submit", data)
    }

    return(
       <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col place-content-around">
            <div className="flex flex-col items-end">
                <AuthInput {...register("email")} type="email" placeholder="Email"/>
                {errors?.email && (
                    <span className="text-red-400 text-sm mt-2 self-end w-full pl-8">
                        {errors.email.message}
                    </span>
                )}
            </div>
            <div className="flex items-center place-content-center gap-5 mt-7">
                <AuthButton text="Send link"/>
                <ArrowRight className="text-secondary w-6 h-5"/>
            </div>
        </form>
    )
}