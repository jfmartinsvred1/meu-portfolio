import { useState } from "react"
import { Colors } from "../../App"
import { CertificationT } from "../../types"
import Certification from "../certification"
import Text from "../text"
import './certifications.css'


type CertificationsProps = {
    certifications: CertificationT[]
    colors: Colors,
}

const Certifications = ({ certifications, colors }: CertificationsProps) => {
    const maxPerPage = 5;
    const [page, setPage] = useState(0);
    const certificationsPagination = certifications.filter((c) => c.id <= maxPerPage * (page + 1) && c.id >= maxPerPage * (page) + 1);

    function updatePage(number: number) {
        if (page === 0 && number === -1) {
            return
        }
        const max = certifications.length;
        if ((max === maxPerPage * (page + 1) || Number((max / maxPerPage).toFixed(0)) === page + 1) && number === +1) {
            return
        }
        setPage(page + number)

    }

    return (
        <>
            <div className="d-flex flex-wrap gap-4 justify-content-around">
                {certificationsPagination.map((c, index) => (
                    <Certification colors={colors} certification={c} key={index} />
                ))}
            </div>
            <Text text="Ao clicar no curso específico, vai para página do certificado." colors={colors} type='text' />
            <div className="d-flex gap-4">
                <p onClick={() => { updatePage(-1) }} className={"user-select-none text-" + colors.texts + " seletorPage"}>{"<"}</p>
                <p className={"user-select-none text-" + colors.texts}>{page + 1}</p>
                <p onClick={() => { updatePage(+1) }} className={"user-select-none text-" + colors.texts + " seletorPage"}>{">"}</p>
            </div>
        </>
    )
}
export default Certifications