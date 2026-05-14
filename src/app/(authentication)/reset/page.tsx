import { AuthCard } from "@/components/auth/auth-card/card";
import { ResetForm } from "@/components/auth/auth-card/reset-form";
import { ArrowRight } from "@/components/svg/arrow-right-green";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "TGL - Reset Password",
    description: "Resete a senha de sua conta no The Greatest App LOTTERY",
    keywords: ["money, game, lottery, dupla sena, mega sena, lotofacil, lotomania, reset, auth, authentication, account"],
    openGraph: {
        title: "TGL - Reset Password",
        description: "Resete a senha de sua conta no The Greatest App LOTTERY",
        type: "website",
        url: "https://the-greatest-app-lotte-git-bff5b3-matheusbourguignonfs-projects.vercel.app/reset",
        images: ["images/tgl2.png"],
    },
    twitter:{
        card:"summary_large_image",
        title: "TGL - Reset Password",
        description: "Resete a senha de sua conta no The Greatest App LOTTERY",
        images: "images/tgl2.png"
    },
    alternates: {
        canonical: "https://the-greatest-app-lotte-git-bff5b3-matheusbourguignonfs-projects.vercel.app/reset", 
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

export default function Reset(){
    return(
        <div>
            <AuthCard title={"Reset Password"}>
                <ResetForm/>
            </AuthCard>
            <div className="flex items-center place-content-center gap-5 mt-8">
                <ArrowRight className="text-[#535351] w-6 h-5 rotate-180"/>
                <Link href={'/authentication/login'} className="text-[#707070] font-bold italic text-4xl">Back</Link>    
            </div>
        </div>
        
    )   
}