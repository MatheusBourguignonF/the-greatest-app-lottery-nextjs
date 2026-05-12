"use client"

import { ArrowRight } from "@/components/svg/arrow-right-green";
import { AuthButton } from "./button";
import { AuthInput } from "./input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, RegisterSchema } from "@/schemas/register-schema";


export const RegisterForm = () => {
    const {register, handleSubmit , formState: { errors }} = useForm<RegisterSchema>({
        resolver: zodResolver(registerSchema)
    })  

    function onSubmit(data: RegisterSchema){
        console.log("submit", data)
    }

    return(
       <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col place-content-around">
            <div className="flex flex-col items-end">
                <AuthInput type="text" placeholder="Name" {...register("name")}/>
                {errors?.name && (
                    <span className="text-red-400 text-sm mt-2 self-end w-full pl-8">
                        {errors?.name?.message}
                    </span>
                )}
                <AuthInput type="email" placeholder="Email" {...register("email")}/>
                {errors?.email && (
                    <span className="text-red-400 text-sm mt-2 self-end w-full pl-8">
                        {errors?.email?.message}
                    </span>
                )}
                <AuthInput type="password" placeholder="Password" {...register("password")}/>
                {errors?.password && (
                    <span className="text-red-400 text-sm mt-2 self-end w-full pl-8">
                        {errors?.password?.message}
                    </span>
                )}
            </div>
            <div className="flex items-center place-content-center gap-5 mt-10 mb-10">
                <AuthButton text="Register"/>
                <ArrowRight className="text-secondary w-6 h-5"/>
            </div>      
        </form>
    )
}