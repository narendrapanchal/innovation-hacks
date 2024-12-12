import React, { useState } from "react";
import "../styles/automatechat.css";
function AutomateChat() {
  const [activeBackground, seActiveBackground] = useState(0);
  const recentData = [
    { name: "Customer Service Automation", src: "csa.png" },
    { name: "Inventory Management", src: "im.png" },
    { name: "Market Dynamics", src: "md.png" },
  ];
  return (
    <>
      {" "}
      <div className="automate-chat ">
        <div className="new-chat">
            <div>
                <img src="./images/automate-chat/add.png" alt="add"/> <span>New Chat</span>
            </div>
        </div>
        <div className="content">
          <h2 className="heading">Automate Chat</h2>
          <div className="search-box">
            <img src="../images/automate-chat/search-icon.png" alt="Search" />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <h3 className="heading-content">Recent</h3>
        <div className="automate-content ">
          {recentData.map((content, index) => (
            <div
              key={index}
              onClick={() => seActiveBackground(index)}
              className={`automate-item ${
                activeBackground === index ? "active" : ""
              }`}
            >
              <img
                src={`./images/automate-chat/${content.src}`}
                alt={content.name}
              />
              <span>{content.name}</span>
            </div>
          ))}
        </div>

        <h3 className="heading-content last-30-days">Last 30 Days</h3>
        <div className="automate-content">
          {recentData.map((content, index) => (
            <div
              key={index}
              onClick={() => seActiveBackground(index + 3)}
              className={`automate-item ${
                activeBackground === index + 3 ? "active" : ""
              }`}
            >
              <img
                src={`./images/automate-chat/${content.src}`}
                alt={content.name}
              />
              <span>{content.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AutomateChat;
