import { ReactNode } from "react";

interface IAuthCard {
    title: string; 
    children: ReactNode;
} 

export const AuthCard = (props:IAuthCard) => {
    const {title, children} = props
    return(
        <div className="flex flex-col items-center gap-7">
            <h2 className="text-4xl text-primary font-bold italic">{title}</h2>
            <div className="w-96 min-h-45 bg-[#FFFFFF] border-[#DDDDDD] border rounded-2xl shadow-[0px_3px_25px_#00000014] ">
            {children}
            </div>     
        </div>
        
    )}
