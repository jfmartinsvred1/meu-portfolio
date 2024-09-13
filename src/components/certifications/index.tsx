import { CertificationT } from "../../types"
import Certification from "../certification"


type CertificationsProps={
    certifications:CertificationT[]
}

const Certifications = ({certifications}:CertificationsProps) =>{
    return(
        <div className="d-flex flex-wrap gap-4 justify-content-around">
            {certifications.map((c,index)=>(
                <Certification certification={c} key={index}/>
            ))}
        </div>
    )
}
export default Certifications