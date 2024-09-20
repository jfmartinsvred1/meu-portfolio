import { Colors } from "../../App"
import './text.css'

type TextProps={
    text:string,
    colors:Colors,
    type:string
}
const Text = ({text,colors, type}:TextProps) =>{
    return(
        type==='text'?
        <p className={"user-select-none text-break text-sobre text-"+colors.texts}>
            {text}
        </p>
        :
        <h4 className={'user-select-none text-'+colors.titles}>{text}</h4>
    )
}
export default Text