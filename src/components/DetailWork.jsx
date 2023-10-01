import React from 'react'
import mangoproject from '../assets/mangoproject.png'
import upannaproject from '../assets/upannaproject.png'
import { FiGithub, FiExternalLink, FiLinkedin } from "react-icons/fi";
import { FaFigma } from 'react-icons/fa'


const DetailWork = () => {
    return (
        <div id='detailwork'>
            <header>
                <h3>02. <span>Some Things I’ve Built</span></h3>
            </header>
            <section>
                <aside>
                    <img src={mangoproject} alt="profile" />
                </aside>
                <main>
                    <p>Featured Project</p>
                    <p>aamango</p>
                    <p>This is the website design I made for a friend of mine who is a big seller of mangoes and <span>wants to expand his business online.</span> You can order fresh, juicy mangoes through this app, and they will be <span>delivered</span> to your house.</p>
                    <div>
                        <span>Figma</span>
                        <span>React</span>
                        <span>SCSS</span>
                    </div>
                    <div>
                        <a href="https://www.figma.com/proto/N6nTPBJHFlJBEEsp57WD2s/Untitled?page-id=0%3A1&node-id=1%3A2&viewport=92%2C254%2C0.1&scaling=scale-down&starting-point-node-id=1%3A2" target={'blank'}><FaFigma /></a>
                        <a href="https://www.figma.com/proto/N6nTPBJHFlJBEEsp57WD2s/Untitled?page-id=0%3A1&node-id=1%3A2&viewport=92%2C254%2C0.1&scaling=scale-down&starting-point-node-id=1%3A2" target={'blank'}><FiExternalLink /></a>
                    </div>
                </main>
            </section>
            <section>
                <main>
                    <p>Featured Project</p>
                    <p>upanna</p>
                    <p>This project is based on the <span>booming food industry.</span> This is an user side application. where you can place a weekly or monthly subscription order for tiffin.</p>
                    <div>
                        <span>Figma</span>
                        <span>React Native</span>
                        <span>Firebase</span>
                    </div>
                    <div>
                        <a href="https://github.com/vinayakdhaybar09/Upanna" target={'blank'}><FiGithub /></a>
                        <a href="https://www.linkedin.com/posts/vinayak-dhaybar-8563121b0_react-community-linkedin-activity-6988875699948253184--9N8?utm_source=share&utm_medium=member_desktop" target={'blank'}><FiLinkedin /></a>
                    </div>
                </main>
                <aside>
                    <img src={upannaproject} alt="profile" />
                </aside>
            </section>

        </div>
    )
}

export default DetailWork