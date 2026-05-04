"use client"

import { useState } from "react"
import { ArrowRight } from "../svg/arrow-right-green"
import { Trash } from "../svg/trash"
import { CartIcon } from "../svg/cart"

interface ICartItem {
  id: number
  type: string
  number: number[]
  description: string
  price: number
  color: string
}

export default function Bet({games}:IProps) {

    const [selectedGame, setSelectedGame] = useState<string>(games.types[0].type)
    const [selectedNumbers, setSelectedNumbers] = useState<number[]>([])
    const [cart, setCart] = useState<ICartItem[]>([])

    const totalValue = cart.reduce((sum, item) => sum + item.price, 0)


    function handleFilter(type:string){
        if(selectedGame === type){
            return
        } else {
            setSelectedGame(type)
        }
    }

    let filteredGames: IGame[]

    if(selectedGame){
        filteredGames = games.types.filter((game:IGame) => game.type === selectedGame)
    }  else{ filteredGames = games.types
        }

    const currentGame = filteredGames[0]

    function selectsNumbers(number: number) {
        if (selectedNumbers.includes(number)) {
            setSelectedNumbers(
                selectedNumbers.filter((item) => item !== number)
            )
        }
        else if(selectedNumbers.length >= currentGame["max-number"] ){
            return alert("Não é possível selecionar mais números")
        }     else {
                setSelectedNumbers([...selectedNumbers, number])
                }
    }        
    
    function clearNumbers(){
        setSelectedNumbers([])    
    }

   function completeGame(){
    let newNumbers = [...selectedNumbers]
    const max = currentGame["max-number"]
    const range = currentGame.range

    if(selectedNumbers.length === max){   
        newNumbers = []
    }

    while(newNumbers.length < max){
        const randomNumber = Math.floor(Math.random() * range) +1

        if(!newNumbers.includes(randomNumber)){
            newNumbers.push(randomNumber)
        }
    }
    setSelectedNumbers(newNumbers)
   }

   function addToCard(){
    const game = currentGame

    if(selectedNumbers.length < currentGame["max-number"]){
        return alert("Selecione todos os números antes de adiciona-los ao carrinho")
    }

    const newBet:ICartItem = {
        id: Date.now(),
        type: game.type,
        number: selectedNumbers,
        description: game.description,
        price: game.price,
        color: game.color,
    }

    setCart([...cart, newBet])

    clearNumbers()

   }

   function removeGame(id:number){
        const updateCart = cart.filter(item => item.id !== id)
        setCart(updateCart)
   }

    return(
        <div className="flex gap-100 ml-28 mb-36">
            <section className="mt-16">
                <div>
                    <h2 className="text-primary text-2xl italic"><b>NEW BET</b> FOR MEGA-SENA</h2>
                    <h3 className="text-[#868686] font-bold text-[17px] mt-8">choose a game</h3>
                </div>
                <div className="flex gap-11 mt-5">    
                    {games.types.map((game:IGame) => {
                        return(
                            <button key={game.type} onClick={() => {handleFilter(game.type); clearNumbers()}} className="w-28 h-8 border-2 rounded-full text-[14px] font-bold italic" style={{borderColor: game.color, backgroundColor: selectedGame === game.type ? game.color : "#fff", color: selectedGame === game.type ? "#fff" : game.color}}>{game.type}</button>
                        )
                    })}
                </div>
                <div className="mt-7 w-[740]">
                    <h3 className="text-[17px] text-[#868686] font-bold italic">Fill your bet</h3>

                    {filteredGames.map((game:IGame) => {
                        return(
                            <p key={game.type} className="text-[17px] text-[#868686] italic">{game.description}</p>
                        )
                    })}
                </div>  
                <div className="flex flex-wrap w-[740] mt-7 gap-5">
                    {filteredGames.map((game:IGame) =>    
                        Array.from({length: game.range}) 
                        .map((_,index) => {
                            const number = index + 1

                            let backgroundColor

                            if(selectedNumbers.includes(number)){
                                backgroundColor = game.color
                            } else if(selectedNumbers.length === 0){
                                backgroundColor = "#ADC0C4"
                            } else {
                                backgroundColor = "#ADC0C4"
                            }

                            return( 
                                <button key={number}  onClick={() => selectsNumbers(number)} style={{backgroundColor}} className="bg-[#ADC0C4] rounded-full min-w-16 min-h-16 text-white font-bold text-[20px]">{number}
                                </button>
                            )
                        })
                    )}
                </div>
                <div className="flex items-center gap-45">
                    <div className="flex gap-6">
                        <button onClick={completeGame} className="border-[1] border-[#27C383] rounded-[10] text-[#27C383] text-[16px] w-40 h-13 mt-11 font-medium">Complete Game</button>
                        <button onClick={() => clearNumbers()} className="border-[1] border-[#27C383] rounded-[10] text-[#27C383] text-[16px] w-40 h-13 mt-11 font-medium">Clear Game</button>
                    </div>
                    <button onClick={addToCard} className="bg-[#27C383] border-[1] border-[#27C383] rounded-[10] text-white text-[16px] w-52 h-13 mt-11 flex items-center justify-center gap-7"><CartIcon className="w-7 h-6 text-white"></CartIcon> Add to cart</button>
                </div>
            </section>
            <aside className="flex flex-col border-[1] border-[#E2E2E2] rounded-[10] w-80 h-[500] mt-10">
                <div className="flex flex-col flex-1 overflow-hidden">
                    <h2 className="text-primary text-[24px] font-bold italic mt-8 ml-6 mb-9">CART</h2>
                    <div className="flex-1 overflow-y-auto flex flex-col gap-6">
                        { cart.length === 0 ? (
                            <p className="ml-6 text-[#868686]">Seu carrinho está vazio</p>
                        ) : 
                            cart.map((item) => (
                                <div className="flex gap-3.5 items-center mr-4" key={item.id}>
                                    <Trash onClick={() => removeGame(item.id)} className="w-6 h-8 ml-6 shrink-0"></Trash>
                                    <div className="border-l-4 rounded-[4]" style={{borderLeftColor: item.color}}>
                                        <h3 className="text-[#868686] text-[15px] font-bold italic ml-3">{item.number.join(", ")}</h3>
                                        <div className="flex gap-3.5">
                                            <h3 className="text-[16px] font-bold italic ml-3" style={{color: item.color}}>{item.type}</h3>
                                            <p className="text-[#868686] text-[16px]">R$ {item.price.toFixed(2).replace(".",",")}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                    <h2 className="text-[#707070] text-[24px] ml-6 mb-12 mt-10"><b className="italic">CART</b>  TOTAL: R$ {totalValue.toFixed(2).replace(".",",")}</h2>
                </div>
                <div className="flex items-center gap-5 justify-center bg-[#F4F4F4] h-24 rounded-b-[10] border-t-[1] border-[#E2E2E2] shrink-0">
                    <h1 className="text-[#27C383] text-4xl font-bold italic">Save</h1>
                    <ArrowRight className="w-6 h-5 text-[#27C383] "></ArrowRight>
                </div>
            </aside>
        </div>
    )
}