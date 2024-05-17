import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Navbar.css";
import { toggleMode } from "../../store/theme/themeSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { colors, mode } = useSelector((state) => state.theme);
const toggleModeHandler = ()=>{
  dispatch(toggleMode())
}
  return (
    <div className="navbar" style={{ backgroundColor: colors.primary }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2.5em"
        height="2.5em"
        viewBox="0 0 16 16"
      >
        <path
          fill="white"
          d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86a2.929 2.929 0 0 1 0 5.858z"
        ></path>
      </svg>
      {
        //toggle on in dark mode
        mode === "dark" && (
          <svg
          onClick={toggleModeHandler}
            xmlns="http://www.w3.org/2000/svg"
            width="3em"
            height="3em"
            viewBox="0 0 512 512"
          >
            <path
              fill="white"
              d="M368 112H144a144 144 0 0 0 0 288h224a144 144 0 0 0 0-288m0 230a86 86 0 1 1 86-86a85.88 85.88 0 0 1-86 86"
            ></path>
          </svg>
        )
      }
      {
        //toggle off in light mode
        mode === "light" && (
          <svg
          onClick={toggleModeHandler}
            xmlns="http://www.w3.org/2000/svg"
            width="3em"
            height="3em"
            viewBox="0 0 24 24"
          >
            <path
              fill="white"
              d="M7 18q-2.5 0-4.25-1.75T1 12t1.75-4.25T7 6h10q2.5 0 4.25 1.75T23 12t-1.75 4.25T17 18zm0-3q1.25 0 2.125-.875T10 12t-.875-2.125T7 9t-2.125.875T4 12t.875 2.125T7 15"
            ></path>
          </svg>
        )
      }
      <span>Logout</span>
    </div>
  );
};

export default Navbar;
