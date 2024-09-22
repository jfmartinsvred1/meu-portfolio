import { useState } from "react"
import { Colors } from "../../App"
import { ReposGit } from "../../types"
import Text from "../text"
import './repo.css'

type RepoProps = {
    repo: ReposGit,
    showMoreRepo: (repo: ReposGit) => void,
    colors: Colors

}


const Repo = ({ repo, showMoreRepo, colors }: RepoProps) => {
    const [photo, setPhoto] = useState(0);
    function updatePhoto(number: number) {
        const max = repo.photo.length;
        if (photo === (max - 1) && number === +1) {
            setPhoto(0)
            return
        }
        if (photo === 0 && number === -1) {
            setPhoto(max - 1)
            return
        }
        setPhoto(photo + number)
    }
    return (
        <>
            <div onClick={() => { showMoreRepo(repo) }} className={"shadow p-3 mb-5 gap-4 rounded repo d-flex flex-column justify-content-center align-items-center bg-" + colors.containers + " text-" + colors.texts}>
                <h5 className="text-break">{repo.name}</h5>
                <a className={"linkRepo text-decoration-none text-" + colors.texts} target='_blank' href={repo.html_url}>Ir para o repo</a>
                <Text colors={colors} text={repo.description} type="text" />
                {repo.photo.length > 0 &&
                    <div className="imgs">
                        <p onClick={() => { updatePhoto(-1) }} className={"user-select-none text-" + colors.texts + " selectorPhoto"}>{"<"}</p>
                        <img width="512px" src={repo.photo[photo]} alt="Foto Do Projeto" />
                        <p onClick={() => { updatePhoto(+1) }} className={"user-select-none text-" + colors.texts + " selectorPhoto"}>{">"}</p>
                    </div>
                }
                <p>Linguagem: {repo.language}</p>

            </div>
        </>

    )
}
export default Repo