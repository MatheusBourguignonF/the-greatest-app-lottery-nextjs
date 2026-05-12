'use client'

import { AuthCard } from "@/components/auth/auth-card/card";
import { LoginForm } from "@/components/auth/auth-card/login-form";
import { ArrowRight } from "@/components/svg/arrow-right-green";
import { IUser } from "@/types/user";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function LoginPage() {  

const  [user, setUser] = useState<IUser>({
  name: "",
  email: "",
  password: "",
})

const mockUser: IUser = {
  name:"Matheus",
  email: "matheusbourg@hotmail.com",
  password: "Matheus2610!",
};

const [message, setMessage] = useState<string>("")

const router = useRouter()

function handleLogin() {
  if(user.email === mockUser.email && user.password === mockUser.password){
    setMessage("Logged in successfully!")
    
    setTimeout(() => {
      router.push("/")
    }, 1000)
  } else {
    setMessage("Invalid username or password!");
  }
}
  return (
    <div>
       <AuthCard title="Authentication">
        <LoginForm user={user} setUser={setUser} onLogin={handleLogin} message={message}/>
      </AuthCard>
      <div className="flex items-center justify-center gap-5 mt-8">
        <Link href={'/authentication/register'} className="text-primary font-bold italic text-4xl">Sign Up</Link>
        <ArrowRight className="text-[#535351] w-6 h-5"/>
      </div>
    </div>
  );
}