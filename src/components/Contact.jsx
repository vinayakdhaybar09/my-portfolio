import React from "react";
import { RiTwitterLine } from "react-icons/ri";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { ReactAiChatBot } from "react-gemini-ai-chatbot";

const Contact = () => {
  return (
    <div id="contact">
      <main>
        <p>03. What's Next ?</p>
        <h1>Get In Touch</h1>
        <p>
          <span>I'm open to job opportunities</span> where I can contribute,
          learn and grow. If you have a good opportunity that matches my skills
          and experience, then don't hesitate to contact me.
        </p>
        <a href="mailto:vinayakdhaybar0910@gmail.com" target={"blank"}>
          <button>Say Hello</button>
        </a>
      </main>
      <section>
        <main>
          <a href="https://github.com/vinayakdhaybar09" target={"blank"}>
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/vinayak-dhaybar-8563121b0/"
            target={"blank"}
          >
            <FiLinkedin />
          </a>
          <a href="/">
            <RiTwitterLine />
          </a>
        </main>
        <div id="chatbotUi">
          <p className="chatbotAiTitle">Ai chatbot npm package created by me</p>
          <p className="chatbotAiSubTitle">npm i react-gemini-ai-chatbot</p>
          <ReactAiChatBot
            geminiApiKey={"AIzaSyDuA-Em_LzMqwHYKWXIeevtFjBQXJAg96c"}
            height="420px"
            width="340px"
            chatbotName="Vinayak"
            chatTitle="Ask me about my self"
          />
        </div>
        <p>Designed & Built by Vinayak Dhaybar</p>
      </section>
    </div>
  );
};

export default Contact;
