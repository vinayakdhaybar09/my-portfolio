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
          <p>I'm a <span>Full-Stack Engineer</span> with 3.5+ years building production apps across mobile, web and TV that drive the success of the overall product. Check out the production systems I have worked on in the Experience section.</p>
          <p><span>I'm open to Job opportunities</span> where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <span>contact me.</span></p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <ul>
            <li>React</li>
            <li>React Native</li>
            <li>Next.js</li>
            <li>TypeScript</li>
            <li>Node.js</li>
            <li>Python</li>
            <li>LangChain / LangGraph</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>AWS</li>
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