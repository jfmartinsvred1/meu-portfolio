import { Colors } from "../../App"
import { ReposGit } from "../../types"
import './repo.css'

type RepoProps = {
    repo: ReposGit,
    showMoreRepo:(repo:ReposGit)=>void,
    colors:Colors

}


const Repo = ({ repo,showMoreRepo,colors }: RepoProps) => {
    return (
        <>
            <div onClick={()=>{showMoreRepo(repo)}} className={"shadow p-3 mb-5 gap-4 rounded repo d-flex flex-column justify-content-center align-items-center bg-"+colors.containers+" text-"+colors.texts}>
                <h5 className="text-break">{repo.name}</h5>
                <a className={"linkRepo text-decoration-none text-"+colors.texts} href={repo.html_url}>Ir para o repo</a>
                <p>Linguagem: {repo.language}</p>
            </div>
        </>
        
    )
}
export default Repo