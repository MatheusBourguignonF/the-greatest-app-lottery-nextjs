import { AuthHero } from "@/components/auth/auth-hero/auth-hero";
import { Footer } from "@/components/footer/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "TGL",
    description: "The Greatest App LOTTERY",
    keywords: ["money, game, lottery, dupla sena, mega sena, lotofacil, lotomania"],
    openGraph: {
        title: "TGL",
        description: "The Greatest App LOTTERY",
        type: "website",
        url: "https://TGL.com",
        images: "images/tgl2.png",
    },
    twitter:{
        card:"summary_large_image",
        title: "TGL",
        description: "The Greatest App LOTTERY",
        images: "images/tgl2.png"
    },
    alternates: {
        canonical: "https://TGL.com", 
    }
}

export default function AuthLayout ({children,}: {children: React.ReactNode}) {
    return (
        
        <div className="min-h-screen flex flex-col bg-[#F7F7F7]">
            <main className="flex flex-1 place-content-around items-center">
                <AuthHero/>
                <div>
                    {children}
                </div>
            </main>
            <footer className="border-t-2 border-[#EBEBEB] text-center">
                <Footer></Footer>
            </footer>
        </div>
        
    )
}