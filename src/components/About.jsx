import React from 'react'
import profile from '../assets/profile.png'

const About = () => {

  return (
    <div id='about'>
      <header>
        <h3>01. <span>About Me</span></h3>
      </header>
      <section>
        <main>
          <p>Hello! My name is Vinayak and I enjoy creating things that live on the internet.</p>
          <p>I'm a <span>Frontend Web Developer</span> building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.</p>
          <p><span>I'm open to Job opportunities</span> where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <span>contact me.</span></p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <ul>
            <li>React</li>
            <li>JavaScript (ES6+) </li>
            <li>Figma</li>
            <li>Node.js</li>
          </ul>
        </main>
        <aside>
          <img src={profile} alt="profile" />
          <span></span>
        </aside>
      </section>
    </div>
  )
}

export default About