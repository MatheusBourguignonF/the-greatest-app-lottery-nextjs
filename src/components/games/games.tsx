"use client"

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "../svg/arrow-right-green";


export const GameSection = (props: IProps) => {
  const {games} = props
  const [selectedGame, setSelectedGame] = useState<string | null>(null)

  function handleFilter(type:string){
    if (selectedGame === type){
      setSelectedGame(null)
    } else {
      setSelectedGame(type)
    }
  }

  let filteredGames: IGame[]

  if (selectedGame) {
    filteredGames = games.types.filter((game) => game.type === selectedGame)
  } else {
    filteredGames = games.types
  }

  return (
    <div>
      <section className="flex gap-11 items-center ml-28">
        <h2 className="italic font-bold text-primary text-[24px]">RECENT GAMES</h2>
        <p className="text-[#868686]">Filters</p>

        {games.types.map((game:IGame ) => {
          return (
            <div key={game.type}>
              <button onClick={() => handleFilter(game.type)} className="border-2 rounded-full w-28 h-8 italic font-bold text-[14px] transition"
                style={{borderColor: game.color,backgroundColor: selectedGame === game.type ? game.color : "#fff",color:selectedGame === game.type ? "#fff" : game.color,}}>{game.type}</button>
            </div>
          )
        })}
        
        <div className="flex flex-1 items-center justify-end gap-2.5 mr-28">
          <Link href={'/new_bet'} className="text-[24px] text-secondary font-bold italic">New bet</Link>
          <ArrowRight className="w-6 h-5 text-secondary" />
        </div>
      </section>
      <div className="flex flex-col gap-8 mt-10 ml-28">

        {filteredGames.map((game: IGame) => (
          <section className="flex" key={game.type}>
            <div className="min-w-1.5 min-h-24 rounded-full" style={{ background: game.color }}></div>
            <div className="flex flex-col items-start justify-evenly ml-3.5">
              <div className="grid grid-cols-2">
                <h3 className="text-[20px] text-[#868686] italic font-bold">
                  {Array.from({length: game.range})
                    .map((_, index) => index + 1)
                    .join(", ")
                  }
                </h3>
              </div>
              <p className="italic text-[#868686]">30/11/2020 - (R$ {game.price.toFixed(2).replace(".", ",")})</p>
              <h3 className="font-bold italic text-[20px]" style={{ color: game.color }}>{game.type}</h3>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}