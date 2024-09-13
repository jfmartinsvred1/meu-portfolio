import { CertificationT } from "../../types"
import './Certification.css'
import 'animate.css';
type CertificationProps={
    certification:CertificationT
}
const Certification = ({certification}:CertificationProps) =>{
    return(
        <div className="d-flex flex-column w-25 bg-dark p-3 rounded-2 certification ">
            <h6 className="text-light user-select-none text-break">{certification.name}</h6>
        </div>
    )
}
export default Certification