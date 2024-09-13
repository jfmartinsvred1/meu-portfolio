import { Colors } from "../../App"
import { ReposGit } from "../../types"
import Repo from "../repo"
import './repos.css'

type ReposProps = {
    repos: ReposGit[],
    theme:string,
    colors:Colors
}

const Repos = ({ repos, theme, colors }: ReposProps) => {

    function showMoreRepo() {
        //Abrir outra aba com o repo especifico
        console.log('Indo pra repo...'+theme)
    }
    return (
        <>
            <div className="d-flex justify-content-center p-5 align-items-center gap-5 flex-wrap">
                {repos.map((repo, index) => (
                    <Repo colors={colors} showMoreRepo={showMoreRepo} key={index} repo={repo} />
                ))}
            </div>
        </>
    )
}
export default Repos