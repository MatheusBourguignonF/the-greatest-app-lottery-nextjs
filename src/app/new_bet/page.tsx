import Bet from "@/components/bet/page"
import { Footer } from "@/components/footer/footer"
import { Header } from "@/components/header/header"

async function Loadingdata():Promise<IGameResponse>{
    const response = await fetch("http://localhost:3000/api/games", {
        cache: 'no-store'}) 
    return response.json()
}

export default async function NewBet(){
    const games:IGameResponse = await Loadingdata()
    return(
        <div className="min-h-screen flex flex-col">
            <Header showHome></Header>
            <main className="flex-1">
                <Bet games={games}></Bet>
            </main>
            <Footer></Footer>
        </div>
    )
}