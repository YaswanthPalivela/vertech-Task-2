import React, { useState } from "react";
import profilepic from "../../assets/profilepicture.png";
import {
  PiMagnifyingGlassFill,
  PiDotsThreeOutlineVerticalBold,
} from "react-icons/pi";
import { CgSmileMouthOpen } from "react-icons/cg";
import { IoSend } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import { HiMicrophone } from "react-icons/hi2";

import "./index.css";

const index = () => {
  const [Message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
    console.log(Message);
  };

  return (
    <div className="messages-container">
      <div className="messages-navbar">
        <div className="Name-Container">
          <img src={profilepic} className="profile" />
          <h3 className="message-person">Name</h3>
        </div>
        <div className="navbar-icons ">
          <PiMagnifyingGlassFill className="magnifier" title="search"/>
          <PiDotsThreeOutlineVerticalBold className="menu" title="Menu" />
        </div>
      </div>

      <div className="bottom-navbar-container">
        <CgSmileMouthOpen className="smile" title="Emoji" />
        <FiPlus className="Media" title="Attach File" />
        <input
          type="text"
          placeholder="Type Your Message"
          className="messagetext"
          onChange={handleChange}
        />

        {Message.length !== 0 ? (
          <IoSend className="microphone" title="Send" />
        ) : (
          <HiMicrophone className="microphone" title="Microphone" />
        )}
      </div>
    </div>
  );
};

export default index;
