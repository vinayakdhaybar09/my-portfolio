import React from 'react'
import data from "../assets/data.json";
import { FiGithub, FiExternalLink, FiLinkedin } from "react-icons/fi";
import { CiFolderOn } from "react-icons/ci";



const Work = () => {
    return (
        <div id='work'>
            <header>
                <p>Notewrothey Projects</p>
                <p>web development & designs</p>
            </header>
            <section>
                <main>
                    {
                        data.projects.map((item, index) => {
                            return (
                                <div>
                                    <header>
                                        <CiFolderOn />
                                        <aside>
                                            <a href={item.gitlink} target={'blank'}>{item.technology[0]=== 'Figma' ? <FiLinkedin /> : <FiGithub /> }</a>
                                            <a href={item.url} target={'blank'}><FiExternalLink /></a>
                                        </aside>
                                    </header>
                                    <section>
                                        <a href={item.url} target="_blank" rel="noopener noreferrer"><p>{item.title}</p></a>
                                        <p>{item.description}</p>
                                        <footer>
                                            <span>{item.technology[0]}</span>
                                            <span>{item.technology[1]}</span>
                                            <span>{item.technology[2]}</span>
                                        </footer>
                                    </section>
                                </div>
                            )
                        })
                    }
                </main>
            </section>
        </div>
    )
}

export default Work