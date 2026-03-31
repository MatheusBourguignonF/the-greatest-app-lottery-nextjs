import AuthHero from "@/components/auth/auth-hero/auth-hero";
import Footer from "@/components/footer/footer";

export default function AuthLayout({children,}: {children: React.ReactNode}){
    return (
        
        <div className="min-h-screen flex flex-col bg-[#F7F7F7]">
            <main className="flex flex-row  flex-1 place-content-around items-center">
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