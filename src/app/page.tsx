import { Footer } from "@/components/footer/footer";
import { GameSection } from "@/components/games/games";
import { Header } from "@/components/header/header";

async function LoadingData():Promise<IGameResponse>{
    const response = await fetch("http://localhost:3000/api/games", {
        cache: 'no-store'})
    return response.json()
}

export default async function Home(){
    const games:IGameResponse = await LoadingData()
    return(
        <div className="flex flex-col min-h-screen">
            <Header></Header>
            <main className="flex-1 mt-16">
                <GameSection games={games}></GameSection>
            </main>
            <Footer></Footer>
        </div>
    )
}