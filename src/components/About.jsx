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
          <p>Over <span>3.5+ years</span> I've taken features from requirements to production release, working closely with product, design, backend, and QA teams. I care as much about performance, reliability, and clean architecture as I do about the interface. See what I've shipped in the Experience section.</p>
          <p><span>Let's connect</span> and discuss exciting projects, ideas, and opportunities to build something meaningful. If you'd like to collaborate or just talk shop, feel free to <span>reach out.</span></p>
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