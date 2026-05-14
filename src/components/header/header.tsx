import Link from "next/link"
import { ArrowRight } from "../svg/arrow-right-green"

export const Header = ({showHome = false}) => {
    return(
        <div className="flex items-center justify-between border-b-2 border-[#EBEBEB]">
            <div className="flex items-center gap-19">
                <div>
                    <h1 className="text-primary text-[44px] italic font-bold ml-28">TGL</h1>
                    <div className="relative top-1 bg-secondary w-28 h-1.5 rounded-[6] ml-25"></div>
                </div>
                <nav className="flex justify-start">
                    { showHome && (<Link href={"/"} className="font-bold italic text-[#707070] text-[20px]">Home</Link>)}
                </nav>
            </div>
            <nav className="flex items-center gap-14 mr-28">
                <Link className="text-[20px] text-primary italic font-bold" href={''}>Account</Link>
                <div className="flex items-center gap-5">
                    <Link className="text-[20px] text-primary italic font-bold" href={''}>Sair</Link>
                    <ArrowRight className="w-5 h-4"></ArrowRight>
                </div>
            </nav>
        </div>
    )

}   