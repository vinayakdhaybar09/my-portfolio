import React from "react";
import { ReactAiChatBot } from "react-gemini-ai-chatbot";
// import "../styles/chatbot.scss";

const ChatBot = () => {
 
  return (
    <a href="#chatbotUi" className="chatBotBox">
      
      <div id="chatbotView" >
        <img
          className="imgView"
          src="https://media.istockphoto.com/id/1310380177/vector/avatar-smiling-brunette-nurse-with-bangs-and-bun.jpg?s=612x612&w=0&k=20&c=4lRjm5npCy2qqWHl3iH6CnejQglXkse3O-9ViKrpQ6I="
          alt="chatbot"
        />
        <div className="titleDiv">
          <p className="chatTitle">Let's talk</p>
          <p className="chatSubTitle">AI chatbot npm package created by me</p>
        </div>
      </div>
    </a>
  );
};

export default ChatBot;
