import { TechO } from "../../App"

type TechProps={
    tech:TechO
}
const Tech = ({tech}:TechProps ) =>{
    return(
        <div>
            <img width="64px" src={tech.icon} alt={tech.name} />
        </div>
    )
}
export default Tech