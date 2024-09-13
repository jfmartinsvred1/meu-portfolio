import { TechO } from "../../App"
import Tech from "../tech"
type TechsProps={
    techsO:TechO[]
}
const Techs = ({techsO}:TechsProps) =>{
    return(
        <div className="d-flex flex-wrap gap-3">
            {techsO.map((t, index)=>(
                <Tech tech={t} key={index}/>
            ))}
        </div>
    )
}
export default Techs