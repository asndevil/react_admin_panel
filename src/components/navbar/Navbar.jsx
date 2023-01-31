import React, { useContext, useState } from "react";
import "./Navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { darkModeContext } from "../../context/darkModeContext";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ReactFullscreen from "react-easyfullscreen";

const Navbar = () => {
  const { dispatch } = useContext(darkModeContext);

  return (
    <ReactFullscreen>
      {({ ref, onRequest, onExit }) => (
        <div ref={ref}>
          {/* <button onClick={() => onExit()}>Screen</button> */}
          <section className="navbar">
            <div className="wrapper">
              <div className="search__container">
                <input
                  type="search"
                  name="search"
                  id=""
                  placeholder="Search..."
                />
                <SearchOutlinedIcon className="searchIcon" />
              </div>
              <div className="items">
                <div className="item">
                  <LanguageOutlinedIcon className="icon" /> English
                </div>
                <div
                  className="item"
                  onClick={() => dispatch({ type: "TOGGLE" })}
                >
                  <WbSunnyIcon className="icon" />
                </div>
                <div className="item" onClick={() => onRequest()}>
                  <FullscreenExitOutlinedIcon className="icon" />
                </div>
                <div className="item">
                  <NotificationsNoneOutlinedIcon className="icon" />
                  <span className="counter">5</span>
                </div>
                <div className="item">
                  <ChatBubbleOutlineOutlinedIcon className="icon" />
                  <span className="counter">5</span>
                </div>
                <div className="item">
                  <ListOutlinedIcon className="icon" />
                </div>
                <div className="item">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIKcTkARlljahDz7xR5gq-lwY3NSwsYMQdl_AlXfua4Yc2QcQ9QIG38gxtEiMGNAdoEck&usqp=CAU"
                    alt="profile__pic"
                    className="profile__pic"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </ReactFullscreen>
  );
};

export default Navbar;
