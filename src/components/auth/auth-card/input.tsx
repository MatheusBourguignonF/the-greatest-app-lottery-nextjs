interface Props {
    placeholder: string
    type: string
}

export default function AuthInput({
    placeholder,
    type = "text",
}: Props){
    return(
        <input type={type} placeholder={placeholder} className="border-b-2 border-[#dddddd86] border- w-full h-20 placeholder-[#9D9D9D] placeholder:font-bold p-8 placeholder:italic focus:outline-none text-[#9D9D9D] font-bold"/>
    )
}