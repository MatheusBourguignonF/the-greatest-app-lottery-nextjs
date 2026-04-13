interface IAuthInput {
    placeholder: string;
    type: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AuthInput = (props:IAuthInput) => {
    const {placeholder, type, value, onChange} = props;
    return(
        <input value={value ?? ""} onChange={onChange} type={type} placeholder={placeholder} className="border-b-2 border-[#dddddd86] border- w-full h-20 placeholder-[#9D9D9D] placeholder:font-bold p-8 placeholder:italic focus:outline-none text-[#9D9D9D] font-bold"/>
    )
}