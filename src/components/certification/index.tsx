import { Colors } from "../../App";
import { CertificationT } from "../../types"
import './Certification.css'
import 'animate.css';
type CertificationProps={
    certification:CertificationT,
    colors:Colors
}
const Certification = ({certification,colors}:CertificationProps) =>{

    
    function handleClick() {
        if (certification.link) {
            window.open(certification.link, '_blank');
        } else {
            console.error('Link não definido');
        }
    }
    return(
        <div onClick={()=>handleClick()} className={"d-flex flex-column w-25 p-3 rounded-2 certification bg-"+colors.containers}>
            <h6 className={"user-select-none text-break text-"+colors.texts}>{certification.name}</h6>
        </div>
    )
}
export default Certification