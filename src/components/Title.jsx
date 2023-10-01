import React from 'react'
import resume from '../assets/resume.pdf'

const Title = () => {
  return (
    <div id='title'>
      <h1>Hi, my name is</h1>
      <h2>Vinayak Dhaybar.</h2>
      <h3>I build things for the web.</h3>
      <p>I'm a web developer and designer from pune. I like to craft solid and scalable <span>frontend products </span>with great user experience.</p>
      <a href={resume} target={'blank'}>
        <button>Check out my resume!</button>
      </a>
    </div>
  )
}

export default Title