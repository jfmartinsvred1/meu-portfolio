import { Colors } from "../../App";
import { CertificationT } from "../../types"
import './Certification.css'
import 'animate.css';
type CertificationProps = {
    certification: CertificationT,
    colors: Colors
}
const Certification = ({ certification, colors }: CertificationProps) => {

    function handleClick() {
        if (certification.link) {
            window.open(certification.link, '_blank');
        } else {
            console.error('Link não definido');
        }
    }
    const linkAlura="https://www.alura.com.br/assets/img/alura-logo.1570550707.svg";
    const linkUdemy="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
    const image=certification.organization==="Alura"?linkAlura:certification.organization==="Udemy"?linkUdemy:""
    return (
        <div onClick={() => handleClick()} className={"d-flex flex-column w-25 p-3 rounded-2 certification bg-" + colors.containers}>
                <h6 className={"user-select-none text-break text-" + colors.texts}>{certification.name}</h6>
                <img width={certification.organization==="Alura"?"32px":"48px"} src={image} alt={"Logo da "+certification.organization} />

        </div>
    )
}
export default Certification