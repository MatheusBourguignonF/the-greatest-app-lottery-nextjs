export default function AuthButton({
    text,
}: {
    text: string 
}) {    
    return(
        <button className="text-4xl font-bold text-[#B5C401] italic">{text}</button>
    )

}