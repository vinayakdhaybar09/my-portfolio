import React, { useState } from "react";
import { ReactAiChatBot } from "react-gemini-ai-chatbot";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import chatBotData from "../data/chatBotData.json";
const instruction =
  "Instructions for Chatbot :Adhere to Provided Data Only respond based on the given data. Do not provide information, speculate, or answer questions outside the provided data. Responding to Out-of-Scope Questions: If a question or request falls outside the provided data, respond with: I don't have data about that. Behave Like Vinayak Dhaybar: Assume the persona of Vinayak Dhaybar, a software engineer with the following profile:";

const ChatBot = () => {
  const [openChat, setOpenChat] = useState(false);
  return (
    <div className="chatBotBox">
      {openChat ? (
        <div className="chatBotContainer">
          <ReactAiChatBot
            trainingPrompt={instruction}
            trainingData={chatBotData}
            geminiApiKey={"AIzaSyDuA-Em_LzMqwHYKWXIeevtFjBQXJAg96c"}
            height="420px"
            width="300px"
            chatbotName="Vinayak"
            chatTitle="Ask me about my self"
            chatBotImg="https://media.architecturaldigest.com/photos/5f241de2c850b2a36b415024/master/w_1600%2Cc_limit/Luke-logo.png"
          />
        </div>
      ) : null}

      <div id="chatbotView" onClick={() => setOpenChat(!openChat)}>
        <img
          className="imgView"
          src="https://media.istockphoto.com/id/1310380177/vector/avatar-smiling-brunette-nurse-with-bangs-and-bun.jpg?s=612x612&w=0&k=20&c=4lRjm5npCy2qqWHl3iH6CnejQglXkse3O-9ViKrpQ6I="
          alt="chatbot"
        />
        <div className="titleDiv">
          <p className="chatTitle">Let's talk</p>
          <p className="chatSubTitle">AI chatbot npm package created by me</p>
        </div>
        {openChat ? (
          <IoMdArrowDropup size={40} color="#64ffda" />
        ) : (
          <IoMdArrowDropdown size={40} color="#64ffda" />
        )}
      </div>
    </div>
  );
};

export default ChatBot;
