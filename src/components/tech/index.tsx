import { TechO } from "../../App"
import './Tech.css'
type TechProps={
    tech:TechO
}
const Tech = ({tech}:TechProps ) =>{

    return(
        <div className="tech">
            <img width="64px" src={tech.icon} alt={tech.name} />
        </div>
    )
}
export default Tech