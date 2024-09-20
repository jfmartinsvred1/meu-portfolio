import { Colors, TechO } from "../../App"
import Tech from "../tech"
import './Techs.css'
type TechsProps={
    techsO:TechO[],
    colors:Colors
}
const Techs = ({techsO,colors}:TechsProps) =>{
    return(
        <div className="d-flex flex-wrap gap-5 techs">
            {techsO.map((t, index)=>(
                <Tech colors={colors} tech={t} key={index}/>
            ))}
        </div>
    )
}
export default Techs