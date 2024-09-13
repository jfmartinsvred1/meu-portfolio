import { Colors } from "../../App"
import { CertificationT } from "../../types"
import Certification from "../certification"


type CertificationsProps={
    certifications:CertificationT[]
    colors:Colors
}

const Certifications = ({certifications,colors}:CertificationsProps) =>{
    return(
        <div className="d-flex flex-wrap gap-4 justify-content-around">
            {certifications.map((c,index)=>(
                <Certification colors={colors} certification={c} key={index}/>
            ))}
        </div>
    )
}
export default Certifications