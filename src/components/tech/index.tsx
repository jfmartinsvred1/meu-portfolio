import { Colors, TechO } from "../../App"
type TechProps={
    tech:TechO,
    colors:Colors
}
const Tech = ({tech,colors}:TechProps ) =>{

    return(
        <div className="tech d-flex flex-column align-items-center gap-2">
            <img width="64px" src={tech.icon} alt={tech.name} />
            <p className={"text-"+colors.texts}>{tech.name}</p>
        </div>
    )
}
export default Tech