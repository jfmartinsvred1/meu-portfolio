import { useState } from "react"
import { ReposGit } from "../../types"
import Repo from "../repo"
import './repos.css'

type ReposProps = {
    repos: ReposGit[],
    theme:string
}

const Repos = ({ repos, theme }: ReposProps) => {

    function showMoreRepo() {
        //Abrir outra aba com o repo especifico
        console.log('Indo pra repo...')
    }
    return (
        <>
            <div className="d-flex justify-content-center p-5 align-items-center gap-5 flex-wrap">
                {repos.map((repo, index) => (
                    <Repo showMoreRepo={showMoreRepo} key={index} repo={repo} />
                ))}
            </div>
        </>
    )
}
export default Repos