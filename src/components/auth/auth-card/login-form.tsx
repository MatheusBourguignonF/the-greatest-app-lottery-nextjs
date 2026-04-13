"use client"

import { AuthInput } from "./input";
import { AuthButton } from "./button";
import { ArrowRight } from "@/components/svg/arrow-right-green";
import Link from "next/link";
import { IUser } from "@/types/user";
import { Dispatch } from "react";

interface ILoginForm{
    user: IUser;
    setUser: Dispatch<React.SetStateAction<IUser>>;
    onLogin: () => void; 
    message: string;
}

export const LoginForm = (props: ILoginForm) => {
    const {user, setUser, onLogin, message} = props
    return (
        <form onSubmit={(e) => {e.preventDefault(); onLogin();}} className="flex flex-col place-content-around">
            <div className="flex flex-col">
                <AuthInput value={user.email}  onChange={(e) => setUser({...user,email: e.target.value,})} type="email" placeholder="Email"/>
                <AuthInput value={user.password} onChange={(e) =>
            setUser({...user,password: e.target.value,})} type="password" placeholder="Password"/>
            {message && (
  <p className="flex ml-5 mt-4 text-red-500 italic">
    {message}
  </p>
)}              
                <div className="flex justify-end">
                    <Link href={'/authentication/reset'} className="text-[17px] text-[#C1C1C1] mr-7 mt-6 italic">I forgot my password</Link>
                </div> 
            </div>
            <div className="flex items-center place-content-center gap-5 mt-11 mb-10">
                <AuthButton text="Log in"/>
                <ArrowRight className="text-secondary w-6 h-5"/>
            </div>
        </form>
    )
}