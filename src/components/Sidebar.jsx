import React from 'react'
import { RiTwitterLine, } from 'react-icons/ri'
import { FiLinkedin, FiGithub } from 'react-icons/fi'
import Title from './Title'
import About from './About'
import Work from './Work'
import DetailWork from './DetailWork'
import Contact from './Contact'


const Sidebar = () => {
    return (
        <div id='sidebar'>
            <main>
                <a href="https://github.com/vinayakdhaybar09" target={'blank'}><FiGithub /></a>
                <a href="https://www.linkedin.com/in/vinayak-dhaybar-8563121b0/" target={'blank'}><FiLinkedin /></a>
                <a href="/"><RiTwitterLine /></a>
            </main>
            <article>
                <Title />
                <About />
                <DetailWork />
                <Work />
                <Contact />
            </article>
            <section>
                <a href="mailto:vinayakdhaybar0910@gmail.com">
                    vinayakdhaybar0910@gmail.com
                </a>
            </section>
        </div>
    )
}

export default Sidebar