
interface ButtonProps{
    children:string
    onClickFunction:() => void
    color:string
}


//              (props:ButtonProps)
const Button = ({children,onClickFunction, color}:ButtonProps) => {
  return (
    <>

<button className={"btn btn-" + color} onClick={onClickFunction}>{children}</button>


    </>
  )
}

export default Button