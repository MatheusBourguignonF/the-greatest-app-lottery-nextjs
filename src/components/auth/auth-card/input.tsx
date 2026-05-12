type TAuthInput = React.InputHTMLAttributes<HTMLInputElement>

export const AuthInput = (props:TAuthInput) => {
    
    return(
        <input {...props} className="border-b-2 border-[#dddddd86] w-full h-20 placeholder-[#9D9D9D] placeholder:font-bold p-8 placeholder:italic focus:outline-none text-[#9D9D9D] font-bold"/>
    )
}