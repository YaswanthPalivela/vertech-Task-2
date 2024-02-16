import React, { useState } from "react";
import profilepic from "../../assets/profilepicture.png";
import { IoIosPeople } from "react-icons/io";
import { IoChatbubbleEllipsesSharp, IoFilter } from "react-icons/io5";
import { MdOutlineWifiTethering } from "react-icons/md";
import { Messageslist } from "../../assets/Data/Messages.Data.js";

export const MessageList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredChats = Messageslist.filter((chat) =>
    chat.Name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <div className="navbarContainer">
        <div className="displaypiccontainer">
          <img src={profilepic} alt="profile picture" className="profile" />
        </div>
        <div className="menucontainer">
          <IoIosPeople className="navbar-icons" />
          <IoChatbubbleEllipsesSharp className="navbar-icons" />
          <MdOutlineWifiTethering className="navbar-icons" />
        </div>
      </div>

      <div className="searchbar">
        <input
          type="search"
          placeholder="Search or start a new chat"
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search"
        />
        {filteredChats.map((chat) => (
          <div key={chat.id} className="chat-item"></div>
        ))}
        <IoFilter className="filter-icon" />
      </div>

      <div className="messagesContainer">
        {Messageslist.map((profile) => (
          <div key={profile.id} className="Messages">
            <img
              src={profilepic}
              alt="message profile"
              className="message-profile"
            />
            <div className="Details">
              <h3>{profile.Name}</h3>
              <p>{profile.Message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
