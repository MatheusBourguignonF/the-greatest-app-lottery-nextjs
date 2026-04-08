import { AuthCard } from "@/components/auth/auth-card/card";
import { LoginForm } from "@/components/auth/auth-card/login-form";
import { ArrowRight } from "@/components/svg/arrow-right-green";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "TGL - Login",
    description: "Entre em sua conta no The Greatest App LOTTERY",
    keywords: ["money, game, lottery, dupla sena, mega sena, lotofacil, lotomania, login, auth, authentication, account"],
    openGraph: {
        title: "TGL - Login",
        description: "Entre em sua conta no The Greatest App LOTTERY",
        type: "website",
        url: "https://the-greatest-app-lotte-git-bff5b3-matheusbourguignonfs-projects.vercel.app/login",
        images: ["images/tgl2.png"],
    },
    twitter:{
        card:"summary_large_image",
        title: "TGL - Login",
        description: "Entre em sua conta no The Greatest App LOTTERY",
        images: "images/tgl2.png"
    },
    alternates: {
        canonical: "https://the-greatest-app-lotte-git-bff5b3-matheusbourguignonfs-projects.vercel.app/login", 
    },
    robots: {
      index: false,
      follow: false,
      nocache: true,
      googleBot: {
        index: false,
        follow: false,
      }
    }
}

export default function LoginPage() {
  return (
    <div>
       <AuthCard title="Authentication">
        <LoginForm/>
      </AuthCard>
      <div className="flex items-center justify-center gap-5 mt-8">
        <Link href={'/authentication/register'} className="text-primary font-bold italic text-4xl">Sign Up</Link>
        <ArrowRight className="text-[#535351] w-6 h-5"/>
      </div>
    </div>
  );
}