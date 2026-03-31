

export default function Card({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return(
        <div className="flex flex-col items-center gap-7">
            <h2 className="text-4xl text-[#707070] font-bold italic">{title}</h2>
            <div className="w-96 min-h-45 bg-[#FFFFFF] border-[#DDDDDD] border rounded-2xl shadow-[0px_3px_25px_#00000014] ">
            {children}
            </div>     
        </div>
        
    )
}