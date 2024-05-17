import React from "react";
import Logo from "../../Assets/images/Logo.png";
import Leaf from "../../Assets/images/leaf.png";
import Notes from "../../Assets/images/Notes.png";
import "./sidebar.css";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const {  colors } = useSelector((state) => state.theme);
  return (
    <div className="sidebar">
      <header>
        <p>
          <img alt="logo" src={Logo} />
          <span style={{ color: colors.textColor }}>Canvas</span>
        </p>
        <div>
          <img alt="notes" src={Notes} />
          <span  style={{ color: colors.textColor }}>List of Notes</span>
        </div>
      </header>
      <p>
        <span style={{ color: colors.textColor }}>
          Powered by Leaf Technologies
        </span>
        <img alt="leaf" src={Leaf} />
      </p>
    </div>
  );
};

export default Sidebar;
