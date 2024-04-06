import { useEffect, useState } from "react";

import styles from "./RepoList.module.css"

const ReposList = ({userName}) => {

    const [repos, setRepos] =useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() =>{
        setIsLoading(true)
        fetch(`https://api.github.com/users/${userName}/repos`)
        .then(resp => resp.json())
        .then(resJson =>{
            setIsLoading(false)
            setRepos(resJson);
        } )
    }, [userName]);

    return(
        
        <div className="container">
            {console.log(repos)}
            { isLoading ? (
                <h1>Carregando...</h1>
            ):( 
                repos.length > 0 ? (
                    <ul className={styles.lista}>
                        {/* {repos.map(repositorio => ( */}
                        {repos.map(({id, name, language, html_url}) => (    
                            <li className={styles.listItem} key={id}>
                                <div className={styles.itemName}><b >Nome: </b> {name} </div>
                                <div className={styles.itemLanguage}><b>Linguagem: </b> {language} </div>
                                <a target="_blank" href={html_url}  className={styles.itemLink}>Visitar no Github</a>
                            </li>
                        )
                        )}
                    </ul>
                ): (
                    <h1>Usuário {userName} não localizado</h1>
                )

            )}    
        </div>
    )
}


export default ReposList