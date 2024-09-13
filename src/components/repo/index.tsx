import { ReposGit } from "../../types"
import './repo.css'

type RepoProps = {
    repo: ReposGit,
    showMoreRepo:(repo:ReposGit)=>void

}

const Repo = ({ repo,showMoreRepo }: RepoProps) => {
    return (
        <>
            <div onClick={(e)=>{showMoreRepo(repo)}} className="bg-dark shadow p-3 mb-5 gap-4 rounded repo d-flex flex-column text-light justify-content-center align-items-center">
                <h5 className="text-break">{repo.name}</h5>
                <a className="linkRepo text-light" href={repo.html_url}>Ir para o repo</a>
                <p>Linguagem: {repo.language}</p>
            </div>
        </>
        
    )
}
export default Repo