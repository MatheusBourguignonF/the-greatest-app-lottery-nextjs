interface IAuthButton {
    text: string;
}

export const AuthButton = (props:IAuthButton) => {   
    const {text} = props 
    return(
        <button className="text-4xl font-bold text-secondary italic">{text}</button>
    )

}